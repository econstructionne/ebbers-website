// One-off: resize and recompress source photos into public/photos (strips EXIF/GPS).
import sharp from 'sharp';
const S = '/mnt/user-data/uploads/PHOTO DROP/';
const list = [
  ['100MEDIA/DJI_0017.JPG', 'hero-shop-porch', 2400],
  ['Barns/Moerer Barn/IMG_4238.JPEG', 'barn-remodel-after', 1600],
  ['Barns/Moerer Barn/IMG_4067.JPEG', 'barn-before', 1400],
  ['Barns/Moerer Barn/IMG_4159.JPEG', 'barn-after-evening', 1400],
  ['Barns/Moerer Barn/IMG_4186.JPEG', 'barn-after-front', 1400],
  ['Decks/Kelley Deck/After/IMG_5510.jpeg', 'deck-trueframe-joists', 1600],
  ['Decks/Kelley Deck/iCloud Photos/Deck_EC-05.jpeg', 'deck-dusk', 1800],
  ['Decks/Kelley Deck/iCloud Photos/Deck_EC-09.jpeg', 'deck-covered-border', 1600],
  ['Decks/Kelley Deck/iCloud Photos/Deck_EC-12.jpeg', 'deck-covered-railing', 1600],
  ['Decks/Kelley Deck/iCloud Photos/IMG_3941.JPEG', 'deck-stairs', 1400],
  ['Decks/Mulder Deck/IMG_4356.JPEG', 'cedar-deck-pergola', 1400],
  ['Decks/Mulder Deck/IMG_4373.JPEG', 'cedar-deck-pergola-wide', 1600],
  ['Decks/Stephens Deck/IMG_4585.JPEG', 'deck-two-level', 1600],
  ['Post Frame/Darren O Pole Barn/IMG_4660.JPEG', 'pole-barn-trusses', 1400],
  ['Post Frame/FSF - Matt/IMG_2976.JPEG', 'shop-cupola', 1400],
  ['Post Frame/FSF - Matt/IMG_3243.JPEG', 'shop-two-tone', 1400],
  ['Post Frame/FSF - Matt/IMG_3258.JPEG', 'shop-framing-interior', 1400],
  ['Post Frame/FSF - Matt/IMG_3260.JPEG', 'post-bracket-pier', 1400],
  ['Post Frame/FSF - Matt/IMG_3274.JPEG', 'shop-gable', 1400],
  ['Post Frame/FSF - Matt/IMG_3299.JPEG', 'shop-lawn', 1800],
  ['Post Frame/FSF - Matt/IMG_7395.JPEG', 'auger-pier-hole', 1400],
];
for (const [src, name, w] of list) {
  const out = `public/photos/${name}.jpg`;
  const info = await sharp(S + src).rotate().resize({ width: w, height: w, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 76, mozjpeg: true, progressive: true }).toFile(out);
  console.log(name, info.width + 'x' + info.height, Math.round(info.size / 1024) + 'KB');
}
