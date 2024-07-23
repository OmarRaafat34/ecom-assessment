import { FieldValues } from "react-hook-form";

export interface IAddFormProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (values: FieldValues) => void;
}
