import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, useParams } from 'react-router-dom';

import { getNav } from '../../redux/modules/navbar/navAction';
import { navbarSelector } from '../../redux/selectors/navbarSelector';


import { NavStyled, NavLinkStyled, NavItem } from './style';

const NavMain = ({
  list,
  getNav,
  history
}) => {
  useEffect(() => {
    if (!list.length) {
      getNav();
    }
  }, []);

  return (
    <NavStyled activeKey="/home">
      {list.map((link) => (
        <NavItem key={link.id}>
          <NavLinkStyled
            key={link.id}
            to={link.route}
            active={(link.route === history.location.pathname) ? 'true' : 'false'}
          >
            {link.label}
          </NavLinkStyled>
        </NavItem>
      ))}
    </NavStyled>
  );
};

const mapStateToProps = (state) => ({
  list: navbarSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getNav: () => dispatch(getNav())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMain));
