import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const Draw = ({ show, children, ...callBack }) => (
  <CSSTransition
    in={show}
    timeout={300}
    classNames={{
      enter: '',
      enterActive: '__active',
      enterDone: '__active',
      exit: '',
      exitActive: '',
      exitDone: '',
    }}
    {...callBack}
  >
    <div className="__paper-draw">
      {children}
    </div>
  </CSSTransition>
);
const Editor = ({ show, children, ...callBack }) => (
  <CSSTransition
    in={show}
    timeout={0}
    unmountOnExit
    classNames={''}
    {...callBack}
  >
    <div className="editor">
      {children}
    </div>
  </CSSTransition>
);

const Stretch = ({ show, children, ...callBack }) => (
  <CSSTransition
    in={show}
    timeout={200}
    unmountOnExit
    classNames={{
      enterActive: '__strech',
      enterDone: '__strech',
    }}
    {...callBack}
  >
    <div>
      {children}
    </div>
  </CSSTransition>
)

const WriteMenu = ({ writeMode, setWriteMode }) => {
  const [textContent, setTextContent] = useState('');
  const [stretch, setStrech] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let content = e.target.content.value;
    setTextContent(content);
    setStrech(true);
    console.log(content);
  };

  return (
    <Draw show={writeMode}>
      <Editor show={writeMode}>
        <React.Fragment>
          <button onClick={() => setWriteMode(false)} className="absolute text-3xl right-1 -top-2">×</button>
          <form onSubmit={handleSubmit}>
            <div className="p-2.5">
              <textarea type="text" name="content" placeholder="嫌な事は流しましょう" rows="5" className="w-full px-4 py-2 ml-2 bg-white" />
            </div>
            <div className="text-center mt-14">
              <input type="submit" value="水に流す" className="px-6 py-1 font-bold bg-green-100 rounded-full" />
            </div>
          </form>
        </React.Fragment>
      </Editor>
    </Draw>
  )
};

function App() {
  const [writeMode, setWriteMode] = useState(false);

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
          <button
            className="__paper"
            onClick={() => writeMode ? setWriteMode(false) : setWriteMode(true)}
          ></button>
          <div className="__paper-top"></div>
          <div className="__paper-bottom"></div>
          <div className="__paper-roll"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
