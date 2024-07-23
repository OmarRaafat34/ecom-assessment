import { IEcomButtonProps } from "./types";
import classes from "./EcomButton.module.scss";

const EcomButton = (props: IEcomButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={
        props.className
          ? props.className
          : props.secondary
            ? classes.secondaryButton
            : classes.primaryButton
      }
    >
      {props.title}
    </button>
  );
};

export default EcomButton;
