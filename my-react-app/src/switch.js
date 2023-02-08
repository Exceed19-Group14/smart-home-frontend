import React, {useState} from "react";
import Switch from "react-switch";
function SwitchExample(props) {
    const {l} = props;
    

    return (
        <>
        {l? (<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>):(<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>)}

        </>
    )
}

export default SwitchExample;