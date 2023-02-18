import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Register from './Register'

import { useAuth } from '../hooks'

export default function Modale() {
  const { isAuthenticated, setToken } = useAuth();

  const [show, setShow] = useState<boolean>(!isAuthenticated);

  console.log({ foo: 'barr', isAuthenticated, show, op: !isAuthenticated });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(!isAuthenticated)
  }, [isAuthenticated])

  const onSubmit = (e: string, p: string) => {
    setToken('sjsjs')
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>In order to access our premium content you must first register/signin.</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Register onSubmit={onSubmit} />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}