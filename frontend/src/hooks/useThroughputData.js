import { useState, useEffect } from 'react';
import maxFlowFile from '../simulations/starlink_current_5shells_isls_plus_grid_ground_stations_starlink_user_terminals_latitude_0_oracle_single_gsl/throughput/maxflow_0.txt';

export default function useThroughputData() {
  const [maxFlowData, setMaxFlowData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaxFlowData = async () => {
      try {
        const response = await fetch(maxFlowFile);
        const text = await response.text();
        const parsedData = text.split('\n')
          .map(line => {
            const [time, value] = line.split(',');
            return { time: parseFloat(time), value: parseFloat(value) };
          })
          .filter(item => !isNaN(item.time) && !isNaN(item.value));

        setMaxFlowData(parsedData);
      } catch (error) {
        console.error(`Error fetching Max Flow data:`, error);
        setError(error.message);
      }
    };

    fetchMaxFlowData();
  }, []);

  return { maxFlowData, error };
};