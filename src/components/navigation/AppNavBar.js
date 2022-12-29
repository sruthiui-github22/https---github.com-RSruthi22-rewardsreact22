import React from 'react';

import {
  AppNav,
  AppNavLink,
  AppBars,
  AppNavMenu
} from './AppNavItems';
  
const AppNavbar = () => {
  return (
    <>
      <AppNav>
        <AppBars />
  
        <AppNavMenu>
          <AppNavLink to='/home' activeStyle>
            Home
          </AppNavLink>
          <AppNavLink to='/customer' activeStyle>
            Customers
          </AppNavLink>
          <AppNavLink to='/report' activeStyle>
            Reports
          </AppNavLink>
          <AppNavLink to='/transaction' activeStyle>
            Transactions
          </AppNavLink>
          <AppNavLink to='/reward' activeStyle>
            Rewards
          </AppNavLink>
          <AppNavLink to='/about' activeStyle>
            About
          </AppNavLink>
        </AppNavMenu>
      </AppNav>
    </>
  );
};
  
export default AppNavbar;