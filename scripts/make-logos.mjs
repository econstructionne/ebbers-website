// Builds web logo files from the high-res master in src/assets/logo-master.png.
// Run: node scripts/make-logos.mjs
import sharp from 'sharp';
import potrace from 'potrace';
import { writeFile } from 'node:fs/promises';

const master = 'src/assets/logo-master.png';
const trimmed = await sharp(master).trim().extend({ top: 24, bottom: 24, left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer({ resolveWithObject: true });
console.log('trimmed', trimmed.info.width, trimmed.info.height);

// Alpha mask -> black on white for tracing
const mask = await sharp(trimmed.data).extractChannel('alpha').negate().png().toBuffer();
const trace = (color) => new Promise((res, rej) =>
  potrace.trace(mask, { color, background: 'transparent', threshold: 128, turdSize: 20, optTolerance: 0.2 }, (e, svg) => e ? rej(e) : res(svg)));

const black = await trace('#000000');
const white = await trace('#FFFFFF');
const addTitle = (svg) => svg.replace(/ width="\d+" height="\d+"/, '').replace(/<svg ([^>]*)>/, '<svg $1 role="img" aria-label="Ebbers Construction"><title>Ebbers Construction</title>');
await writeFile('public/brand/logo-black.svg', addTitle(black));
await writeFile('public/brand/logo-white.svg', addTitle(white));

// PNG fallbacks (email, social share)
await sharp(trimmed.data).resize({ width: 1200 }).png().toFile('public/brand/logo-black.png');
const alpha = await sharp(trimmed.data).resize({ width: 1200 }).extractChannel('alpha').raw().toBuffer({ resolveWithObject: true });
await sharp({ create: { width: alpha.info.width, height: alpha.info.height, channels: 3, background: '#ffffff' } })
  .joinChannel(alpha.data, { raw: { width: alpha.info.width, height: alpha.info.height, channels: 1 } })
  .png().toFile('public/brand/logo-white.png');
console.log('done');
