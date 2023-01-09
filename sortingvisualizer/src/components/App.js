import React, {useState, useEffect} from 'react';
import Bars from '../data/Bars.js';
import ActualBar from './ActualBar.js'
import Header from './Header.js'
import SideBar from './SideBar.js'



export default function App(){

    const [arrayBars, setArrayBars] = useState(Bars)
    const [colorID, setColorID] = useState({
        id: 0,
        color: 'yellow',
        buttnPressed: false
    })

    //color and algorithm change
    const [optionsData, setOptionsData] = useState({
        colorOfBars: 'indigo',
        algorithm: 'bubble sort'
    })

    function handleOptionsDataChange(event){
        const {name, value} = event.target
        setOptionsData(prevOptionsData => {
            return {
                colorOfBars: name === undefined? prevOptionsData.colorOfBars: value,
                algorithm: name === undefined? prevOptionsData.algorithm: value
            }
        })
    }

    const eachBar = arrayBars.map(barElement => {
        return <ActualBar 
        length={barElement.length} 
        width={barElement.width} 
        id={barElement.id}
        optionsData={optionsData}
        colorID={colorID}/>
    })

    function handleClickToGenerateData(){
        setArrayBars(prevBarArray => {
            return prevBarArray.map(bar => {
                return {...bar, length: Math.floor(Math.random() * 400)}
            })
        })
    }


    function handleSortData(){
        setColorID(prevColorID => {
            return {
                ...prevColorID,
                buttnPressed: !prevColorID.buttnPressed
            }
        })
    }

    useEffect(function run() {
        function runSort(){
            if (colorID.buttnPressed && colorID.id < 80){
                setColorID(prevColorID => {
                    return {
                        ...prevColorID,
                        id: prevColorID.id + 1
                    }
                })
            }
        }
        setTimeout(runSort, 75)
    }, [colorID.id, colorID.buttnPressed])
    
    
    return (
        <div>
            <Header />
            <br/>
            <div>
                <div className='wholebarDiv'>
                    {eachBar}
                </div> 
                <SideBar optionsData={optionsData} handleOptionsDataChange={handleOptionsDataChange}/>
            </div>
            
            <div className='bttn-div'>
                <button className='button-69' onClick={handleClickToGenerateData}>Generate Data</button>
                <button className='button-69' onClick={handleSortData}>Sort Data</button>
            </div>
        </div>
    )
}

