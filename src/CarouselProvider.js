import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import apple from './Components/ImageContainer/assets/apple.jpg'
import bag from './Components/ImageContainer/assets/bag.jpg'
import astro from './Components/ImageContainer/assets/astro.jpg'
import bands from './Components/ImageContainer/assets/bands.jpg'
import beanie from './Components/ImageContainer/assets/beanie.jpg'
import beach from './Components/ImageContainer/assets/beach.jpg'
import beanie2 from './Components/ImageContainer/assets/beanie2.jpg'
import bird from './Components/ImageContainer/assets/bird.jpg'
import boat from './Components/ImageContainer/assets/boat.png'
import bottle from './Components/ImageContainer/assets/bottle.jpg'
import city from './Components/ImageContainer/assets/city.jpg'
import dew from './Components/ImageContainer/assets/dew.png'
import clean from './Components/ImageContainer/assets/clean.png'
import cod from './Components/ImageContainer/assets/cod.jpg'
import cooler from './Components/ImageContainer/assets/cooler.jpg'
import gatoraide from './Components/ImageContainer/assets/gatoraide.png'
import golves from './Components/ImageContainer/assets/golves.jpg' 
import greenbay from './Components/ImageContainer/assets/greenbay.png' 
import flower from './Components/ImageContainer/assets/flower.png'
import fresh from './Components/ImageContainer/assets/fresh.jpg'
import doug from './Components/ImageContainer/assets/doug.jpg'
import fan from './Components/ImageContainer/assets/fan.png'
import fan2 from './Components/ImageContainer/assets/fan2.png'
import flag from './Components/ImageContainer/assets/flag.png'
import gator from './Components/ImageContainer/assets/gator.png'

 

 
export default class extends React.Component {
  render() {
    return (
      <div className="Size">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
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
      </div>
    );
  }
}