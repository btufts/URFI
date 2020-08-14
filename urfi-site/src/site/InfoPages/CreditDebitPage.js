import React, { Component } from 'react'
import Cards from 'react-credit-cards'
import Quiz from 'react-quiz-component'
import '../CreditDebitPage.css'
import 'react-credit-cards/es/styles-compiled.css'

const quizOptions = {
  'quizTitle': 'Credit & Debit Quiz',
  'quizSynopsis': 'Do you really understand credit & debit?',
  'questions': [
    {
      'question': 'Is credit free money?',
      'questionType': 'text',
      'answerSelectionType': 'single',
      'answers': [
        'Yes',
        'No'
      ],
      'correctAnswer': '2',
      'messageForCorrectAnswer': 'Correct answer. Good job.',
      'messageForIncorrectAnswer': 'Incorrect answer, review credit above!',
      'explanation': 'Credit is an agreement between you and a borrower, not free money.',
      'point': '20'
    },
    {
      'question': 'Is debit free money?',
      'questionType': 'text',
      'answerSelectionType': 'single',
      'answers': [
        'Yes',
        'No'
      ],
      'correctAnswer': '2',
      'messageForCorrectAnswer': 'Correct answer. Good job.',
      'messageForIncorrectAnswer': 'Incorrect answer, review debit above!',
      'explanation': 'A debit card is merely an easy way to access your money in your savings account, not free money.',
      'point': '20'
    },
    {
      'question': 'What happens if I don\'t pay my credit card bill off?',
      'questionType': 'text',
      'answerSelectionType': 'single',
      'answers': [
        'Sprinkles and fairies come and save me!',
        'I keep whatever I bought',
        'I default, and debt collectors go after me',
        'The credit card company takes the brunt of my stealing'
      ],
      'correctAnswer': '3',
      'messageForCorrectAnswer': 'Correct answer. Good job.',
      'messageForIncorrectAnswer': 'Incorrect answer. Please try again.',
      'explanation': 'If you default, debt collectors will pursue you',
      'point': '10'
    },
    {
      'question': 'What happens if I pay the minimum on my credit card?',
      'questionType': 'text',
      'answerSelectionType': 'single',
      'answers': [
        'Nothing',
        'Debt collectors pursue me',
        'I end up paying interest on what I borrowed'
      ],
      'correctAnswer': '3',
      'messageForCorrectAnswer': 'Correct answer. Good job.',
      'messageForIncorrectAnswer': 'Incorrect answer. Please try again.',
      'explanation': 'You pay additional interest on the amount you borrowed if you don\'t pay your bill in full.',
      'point': '30'
    },
    {
      'question': 'What happens if I use my debit card to spend more money than I have in my checking account?',
      'questionType': 'text',
      'answerSelectionType': 'single',
      'answers': [
        'The payment fails',
        'My checking account goes negative and I have to pay an overdraft fee'
      ],
      'correctAnswer': '2',
      'messageForCorrectAnswer': 'Correct answer. Good job.',
      'messageForIncorrectAnswer': 'Incorrect answer. Please try again.',
      'explanation': 'Most debit cards won\'t stop me you from spending more than you have.',
      'point': '20'
    }
  ]
}

class CreditDebitPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='wrapper-component'>
        <center>
          <div className='cd-row'>
            <div className='cd-column'>
              <h2>Credit Card</h2>
              <Cards
                cvc='999'
                expiry='12/99'
                name='John Doe'
                number='5460111111111111'
              />
              <p>Credit is <b>not</b> free money. It's an agreement between you and a borrower.</p>
              <p>You must pay your bank back what you borrow before the monthly payperiod. Make an effort to pay it all off instead of taking a minimum.</p>
              <p>If you only pay your minimum, what you must pay back goes up (the amount depends on your bank).</p>
              <p>If you don't pay at all, you "default" and debt collectors will eventually come to collect your belongings.</p>
              <h3><u>Example</u></h3>
              <p>You're at Target and you see the newest iPhone 9999 selling for $1,999. You don't have this money in any of your bank accounts, but your credit limit is $2,000. Should you buy the phone?</p>
              <b><p style={{ color: 'red', fontSize: '24px' }}>No.</p></b>
              <p>You can borrow this money, but can't pay it back. <b>Avoid</b> this!</p>
              <h3><u>Example</u></h3>
              <p>You're in the checkout line at Walmart with $150 worth of groceries. You have atleast $150 in your savings free to spend. Should you use your credit card here?</p>
              <b><p style={{ color: 'green', fontSize: '24px' }}>Yes.</p></b>
              <p>You have the money to pay your credit card company. Make sure to read the terms of your credit card to see if you get bonus points!</p>
            </div>
            <div className='cd-column'>
              <h2>Debit Card</h2>
              <Cards
                cvc='999'
                expiry='12/99'
                name='John Doe'
                number='5460999999999999'
              />
              <p>A debit card is a key to a checking account. Transactions made with it are done with your money instantly.</p>
              <h3><u>Example</u></h3>
              <p>You're at Target and you see the newest iPhone 9999 selling for $1,999. You don't have this money in any of your bank accounts. Should you buy the phone?</p>
              <b><p style={{ color: 'red', fontSize: '24px' }}>No.</p></b>
              <p>There's a good chance you will get a negative balance, which incurs an <b>overdraft</b> fee. <b>Avoid</b> this!</p>
              <h3><u>Example</u></h3>
              <p>You're in the checkout line at Walmart with $150 worth of groceries. You have atleast $150 in your checking account free to spend. Should you use your debit card here?</p>
              <b><p style={{ color: 'green', fontSize: '24px' }}>Yes.</p></b>
              <p>You have the money to pay for these groceries (even though it's not in cash)</p>
            </div>
          </div>
          <hr />
          <Quiz quiz={quizOptions} />
        </center>
      </div>
    )
  }
}

export default CreditDebitPage
