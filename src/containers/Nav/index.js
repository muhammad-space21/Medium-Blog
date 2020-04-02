import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Route, useParams } from "react-router-dom";

import { getNav } from "../../redux/modules/navbar/navAction";
import { NavStyled, NavLinkStyled, NavItem } from "./style";
import links from "../../mock-data/categories";

const NavMain = (props) => {
  useEffect(() => {
    console.log(props);
  }, [getNav]);

  return (
    <NavStyled activeKey="/home">
      {links.map(link => (
        <NavItem key={link.id} link={link}>
          <NavLinkStyled
            key={link.id}
            link={link}
            to={`/categories/${link.name}`}
          >
            {link.name}
          </NavLinkStyled>
        </NavItem>
      ))}
    </NavStyled>
  );
};

const mapStateToProps = state => ({
  token: state.authReducer.token,
  loading: state.authReducer.loading,
  error: state.authReducer.error
});

const mapDispatchToProps = dispatch => ({
  getNav: () => dispatch(getNav())
});

export default connect(null, mapDispatchToProps)(withRouter(NavMain));
