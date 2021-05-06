import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

const OpenPaper = ({ show, children, paperRef }) => (
  <CSSTransition
    in={show}
    timeout={300}
    classNames={'__paper'}
  >
    <div className="__paper" ref={paperRef}>
      {children}
    </div>
  </CSSTransition>
);
const Editor = ({ show, children }) => (
  <CSSTransition
    in={show}
    timeout={0}
    unmountOnExit
    classNames={''}
  >
    <div>
      {children}
    </div>
  </CSSTransition>
);
const Flush = ({ show, children }) => (
  <CSSTransition
    in={show}
    timeout={3000}
    unmountOnExit
    classNames={'__flush'}
  >
    <div className="__flush">
      {children}
    </div>
  </CSSTransition>
);

const WriteMenu = ({ isWritable, setIsWritable }) => {
  const [textContent, setTextContent] = useState('');
  const [startFlush, setStartFlush] = useState(false);
  const paperRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let content = e.target.content.value;
    if (content) {
      setTextContent(content);
      window.setTimeout(() => {
        paperRef.current.classList.add('__paper-extend')
      }, 200);
      window.setTimeout(() => {
        setStartFlush(true);
        resetPaper();
      }, 600);
      window.setTimeout(() => {
        setStartFlush(false);
      }, 3000);
    }
  };

  const resetPaper = () => {
    paperRef.current.classList.remove('__paper-extend');
    setIsWritable(false);
  }

  return (
    <React.Fragment>
      <OpenPaper show={isWritable} paperRef={paperRef}>
        <Editor show={isWritable}>
          <React.Fragment>
            <button onClick={() => resetPaper()} className="absolute text-3xl right-1 -top-2">×</button>
            <form onSubmit={handleSubmit}>
              <div className="p-2.5">
                <textarea type="text" name="content" placeholder="嫌な事は流しましょう" rows="6" className="w-full px-4 py-2 ml-2 bg-white" />
              </div>
              <div className="text-center">
                <input type="submit" value="水に流す" className="px-6 py-1 font-bold bg-green-100 rounded-full" />
              </div>
            </form>
          </React.Fragment>
        </Editor>
      </OpenPaper>
      <Flush show={startFlush}>
        <div className="p-4 text-lg font-semibold">
          {textContent}
        </div>
      </Flush>
    </React.Fragment>
  )
};

function App() {
  const [isWritable, setIsWritable] = useState(false);

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
          <div className="__desk"></div>
          <WriteMenu
            isWritable={isWritable}
            setIsWritable={setIsWritable}
          />
          <div
            className="__roll"
            onClick={() => isWritable ? setIsWritable(false) : setIsWritable(true)}
          ></div>
          <div className="__roll-top"></div>
          <div className="__roll-bottom"></div>
          <div className="__roll-core"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
