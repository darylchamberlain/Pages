import React from 'react';
import '../Carousel/Carousel.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import apple from '../ImageContainer/assets/apple.jpg'
import bag from '../ImageContainer/assets/bag.jpg'
import astro from '../ImageContainer/assets/astro.jpg'
import bands from '../ImageContainer/assets/bands.jpg'
import beanie from '../ImageContainer/assets/beanie.jpg'
import beach from '../ImageContainer/assets/beach.jpg'
import beanie2 from '../ImageContainer/assets/beanie2.jpg'
import bird from '../ImageContainer/assets/bird.jpg'
import boat from '../ImageContainer/assets/boat.png'
import bottle from '../ImageContainer/assets/bottle.jpg'
import city from '../ImageContainer/assets/city.jpg'
import dew from '../ImageContainer/assets/dew.png'
import clean from '../ImageContainer/assets/clean.png'
import cod from '../ImageContainer/assets/cod.jpg'
import cooler from '../ImageContainer/assets/cooler.jpg'
import gatoraide from '../ImageContainer/assets/gatoraide.png'
import golves from '../ImageContainer/assets/golves.jpg' 
import greenbay from '../ImageContainer/assets/greenbay.png' 
import flower from '../ImageContainer/assets/flower.png'
import fresh from '../ImageContainer/assets/fresh.jpg'
import doug from '../ImageContainer/assets/doug.jpg'
import fan from '../ImageContainer/assets/fan.png'
import fan2 from '../ImageContainer/assets/fan2.png'
import flag from '../ImageContainer/assets/flag.png'
import gator from '../ImageContainer/assets/gator.png'

 
export default class extends React.Component {
  render() {
    return (
      <CarouselProvider 
        className="Carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={25}
        >
        <Slider className="Slider">
          <Slide index={0}><img src={apple} alt="apple" /></Slide>
          <Slide index={1}><img src={bag} alt="bag" /></Slide>
          <Slide index={2}><img src={astro} alt="astro"/></Slide>
          <Slide index={3}><img src={bands} alt="bands"/></Slide>
          <Slide index={4}><img src={beach} alt="beach" /></Slide>
          <Slide index={5}><img src={beanie} alt="bag" /></Slide>
          <Slide index={6}><img src={bird} alt="bird"/></Slide>
          <Slide index={7}><img src={beanie2} alt="beanie2"/></Slide>
          <Slide index={8}><img src={boat} alt="boat"/></Slide>
          <Slide index={9}><img src={bottle} alt="bottle"/></Slide>
          <Slide index={10}><img src={city} alt="city"/></Slide>
          <Slide index={11}><img src={dew} alt="dew"/></Slide>
          <Slide index={12}><img src={clean} alt="clean"/></Slide>
          <Slide index={13}><img src={cod} alt="cod"/></Slide>
          <Slide index={14}><img src={cooler} alt="cooler"/></Slide>
          <Slide index={15}><img src={gatoraide} alt="gatoraide"/></Slide>
          <Slide index={16}><img src={golves} alt="golves"/></Slide>
          <Slide index={17}><img src={greenbay} alt="greenbay"/></Slide>
          <Slide index={18}><img src={flower} alt="flower"/></Slide>
          <Slide index={19}><img src={fresh} alt="fresh"/></Slide>
          <Slide index={20}><img src={doug} alt="doug"/></Slide>
          <Slide index={21}><img src={fan} alt="fan"/></Slide>
          <Slide index={22}><img src={fan2} alt="fan2"/></Slide>
          <Slide index={23}><img src={flag} alt="flag"/></Slide>
          <Slide index={24}><img src={gator} alt="gator"/></Slide>
        </Slider>

        <div className="CarouselButtons">
          <ButtonBack className="ButtonBack"></ButtonBack>
          <ButtonNext className="ButtonNext"></ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}