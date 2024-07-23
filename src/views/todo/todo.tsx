import { FieldValues } from "react-hook-form";
import AddForm from "./components/addForm/addForm";
import classes from "./todo.module.scss";
import { useEffect, useState } from "react";
import { ITodoList } from "./types";
import { toast } from "react-toastify";
import "react-tooltip/dist/react-tooltip.css";
import { v4 as uuidv4 } from "uuid";
import ActionContainer from "./components/actionContainer/actionContainer";
import Table from "./components/table/table";

const Todo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoList, setTodoList] = useState<ITodoList[]>([]);
  const [markButtonClicked, setMarkButtonCLicked] = useState(false);
  const [deleteButtonClicked, setDeleteButtonCLicked] = useState(false);
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);
  const [filterClicked, setFilterClicked] = useState(false);
  const [filterStatus, setFilterStatus] = useState<
    "all" | "completed" | "incomplete"
  >("all");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      setTodoList(JSON.parse(savedTodos));
    }
  }, []);

  const onSubmitHandler = (values: FieldValues) => {
    const valuesToBeSubmitted = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    const updatedTodoList = [...todoList, valuesToBeSubmitted as ITodoList];
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    toast.success("Todo added successfully!");
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedTodos((prev) => {
      if (prev.includes(id)) {
        return prev.filter((todoId) => todoId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const markTodoHandler = () => {
    const updatedTodoList = todoList.map((todo) => {
      if (selectedTodos.includes(todo.id)) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    setMarkButtonCLicked(false);
    setSelectedTodos([]);
    toast.success("Todos marked as completed!");
  };

  const deleteTodoHandler = () => {
    const updatedTodoList = todoList.filter(
      (todo) => !selectedTodos.includes(todo.id),
    );
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    setDeleteButtonCLicked(false);
    setSelectedTodos([]);
    toast.success("Todos deleted successfully!");
  };

  const viewAllTodosHandler = () => {
    setFilterStatus("all");
    setFilterClicked(false);
  };

  const viewCompletedTodosHandler = () => {
    setFilterStatus("completed");
    setFilterClicked(false);
  };

  const viewIncompletedTodosHandler = () => {
    setFilterStatus("incomplete");
    setFilterClicked(false);
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filterStatus === "completed") {
      return todo.completed;
    } else if (filterStatus === "incomplete") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div>
      <div className={classes.headerContainer}>
        <h1>Home Todo</h1>
      </div>
      <ActionContainer
        markButtonClicked={markButtonClicked}
        markTodoHandler={markTodoHandler}
        setMarkButtonCLicked={setMarkButtonCLicked}
        deleteButtonClicked={deleteButtonClicked}
        deleteTodoHandler={deleteTodoHandler}
        setDeleteButtonCLicked={setDeleteButtonCLicked}
        setOpenModal={setOpenModal}
        setFilterClicked={setFilterClicked}
        filterClicked={filterClicked}
        viewAllTodosHandler={viewAllTodosHandler}
        viewCompletedTodosHandler={viewCompletedTodosHandler}
        viewIncompletedTodosHandler={viewIncompletedTodosHandler}
      />
      <Table
        markButtonClicked={markButtonClicked}
        deleteButtonClicked={deleteButtonClicked}
        filteredTodos={filteredTodos}
        selectedTodos={selectedTodos}
        handleCheckboxChange={handleCheckboxChange}
      />
      <AddForm
        openModal={openModal}
        setOpenModal={setOpenModal}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default Todo;
