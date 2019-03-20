import React from 'react';
import PropTypes from 'prop-types';
import AddCardForm from '../components/AddCardForm';

class Board extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
  };

  handleDrop = e => {
    e.preventDefault();
    console.log('dropping...');
  };

  render() {
    const { index, name } = this.props;
    return (
      <div
        className="board"
        style={{
          flex: '0 0 300px',
          margin: '15px',
          padding: '15px',
          borderRadius: '5px',
          backgroundColor: '#E3E4E6',
          boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.1)',
        }}
        onDragOver={e => e.preventDefault()}
        onDrop={this.handleDrop}
      >
        <h2 style={{ margin: '0', marginBottom: '1rem' }}>{name}</h2>

        <AddCardForm boardIndex={index} />
      </div>
    );
  }
}

export default Board;
