import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Register from './Register'

import { useAuth } from '../hooks'

export default function Modale() {
  const { isAuthenticated, setToken } = useAuth();

  const [show, setShow] = useState<boolean>(!isAuthenticated);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(!isAuthenticated)
  }, [isAuthenticated])

  const onSubmit = () => {
    setToken('sjsjs')
    handleClose()
    window.location.reload();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>In order to access our premium content register/signin.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Register onSubmit={onSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => onSubmit()}>
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
}