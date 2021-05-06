import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const Tracker = ({ now }) => {
  return (
    <>
      <Card>
        <Card.Title className='mb-2'>Your Pizza is on it's Way!</Card.Title>
        <ProgressBar animated now={50} />
      </Card>
    </>
  );
};

export default Tracker;
