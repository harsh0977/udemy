import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {

    const arrValue = props.dataPoint.map(data => data.value);
    const maxVal = Math.max(...arrValue);

  return (
    <div className='chart'>
        {props.dataPoint.map( (data) => (
            <ChartBar
                key = {data.label}
                label = {data.label}
                value = {data.value}
                maxValue = {maxVal}
            />
        ))}
    </div>
  )
}

export default Chart