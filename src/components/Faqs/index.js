// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="app-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-container">
          {faqsList.map(each => (
            <FaqItem faqsList={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
