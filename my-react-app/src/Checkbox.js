import React from 'react'
import './App.css'

const Demo1 = ({name}) => {
  return (
<>
<div class="form-check">
  <input class="form-check-input" type="radio" name={name} id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Manual
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name={name} id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Auto
  </label>
</div>
</>
  )
}

export default Demo1