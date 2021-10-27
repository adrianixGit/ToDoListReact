import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListStyled = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 15px;
  color: grey;
  font-size: 20px;

  button {
    margin-left: 20px;
    background: #0046bd;
    background: linear-gradient(to right top, #111111, #0046bd);
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const RenderLi = ({ user: { name } }) => (
  <ListStyled>
    <p>{name}</p>
    <button>X</button>
  </ListStyled>
);

RenderLi.popTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default RenderLi;
