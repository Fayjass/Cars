import React, { Component } from 'react'
import './App.css'
import Car from './Car/Car.js'

class App extends Component {
  // create state
  state = {
    cars: [
      { name: 'Ford', year: '2014' },
      { name: 'Audi', year: '2018' },
      { name: 'Mazda', year: '2010' },
    ],
    pageTitle: 'React component',
    value: '',
  }

  // change state by function setState

  onChangeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    })
  }

  HandlerInput = (event) => {
    this.setState({
      pageTitle: event.target.value,
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input />
        <input type='text' onChange={this.HandlerInput} />
        <button onClick={this.onChangeTitleHandler.bind(this, 'Changed')}>
          Change Title
        </button>
        {cars.map((car, index) => {
          return (
            <Car
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.onChangeTitleHandler(this, car.name)}
              key={index}
            />
          )
        })}
      </div>
    )
  }
}

// const propsType = {
//   name:
// }

export default App
