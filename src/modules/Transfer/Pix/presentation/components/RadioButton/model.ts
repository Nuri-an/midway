export interface IRadioButton {
  onChangeSelected: () => void;
  isSelected: boolean;
  title: string;
  description: string;
  titleIcon?: string;
}
