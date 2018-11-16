import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/z4R8rk7.jpg" alt="Snail" />
        </CardBody>
        <CardBody>
          <CardLink href="/animals">Rearing of Animals</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;