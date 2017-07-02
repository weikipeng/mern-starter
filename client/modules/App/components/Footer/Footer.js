import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
          <div className={styles["page-footer"]}>
              <div className={styles["page-footer-inner"]}> 2016 © Metronic Theme By
                  <a target="_blank" href="http://keenthemes.com">Keenthemes</a> &nbsp;|&nbsp;
                  <a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" title="Purchase Metronic just for 27$ and get lifetime updates for free" target="_blank">Purchase Metronic!</a>
              </div>
              <div className={styles["scroll-to-top"]}>
                  <i className={styles["icon-arrow-up"]}></i>
              </div>
            </div>
      );
}

export default Footer;



// <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
//   <p>&copy; 2017 &middot; Hashnode &middot; LinearBytes Inc.</p>
//   <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p>
// </div>
