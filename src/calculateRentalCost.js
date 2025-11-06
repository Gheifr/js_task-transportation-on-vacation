/**
 * @param {number} days
 *
 * @return {number}
 */



const LONG_TERM_DURATION_7 = 7;
const LONG_TERM_DURATION_3 = 3;
const LONG_TERM_DISC_7 = 50;
const LONG_TERM_DISC_3 = 20;
const DAILY_PRICE = 40;

function calculateRentalCost(days) {
  return days >= LONG_TERM_DURATION_7 ? (days * DAILY_PRICE) - LONG_TERM_DISC_7 :
            days >= LONG_TERM_DURATION_3 ? (days * DAILY_PRICE) - LONG_TERM_DISC_3 : days * DAILY_PRICE;
}

module.exports = calculateRentalCost;
