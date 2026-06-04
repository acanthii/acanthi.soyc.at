// ✰ webmeji ✰
// little creatures that walk around your website =w=b
// inspired by shimeji, originally by Lars de Rooij
// not affiliated with any other shimeji projects
// last updated: 27 january 2026
// homepage: webmeji.neocities.org
//
// this file defines:
// - which webmeji spawn
// - which actions are allowed
// - what animations they have
// - how often actions occur

// spawning setup --------------------------------------------------
// define which creatures spawn on the page. remove any unwanted ones.
// each id must be unique
// if two of them overlap and pet and dragging interactions happen, only the one stated here last will get interacted with
window.SPAWNING = [
  { id: 'webmeji-0', config: 'MIKU_CONFIG' },
  { id: 'webmeji-1', config: 'CHARA_CONFIG' },
  { id: 'webmeji-2', config: 'RALSEI_CONFIG' },
  { id: 'webmeji-3', config: 'AKECHI_CONFIG' }
];

// miku config ----------------------------------------------------

window.MIKU_CONFIG = {
  // pet   = hover animation (hard to see on mobile)
  // drag  = click or touch to pick up
  // top / left / right allow edge interactions
  // remove whichever you don't want, the only exceptions is that bottom must always be enabled
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  // movement and physics -------------------------------------------
  // values are pixels movements per frame
  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 200,

  // time in ms before standing back up after falling
  gettingupspeed: 3500,

  // common idle and movement animations on the bottom edge ---------
  // these are the most frequently used actions
  // interval = time between frames (ms)
  // loops = how many times the frame sequence repeats
  // randomizeDuration sets random timeframe for actions, tune min and max to desired length
  walk: {
    frames: ["webmeji/miku/shime1.png", "webmeji/miku/shime2.png", "webmeji/miku/shime3.png", "webmeji/miku/shime2.png"], 
    interval: 175, loops: 6},

  stand: {
    frames: ["webmeji/miku/shime1.png"], 
    interval: 1000, loops: 1},

  sit: {
    frames: ["webmeji/miku/shime11.png"], 
    interval: 1000, loops: 1,
    randomizeDuration: true, min: 3000, max: 11000},

  spin: {
    frames: ["webmeji/miku/shime1.png"], 
    interval: 150, loops: 3},

  dance: {
    frames: ["webmeji/miku/shime5.png", "webmeji/miku/shime6.png", "webmeji/miku/shime1.png"], 
    interval: 200, loops: 2},

  trip: {
    frames: ["webmeji/miku/shime18.png", "webmeji/miku/shime19.png", "webmeji/miku/shime19.png"], 
    interval: 250, loops: 1},

  // behavior flow control ------------------------------------------
  // prevents awkward transitions like dancing immediately after sitting
  forcewalk: { // uses the walking frames
    loops: 6},

  forcethink: {
    frames: ["webmeji/miku/shime27.png", "webmeji/miku/shime28.png"], 
    interval: 500, loops: 2},

  // user interaction animations ------------------------------------
  pet: {
    frames: ["webmeji/miku/shime15.png", "webmeji/miku/shime16.png", "webmeji/miku/shime17.png"], 
    interval: 400},

  drag: {
    frames: ["webmeji/miku/shime7.png", "webmeji/miku/shime5.png", "webmeji/miku/shime8.png", "webmeji/miku/shime6.png"], 
    interval: 210},

  // falling and recovery animations --------------------------------
  falling: {
    frames: ["webmeji/miku/shime10.png", "webmeji/miku/shime18.png"], 
    interval: 200, loops: 2},

  fallen: {
    frames: ["webmeji/miku/shime9.png", "webmeji/miku/shime4.png", "webmeji/miku/shime19.png"], 
    interval: 250, loops: 1},

  // action frequency and decision logic ----------------------------
  // anytime an action needs to be chosen, it randomly picks one of these
  // thus, having an action in here more than others, makes it happen more
  ORIGINAL_ACTIONS: [
    'walk','walk','walk','walk','walk','walk',
    'spin','spin','spin',
    'sit','sit',
    'dance','dance','dance','dance','dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang','hang',
    'climb','climb','climb','climb','climb',
    'fall'
  ],

  // when chosing an action on the bottom, it has this change to jump to an edge (if allowed)
  // this is standalone from the other action select
  JUMP_CHANCE: 0.1, // below 0 = never jump; above 1 = jump almost always

  // edge-specific animations ---------------------------------------
  climbSide: {
    frames: ["webmeji/miku/shime13.png", "webmeji/miku/shime14.png"], 
    interval: 200, loops: 2},

  hangstillSide: {
    frames: ["webmeji/miku/shime12.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  climbTop: {
    frames: ["webmeji/miku/shime24.png", "webmeji/miku/shime25.png"], 
    interval: 200, loops: 8},

  hangstillTop: {
    frames: ["webmeji/miku/shime23.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  jump: {
    frames: ["webmeji/miku/shime22.png"], 
    interval: 200}
};

window.CHARA_CONFIG = {
  // pet   = hover animation (hard to see on mobile)
  // drag  = click or touch to pick up
  // top / left / right allow edge interactions
  // remove whichever you don't want, the only exceptions is that bottom must always be enabled
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  // movement and physics -------------------------------------------
  // values are pixels movements per frame
  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 200,

  // time in ms before standing back up after falling
  gettingupspeed: 3500,

  // common idle and movement animations on the bottom edge ---------
  // these are the most frequently used actions
  // interval = time between frames (ms)
  // loops = how many times the frame sequence repeats
  // randomizeDuration sets random timeframe for actions, tune min and max to desired length
  walk: {
    frames: ["webmeji/chara/shime1b.png", "webmeji/chara/shime2.png", "webmeji/chara/shime1b.png", "webmeji/chara/shime3.png"], 
    interval: 175, loops: 6},

  stand: {
    frames: ["webmeji/chara/shime1.png"], 
    interval: 1000, loops: 1},

  sit: {
    frames: ["webmeji/chara/shime11.png"], 
    interval: 1000, loops: 1,
    randomizeDuration: true, min: 3000, max: 11000},

  spin: {
    frames: ["webmeji/chara/shime1.png"], 
    interval: 150, loops: 3},

  dance: {
    frames: ["webmeji/chara/shime5.png", "webmeji/chara/shime6.png", "webmeji/chara/shime1.png"], 
    interval: 200, loops: 2},

  trip: {
    frames: ["webmeji/chara/shime18.png", "webmeji/chara/shime19.png", "webmeji/chara/shime19.png"], 
    interval: 250, loops: 1},

  // behavior flow control ------------------------------------------
  // prevents awkward transitions like dancing immediately after sitting
  forcewalk: { // uses the walking frames
    loops: 6},

  forcethink: {
    frames: ["webmeji/chara/shime27.png", "webmeji/chara/shime28.png"], 
    interval: 500, loops: 2},

  // user interaction animations ------------------------------------
  pet: {
    frames: ["webmeji/chara/shime15.png", "webmeji/chara/shime16.png", "webmeji/chara/shime17.png"], 
    interval: 400},

  drag: {
    frames: ["webmeji/chara/shime9.png", "webmeji/chara/shime7.png", "webmeji/chara/shime47.png", "webmeji/chara/shime8.png", "webmeji/chara/shime10.png"], 
    interval: 210},

  // falling and recovery animations --------------------------------
  falling: {
    frames: ["webmeji/chara/shime4.png"], 
    interval: 200, loops: 2},

  fallen: {
    frames: ["webmeji/chara/shime18.png", "webmeji/chara/shime19.png"], 
    interval: 250, loops: 1},

  // action frequency and decision logic ----------------------------
  // anytime an action needs to be chosen, it randomly picks one of these
  // thus, having an action in here more than others, makes it happen more
  ORIGINAL_ACTIONS: [
    'walk','walk','walk','walk','walk','walk',
    'spin','spin','spin',
    'sit','sit',
    'dance','dance','dance','dance','dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang','hang',
    'climb','climb','climb','climb','climb',
    'fall'
  ],

  // when chosing an action on the bottom, it has this change to jump to an edge (if allowed)
  // this is standalone from the other action select
  JUMP_CHANCE: 0.1, // below 0 = never jump; above 1 = jump almost always

  // edge-specific animations ---------------------------------------
  climbSide: {
    frames: ["webmeji/chara/shime13.png", "webmeji/chara/shime14.png"], 
    interval: 200, loops: 2},

  hangstillSide: {
    frames: ["webmeji/chara/shime12.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  climbTop: {
    frames: ["webmeji/chara/shime24.png", "webmeji/chara/shime25.png"], 
    interval: 200, loops: 8},

  hangstillTop: {
    frames: ["webmeji/chara/shime23.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  jump: {
    frames: ["webmeji/chara/shime22.png"], 
    interval: 200}
};

window.RALSEI_CONFIG = {
  // pet   = hover animation (hard to see on mobile)
  // drag  = click or touch to pick up
  // top / left / right allow edge interactions
  // remove whichever you don't want, the only exceptions is that bottom must always be enabled
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  // movement and physics -------------------------------------------
  // values are pixels movements per frame
  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 200,

  // time in ms before standing back up after falling
  gettingupspeed: 3500,

  // common idle and movement animations on the bottom edge ---------
  // these are the most frequently used actions
  // interval = time between frames (ms)
  // loops = how many times the frame sequence repeats
  // randomizeDuration sets random timeframe for actions, tune min and max to desired length
  walk: {
    frames: ["webmeji/ralsei/shime1.png", "webmeji/ralsei/shime2.png", "webmeji/ralsei/shime1.png", "webmeji/ralsei/shime3.png"], 
    interval: 175, loops: 6},

  stand: {
    frames: ["webmeji/ralsei/shime1.png"], 
    interval: 1000, loops: 1},

  sit: {
    frames: ["webmeji/ralsei/shime11.png"], 
    interval: 1000, loops: 1,
    randomizeDuration: true, min: 3000, max: 11000},

  spin: {
    frames: ["webmeji/ralsei/shime1.png"], 
    interval: 150, loops: 3},

  dance: {
    frames: ["webmeji/ralsei/shime5.png", "webmeji/ralsei/shime6.png", "webmeji/ralsei/shime1.png"], 
    interval: 200, loops: 2},

  trip: {
    frames: ["webmeji/ralsei/shime19.png", "webmeji/ralsei/shime18.png", "webmeji/ralsei/shime20.png", "webmeji/ralsei/shime20.png", "webmeji/ralsei/shime19.png"], 
    interval: 250, loops: 1},

  // behavior flow control ------------------------------------------
  // prevents awkward transitions like dancing immediately after sitting
  forcewalk: { // uses the walking frames
    loops: 6},

  forcethink: {
    frames: ["webmeji/ralsei/shime27.png", "webmeji/ralsei/shime28.png"], 
    interval: 500, loops: 2},

  // user interaction animations ------------------------------------
  pet: {
    frames: ["webmeji/ralsei/shime15.png", "webmeji/ralsei/shime16.png", "webmeji/ralsei/shime17.png"], 
    interval: 400},

  drag: {
    frames: ["webmeji/ralsei/shime7.png", "webmeji/ralsei/shime5.png", "webmeji/ralsei/shime8.png", "webmeji/ralsei/shime6.png"], 
    interval: 210},

  // falling and recovery animations --------------------------------
  falling: {
    frames: ["webmeji/ralsei/shime4.png"], 
    interval: 200, loops: 2},

  fallen: {
    frames: ["webmeji/ralsei/shime18.png", "webmeji/ralsei/shime19.png"], 
    interval: 250, loops: 1},

  // action frequency and decision logic ----------------------------
  // anytime an action needs to be chosen, it randomly picks one of these
  // thus, having an action in here more than others, makes it happen more
  ORIGINAL_ACTIONS: [
    'walk','walk','walk','walk','walk','walk',
    'spin','spin','spin',
    'sit','sit',
    'dance','dance','dance','dance','dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang','hang',
    'climb','climb','climb','climb','climb',
    'fall'
  ],

  // when chosing an action on the bottom, it has this change to jump to an edge (if allowed)
  // this is standalone from the other action select
  JUMP_CHANCE: 0.1, // below 0 = never jump; above 1 = jump almost always

  // edge-specific animations ---------------------------------------
  climbSide: {
    frames: ["webmeji/ralsei/shime13.png", "webmeji/ralsei/shime14.png"], 
    interval: 200, loops: 2},

  hangstillSide: {
    frames: ["webmeji/ralsei/shime12.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  climbTop: {
    frames: ["webmeji/ralsei/shime24.png", "webmeji/ralsei/shime25.png"], 
    interval: 200, loops: 8},

  hangstillTop: {
    frames: ["webmeji/ralsei/shime23.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  jump: {
    frames: ["webmeji/ralsei/shime22.png"], 
    interval: 200}
};

window.AKECHI_CONFIG = {
  // pet   = hover animation (hard to see on mobile)
  // drag  = click or touch to pick up
  // top / left / right allow edge interactions
  // remove whichever you don't want, the only exceptions is that bottom must always be enabled
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  // movement and physics -------------------------------------------
  // values are pixels movements per frame
  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 200,

  // time in ms before standing back up after falling
  gettingupspeed: 3500,

  // common idle and movement animations on the bottom edge ---------
  // these are the most frequently used actions
  // interval = time between frames (ms)
  // loops = how many times the frame sequence repeats
  // randomizeDuration sets random timeframe for actions, tune min and max to desired length
  walk: {
    frames: ["webmeji/akechi/shime1.png", "webmeji/akechi/shime2.png", "webmeji/akechi/shime1.png", "webmeji/akechi/shime3.png"], 
    interval: 175, loops: 6},

  stand: {
    frames: ["webmeji/akechi/shime1.png"], 
    interval: 1000, loops: 1},

  sit: {
    frames: ["webmeji/akechi/shime11.png"], 
    interval: 1000, loops: 1,
    randomizeDuration: true, min: 3000, max: 11000},

  spin: {
    frames: ["webmeji/akechi/shime1.png"], 
    interval: 150, loops: 3},

  dance: {
    frames: ["webmeji/akechi/shime5.png", "webmeji/akechi/shime6.png", "webmeji/akechi/shime1.png"], 
    interval: 200, loops: 2},

  trip: {
    frames: ["webmeji/akechi/shime19.png", "webmeji/akechi/shime18.png", "webmeji/akechi/shime20.png", "webmeji/akechi/shime20.png", "webmeji/akechi/shime19.png"], 
    interval: 250, loops: 1},

  // behavior flow control ------------------------------------------
  // prevents awkward transitions like dancing immediately after sitting
  forcewalk: { // uses the walking frames
    loops: 6},

  forcethink: {
    frames: ["webmeji/akechi/shime27.png", "webmeji/akechi/shime28.png"], 
    interval: 500, loops: 2},

  // user interaction animations ------------------------------------
  pet: {
    frames: ["webmeji/akechi/shime15.png", "webmeji/akechi/shime16.png", "webmeji/akechi/shime17.png"], 
    interval: 400},

  drag: {
    frames: ["webmeji/akechi/shime7.png", "webmeji/akechi/shime5.png", "webmeji/akechi/shime8.png", "webmeji/akechi/shime6.png"], 
    interval: 210},

  // falling and recovery animations --------------------------------
  falling: {
    frames: ["webmeji/akechi/shime4.png"], 
    interval: 200, loops: 2},

  fallen: {
    frames: ["webmeji/akechi/shime18.png", "webmeji/akechi/shime19.png"], 
    interval: 250, loops: 1},

  // action frequency and decision logic ----------------------------
  // anytime an action needs to be chosen, it randomly picks one of these
  // thus, having an action in here more than others, makes it happen more
  ORIGINAL_ACTIONS: [
    'walk','walk','walk','walk','walk','walk',
    'spin','spin','spin',
    'sit','sit',
    'dance','dance','dance','dance','dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang','hang',
    'climb','climb','climb','climb','climb',
    'fall'
  ],

  // when chosing an action on the bottom, it has this change to jump to an edge (if allowed)
  // this is standalone from the other action select
  JUMP_CHANCE: 0.1, // below 0 = never jump; above 1 = jump almost always

  // edge-specific animations ---------------------------------------
  climbSide: {
    frames: ["webmeji/akechi/shime13.png", "webmeji/akechi/shime14.png"], 
    interval: 200, loops: 2},

  hangstillSide: {
    frames: ["webmeji/akechi/shime12.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  climbTop: {
    frames: ["webmeji/akechi/shime24.png", "webmeji/akechi/shime25.png"], 
    interval: 200, loops: 8},

  hangstillTop: {
    frames: ["webmeji/akechi/shime23.png"], 
    interval: 200, loops: 2,
    randomizeDuration: true, min: 3000, max: 11000},

  jump: {
    frames: ["webmeji/akechi/shime22.png"], 
    interval: 200}
};