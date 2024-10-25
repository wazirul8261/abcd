import React, { Component, Fragment } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topfixedBanner p-0" >
                <div className="topBannerOverlay">
                    <Container className="topContent">
                    <Row>
                       <Col className="text-center">
                      <h1 className="topTitle">  WEB DEVELOPMENT MANAGER </h1>
                      <h3 className="topSubTitle">Md Wazirul Islam</h3>
                      <Button variant="primary">More Info</Button>
                       </Col> 
                    </Row>
                    </Container>

                </div>
                </Container>
                
            </Fragment>
        );
    }
}

export default TopBanner;