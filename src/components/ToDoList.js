import React from 'react';
import { Tasks } from 'data/tasks';
import RenderLi from './RenderLi';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  background: #0046bd;
  background: linear-gradient(to right top, #111111, #0046bd);

  h1 {
    font-weight: bold;
    font-size: 3rem;
  }
`;

const InputDiv = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  background: transparent;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 25px;
    padding: 0 15px 0 15px;
    background: rgba(0, 0, 0, 0.6);
    background: linear-gradient(
      to right top,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.25)
    );
    color: grey;
    border-radius: 20px;
  }

  input::placeholder {
    font-size: 25px;
    color: #a4a4a4;
    opacity: 0.2;
  }

  button {
    height: 100%;
    border: none;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.6);
    background: linear-gradient(
      to right top,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.25)
    );
    padding: 0 25px 0 25px;
    font-size: 25px;
    font-weight: bold;
    color: grey;
    border-radius: 20px;
  }
`;

const TaskList = styled.div`
  width: 50%;
  max-height: 800px;
  background: rgba(0, 0, 0, 0.6);
  background: linear-gradient(
    to right top,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.25)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  ul {
    padding: 0;
  }
`;

const ToDoList = () => (
  <Wrapper>
    <h1>TO DO LIST</h1>
    <InputDiv>
      <input type="text" placeholder="Task..." />
      <button>Dodaj</button>
    </InputDiv>
    <TaskList>
      <ul>
        {Tasks.map((user) => (
          <RenderLi user={user} />
        ))}
      </ul>
    </TaskList>
  </Wrapper>
);

ToDoList.popTypes = {};

export default ToDoList;
