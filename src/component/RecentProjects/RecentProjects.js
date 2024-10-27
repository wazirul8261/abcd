import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import mLogo from '../../asset/image/qq.jpg'
import sLogo from '../../asset/image/ee.jpg'
import nLogo from '../../asset/image/ww.jpg'

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                        <Card className="projectCard">
      <Card.Img variant="top" src={mLogo} />
      <Card.Body>
        <Card.Title>Graphic Design</Card.Title>
        <Card.Text className="projectCardDescription">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                        <Card className="projectCard" >
      <Card.Img variant="top" src={sLogo} />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Card.Text className="projectCardDescription">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                        <Card className="projectCard" >
      <Card.Img variant="top" src={nLogo}/>
      <Card.Body>
        <Card.Title>Degital Marketing</Card.Title>
        <Card.Text className="projectCardDescription">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Detais</Button>
      </Card.Body>
    </Card>
                        </Col>
                    </Row>

                </Container>

            </Fragment>
                
         
        );
    }
}

export default RecentProjects;
