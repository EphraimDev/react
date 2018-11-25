import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/qIZrt71.png" alt="Investment" />
        </CardBody>
        <CardBody>
          <CardLink href="/investors corner">Secure your future by choosing to invest in the fastest growing economy and watch your money grow</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;