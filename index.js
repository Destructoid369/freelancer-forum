/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const state = {
  NUM_FREELANCERS: [],
};

const freelancer = () => {
  const rngName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const rngOccupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rngRate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return { rngName, rngOccupation, rngRate };
};

const rngFreelancer = freelancer();
console.log(rngFreelancer);
