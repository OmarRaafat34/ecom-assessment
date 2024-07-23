import { ITodoList } from "../../types";

export interface ITableProps {
  markButtonClicked: boolean;
  deleteButtonClicked: boolean;
  filteredTodos: ITodoList[];
  selectedTodos: string[];
  handleCheckboxChange: (id: string) => void;
}
