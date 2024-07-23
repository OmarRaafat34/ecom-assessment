import { Tooltip } from "react-tooltip";
import EcomButton from "../../../../components/EcomButton/EcomButton";
import classes from "./actionContainer.module.scss";
import { IActionContainerProps } from "./types";
import check from "../../../../assets/icons/check.png";
import deleteIcon from "../../../../assets/icons/delete.png";
import filter from "../../../../assets/icons/filter.png";

const ActionContainer = (props: IActionContainerProps) => {
  return (
    <div className={classes.tableActions}>
      <div className={classes.actionWrapper}>
        {props.markButtonClicked ? (
          <div className={classes.actionContainer}>
            <EcomButton
              title="Confirm"
              onClick={props.markTodoHandler}
              className={classes.actionButton}
            />
            <EcomButton
              title="Cancel"
              onClick={() => props.setMarkButtonCLicked(false)}
              className={classes.actionButtonCancel}
            />
          </div>
        ) : (
          <>
            <Tooltip id="mark-tooltip" />
            <div
              onClick={() => props.setMarkButtonCLicked(true)}
              data-tooltip-id="mark-tooltip"
              data-tooltip-content="Mark as completed"
              style={{ width: "fit-content" }}
            >
              <img src={check} className={classes.iconImage} />
            </div>
          </>
        )}
        {props.deleteButtonClicked ? (
          <div className={classes.actionContainer}>
            <EcomButton
              title="Confirm"
              onClick={props.deleteTodoHandler}
              className={classes.actionButton}
            />
            <EcomButton
              title="Cancel"
              onClick={() => props.setDeleteButtonCLicked(false)}
              className={classes.actionButtonCancel}
            />
          </div>
        ) : (
          <>
            <Tooltip id="delete-tooltip" />
            <div
              onClick={() => props.setDeleteButtonCLicked(true)}
              data-tooltip-id="delete-tooltip"
              data-tooltip-content="Delete Todos"
              style={{ width: "fit-content" }}
            >
              <img src={deleteIcon} className={classes.iconImage} />
            </div>
          </>
        )}
      </div>
      <div className={classes.tableActions_rightside}>
        <EcomButton title="Add New" onClick={() => props.setOpenModal(true)} />
        <div
          onClick={() => props.setFilterClicked(!props.filterClicked)}
          className={classes.filterContainer}
        >
          <p>Filter</p>
          <img src={filter} className={classes.iconImage} />
        </div>
        {props.filterClicked && (
          <div className={classes.submenuWrapper}>
            <div
              className={classes.submenuWrapper_item}
              onClick={props.viewAllTodosHandler}
            >
              View All
            </div>
            <div
              className={classes.submenuWrapper_item}
              onClick={props.viewCompletedTodosHandler}
            >
              View Completed
            </div>
            <div
              className={classes.submenuWrapper_item}
              onClick={props.viewIncompletedTodosHandler}
            >
              View Incompleted
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionContainer;
