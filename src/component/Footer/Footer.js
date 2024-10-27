import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
class Footer extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid={true} className="text-center footerSection">
                <Row>
                    <Col lg={3} md={6} sm={12} className="p-5">
                    <h2>Follow Me</h2>
                    <a href="#"><FontAwesomeIcon icon={faFacebook}/>Facebook</a><br/>
                    <a href="#"><FontAwesomeIcon icon={faYoutube}/>Youtube</a>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                    <h2>Address</h2>
                    <p>House No 66/1, Balurmath, Dhaka Cantt</p>
                    <p> <FontAwesomeIcon icon={faEnvelope}/>wazir.ns79@gmail.com</p>
                    <p> <FontAwesomeIcon icon={faPhone}/>+8801708378261</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                    <h2>Information</h2>
                    <a href="#">About Me</a><br/>
                    <a href="#">Contact Me</a>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-5">
                    <h2>Legal</h2>
                    <a href="#">Term and Policy</a>
                    </Col>
                     </Row>
                </Container>
                <Container fluid={true} className="text-center copyrightSection"> 
                <a className="copyrightLink" herf="#"> Wazir.com & copy right: 2024-2025 </a>
                </Container>
            </Fragment>
                
        
        );
    }
}

export default Footer;
