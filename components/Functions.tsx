//convert price to two decimal places
export const formatPrice = (price: number): number => {
  return parseInt(((price * 100) / 100).toFixed(2));
};
