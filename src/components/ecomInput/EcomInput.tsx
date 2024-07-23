import { useState } from "react";
import classes from "./EcomInput.module.scss";
import { IEcomInputProps, InputTypes } from "./types";
import eyeIcon from "../../assets/icons/eye.png";
import eyeOffIcon from "../../assets/icons/hidden.png";

const EcomInput = (props: IEcomInputProps) => {
  const [passwrodIconToggle, setPasswordIconToggle] = useState(false);

  const handlePasswordIconClick = (event: React.MouseEvent) => {
    if (props.disabled) {
      return;
    }
    event.preventDefault();
    setPasswordIconToggle((prevValue) => !prevValue);
  };

  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}>{props.label}</label>
      <div className={classes.inputWrapper}>
        {props.inputType === InputTypes.TEXT_AREA ? (
          <div>
            <textarea
              className={classes.textarea}
              placeholder={props.placeholder}
              disabled={props.disabled}
              {...props.register(props.registerName, {
                required: props.isRequired,
              })}
              maxLength={props.maxLength}
            />
            {props.maxLength && (
              <p className={classes.charactersWrapper}>
                {props.maxLength} characters max
              </p>
            )}
          </div>
        ) : (
          <div className={classes.input}>
            <input
              type={
                props.inputType === InputTypes.PASSWORD
                  ? passwrodIconToggle
                    ? InputTypes.TEXT
                    : InputTypes.PASSWORD
                  : props.inputType || InputTypes.TEXT
              }
              className={classes.inputContainerData}
              placeholder={props.placeholder}
              disabled={props.disabled}
              {...props.register(props.registerName, {
                required: props.isRequired,
                pattern: props.pattern,
              })}
            />
            {props.inputType === InputTypes.PASSWORD && !passwrodIconToggle && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {props.registerName ? (
                  <img
                    src={eyeIcon}
                    className={classes.eyeIcon}
                    onClick={handlePasswordIconClick}
                  />
                ) : null}
              </div>
            )}
            {props.inputType === InputTypes.PASSWORD && passwrodIconToggle && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {props.registerName ? (
                  <img
                    src={eyeOffIcon}
                    className={classes.eyeIcon}
                    onClick={handlePasswordIconClick}
                  />
                ) : null}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EcomInput;
