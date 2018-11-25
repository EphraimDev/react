import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap'; 

const CardThree = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/lhHygao.jpg" alt="Garri Production" />
        </CardBody>
        <CardBody>
          <CardLink href="/garri">Garri Production</CardLink>
          </CardBody>
      </Card>
  );
};

export default CardThree;