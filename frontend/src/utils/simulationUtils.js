import userTerminalsFile from '../simulations/input_data/user_terminals/user_terminals_latitude_0.txt';
import groundStationsFile from '../simulations/input_data/ground_stations/ground_stations_starlink.txt';

export const parseUserTerminals = async (numTerminals) => {
  const response = await fetch(userTerminalsFile);
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  return lines.slice(0, numTerminals).map(line => {
    const [, id, latitude, longitude] = line.split(',');
    return { id, 
        latitude: parseFloat(latitude).toFixed(2), 
        longitude: parseFloat(longitude).toFixed(2) 
    };
  });
};

export const parseGroundStations = async () => {
  const response = await fetch(groundStationsFile);
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  return lines.map(line => {
    const [, name, latitude, longitude] = line.split(',');
    return { name, 
        latitude: parseFloat(latitude).toFixed(2), 
        longitude: parseFloat(longitude).toFixed(2) 
    };
  });
};

export const getSimulationFiles = (groundStationConfig, userTerminalConfig) => {
  // Add file selection logic here
  // Map groundStationConfig and userTerminalConfig to the corresponding simulation files
  return {
    userTerminalsFile,
    groundStationsFile
  };
};