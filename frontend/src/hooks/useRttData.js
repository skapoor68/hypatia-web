import { useState, useEffect } from 'react';
import rttFile from '../simulations/starlink_current_5shells_isls_plus_grid_ground_stations_starlink_user_terminals_latitude_0_oracle_single_gsl/rtt/rtt_0.txt';

export default function useRttData() {
  const [rttData, setRttData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRttData = async () => {
      try {
        const response = await fetch(rttFile);
        const text = await response.text();
        const lines = text.split('\n').filter(line => line.trim() !== '');
        
        const parsedData = lines.map(line => {
          const [time, ...rttValues] = line.split(',').map(Number);
          const values = rttValues.filter(val => !isNaN(val));
          const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
          const min = Math.min(...values);
          const max = Math.max(...values);
          
          return { time, mean, min, max };
        });

        setRttData(parsedData);
      } catch (error) {
        console.error(`Error fetching RTT data:`, error);
        setError(error.message);
      }
    };

    fetchRttData();
  }, []);

  return { rttData, error };
};