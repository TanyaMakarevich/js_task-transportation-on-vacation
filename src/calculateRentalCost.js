/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const NUMBER_OF_DAYS = days;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const TOTAL_AMOUNT = days * 40;

  if (NUMBER_OF_DAYS >= LONG_TERM) {
    return TOTAL_AMOUNT - BIG_DISCOUNT;
  }

  if (NUMBER_OF_DAYS >= SHORT_TERM) {
    return TOTAL_AMOUNT - SMALL_DISCOUNT;
  }

  return TOTAL_AMOUNT;
}

module.exports = calculateRentalCost;
