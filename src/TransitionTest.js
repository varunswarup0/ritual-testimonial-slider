import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import './TransitionTest.css';

export default function TransitionTest() {
  const [items, set] = useState([
    { key: 1, source: './images/person (2).jpg' },
    // { key: 2, source: './images/person (2).jpg' },
    // { key: 3, source: './images/person (3).jpg' },
    // { key: 4, source: './images/person (4).jpg' },
    // { key: 5, source: './images/person (5).webp' },
    // { key: 6, source: './images/person (6).webp' },
  ]);
  const transitions = useTransition(items, (item) => item.key, {
    from: { transform: 'translate3d(160px,80px,20px)' },
    enter: { transform: 'translate3d(0px,80px,0)' },
    leave: { transform: 'translate3d(160px,80px,0)' },
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {/* {item} */}
      <img className='slide-1' src={require(`${item.source}`)} alt='slide-1' />
    </animated.div>
  ));
}
