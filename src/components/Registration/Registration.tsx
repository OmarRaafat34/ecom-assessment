import classes from "./Registration.module.scss";
import closeIcon from "../../assets/icons/close.png";
import Modal from "react-modal";
import { IRegistrationProps } from "./types";
import EcomInput from "../ecomInput/EcomInput";
import { FieldValues, useForm } from "react-hook-form";
import EcomButton from "../EcomButton/EcomButton";
import { InputTypes } from "../ecomInput/types";
import { useState } from "react";
import { emailRegex } from "../../const";

const Registration = (props: IRegistrationProps) => {
    const customStyles = {
        content: {
            backgroundColor: "#fff",
            width: "40%",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        },
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        watch,
    } = useForm();

    watch(["password", "confirmPassword"]);

    const [checkboxValue, setCheckboxValue] = useState(false);

    const onSubmitForm = (values: FieldValues) => {
        if (checkboxValue) {
            closeDrawer();
        }
    };

    const closeDrawer = () => {
        props.closeDrawer();
        setValue("fullName", "");
        setValue("email", "");
        setValue("password", "");
        setValue("confirmPassword", "");
        setCheckboxValue(false);
    };

    const handleCheckboxChange = () => {
        setCheckboxValue(!checkboxValue);
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeDrawer}
            style={customStyles}
            className={classes.drawer}
        >
            <div className={classes.drawer_content}>
                <div className={classes.drawer_content_header}>
                    <img
                        src={closeIcon}
                        className={classes.closeIcon}
                        onClick={closeDrawer}
                    />
                </div>
                <h1>Singup</h1>
                <div className={classes.drawer_content_form}>
                    <EcomInput
                        label="Full Name:"
                        placeholder="Full Name"
                        register={register}
                        isRequired
                        registerName="fullName"
                    />
                    {errors?.fullName?.type === "required" && (
                        <p className={classes.error}>Full name is required</p>
                    )}
                    <EcomInput
                        label="Email:"
                        placeholder="Email"
                        register={register}
                        isRequired
                        registerName="email"
                        pattern={emailRegex}
                    />
                    {errors?.email?.type === "required" ? (
                        <p className={classes.error}>Email is required</p>
                    ) : errors?.email?.type === "pattern" ? (
                        <p className={classes.error}>Type valid email</p>
                    ) : null}
                    <EcomInput
                        label="Password:"
                        placeholder="Password"
                        register={register}
                        isRequired
                        registerName="password"
                        inputType={InputTypes.PASSWORD}
                    />
                    {errors?.password?.type === "required" && (
                        <p className={classes.error}>Password is required</p>
                    )}
                    <EcomInput
                        label="Confirm Password:"
                        placeholder="Confirm Password"
                        register={register}
                        isRequired
                        registerName="confirmPassword"
                        inputType={InputTypes.PASSWORD}
                    />
                    {errors?.confirmPassword?.type === "required" ? (
                        <p className={classes.error}>Confirm password is required</p>
                    ) : getValues("password") !== getValues("confirmPassword") ? (
                        <p className={classes.error}>Passwords must match</p>
                    ) : null}
                    <div className={classes.checkboxWrapper}>
                        <input
                            type="checkbox"
                            checked={checkboxValue}
                            onChange={handleCheckboxChange}
                            className={classes.checkInput}
                        />
                        <p>I agree to terms and conditions</p>
                    </div>
                    {!checkboxValue && (
                        <p className={classes.error}>checkbox confirmation is required</p>
                    )}

                    <div className={classes.drawer_content_form_submit}>
                        <EcomButton title="Submit" onClick={handleSubmit(onSubmitForm)} />
                    </div>
                </div>
            </div>
        </Modal>
    );
};
export default Registration;
