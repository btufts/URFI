import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { AccountBalance, Home, CreditCard, Settings, Receipt, AccountBalanceWallet, EmojiPeople } from '@material-ui/icons'
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';


class BottomNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  // componentWillReceiveProps (newProps) {
  //   const { pathname } = newProps.location
  //   const { pathMap } = this.state
  // }

  handleChange(event, value) {
    this.setState({ value })
  };

  render() {
    const { value } = this.state

    return (
      <div className="backgroundBar">
        <BottomNavigation
          showLabels
          className='bottom-nav'
        >
          <BottomNavigationAction label='Home' style={{ color: blue[50] }} icon={<Home style={{ color: red[700] }} />} component={Link} to='/' />
          <BottomNavigationAction label='Bank' style={{ color: blue[50] }} icon={<AccountBalance style={{ color: red[700] }} />} component={Link} to='/bank' />
          <BottomNavigationAction label='Checks' style={{ color: blue[50] }} icon={<Receipt style={{ color: red[700] }} />} component={Link} to='/checks' />
          <BottomNavigationAction label='Credit/Debit' style={{ color: blue[50] }} icon={<CreditCard style={{ color: red[700] }} />} component={Link} to='/creditdebt' />
          <BottomNavigationAction label='Loans' style={{ color: blue[50] }} icon={<AccountBalanceWallet style={{ color: red[700] }} />} component={Link} to='/loans' />
          <BottomNavigationAction label='Retirement' style={{ color: blue[50] }} icon={<EmojiPeople style={{ color: red[700] }} />} component={Link} to='/retirement' />
        </BottomNavigation>
      </div>
    )
  }
}

export default withRouter(BottomNav)
