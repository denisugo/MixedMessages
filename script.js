// There is no need to create any function if we will treat this file as a fucnction

// Storaged data
const nouns = [
  "The movie",
  "The director",
  "The leading actor",
  "The protagonist",
  "The cast",
  "The script",
];
const verbs = ["is", "is not", "was", "was not"];
const ajectives = [
  "great",
  "extremely great",
  "pretty good",
  "so bad",
  "so kind",
  "so peacefull",
];

// This object contains all necessary data
const message = {
  _nouns: nouns,
  _verbs: verbs,
  _ajectives: ajectives,
  get noun() {
    const index = Math.floor(Math.random() * this._nouns.length);
    return this._nouns[index];
  },
  get verb() {
    const index = Math.floor(Math.random() * this._verbs.length);
    return this._verbs[index];
  },
  get ajective() {
    const index = Math.floor(Math.random() * this._ajectives.length);
    return this._ajectives[index];
  },
};

// Call the message
console.log(`${message.noun} ${message.verb} ${message.ajective}`);
