import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames/bind';
import styled, { ThemeProvider } from 'styled-components';

// Import Style
import styles from './Header.css';

let cx = classNames.bind(styles);

let headerClass = cx("page-header", "navbar", "navbar-fixed-top");

// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
// 	font-size: 1.5em;
// 	text-align: center;
// 	color: palevioletred;
// `;

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
Button.defaultProps = {
	theme: {
		page_header_bg: '#2b3643'
	}
}

export function Header(props, context) {
  return (
    <PageHeader>
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
