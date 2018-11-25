import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';

const Cards = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/0vzGqh8.jpg" alt="Snail" />
        </CardBody>
        <CardBody>
          <CardLink href="/goat rearing">Rearing of goats</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;