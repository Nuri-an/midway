import axios from 'axios';

import { CardDTO, PaymentDTO } from '@Pix/domain/entities';
import { PixDataInterface } from '@Pix/domain/interfaces';

export class PixData implements PixDataInterface {
  public async getUserCards(): Promise<CardDTO[]> {
    const response = await axios.get<any, CardDTO[]>(`/user/cards`);

    return response;
  }

  public async getInstallments(method: string): Promise<PaymentDTO> {
    const response = await axios.get<any, PaymentDTO>(
      `/payment/${method}/installments/`,
    );

    return response;
  }
}
