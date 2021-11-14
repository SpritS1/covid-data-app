import './Chart.scss';
import { Line } from 'react-chartjs-2';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import ChartOptions from './ChartOptions';
import moment from 'moment';

const Chart = ({ date }) => {
    const [chartData, setChartData] = useState(null);
    const [chartRange, setChartRange] = useState(7);
    const [chartMode, setChartMode] = useState('cases')

    const [chartColor, setChartColor] = useState('33, 212, 253');
    const [dataName, setDataName] = useState('confirmed_daily');
    const [label, setLabel] = useState('New Cases');

    const chartMinDate = moment(date).subtract(chartRange, 'days').format('YYYY-MM-DD');
    const url = `https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?min_date=${chartMinDate}&max_date=${date}&hide_fields=_id,uids,country,states,country_iso2s,population,recovered,confirmed,deaths,country_iso3s,country_codes,combined_names,recovered_daily`;
    const {response: covidData, error} = useFetch(url, {})

    const casesOptions = {
        chartColor: '33, 212, 253', 
        dataName: 'confirmed_daily',
        label: 'New Cases'
    }

    const deathsOptions = {
        chartColor: '51, 51, 51', 
        dataName: 'deaths_daily',
        label: 'New Deaths'
    }

    useEffect(() => {
        if (chartMode === 'cases') {
            setChartColor(casesOptions.chartColor);
            setDataName(casesOptions.dataName);
            setLabel(casesOptions.label);
        } else if (chartMode === 'deaths') {
            setChartColor(deathsOptions.chartColor);
            setDataName(deathsOptions.dataName);
            setLabel(deathsOptions.label);
        }
    }, [chartMode])

    useEffect(() => {
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
        <div className={`chart`}>
            <h2 className="chart__title">Statiscits</h2>
            <ChartOptions chartRange={chartRange} setChartRange={setChartRange} chartMode={chartMode} setChartMode={setChartMode}/>
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