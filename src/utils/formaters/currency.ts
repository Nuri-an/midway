export const Currency = (value: number, currency: string) => {
  return Intl.NumberFormat('default', {
    style: 'currency',
    currency,
  }).format(value);
};
