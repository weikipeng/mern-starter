import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames/bind';
import styled, { ThemeProvider } from 'styled-components';

// Import Style
import styles from './Header.css';

let cx = classNames.bind(styles);

let headerClass = cx("page-header", "navbar", "navbar-fixed-top");

const PageHeader = styled.div`
    z-index:9995;
    background-color:  ${props => props.theme.page_header_bg};
    width: 100%;
    margin: 0;
    border: 0;
    padding: 0;
    height: 50px;
    min-height: 50px;
    filter: none;
    background-image: none;
    box-shadow: none;
    border-radius: 0;
    top: 0;
    position: fixed;
    right: 0;
    left: 0;
    box-sizing: border-box;
    display: block;
`;

// We're passing a default theme for Buttons that aren't wrapped in the ThemeProvider
PageHeader.defaultProps = {
	theme: {
		page_header_bg: '#2b3643'
	}
}

export function Header(props, context) {
  return (
    <PageHeader>
      <div className="page-header-inner">
        <div className={styles.pageLogoDiv}>
          <a href="#">
            <img src={require("./logo.png")} alt="logo" className={styles.pageLogo} />
          </a>    
        </div>
      </div>
    </PageHeader>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
