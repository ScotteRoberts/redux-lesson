import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';

const Main = ({ boards }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {boards.map((board, i) => (
      <Board key={i} index={i} name={board} />
    ))}
  </div>
);

Main.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string),
};

export default Main;
