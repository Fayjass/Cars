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
        <input type='text' onChange={this.HandlerInput} />
        <button onClick={this.onChangeTitleHandler.bind(this, 'Changed')}>
          Change Title
        </button>
        {/* {cars.map((car, index) => {
          return <Car name={cars[0].name} year={cars[0].year} key={index} />
        })} */}
        <Car
          name={cars[0].name}
          year={cars[0].year}
          onChangeTitle={() => this.onChangeTitleHandler(this, cars[0].name)}
        />

        <Car
          name={cars[1].name}
          year={cars[1].year}
          onChangeTitle={this.onChangeTitleHandler.bind(this, cars[1].name)}
        />
      </div>
    )
  }
}

// const propsType = {
//   name:
// }

export default App
