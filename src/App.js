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
    showCars: false,
  }

  // change state by function setState

  onChangeTitleHandler = (pageTitle) => {
    this.setState({
      pageTitle: pageTitle,
    })
  }

  HandlerInput = (event) => {
    this.setState({
      pageTitle: event.target.value,
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center',
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        {/* <input /> */}
        {/* <input type='text' onChange={this.HandlerInput} /> */}
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        {this.state.showCars
          ? this.state.cars.map((car, index) => {
              return (
                <Car
                  name={car.name}
                  year={car.year}
                  onChangeTitle={() =>
                    this.onChangeTitleHandler(this, car.name)
                  }
                  key={index}
                />
              )
            })
          : null}
      </div>
    )
  }
}

// const propsType = {
//   name:
// }

export default App
