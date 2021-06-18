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
  }
  // change state by function setState
  changeTitleHandler = () => {
    const oldTitle = this.state.pageTitle
    const newTitle = oldTitle + '(changed)'
    this.setState({
      pageTitle: newTitle,
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
        <button onClick={this.changeTitleHandler}>Change Title</button>
        {/* {cars.map((car, index) => {
          return <Car name={cars[0].name} year={cars[0].year} key={index} />
        })} */}
        <Car name={cars[0].name} year={cars[0].year} />
      </div>
    )
  }
}

// const propsType = {
//   name:
// }

export default App
