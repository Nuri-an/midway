export interface IFooter {
  value: string;
  buttonLabel: string;
  isSubmitEnabled: boolean;
  onSubmit: () => void;
}

export interface IContainer {
  bottomInsets: number;
}
