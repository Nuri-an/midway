import { LoadingDataUseCase } from '@Loading/data/usecases';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants';

export const usePostPayment = (): UseQueryResult<void> => {
  return useQuery({
    queryKey: [QUERY_KEYS.PAYMENT.CREATE],
    queryFn: async () => {
      const pixDataUsecase = new LoadingDataUseCase();
      await pixDataUsecase.createPayment();

      return true;
    },
  });
};
