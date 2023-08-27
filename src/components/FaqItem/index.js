// Write your code here.
import {Component} from 'react'

import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onClickBtn = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {faqsList} = this.props
    const {questionText, answerText} = faqsList
    return (
      <li className="faq-item-container">
        <div className="question-and-button-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickBtn}>
            <img
              src={isActive ? minusIcon : plusIcon}
              alt={isActive ? 'minus' : 'plus'}
              className="icon"
            />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
