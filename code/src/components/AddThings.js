import React from 'react'
import { connect } from 'react-redux';
import { addThings }  from '../redux/actions';

class addThings extends React.Component {
  
  handleAddThings = () => {
    this.props.addThings(this.state.input)

    this.setState({ input: ''
    })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-things" onClick={this.handleAddThings}>
          Add Things
        </button>
      </div>
    )
  }
}


export default connect (
  null,
  { addThings }

) (AddThings)