// How Ebbers builds. Facts come from the old website, Cameron's framing rules in the
// post frame builder, and the master post frame template. No prices on the public site.

/** Steel colors, matching the 3D builder's palette (parts.js PALETTE). */
export const steelColors: { name: string; hex: string }[] = [
  { name: 'White', hex: '#F2F2EE' },
  { name: 'Light Stone', hex: '#E3DAC5' },
  { name: 'Tan', hex: '#CBB48E' },
  { name: 'Ash Gray', hex: '#B5B4AE' },
  { name: 'Pewter Gray', hex: '#8C8E8C' },
  { name: 'Galvalume', hex: '#C6CBCF' },
  { name: 'Clay', hex: '#A39883' },
  { name: 'Burnished Slate', hex: '#54483F' },
  { name: 'Brown', hex: '#5A4131' },
  { name: 'Charcoal', hex: '#45484C' },
  { name: 'Black', hex: '#222222' },
  { name: 'Barn Red', hex: '#7B2020' },
  { name: 'Brite Red', hex: '#AE1F24' },
  { name: 'Forest Green', hex: '#2D4A35' },
  { name: 'Ivy Green', hex: '#3D6A48' },
  { name: 'Gallery Blue', hex: '#2A4A70' },
  { name: 'Hawaiian Blue', hex: '#3A6E95' },
  { name: 'Copper', hex: '#A0623A' },
];

export const postFrameParts = [
  { title: 'Poured concrete pier footings', text: '18 in piers, sized for your soil. We take our time on layout, because a mistake there carries through every step after it.' },
  { title: 'Wet-set post brackets', text: 'A welded rebar base is set into the wet concrete. No wood goes in the ground, so nothing rots and the uplift capacity is known.' },
  { title: '3-ply laminated columns', text: 'Laminated 2x6 posts (2x8 available), 8 ft on center. The truss sits on the middle ply instead of in a notch on the side.' },
  { title: '2x6 wall girts at 24 in', text: 'Run on the outside of the posts, with Block-it house wrap and double X-bracing in every corner bay.' },
  { title: 'Treated 2x12 grade board', text: 'Around the whole base, with a center wainscot board above it.' },
  { title: 'A truss at every post line', text: '2x8 chords, 8 ft on center. End trusses sit flush to the endwall.' },
  { title: '2x4 purlins on edge at 24 in', text: 'Fastened to every truss with 6 in structural screws.' },
  { title: 'Frontier G-Rib steel and one-piece trim', text: '36 in coverage panels, vented steel soffit, 12 in eave and gable overhangs, and custom-bent corner and rake trim with no short splices.' },
];

export const postFrameExtras = [
  'Stacked LVL headers over big doors, with a header post up to the truss',
  'Windows sealed with flashing tape',
  '6 in seamless gutters',
  'Timber-framed porches',
  'A full blueprint set for every building: cover, post layout, elevations, wall framing, sections, roof framing, details and materials',
];

export const pierReasons = [
  'Known uplift capacity',
  'Design methods recognized by building code',
  'No lost strength from wood decay',
  'Not affected by soil moisture or freeze-thaw cycles',
  'Reliable for the life of the building',
];

export const postFrameOptions = [
  { title: 'Roof', text: '29 or 26 gauge G-Rib steel, or standing seam with no exposed fasteners, cut to length on site. Drip stop, vented ridge, roof sheathing, cupolas and snow guards.' },
  { title: 'Walls', text: 'G-Rib steel, 26 gauge steel board and batten rolled on site with a 40-year paint warranty, or LP SmartSide. Sheathing can be added to match your house siding.' },
  { title: 'Wainscot', text: 'Steel wainscot in a contrasting color, or Versetta Stone on the front or as an accent wall.' },
  { title: 'Floor and foundation', text: 'Dirt, gravel or a 4, 5 or 6 in concrete floor with vapor barrier, rebar, foam, in-floor heat, a drain and an apron. Embedded posts or an 8 in stem wall are available too.' },
  { title: 'Doors and windows', text: 'Insulated overhead doors with openers and door windows, extra walk doors and windows wherever you want them.' },
  { title: 'Overhangs', text: 'Reverse-rolled steel, speed lap or custom soffit under 12 in eaves and gables.' },
  { title: 'Inside', text: 'Batts, rockwool or spray foam insulation. Steel liner and ceiling, plywood wainscot, partition walls and a storage loft.' },
  { title: 'Porch, power and site', text: 'Porches on any side with wrapped or stone-base posts, basic or shop electrical packages, dirt work, driveway, permits and plans.' },
];

export const deckParts = [
  { title: 'Flashed ledger', text: 'Every ledger is flashed where it meets the house, so water runs away instead of sitting behind the board.' },
  { title: 'TrueFrame joists at 12 in on center', text: 'ProWood TrueFrame kiln-dried #1 joists, cut to a consistent size, at 12 in spacing on every deck. Joist tape or coating on top keeps moisture out.' },
  // TODO(confirm with Cameron): beam and footing wording is general, not from his specs yet.
  { title: 'Beam', text: 'Carries the joists back to the posts.' },
  { title: 'Posts on footings', text: 'Posts carry the beam down to concrete footings.' },
  { title: 'Picture-frame border', text: 'A border board around the edge hides the cut ends of the decking for a finished look.' },
  { title: 'Aluminum railing and drink rail', text: 'Powder-coated Westbury aluminum at 36 or 42 in, with an optional deck-board drink rail on top.' },
];
