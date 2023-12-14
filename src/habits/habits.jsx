

import React from 'react';

//import {Input } from './input';
import MyComponent from './component'

export function Habits(props) {
  return (
    <main className='bg-secondary'>
      <MyComponent userName={props.userName} />

    </main>
  );
}
