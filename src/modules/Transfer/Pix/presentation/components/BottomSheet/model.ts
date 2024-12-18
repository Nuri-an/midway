import { InstallmentDTO } from '@Pix/domain/entities';

export interface IBottomSheet {
  isVisible: boolean;
  installments: InstallmentDTO[];
  installmentSelected?: InstallmentDTO;
  currency: string;
  onClose: () => void;
  onPress: (installment: InstallmentDTO) => void;
}

export interface IWrapper {
  topInsets: number;
}

export interface IContainer {
  height: number;
}
