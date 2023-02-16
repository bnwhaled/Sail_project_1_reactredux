import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const todos = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  //추가버튼핸들러
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        title,
        body,
        isDone: false,
      })
    );
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: "100px",
          fontFamily: " serif",
          textDecorationLine: "underline",
          textDecorationStyle: "double",
          textDecorationThickness: 3,
        }}
      >
        Todolist
      </div>
      <StinputContainer>
        <br />
        <form onSubmit={onSubmitHandler}>
          <br />
          <Stinputbox
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Stinputbox
            placeholder="Content"
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />

          <Stinputbtn>+</Stinputbtn>
        </form>
      </StinputContainer>
    </div>
  );
};

export default AddForm;

//인풋박스스타일(제목 내용입력칸)
const StinputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 10px 10px;
  gap: 30px;
`;
const Stinputbox = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 20px;
  text-align: center;
`;
const Stinputbtn = styled.button`
  appearance: auto;
  background-color: black;
  color: white;
  border-radius: 20px;
  width: 70px;
  height: 30px;
  cursor: cell;
`;
