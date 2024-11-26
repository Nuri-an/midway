import { PixDataUseCase } from '@Pix/data/usecases';
import { PaymentDTO } from '@Pix/domain/entities';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { QUERY_KEYS } from '~/constants';

export const useGetPayment = (): UseMutationResult<PaymentDTO> => {
  return useMutation({
    mutationKey: [QUERY_KEYS.PIX.PAYMENT],
    mutationFn: async () => {
      const pixDataUsecase = new PixDataUseCase();
      const response = await pixDataUsecase.fetchInstallments();

      return response;
    },
  });
};
