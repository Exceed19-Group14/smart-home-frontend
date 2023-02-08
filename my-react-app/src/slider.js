import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

const SimpleSlider = () => {

    const [ value, setValue ] = React.useState(50);
  
    return (
        <div className='slider'>
        <RangeSlider
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        </div>
    );
  
  };

export default SimpleSlider;