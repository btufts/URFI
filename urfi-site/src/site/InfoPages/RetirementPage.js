import React, { Component } from 'react'
import '../RetirementPage.css'
import { createChatBotMessage } from 'react-chatbot-kit'

class RetirementPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      question: ''
    }
  }

  handleTextInput (text) {
    this.setState({ curText: text }, () => {
      console.log('handled, is now', this.state)
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    fetch('http://localhost:5000/nlp', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'query': this.state.question
      }),
      method: 'POST'
    })
      .then(r => r.json())
      .then(result => {
        result['NUM'] = result['NUM'].map(v => parseInt(v))
        console.log('Lookin g at this now ', result['NUM'])
        if (result['NUM'].length === 3) {
          const curAge = Math.min(...result['NUM']) // interest
          const earnings = Math.max(...result['NUM'])
          const retAge = result['NUM'].find(v => v !== curAge && v !== earnings)
          this.setState({ resultText: `Earning ${earnings} per year, you ${earnings * (retAge - curAge) > 1500000 ? 'will' : 'will not'} retire on time (to save 1.5 million)` })
        } else if (result['NUM'].length === 1) {
          const income = result['NUM'][0]
          const estimatedYears = Math.ceil(1500000 / income)
          this.setState({ resultText: `It would take you ${estimatedYears} years to retire` })
        }
      })
  }

  handleQuestionUpdate (q) {
    this.setState({ question: q.target.value.replace(',', '') })
  }

  render () {
    return (
      <div className='wrapper-component'>
        <div className='title'>
          <h1>Retirement Questions</h1>
        </div>
        <form onSubmit={c => this.handleSubmit(c)}>
          <p>{this.state.resultText}</p>
          <label>I am Eon, ask me a question about your retirement.</label>
          <input type='text' onChange={c => this.handleQuestionUpdate(c)} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default RetirementPage
