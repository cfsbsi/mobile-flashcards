export function cardQuantitiesLiteral(quantity) {
  return `${quantity} ${quantity === 1 ? 'card' : 'cards'}`;
}
