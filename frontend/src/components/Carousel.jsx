import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import '../styles/components/Carosel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {
  const { menu } = props;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    pauseOnFocus: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="carousel-section">
      <Slider {...settings}>
        {menu.map(({ name, description, image, price }, index) => (
          <div key={index} className="card">
            <div className="card-top">
              <img src={image} alt="menu-items-img" />
              <h1>{name}</h1>
            </div>
            <div className="card-bottom">
              <p>{description}</p>
              <p className="price">R$ {price.replace('.', ',')}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;

Carousel.propTypes = {
  menu: PropTypes.array
}.isRequired;
