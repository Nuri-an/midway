export interface IPaymentMethod {
  onChangeSelected: () => void;
  isSelected: boolean;
  title: string;
  description: string;
  titleIcon?: string;
}
