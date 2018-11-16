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
          <CardLink href="/investment-opportunity">Investors Corner</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;