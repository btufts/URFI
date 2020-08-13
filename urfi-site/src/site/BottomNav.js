import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { AccountBalance, Home, CreditCard, Settings } from '@material-ui/icons'

class BottomNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  // componentWillReceiveProps (newProps) {
  //   const { pathname } = newProps.location
  //   const { pathMap } = this.state
  // }

  handleChange (event, value) {
    this.setState({ value })
  };

  render () {
    const { value } = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange.bind(this)}
        showLabels
        className='bottom-nav'
      >
        <BottomNavigationAction label='Home' icon={<Home />} component={Link} to='/' />
        <BottomNavigationAction label='Bank' icon={<AccountBalance />} component={Link} to='/bank' />
        <BottomNavigationAction label='Credit/Debit' icon={<CreditCard />} component={Link} to='/creditdebt' />
        <BottomNavigationAction label='Debug Button' icon={<Settings />} component={Link} to='/freeroute' />
      </BottomNavigation>
    )
  }
}

export default withRouter(BottomNav)
