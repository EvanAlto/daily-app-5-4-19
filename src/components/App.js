import React, { Component } from 'react'
import './App.scss'
import { TiChevronRightOutline } from 'react-icons/ti'
import { IoIosRefresh } from 'react-icons/io'

export default class App extends Component {

  state = {
    inputValue: 'Enter Your Email',
    displaySend: false,
    sent: false
  }

  handleClick = () => {
    if (!this.state.displaySend) {
      this.setState({
        inputValue: 'person@email.com',
        displaySend: true
      })
    }
  }

  handleSend = () => {
    if (!this.state.sent) {
      this.setState({
        sent: true
      })
    }
  }

  handleReset = () => {
    this.setState({
      sent: false,
      displaySend: false
    })
  }

  render() {
    const { sent, inputValue, displaySend } = this.state
    return (
      <div className="app">
        <div className="header">
          <span>Sign Up For</span>
          <span>Our Newsletter</span>
        </div>
        <div className="subtext">
          <span>And recieve lastest news about our blog posts, podcasts, and job opportunities. We send emails twice a week. No spam, we promise!</span>
        </div>
        <div className={`input-container ${sent ? 'sent' : 'exit'}`}>
          <input onChange={() => {}}onClick={this.handleClick} value={inputValue} />
          <TiChevronRightOutline onClick={this.handleSend} className={`icon ${displaySend ? sent ? 'sent' : 'show' : 'exit'}`} >{sent ? 'Your Email Was Received' : ''}</TiChevronRightOutline>
        </div>
        <IoIosRefresh onClick={this.handleReset}className={`repeat ${sent ? 'sent' : ''}`}/>
      </div>
    )
  }
}