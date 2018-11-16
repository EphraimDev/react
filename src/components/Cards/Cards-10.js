import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/1ftRMNA.jpg" alt="Training" />
        </CardBody>
        <CardBody>
        <CardLink href="/training-and-consultancy">Training and Consultancy</CardLink>
        </CardBody>
      </Card>
  );
};

export default Cards;