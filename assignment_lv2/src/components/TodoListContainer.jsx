import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";
import { doneTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const TodoListContainer = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos", todos);

  const dispatch = useDispatch();
  //완료버튼 핸들러
  const isDoneBtnHandler = (id) => {
    console.log("done", id);
    dispatch(doneTodo({ id }));
  };
  //삭제버튼 핸들러
  const removeBtnHandler = (id) => {
    console.log("romove", id);
    dispatch(deleteTodo({ id }));
  };

  return (
    <StTododiv>
      <StH1>doing</StH1>

      {todos
        .filter((value) => value.isDone === false)
        .map((todo) => (
          <StTodobox key={todo.id}>
            <Link to={`/detail/${todo.id}`}>detail</Link>
            {todo.title}
            <br />
            {todo.body}
            <br />
            <Stboxbtn onClick={() => isDoneBtnHandler(todo.id)}>done</Stboxbtn>
            <br />
            <Stboxbtn onClick={() => removeBtnHandler(todo.id)}>
              delete
            </Stboxbtn>
          </StTodobox>
        ))}
      <StH1>done</StH1>
      {todos
        .filter((value) => value.isDone === true)
        .map((todo) => (
          <StTodobox key={todo.id}>
            <Detailbtn>detail</Detailbtn>
            {todo.title}
            <br />

            {todo.body}
            <br />

            <Stboxbtn
              style={{ backgroundColor: "gray" }}
              onClick={() => isDoneBtnHandler(todo.id)}
            >
              back
            </Stboxbtn>
            <br />
            <Stboxbtn onClick={() => removeBtnHandler(todo.id)}>
              delete
            </Stboxbtn>
          </StTodobox>
        ))}
    </StTododiv>
  );
};

export default TodoListContainer;

const StTododiv = styled.div`
  gap: 50px;
  flex-wrap: wrap;
`;
const StTodobox = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  border-radius: 12px;
  gap: 10px;
`;

const StH1 = styled.h1`
  font-size: 30px;
  font-family: serif;
`;

const Stboxbtn = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  width: 50px;
  height: 20px;
`;

const Detailbtn = styled.button`
  background-color: purple;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  max-width: 30px;
  max-height: 20px;
  font-size: 10px;
  position: relative;
`;
