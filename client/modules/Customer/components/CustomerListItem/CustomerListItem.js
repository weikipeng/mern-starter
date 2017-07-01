import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './CustomerListItem.css';

function CustomerListItem(props) {
  return (
    <tr role="row">
      <td className="sort_1">客户名称</td>
      <td >地址</td>
      <td >电话</td>
      <td >装机容量</td>
      <td >工程进度</td>
    </tr>
  );
}


CustomerListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    rongliang: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CustomerListItem;


// <div className={styles['single-post']}>
//   <h3 className={styles['post-title']}>
//     <Link to={`/posts/${props.customer.slug}-${props.customer.cuid}`} >
//       {props.customer.title}
//     </Link>
//   </h3>
//   <p className={styles['author-name']}><FormattedMessage id="by" /> {props.customer.name}</p>
//   <p className={styles['post-desc']}>{props.customer.content}</p>
//   <p className={styles['post-action']}><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>
//   <hr className={styles.divider} />
// </div>
