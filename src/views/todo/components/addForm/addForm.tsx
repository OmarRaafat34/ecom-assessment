import { FieldValues, useForm } from "react-hook-form";
import EcomInput from "../../../../components/ecomInput/EcomInput";
import classes from "./addForm.module.scss";
import EcomButton from "../../../../components/EcomButton/EcomButton";
import Modal from "react-modal";
import { IAddFormProps } from "./types";
import close from "../../../../assets/icons/close.png";
import { InputTypes } from "../../../../components/ecomInput/types";

const AddForm = (props: IAddFormProps) => {
  const customStyles = {
    content: {
      backgroundColor: "#fff",
      padding: "0px",
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
  } = useForm();

  const onSubmit = (values: FieldValues) => {
    props.setOpenModal(false);
    props.onSubmit(values);
    setValue("title", "");
    setValue("description", "");
  };

  const closeModalHandler = () => {
    props.setOpenModal(false);
    setValue("title", "");
    setValue("description", "");
  };

  return (
    <Modal
      isOpen={props.openModal}
      onRequestClose={closeModalHandler}
      style={customStyles}
      className={classes.modal}
    >
      <div style={{ padding: "2rem", width: "100%" }}>
        <div className={classes.modal_header}>
          <img
            src={close}
            className={classes.modal_header_closeIcon}
            onClick={closeModalHandler}
          />
        </div>
        <div className={classes.modal_info}>
          <h2>Add New Todo</h2>
          <EcomInput
            label="Title:"
            placeholder="Title"
            register={register}
            isRequired
            registerName="title"
          />
          {errors?.title?.type === "required" && (
            <p className={classes.error}>Title is required</p>
          )}
          <EcomInput
            label="Description:"
            placeholder="Description"
            maxLength={50}
            register={register}
            inputType={InputTypes.TEXT_AREA}
            isRequired
            registerName="description"
          />
          {errors?.description?.type === "required" && (
            <p className={classes.error}>Description is required</p>
          )}
          <EcomButton title="Submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </Modal>
  );
};

export default AddForm;
