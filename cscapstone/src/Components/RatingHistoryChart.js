import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RatingHistoryChart = ({ userId, refreshCounter }) => {
  const [ratingHistory, setRatingHistory] = useState([]);

  useEffect(() => {
    const fetchRatingHistory = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/rating_history`);
        const data = await response.json();
        // Expecting data.history to be an array of { rating, timestamp }.
        setRatingHistory(data.history);
      } catch (error) {
        console.error('Error fetching rating history:', error);
      }
    };

    fetchRatingHistory();
  }, [userId, refreshCounter]);

  const chartData = {
    labels: ratingHistory.map((item) => new Date(item.timestamp)),
    datasets: [
      {
        label: 'Rating',
        data: ratingHistory.map((item) => item.rating),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Rating',
        },
      },
    },
  };

  return (
    <div className="mt-4">
      <h3 className="text-md mb-2">Rating History</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RatingHistoryChart;