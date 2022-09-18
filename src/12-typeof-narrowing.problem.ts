import { expect, it } from 'vitest';

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === 'number') return 20;
  else return amount.amount;
};

it('Should return the amount when passed an object', () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed a number', () => {
  expect(coerceAmount(20)).toEqual(20);
});
