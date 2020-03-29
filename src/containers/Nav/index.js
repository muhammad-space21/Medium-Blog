import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';

import { getNav } from '../../redux/modules/navbar/navAction';
import { NavStyled, NavLinkStyled } from './style';


const NavMain = ({
  getNav
}) => {
  useEffect(() => {
    getNav();
  }, []);
  console.log('props');

  return (
    <NavStyled activeKey="/home">
      <Nav.Item>
        <NavLinkStyled href="#">HOME</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">ONE ZERO</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">ELEMENTAL</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">GEN</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">ZORA</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">FORGE</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">HUMAN PARTS</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">MARKER</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">LEVEL</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">HEATED</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">DESIGN</NavLinkStyled>
      </Nav.Item>
      <Nav.Item>
        <NavLinkStyled href="#">MORE</NavLinkStyled>
      </Nav.Item>
    </NavStyled>
  );
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  loading: state.authReducer.loading,
  error: state.authReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  getNav: () => dispatch(getNav())
});


export default connect(null, mapDispatchToProps)(NavMain);
