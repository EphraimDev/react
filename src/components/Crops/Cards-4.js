import React from 'react';
import { Card, CardImg, CardLink, CardBody,
  } from 'reactstrap';
 
import './Cards.css';  

const Cardfour = (props) => {
  return (
      <Card>
        <CardBody>
          <CardImg top width="100%" src="https://i.imgur.com/S7IPpnK.jpg" alt="Oil Palm Plantation" />
        </CardBody>
        <CardBody>
          <CardLink href="/oil-palm">Oil Palm Production</CardLink>
          </CardBody>
      </Card>
  );
};

export default Cardfour;