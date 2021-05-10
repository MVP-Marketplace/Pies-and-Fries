import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Tracker = ({ now,percentage}) => {
  return (
    <>
      <Card>
        {percentage &&  <Card.Title className='mb-2'>{percentage < 100 ? "Your Pizza is on it's Way!": "Your Pizza has been delivered!"}</Card.Title>}
        {!percentage &&  <Card.Title className='mb-2'>Your Pizza is on it's Way!</Card.Title>}
       
        <ProgressBar animated now={percentage? percentage: 30} />
      </Card>
    </>
  );
};

export default Tracker;
