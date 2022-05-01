import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingScreen() {
  return (
    <div className="loading">
      <Spinner animation="border" variant="info" />
    </div>
  );
}
