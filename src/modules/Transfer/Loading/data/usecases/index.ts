import { LoadingDataUseCaseInterface } from '@Loading/domain/interfaces';

import { LoadingData } from '../services';

export class LoadingDataUseCase implements LoadingDataUseCaseInterface {
  private static instance: LoadingDataUseCase | null = null;

  public static getInstance(): LoadingDataUseCase {
    if (this.instance == null) this.instance = new LoadingDataUseCase();

    return this.instance;
  }

  public async createPayment(
    method: string,
    installments: number,
  ): Promise<void> {
    const pixData = new LoadingData();
    // await pixData.postPayment(method, installments);

    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}
