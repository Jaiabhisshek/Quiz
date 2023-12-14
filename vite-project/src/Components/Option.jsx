import React from 'react'

function Option({ option, onSmash, darkTheme }) {

    const handleBorder = {
        border: darkTheme ? "2px solid white" : "2px solid black"
    }
    return (
        <div className='options' style={handleBorder} onClick={(e) => onSmash(e)} iscorrect={option.isCorrect.toString()}>{option.text}</div>
    )
}

export default Option