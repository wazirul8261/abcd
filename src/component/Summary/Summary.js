import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Summary extends Component {
    render() {
        return (
            <Fragment>
             <Container fluid={true} className="summaryBanner mt-5 p-0" >
                <div className="summaryBannerOverlay">
                    <Container className="text-center">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                            <Row className="countSection mt-5">
                                <Col> 
                                <h1 className="countNumber">
                                <CountUp start={0} end={100}>
                                {({   countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                             <span ref={countUpRef} />
                            </VisibilitySensor>
                                                       
                                         )}
                                </CountUp> 
                                    
                                </h1> 
                                <h4 className="countTitle">Total Projects</h4> 
                                <hr className="bg-white w-25"/>
                                </Col>
                                <Col>
                                <h1 className="countNumber">
                                <CountUp start={0} end={100}>
                                {({   countUpRef, start }) => (
                            <VisibilitySensor onChange={start}>
                             <span ref={countUpRef} />
                            </VisibilitySensor>
                                                       
                                         )}
                                </CountUp>
                                </h1> 
                                <h4 className="countTitle">Total Clint</h4> 
                                <hr className="bg-white w-25"/>
                                </Col>
                            </Row>
                            </Col>
                           
                            
                            
                            
                        </Row>
                    </Container>

                </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;
