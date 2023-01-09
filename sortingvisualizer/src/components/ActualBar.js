import React from 'react'


export default function ActualBar(props){

    console.log(props.optionsData.colorOfBars)

    const barStyle = {
        height: props.length,
        width: props.width,
        backgroundColor: props.id === props.colorID.id? props.colorID.color: props.optionsData.colorOfBars
    }
    
    return (
        <div className='bar' style={barStyle} id={props.id}>           
        </div>
    )
}