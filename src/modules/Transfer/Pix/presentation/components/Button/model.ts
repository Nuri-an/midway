import { TouchableOpacityProps } from 'react-native';

export interface IButton extends TouchableOpacityProps {
  label: string;
}

export interface IContainer extends Pick<IButton, 'disabled'> {}
