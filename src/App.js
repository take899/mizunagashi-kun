import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const WriteMenu = ({writeMode, setWriteMode}) => (
  <CSSTransition
    in={writeMode}
    timeout={300}
    // unmountOnExit
    classNames={{
      enter: '__whrite-menu',
      enterActive: '__whrite-menu __is-active',
      enterDone: '__whrite-menu __is-active',
      exit: '__whrite-menu',
      exitActive: '__whrite-menu',
      exitDone: '__whrite-menu',
    }}
  >
    <div className="__paper-draw">
      {writeMode && <button onClick={()=> setWriteMode(false)} className="absolute right-1">閉じる</button>}
    </div>
  </CSSTransition>
);

function App() {
  const [ writeMode, setWriteMode ] = useState(false); 
  return (
    <React.Fragment>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-blue-50"></div>
      <div className="relative h-screen max-w-md mx-auto">
        <div className="relative h-2/5">
          <div className="__benza-bottom"></div>
          <div className="__benza"></div>
          <div className="__benza-inside"></div>
          <div className="__benza-inside-water"></div>
          {/* <div className="bg-white __benza"></div> */}
        </div>
        <div className="relative h-3/5">
          <div className="__dai"></div>
          <WriteMenu
            writeMode={writeMode}
            setWriteMode={setWriteMode}
          />
          <div className="__paper" onClick={()=>{setWriteMode(true)}}></div>
          <div className="__paper-top"></div>
          <div className="__paper-bottom"></div>
          <div className="__paper-roll"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
