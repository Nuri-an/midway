import { ParamListBase } from '@react-navigation/native';

export interface ITransferRootStack {
  Pix: undefined;
  Loading: undefined;
  Successful: undefined;
}

export interface ITransferParamList extends ParamListBase, ITransferRootStack {}
