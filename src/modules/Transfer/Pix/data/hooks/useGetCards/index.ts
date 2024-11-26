import { PixDataUseCase } from '@Pix/data/usecases';
import { CardDTO } from '@Pix/domain/entities';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants';

export const useGetCards = (): UseQueryResult<CardDTO[]> => {
  return useQuery({
    queryKey: [QUERY_KEYS.PIX.USER_CARDS],
    queryFn: async () => {
      const pixDataUsecase = new PixDataUseCase();
      const response = await pixDataUsecase.fetchUserCards();

      return response;
    },
  });
};
