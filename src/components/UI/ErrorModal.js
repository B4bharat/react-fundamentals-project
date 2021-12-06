import React from 'react';
import ReactDOM from 'react-dom';

// ----------- Components -----------
import Card from './Card';
import Button from './Button';

// ----------- Styles -----------
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  const { title, message, onClose } = props;

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
