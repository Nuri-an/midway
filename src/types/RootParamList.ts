import { ParamListBase } from '@react-navigation/native';

export interface ITransferRootStack {
  Pix: undefined;
  Loading: {
    method: string;
    installments: number;
  };
  Successful: undefined;
}

export interface ITransferParamList extends ParamListBase, ITransferRootStack {}
