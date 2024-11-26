import { InstallmentDTO } from '@Pix/domain/entities';

export interface IInstallments {
  simulator?: InstallmentDTO;
  currency: string;
  transferValue: number;
}
