import React from 'react';
import { connect } from 'react-redux';
import { Nav } from 'react-bootstrap';

import { getNav } from '../../redux/modules/navbar/navAction';
import { NavStyled, NavLinkStyled } from './style';
import categories from '../../mock-data/categories';

class NavMain extends React.Component {
  constructor() {
    super();

    this.state = {
      data: categories
    };
  }

  componentDidMount() {
    this.props = getNav();
  }

  render() {
    return (
      <NavStyled activeKey="/home">
        {
          this.state.data
            .map((link) => (
              <Nav.Item key={link.id} link={link}>
                <NavLinkStyled
                  key={link.id}
                  onClick={this.handleClick}
                  link={link}
                >
                  {link.name}
                </NavLinkStyled>
              </Nav.Item>
            ))
        }
      </NavStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  loading: state.authReducer.loading,
  error: state.authReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  getNav: () => dispatch(getNav())
});


export default connect(null, mapDispatchToProps)(NavMain);
