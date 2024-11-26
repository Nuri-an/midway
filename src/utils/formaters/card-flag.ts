import { CARDS_FLAG } from '~/constants';

export const CardFlag = (cardAlias: string) => {
  if (Object.getOwnPropertyNames(CARDS_FLAG).indexOf(cardAlias) !== -1)
    return CARDS_FLAG[cardAlias as keyof typeof CARDS_FLAG]?.image;

  return (
    Object.values(CARDS_FLAG).find(card => card?.alias === cardAlias)?.image ??
    ''
  );
};
