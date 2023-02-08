import React, {useState} from "react";
import Switch from "react-switch";
function SwitchExample(props) {
    const {onClickSwitch} = props;  
    const [check, setCheck] = useState(1);
    const handleChange = () => {
        setCheck(!check);
    }

    return (
        <>
        <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={check? 'checked':''} 
  onClick={() => {handleChange();
    onClickSwitch();}}/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
        {/* {1? (<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={check? 'checked':''} 
  onClick={() => {handleChange()
    onClickSwitch()}}/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>):(<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>)} */}

        </>
    )
}

export default SwitchExample;