export interface LoadingDataInterface {
  postPayment: (method: string, installments: number) => Promise<void>;
}

export interface LoadingDataUseCaseInterface {
  createPayment: (method: string, installments: number) => Promise<void>;
}
