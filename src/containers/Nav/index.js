import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, useParams } from 'react-router-dom';

import { getNav } from '../../redux/modules/navbar/navAction';
import { navbarSelector } from '../../redux/selectors/navbarSelector';


import { StyledNav, LinkContainer, LinkStyled } from './style';

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
    <StyledNav>
      <LinkContainer>
        {list.map((link) => (

          <LinkStyled
            key={link.id}
            to={link.route}
          >
            {link.label}
          </LinkStyled>

        ))}
      </LinkContainer>
    </StyledNav>
  );
};

const mapStateToProps = (state) => ({
  list: navbarSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getNav: () => dispatch(getNav())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMain));
