import React from "react";
import styled from "styled-components";
import AddForm from "../components/Addform";
import TodoListContainer from "../components/TodoListContainer";

const Home = () => {
  return (
    <StContainer>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default Home;

const StContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f5f5dc;
  height: 100vh;
`;
