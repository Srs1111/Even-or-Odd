// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const numberRandom = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + numberRandom}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card-conatiner">
          <h1 className="heading">Count {count}</h1>
          <p className="para-Text">Count is {displayText}</p>
          <button
            type="button"
            className="btn-content"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="discription-content">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
