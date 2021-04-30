import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-blue-50"></div>
      <div className="relative h-screen max-w-md mx-auto">
        <div className="relative h-2/5">
          <div className="bg-white __benza"></div>
          <div className="relative w-2/3 mx-auto h-2/3">
            <div className="bg-white __benza-hole"></div>
            <div className="relative w-2/5 mx-auto h-2/5">
              <div className="bg-blue-100 __benza-hole-water"></div>
            </div>
          </div>
          {/* <div className="bg-white __benza"></div> */}
        </div>
        <div className="relative h-3/5">
          <div className="__paper-top"></div>
          <div className="__paper-draw"></div>
          <div className="__paper"></div>
          <div className="__paper-bottom"></div>
          <div className="__paper-roll"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
