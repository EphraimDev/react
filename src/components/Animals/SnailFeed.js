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
          <CardLink href="/snail feed">Production of snail feed</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cards;