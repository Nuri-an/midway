import { LoadingDataUseCase } from '@Loading/data/usecases';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants';

export const usePostPayment = (
  method: string,
  installments: number,
): UseQueryResult<void> => {
  return useQuery({
    queryKey: [QUERY_KEYS.PAYMENT.CREATE, method, installments],
    queryFn: async () => {
      const loadingDataUsecase = new LoadingDataUseCase();
      await loadingDataUsecase.createPayment(method, installments);

      return true;
    },
  });
};
