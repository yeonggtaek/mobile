import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["2019","2020","2021","2022","2023","2024"],
            datasets: [
                {
                   label: 'Data',
                   data: [80, 83, 88, 90, 95, 100],
                   borderColor: 'rgb(40, 120, 150)',
                   backgroundColor: 'rgba(40, 130, 200, 1)',
                   fontColor: 'white',
                   labelColor: 'white'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: "Sea level rise",
                    color: 'white',
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })    
    }, [])

    return (
        <Bar data={chartData} options={chartOptions} style={{width: "300px", height: "150px"}}/>
    )
}