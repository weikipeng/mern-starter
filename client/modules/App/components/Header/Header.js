import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames/bind';

// Import Style
import styles from './Header.css';

let cx = classNames.bind(styles);

let headerClass = cx("page-header", "navbar", "navbar-fixed-top");

export function Header(props, context) {
  return (
      <div className = {headerClass}></div>
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

// <div className={styles.header}>
//   <div className={styles.content}>
//     <h1 className={styles['site-title']}>
//       <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
//     </h1>
//     {
//       context.router.isActive('/', true)
//         ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
//         : null
//     }
//   </div>
// </div>
