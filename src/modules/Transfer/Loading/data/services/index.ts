import axios from 'axios';

import { LoadingDataInterface } from '@Loading/domain/interfaces';

export class LoadingData implements LoadingDataInterface {
  public async postPayment(
    method: string,
    installments: number,
  ): Promise<void> {
    await axios.post<any, any>(`/payment/`, { method, installments });
  }
}
