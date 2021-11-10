import './Chart.scss';
import { Line } from 'react-chartjs-2';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import getDate from '../../scripts/getDate';
import moment from 'moment';

const Chart = () => {
    const date = getDate(-60);
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?min_date=${date}&hide_fields=_id,uids,country,states,country_iso2s,population,recovered,confirmed,deaths,country_iso3s,country_codes,combined_names,recovered_daily`;
    const {response: covidData, error} = useFetch(url, {})
    const [chartData, setChartData] = useState(null);

    // Converts data from API to display it in the chart
    const convertToChartData = (data) => {
        const convertedData = [];

        data.forEach(element => {
            let isDateInArray = false;

            convertedData.forEach(convertedElement => {
                if (convertedElement && convertedElement.date === element.date) {
                    convertedElement.confirmed_daily += element.confirmed_daily;
                    convertedElement.deaths_daily += element.deaths_daily;

                    isDateInArray = true;
                }
            })
            if (!isDateInArray) {
                convertedData.push(element);
            }

        })

        return convertedData;
    };

    useEffect(() => {
        if (covidData) {
            setChartData(convertToChartData(covidData));
        }
    }, [covidData])

    const data = {
        labels: chartData && chartData.map(({ date }) => moment(date).format('MMM DD')),
        datasets: [
            {
                label: 'New cases',
                data: chartData && chartData.map(({ confirmed_daily }) => confirmed_daily),
                borderColor: '#21d4fd',
                fill: true,
                tension: 0.2,
                backgroundColor: 'rgba(33, 212, 253, 0.2)',
            }
            // {
            //     label: 'New deaths',
            //     data: chartData && chartData.map(({ deaths_daily }) => deaths_daily),
            //     borderColor: 'rgb(51, 51, 51)',
            //     fill: true,
            //     backgroundColor: 'rgba(51, 51, 51, 0.5)'
            // }
        ],
    }

    const options = {
        responsive: true,
        elements: {
            point: {
                radius: 2,
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return ( 
        <div className="chart">
            <h2 className="chart__title">New Cases</h2>
            <Line
                data={data}
                options={options}
                height={200}
            />
        </div>
     );
}
 
export default Chart;