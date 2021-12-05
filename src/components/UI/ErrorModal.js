import React from 'react';

// ----------- Components -----------
import Card from './Card';
import Button from './Button';

// ----------- Styles -----------
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const { title, message, onClose } = props;

  return (
    <div>
      <div className={styles.backdrop} onClick={onClose} />
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
    </div>
  );
};

export default ErrorModal;
