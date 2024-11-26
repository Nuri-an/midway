import { PixDataUseCase } from '@Pix/data/usecases';
import { PaymentDTO } from '@Pix/domain/entities';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants';

export const useGetPayment = (
  method: string,
): UseQueryResult<PaymentDTO, Error> => {
  return useQuery({
    queryKey: [QUERY_KEYS.PIX.PAYMENT, method],
    queryFn: async () => {
      const pixDataUsecase = new PixDataUseCase();
      const response = await pixDataUsecase.fetchInstallments(method);

      return response;
    },
  });
};
