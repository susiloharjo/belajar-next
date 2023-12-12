import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChartBulan = () => {
  const [month, setMonth] = useState('january');
  const [data, setData] = useState({
    january: [
      {
        label: 'Keyboard',
        value: 100,
      },
      {
        label: 'Mouse',
        value: 200,
      },
      {
        label: 'Monitor',
        value: 300,
      },
      {
        label: 'Speaker',
        value: 400,
      },
      {
        label: 'Headset',
        value: 500,
      },
    ],
    february: [
      {
        label: 'Keyboard',
        value: 150,
      },
      {
        label: 'Mouse',
        value: 250,
      },
      {
        label: 'Monitor',
        value: 350,
      },
      {
        label: 'Speaker',
        value: 450,
      },
      {
        label: 'Headset',
        value: 550,
      },
    ],
  });

  const labels = data[month].map((item) => item.label);
  const values = data[month].map((item) => item.value);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'My Chart',
        data: values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="controls">
        <label>Bulan</label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="january">Januari</option>
          <option value="february">Februari</option>
        </select>
      </div>
      <Line
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineChartBulan;
