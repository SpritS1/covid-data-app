import './Chart.scss';
import { Line } from 'react-chartjs-2';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import getDate from '../../scripts/getDate';
import moment from 'moment';

const Chart = ({ chartColor, dataName, label, className, date }) => {
    const chartMinDate = moment(date).subtract(30, 'days').format('YYYY-MM-DD');
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?min_date=${chartMinDate}&hide_fields=_id,uids,country,states,country_iso2s,population,recovered,confirmed,deaths,country_iso3s,country_codes,combined_names,recovered_daily`;
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
                label: label,
                data: chartData && chartData.map(element => element[dataName]),
                borderColor: `rgba(${chartColor}, 1)`,
                fill: true,
                tension: 0.2,
                backgroundColor: `rgba(${chartColor}, 0.2)`,
            }
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
            },
            x: {
                ticks: {
                    maxTicksLimit: chartData && (chartData.length / (chartData.length / 8))
                }
            }
        }
    }

    return ( 
        <div className={`chart ${className}`}>
            <h2 className="chart__title">{label}</h2>
            <div className="chart__body">
                <Line
                    data={data}
                    options={options}
                />
            </div>
        </div>
     );
}
 
export default Chart;