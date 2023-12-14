import React, { useState } from 'react'
import './Quiz.css'
import Option from './Option';
import questions from '../questions';

const Quiz = (props) => {
    const [highlighted, setHighlight] = useState(false);
    const [darkTheme, setDarkTheme] =useState(false);
    const handleHighlight=() => {
        setHighlight(!highlighted)
    }
    const handleDarkTheme = () => {
        setDarkTheme(!darkTheme)
    }

  return (
    
    <div className='quiz-container' style={{backgroundColor: darkTheme ? '#000000' : '#ffffff', color: darkTheme ? '#ffffff' : '#000000'}}>
        <h1> <span>{props.count+1}</span> of 5 questions</h1>
        <div id='darkmode'>
            <button id='darkmodebtn' onClick={handleDarkTheme} style={{backgroundColor: darkTheme? '#000000' : '#ffffff', color: darkTheme? '#ffffff' : '#000000', borderColor: darkTheme ? '#ffffff' : '#000000'}}>
                {darkTheme? 'Light' : 'Dark'}
            </button>
        </div>
        <h2 style={{color: highlighted ? 'red' : darkTheme ? 'white' : 'black'}}>{props.data.text}</h2>
          <div id='optionBox'>
            {/* <div className="options"></div>
            <div className="options"></div>
            <div className="options"></div>
            <div className="options"></div> */}
            {props.data.options.map((item,index) => (<Option option={item} key={index} onSmash={props.handleClick} darkTheme={darkTheme}/>))}
          </div>
          <div id='highlight'><button id='lightbtn' onClick={() => handleHighlight(true)}>HIGHLIGHT</button></div>
    </div>
  )
}

export default Quiz