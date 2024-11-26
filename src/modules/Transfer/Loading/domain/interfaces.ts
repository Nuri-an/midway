export interface LoadingDataInterface {
  postPayment: () => Promise<void>;
}

export interface LoadingDataUseCaseInterface {
  createPayment: () => Promise<void>;
}
