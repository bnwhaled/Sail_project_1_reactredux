import React from "react";
import styled from "styled-components";
// import AddForm from "./components/Addform";
// import TodoListContainer from "./components/TodoListContainer";
import Router from "./shared/Router";

const App = () => {
  return (
    <StContainer>
      <Router />
    </StContainer>
  );
};

export default App;

//전체스타일(중앙고정)

const StContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f5f5dc;
  height: 100vh;
`;
