import { useState } from "react";
import '../src/App.css';

const App = () => {
  const [value, Setvalue] = useState('');

  const Addition1 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition2 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition3 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition4 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition5 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition6 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition7 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition8 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition9 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition10 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition11 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition12 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition13 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition14 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition15 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Addition16 = (event) => {
    Setvalue(value + event.target.value);
  };

  const Clear = () => {
    Setvalue('');
  };

  const Delete = () => {
    Setvalue(value.slice(0, -1));
  };

  const Equal = () => {
    Setvalue(eval(value));
  };

  return(
    <div className="container">
      <div className="calculator">
        <form>
          <div className="display">
            <input type="text" value={value} placeholder="0"/>
          </div>
          <div>
            <input type="button" value='AC' onClick={Clear}/>
            <input type="button" value='DE' onClick={Delete}/>
            <input type="button" value='.' onClick={Addition1}/>
            <input type="button" value='/' onClick={Addition2}/>
          </div>
          <div>
            <input type="button" value='7' onClick={Addition3}/>
            <input type="button" value='8' onClick={Addition4}/>
            <input type="button" value='9' onClick={Addition5}/>
            <input type="button" value='*' onClick={Addition6}/>
          </div>
          <div>
            <input type="button" value='6' onClick={Addition7}/>
            <input type="button" value='5' onClick={Addition8}/>
            <input type="button" value='4' onClick={Addition9}/>
            <input type="button" value='+' onClick={Addition10}/>
          </div>
          <div>
            <input type="button" value='3' onClick={Addition11}/>
            <input type="button" value='2' onClick={Addition12}/>
            <input type="button" value='1' onClick={Addition13}/>
            <input type="button" value='-' onClick={Addition14}/>
          </div>
          <div>
            <input type="button" value='00' onClick={Addition15}/>
            <input type="button" value='0' onClick={Addition16}/>
            <input type="button" value='=' onClick={Equal} className="Equal"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;