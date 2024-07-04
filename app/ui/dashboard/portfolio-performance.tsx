'use client'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import { getLabels, getPortfolioData } from '@/app/lib/utils';

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

export default function PortfolioPerformance() {
    const [timeFrame, setTimeFrame] = useState('1M');

    const data = {
        labels: getLabels(timeFrame),
        datasets: [
            {
                label: 'Portfolio Value',
                data: getPortfolioData(timeFrame),
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: '#F8BE4F',
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    };

    return (
        <div className="w-full rounded-md h-64 md:h-80 p-5 mb-10">
            <div className='flex justify-between items-center flex-col lg:flex-row'>
                <p className="text-left font-semibold mb-4">Portfolio Performance</p>
                <div className="justify-between mb-4 gap-x-2 flex">
                    <button
                        onClick={() => setTimeFrame('24H')}
                        className={`px-5 py-[2px] rounded-[22px] border border-[var(--lume-yellow)] text-[10px] md:text-sm font-semibold ${timeFrame === '24H' ? 'bg-[var(--lume-yellow)] text-black' : 'bg-transparent text-white'}`}
                    >
                        24H
                    </button>
                    <button
                        onClick={() => setTimeFrame('1W')}
                        className={`px-5 py-[2px] rounded-[22px] border border-[var(--lume-yellow)] text-[10px] md:text-sm font-semibold ${timeFrame === '1W' ? 'bg-[var(--lume-yellow)] text-black' : 'bg-transparent text-white'}`}
                    >
                        1W
                    </button>
                    <button
                        onClick={() => setTimeFrame('1M')}
                        className={`px-5 py-[2px]  rounded-[22px] border border-[var(--lume-yellow)] text-[10px] md:text-sm font-semibold ${timeFrame === '1M' ? 'bg-[var(--lume-yellow)] text-black' : 'bg-transparent text-white'}`}
                    >
                        1M
                    </button>
                    <button
                        onClick={() => setTimeFrame('1Y')}
                        className={`px-5 py-[2px]  rounded-[22px] border border-[var(--lume-yellow)] text-[10px] md:text-sm font-semibold ${timeFrame === '1Y' ? 'bg-[var(--lume-yellow)] text-black' : 'bg-transparent text-white'}`}
                    >
                        1Y
                    </button>
                    <button
                        onClick={() => setTimeFrame('ALL')}
                        className={`px-5 py-[2px]  rounded-[22px] border border-[var(--lume-yellow)] text-[10px] md:text-sm font-semibold ${timeFrame === 'ALL' ? 'bg-[var(--lume-yellow)] text-black' : 'bg-transparent text-white'}`}
                    >
                        ALL
                    </button>
            </div>
            </div>
            <Line data={data} options={options} />
        </div>
    );
}
