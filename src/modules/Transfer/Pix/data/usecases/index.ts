import { CardDTO, PaymentDTO } from '@Pix/domain/entities';
import { PixDataUseCaseInterface } from '@Pix/domain/interfaces';

import { FAKER } from '~/Faker';

import { PixData } from '../services';

export class PixDataUseCase implements PixDataUseCaseInterface {
  private static instance: PixDataUseCase | null = null;

  public static getInstance(): PixDataUseCase {
    if (this.instance == null) this.instance = new PixDataUseCase();

    return this.instance;
  }

  public async fetchUserCards(): Promise<CardDTO[]> {
    const pixData = new PixData();
    // const response = await pixData.getUserCards();

    // return response;
    return FAKER.CARDS;
  }

  public async fetchInstallments(): Promise<PaymentDTO> {
    const pixData = new PixData();
    // const response = await pixData.getInstallments();

    // return response;
    await new Promise(resolve => setTimeout(resolve, 2000));
    return FAKER.PAYMENT;
  }
}
