import { CardDTO, PaymentDTO } from './entities';

export interface PixDataInterface {
  getUserCards: () => Promise<CardDTO[]>;
  getInstallments: () => Promise<PaymentDTO>;
}

export interface PixDataUseCaseInterface {
  fetchUserCards: () => Promise<CardDTO[]>;
  fetchInstallments: () => Promise<PaymentDTO>;
}
