export interface IEcomInputProps {
  label: string;
  inputType?: string;
  name?: string;
  placeholder: string;
  disabled?: boolean;
  register?: any;
  registerName?: string;
  isRequired?: boolean;
  pattern?: any;
  maxLength?: number;
}

export enum InputTypes {
  TEXT_AREA = "textarea",
  PASSWORD = "password",
  TEXT = "text",
}
