import { PixDataUseCase } from '@Pix/data/usecases';
import { PaymentDTO } from '@Pix/domain/entities';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants';

export const useGetPayment = (): UseQueryResult<PaymentDTO> => {
  return useQuery({
    queryKey: [QUERY_KEYS.PIX.PAYMENT],
    queryFn: async () => {
      const pixDataUsecase = new PixDataUseCase();
      const response = await pixDataUsecase.fetchInstallments();

      return response;
    },
  });
};
