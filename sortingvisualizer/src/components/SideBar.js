import React from 'react'
import SubHeader from './SubHeader'


export default function SideBar(props){

    return (
        <div className='sidebar'>
            <SubHeader />
            <form>
                <div className='Colorpic'>
                    <h2><label>Choose color of bars: </label></h2>
                    <select 
                        className='ColorSelect'
                        id='colorOfbars'
                        value={props.optionsData.colorOfBars}
                        name='colorOfbars'
                        onChange={props.handleOptionsDataChange}
                    >
                        <option value='red'>Color red</option>
                        <option value='green'>Color green</option>
                        <option value='indigo'>Color indigo</option>
                        <option value='aqua'>Color aqua</option>
                    </select>
                </div>

                <div className='AlgoPic'>
                    <h2><label>Choose Algorithm: </label></h2>
                    <select 
                        className='AlgoSelect'
                        id='algorithm'
                        value={props.optionsData.algorithm}
                        name='algorithm'
                        onChange={props.handleOptionsDataChange}
                    >
                        <option value='bubblesort'>Bubble Sort</option>
                        <option value='quicksort'>Quick Sort</option>
                        <option value='insertionsort'>Insertion Sort</option>
                    </select>
                </div>
            </form>
            
        </div>
    )
}