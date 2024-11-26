import { CardDTO, PaymentDTO } from './entities';

export interface PixDataInterface {
  getUserCards: () => Promise<CardDTO[]>;
  getInstallments: (method: string) => Promise<PaymentDTO>;
}

export interface PixDataUseCaseInterface {
  fetchUserCards: () => Promise<CardDTO[]>;
  fetchInstallments: (method: string) => Promise<PaymentDTO>;
}
