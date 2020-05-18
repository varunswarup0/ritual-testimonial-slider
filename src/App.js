import React from 'react';
// import logo from './logo.svg';
import {
  PlayCircleFilled,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import './App.css';

function App() {
  return (
    <>
      <div class='Testimonials__TestimonialsWrapper'>
        {/* <div class='Testimonials__TestimonialsContainer-ishw8a-1 container'></div> */}
        <div class='title' style={{ fontWeight: '600' }}>
          Skeptics Speak
        </div>
        <div class='sub-title'>
          With millions of bottles delivered, discover what Ritual users have to
          say.
        </div>
        <div class='TestimonialsCarousel__CarouselContainer'>
          <div class='TestimonialsCarousel__Spacer col-3 col-md-3'>
            <div
              // id='testimonials-new-carousel_text-container_quote'
              class='TestimonialsCarousel-PullQuote'
            >
              “Everything is sourced with such{' '}
              <span class='pullQuoteEmphasis'>integrity</span> and{' '}
              <span class='pullQuoteEmphasis'>responsibility.</span>”
            </div>
            <div
              // id='testimonials-new-carousel_text-container_name'
              class='TestimonialsCarousel__Name'
            >
              Megan Monahan
            </div>
            <div
              // id='testimonials-new-carousel_text-container_title'
              class='TestimonialsCarousel__Title'
            >
              Meditation Teacher
            </div>
            <img
              class='slide-1'
              src={require('./images/per-1.webp')}
              alt='GetGeoLocation'
            />
            <img
              class='slide-2'
              src={require('./images/per-2.webp')}
              alt='GetGeoLocation'
            />
            <img
              class='slide-3'
              src={require('./images/per-3.jpg')}
              alt='GetGeoLocation'
            />
            <PlayCircleFilled className='play' />
            <ArrowLeftOutlined className='left' />
            <ArrowRightOutlined className='right' />
          </div>
        </div>
        {/* <div class='TestimonialsCarousel__Slides'>
          <div class='TestimonialsCarousel__Slide'>
            <div
              style={{
                transform: 'translateX(0px)',
                zIndex: '10',
                visibility: 'visible',
              }}
              direction='forwards'
              class='TestimonialsCarousel__Image'
            >
              <div
                class=' gatsby-image-wrapper'
                style={{
                  position: 'absolute',
                  overflow: 'hidden',
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '100%',
                  userSelect: 'none',
                  userDrag: 'none',
                  pointerEvents: 'none',
                  touchCallout: 'none',
                }}
              >
                <div
                  aria-hidden='true'
                  style={{
                    width: '100%',
                    paddingBottom: '121.62162162162163%',
                  }}
                >
                  <picture>
                    <img
                      src={require('./images/img-testimonial.jpg')}
                      alt='img-testimonial'
                    />
                  </picture>
                </div>
              </div>
            </div>
        </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
