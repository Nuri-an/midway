import { LoadingDataUseCaseInterface } from '@Loading/domain/interfaces';

import { LoadingData } from '../services';

export class LoadingDataUseCase implements LoadingDataUseCaseInterface {
  private static instance: LoadingDataUseCase | null = null;

  public static getInstance(): LoadingDataUseCase {
    if (this.instance == null) this.instance = new LoadingDataUseCase();

    return this.instance;
  }

  public async createPayment(): Promise<void> {
    const pixData = new LoadingData();
    // await pixData.postPayment();

    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}
