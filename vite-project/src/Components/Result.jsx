import React, {useState} from 'react'
import './Result.css'

const Result = (props) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const handleDarkTheme = () => {
        setDarkTheme(!darkTheme)
    }

  return (
    <div className='result-container' style={{backgroundColor: darkTheme ? '#000000' : '#ffffff', color: darkTheme ? '#ffffff' : '#000000'}}>
        <div id='darkmode'><button id='darkmodebtn' onClick={handleDarkTheme} style={{backgroundColor: darkTheme? '#000000' : '#ffffff', color: darkTheme? '#ffffff' : '#000000', borderColor: darkTheme ? '#ffffff' : '#000000'}}>
            {darkTheme? 'Light' : 'Dark'}
        </button></div>
        <h1>YOU SCORED : {props.score}</h1>
        <h2>{props.score} OUT OF 5 : <span>{(props.score/5)*100}%</span></h2>
        <div><button className='play-btn' onClick={props.onSmash}>PLAY AGAIN</button></div>
    </div>
  )
}

export default Result