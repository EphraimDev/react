import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle } from 'reactstrap';

const Service = (props) => {
  let login = '/login';
  if(localStorage.getItem('x-access-token') !== null) {
    login = `/${localStorage.getItem('current-user-id')}/order-a-product`
  }
  return (
    <div>
      <Card className="card-services">
        <CardBody className="card-body-services">
          <CardTitle>Pepper Farming</CardTitle>
        </CardBody>
        <CardBody >
          <CardImg className="col-lg-6" width="100%" src="https://i.imgur.com/V3XW5o4.jpg" alt="Pepper Farming" />
          <CardText className="col-lg-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</CardText>
          <CardLink href={login} className="col-md-12 service-link">Subscribe to this service</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Service;