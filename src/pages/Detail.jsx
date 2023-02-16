import React from "react";
import styled from "styled-components";
import todos from "../redux/modules/todos";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const findTodo = todos.todos.find((value) => value.id === Number(params.id));
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          fontSize: "50px",
        }}
      >
        Detail
        <button onClick={() => navigate(-1)}>Back</button>
      </div>

      <Stdetailbox key={todos}>
        <div>{findTodo.id}</div>

        <br />
        <br />
        <div>{findTodo.title}</div>
        <br />
        <br />
        <div>{findTodo.body}</div>
        <br />
        <br />
      </Stdetailbox>
    </>
  );
}

export default Detail;

const Stdetailbox = styled.div`
  justify-content: center;
  display: flex;
  background-color: rgb(117, 117, 188);
  flex-direction: column;
  margin: 200px 200px 200px 200px;
  align-items: center;
  text-align: center;
  height: 400px;
  max-width: 800px;
  color: white;
`;
