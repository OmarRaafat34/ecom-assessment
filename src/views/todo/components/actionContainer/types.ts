export interface IActionContainerProps {
  markButtonClicked: boolean;
  markTodoHandler: () => void;
  setMarkButtonCLicked: React.Dispatch<React.SetStateAction<boolean>>;
  deleteButtonClicked: boolean;
  deleteTodoHandler: () => void;
  setDeleteButtonCLicked: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterClicked: React.Dispatch<React.SetStateAction<boolean>>;
  filterClicked: boolean;
  viewAllTodosHandler: () => void;
  viewCompletedTodosHandler: () => void;
  viewIncompletedTodosHandler: () => void;
}
