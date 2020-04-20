import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios(
        'https://webhook.makhmudjon.me/with-cors'
      );
      return response;
      // ...
    }
    fetchData();
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

NavMain.propTypes = {
  getNav: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any))
};

NavMain.defaultProps = {
  getNav: () => {},
  list: []
};

const mapStateToProps = (state) => ({
  list: navbarSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getNav: () => dispatch(getNav())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMain));
