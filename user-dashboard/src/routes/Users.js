import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users.js';

function Users() {
  return (
    <div className={styles.normal}>
      <UsersComponent></UsersComponent>
    </div>
  );
}

export default connect()(Users);
