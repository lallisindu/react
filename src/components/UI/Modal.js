import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.overlay} onClick={props.onClose}></div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Modal;