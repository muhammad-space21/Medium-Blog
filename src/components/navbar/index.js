import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


import { logout } from '../../redux/modules/logOut/logoutActions';


import {
  StyledNavbar,
  BrandContainer,
  StyledNav,
  StyledLink,
  HR,
  Active
} from './style';

import BrandLogo from '../../assets/images/logo.png';
import IconSearch from '../../assets/icons/search.svg';


const NavbarMain = (loggedin) => (
  <>
    <StyledNavbar>
      <BrandContainer>
        <Link to="/">
          <img src={BrandLogo} alt="icon-brand" />
        </Link>

      </BrandContainer>
      <StyledNav className="mr-auto">
        <StyledLink>
          <Nav.Link href="#"><Active>Subscribe</Active></Nav.Link>
          {' '}
        </StyledLink>
        <StyledLink>
          {
            // eslint-disable-next-line no-nested-ternary
            loggedin
              ? (loggedin
                ? <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                : null)
              : (!loggedin
                ? <Nav.Link href="/sign-up">Sign up</Nav.Link>
                : <Nav.Link href="/login">Login</Nav.Link>)
          }
        </StyledLink>
        <HR />
        <StyledLink>
          <Nav.Link href="#">
            <img src={IconSearch} alt="icon-search" />
          </Nav.Link>
        </StyledLink>
      </StyledNav>
    </StyledNavbar>
  </>
);


NavbarMain.propTypes = {
  loggedin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  loggedin: state.loginReducer.loggedin
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain);
