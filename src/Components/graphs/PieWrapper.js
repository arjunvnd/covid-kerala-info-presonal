import React,{useEffect,useRef,useState} from 'react'
import PropTypes from 'prop-types'
import PieChart from './d3-pie-chart';

function PieWrapper({ data }) {
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)

    useEffect(() => {
        if (!chart) {
            setChart(new PieChart(chartArea.current, data))
        }
        else {
            chart.update(data)
        }
    }, [chart, data])

    return (
        <div className="chart-area" ref={chartArea}></div>
    )
}

PieWrapper.propTypes = {

}
PieWrapper.defaultProps = {
    data: [{ name: 'Test', value: 100 }, { name: 'Test1', value: 200 }, { name: 'Test2', value: 100 }]
}

export default PieWrapper

