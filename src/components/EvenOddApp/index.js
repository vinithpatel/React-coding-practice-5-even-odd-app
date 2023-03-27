import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + parseInt(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    const isEven = count % 2 === 0

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="count-number-heading">Count {count}</h1>
          {isEven ? (
            <p className="count-para">Count is Even</p>
          ) : (
            <p className="count-para">Count is Odd</p>
          )}

          <button
            className="increment-button"
            type="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="instruction-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
