import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center mt-3'>Page Not Found</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
