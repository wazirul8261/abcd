import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import mLogo from '../../asset/image/qq.jpg'
class ClintReview extends Component {
    render() {

        var settings = {
           autoplaySpeed:3000,
           autoplay:true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container className="text-center justify-content-center">
                 <h1 className="serviceMainTitle">Clints Review</h1>
               <Slider {...settings}>
                <div>
                    <Row className="text-center justily-content-center">
                    <Col lg={12} md={12} sm={12}>
                    <img className="circleImg" src={mLogo}/>
                   <h1>Web Development</h1>
                        <p>My goal is to create a professional design that will beat your competitor site.</p>
                    </Col>
                    </Row>
                </div>
                <div>
                    <Row className=" text-center justily-content-center">
                    <Col lg={12} md={12} sm={12}>
                    <img className="circleImg" src={mLogo}/>
                   <h1>Web Development</h1>
                   <p>My goal is to create a professional design that will beat your competitor site.</p>
                    </Col>
                    </Row>
                </div>
                <div>
                    <Row className=" text-center justily-content-center">
                    <Col lg={12} md={12} sm={12}>
                    <img className="circleImg" src={mLogo}/>
                   <h1>Web Development</h1>
                   <p>My goal is to create a professional design that will beat your competitor site.</p>
                    </Col>
                    </Row>
                </div>
               </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClintReview;
