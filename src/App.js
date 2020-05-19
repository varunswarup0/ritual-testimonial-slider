import React from 'react';
import {
  PlayCircleOutlined,
  // ArrowLeftOutlined,
  // ArrowRightOutlined,
} from '@ant-design/icons';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImages: [
        './images/person (1).jpg',
        './images/person (2).jpg',
        './images/person (3).jpg',
        './images/person (4).jpg',
        './images/person (5).webp',
        './images/person (6).webp',
      ],
    };
  }
  render() {
    return (
      <>
        <div className='Testimonials__TestimonialsWrapper'>
          <div className='title' style={{ fontWeight: '600' }}>
            Skeptics Speak
          </div>
          <div className='sub-title'>
            With millions of bottles delivered, discover what Ritual users have
            to say.
          </div>
          <div className='TestimonialsCarousel__CarouselContainer'>
            <div className='TestimonialsCarousel__Spacer col-3 col-md-3'>
              <div className='TestimonialsCarousel-PullQuote'>
                “Everything is sourced with such{' '}
                <span className='pullQuoteEmphasis'> integrity</span> and{' '}
                <span className='pullQuoteEmphasis'> responsibility.</span>”
              </div>

              <div className='TestimonialsCarousel__Name'>Megan Monahan</div>
              <div className='TestimonialsCarousel__Title'>
                Meditation Teacher
              </div>
              <img
                className='slide-1'
                src={require(`./images/person (${1}).jpg`)}
                alt='slide-1'
              />
              <img
                className='slide-2'
                src={require('./images/person (2).jpg')}
                alt='slide-2'
              />
              <img
                class='slide-3'
                src={require('./images/person (3).jpg')}
                alt='slide-3'
              />
              <PlayCircleOutlined className='play' />
              {/*  <ArrowLeftOutlined className='left' />
            <ArrowRightOutlined className='right' /> */}
            </div>
          </div>
          <div
            id='testimonials-new-carousel_slides_controls'
            class='TestimonialsCarousel__Controls-sc-1fg86gc-7 eijoTf'
          >
            <button
              // id='testimonials-new-carousel_slides_controls_control-button-0'
              class='TestimonialsCarousel__ControlButton-left'
            >
              <svg width='18' height='12' version='1.1' viewBox='0 0 18 12'>
                {/* <title></title> */}
                {/* <desc></desc> */}
                <g
                  fill='none'
                  fill-rule='evenodd'
                  stroke='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1'
                >
                  <g stroke='#142B6F' strokeWidth='2.25'>
                    {/* <g>
                    <g>
                      <g> */}
                    <path
                      d='M-2.1938007e-13,4.0010929 L14.8845268,4.0010929 L-2.1938007e-13,4.0010929 Z M14.8845268,4 L10.862069,0.0655737705 L14.8845268,4 Z M14.8845268,4 L10.862069,7.93442623 L14.8845268,4 Z'
                      transform='translate(-776.000000, -654.000000) translate(135.000000, 530.000000) translate(0.000000, 118.000000) translate(649.500000, 12.000000) scale(-1, 1) translate(-649.500000, -12.000000) translate(642.000000, 8.000000)'
                    ></path>
                    {/* </g>
                    </g>
                  </g> */}
                  </g>
                </g>
              </svg>
            </button>
            <button
              // id='testimonials-new-carousel_slides_controls_control-button-1'
              className='TestimonialsCarousel__ControlButton-right'
            >
              <svg width='18' height='12' version='1.1' viewBox='0 0 18 12'>
                <title></title>
                <desc></desc>
                <g
                  fill='none'
                  fill-rule='evenodd'
                  stroke='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1'
                >
                  <g stroke='#142B6F' stroke-width='2.25'>
                    <g>
                      <g>
                        <g>
                          <path
                            d='M-2.1938007e-13,4.0010929 L14.8845268,4.0010929 L-2.1938007e-13,4.0010929 Z M14.8845268,4 L10.862069,0.0655737705 L14.8845268,4 Z M14.8845268,4 L10.862069,7.93442623 L14.8845268,4 Z'
                            transform='translate(-820.000000, -654.000000) translate(135.000000, 530.000000) translate(0.000000, 118.000000) translate(687.000000, 8.000000)'
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          {/* <button
          // id='testimonials-new-carousel_slides_play-button'
          className='TestimonialsCarousel__PlayButton'
        >
          <svg
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            // style={{ backgroundColor: 'none' }}
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M30 57.5C45.1878 57.5 57.5 45.1878 57.5 30C57.5 14.8122 45.1878 2.5 30 2.5C14.8122 2.5 2.5 14.8122 2.5 30C2.5 45.1878 14.8122 57.5 30 57.5ZM60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z'
              fill='white'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M27.0976 22.1153C26.8802 21.9748 26.6021 21.9619 26.3734 22.0812C26.1433 22.1998 26 22.4309 26 22.6825V36.3182C26 36.5698 26.1433 36.8009 26.3727 36.9195C26.4772 36.9734 26.5915 37 26.7059 37C26.8428 37 26.9791 36.9611 27.0976 36.8855L37.6859 30.0676C37.8821 29.9408 38 29.7281 38 29.5004C38 29.2726 37.8821 29.0599 37.6859 28.9331L27.0976 22.1153Z'
              fill='white'
            ></path>
          </svg>
          <div
            direction='forwards'
            className='TestimonialsCarousel__AnimateOnChange-sc-1fg86gc-5 ghkjOK'
          ></div>
        </button> */}
        </div>
      </>
    );
  }
}
