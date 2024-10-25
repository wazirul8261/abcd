import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import wLogo from '../../asset/image/3.jpg'
import gLogo from '../../asset/image/tt.jpg'
import dLogo from '../../asset/image/1.jpg'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">My Services</h1>
                    <Row>
                       <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={wLogo}/>
                            <h3 className="serviceName"> Web Development </h3>
                            <p>Are you looking for an amazing, unique, highly SEO optimized, and responsive website design for your business?

If yes, then you are in the right place. I am here to provide you high-quality responsive website design & development service.</p>
                        </div >
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img src={gLogo}/>
                            <h3 className="serviceName"> Graphic Design </h3>
                            <p>I am a Certified graphic designer with extensive experience in Graphic Design and other administrative support services. </p>
                        </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img size="10px"src={dLogo}/>
                            <h3 className="serviceName"> Digital Marketing </h3>
                            <p>I am a Digital Marketer and SEO professional. I am expert in youtube promotion, article writing, web research, data collection, video editing, graphic designing and link binding.</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;