import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super();

    this.state = {
      selectedColor: '#FFF'
    }
  }

  updateSelectedColor = (hex) => {
     this.setState({
      selectedColor: hex
    })
  }

  getColorToUpdate = () => {
    return this.state.selectedColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell selectedColor={ this.getColorToUpdate() }key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log(this.state.selectedColor)
    return (
      <div id="app">
        <ColorSelector updateSelectedColor={ this.updateSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
}
