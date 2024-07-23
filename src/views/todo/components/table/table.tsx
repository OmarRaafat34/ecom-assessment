import { ITableProps } from "./types";
import classes from "./table.module.scss";
import { ITodoList } from "../../types";
import emptyList from "../../../../assets/icons/clipboard.png";

const Table = (props: ITableProps) => {
  return (
    <table className={classes.table}>
      <thead className={classes.table_head}>
        <tr className={classes.table_head_row}>
          {(props.markButtonClicked || props.deleteButtonClicked) && (
            <th className={classes.table_head_row_checkbox}></th>
          )}
          <th className={classes.table_head_row_field}>Title</th>
          <th className={classes.table_head_row_field}>Description</th>
        </tr>
      </thead>
      {props.filteredTodos.length > 0 ? (
        props.filteredTodos.map((row: ITodoList) => {
          return (
            <tbody className={classes.table_body}>
              <tr
                key={row.id}
                className={
                  row.completed
                    ? classes.table_row_completed
                    : classes.table_row
                }
              >
                {(props.markButtonClicked || props.deleteButtonClicked) && (
                  <td>
                    <input
                      type="checkbox"
                      checked={props.selectedTodos.includes(row.id)}
                      onChange={() => props.handleCheckboxChange(row.id)}
                      className={classes.checkInput}
                    />
                  </td>
                )}
                <td style={{ paddingLeft: "1rem" }}>{row.title}</td>
                <td style={{ paddingLeft: "1rem" }}>{row.description}</td>
              </tr>
            </tbody>
          );
        })
      ) : (
        <tbody className={classes.table_body}>
          <tr>
            <td className={classes.table_empty}>
              <img src={emptyList} className={classes.emptyList} />
              <p>Your list will appear here</p>
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default Table;
