// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onGivingFeedback = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    return (
      <div className="home-container">
        {!isClicked && (
          <div className="card-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance"
            </h1>
            <ul className="emojis-list">
              {emojis.map(eachEmoji => (
                <li className="item-list" key={eachEmoji.id}>
                  <img
                    className="emoji"
                    alt={eachEmoji.name}
                    src={eachEmoji.imageUrl}
                    onClick={this.onGivingFeedback}
                  />
                  <p className="name">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isClicked && (
          <div className="card-container">
            <img className="emoji" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="heading">Thank You!</h1>
            <p className="name">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
