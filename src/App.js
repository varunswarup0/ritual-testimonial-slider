import React from 'react';
// import images from './images';
// import Slider from './components/slider';
import { PlayCircleOutlined } from '@ant-design/icons';
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
      indexValue: 0,
    };
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
  }

  handleClickRight() {
    if (this.state.slideImages.length < this.state.indexValue + 4) return;
    const newIndex = this.state.indexValue + 1;
    this.setState({ indexValue: newIndex });
  }
  handleClickLeft() {
    if (this.state.indexValue < 1) return;
    const newIndex = this.state.indexValue - 1;
    this.setState({ indexValue: newIndex });
  }
  render() {
    return (
      <>
        {/* <Slider slides={images} /> */}
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
                src={require(`${
                  this.state.slideImages[this.state.indexValue]
                }`)}
                alt='slide-1'
              />

              <img
                className='slide-2'
                src={require(`${
                  this.state.slideImages[this.state.indexValue + 1]
                }`)}
                alt='slide-2'
              />
              <img
                class='slide-3'
                src={require(`${
                  this.state.slideImages[this.state.indexValue + 2]
                }`)}
                alt='slide-3'
              />

              <PlayCircleOutlined className='play' />
              {/* </TransitionGroup> */}
            </div>
          </div>
          <div
            id='testimonials-new-carousel_slides_controls'
            class='TestimonialsCarousel__Controls-sc-1fg86gc-7 eijoTf'
          >
            <button
              class='TestimonialsCarousel__ControlButton-left'
              onClick={this.handleClickLeft}
            >
              <svg width='18' height='12' version='1.1' viewBox='0 0 18 12'>
                <g
                  fill='none'
                  fill-rule='evenodd'
                  stroke='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1'
                >
                  <g stroke='#142B6F' strokeWidth='2.25'>
                    <path
                      d='M-2.1938007e-13,4.0010929 L14.8845268,4.0010929 L-2.1938007e-13,4.0010929 Z M14.8845268,4 L10.862069,0.0655737705 L14.8845268,4 Z M14.8845268,4 L10.862069,7.93442623 L14.8845268,4 Z'
                      transform='translate(-776.000000, -654.000000) translate(135.000000, 530.000000) translate(0.000000, 118.000000) translate(649.500000, 12.000000) scale(-1, 1) translate(-649.500000, -12.000000) translate(642.000000, 8.000000)'
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
            <button
              className='TestimonialsCarousel__ControlButton-right'
              onClick={this.handleClickRight}
            >
              <svg width='18' height='12' version='1.1' viewBox='0 0 18 12'>
                <g
                  fill='none'
                  fill-rule='evenodd'
                  stroke='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1'
                >
                  <g stroke='#142B6F' stroke-width='2.25'>
                    <path
                      d='M-2.1938007e-13,4.0010929 L14.8845268,4.0010929 L-2.1938007e-13,4.0010929 Z M14.8845268,4 L10.862069,0.0655737705 L14.8845268,4 Z M14.8845268,4 L10.862069,7.93442623 L14.8845268,4 Z'
                      transform='translate(-820.000000, -654.000000) translate(135.000000, 530.000000) translate(0.000000, 118.000000) translate(687.000000, 8.000000)'
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }
}
