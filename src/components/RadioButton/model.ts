import { PropsWithChildren } from 'react';

export interface IRadioButton extends PropsWithChildren {
  isSelected: boolean;
  onPress: () => void;
}
