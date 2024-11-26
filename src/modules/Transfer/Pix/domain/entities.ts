export interface CardDTO {
  cardId: string;
  name: string;
  securityCode: string;
  cardNumber: string;
  holder: string;
  expirationDate: string;
  brand: string;
  favorite: boolean;
  used: boolean;
}

export interface InstallmentDTO {
  amountToPay: number;
  installmentAmount: number;
  installments: number;
  fees: {
    fixed: {
      amount: number;
      percentage: number;
    };
    installments: {
      amount: number;
      percentage: number;
    };
  };
}

export interface PaymentDTO {
  transactionId: string;
  amount: number;
  currency: string;
  receiver: {
    name: string;
    id: string;
  };
  method: string;
  simulation: InstallmentDTO[];
}
