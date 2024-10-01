import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton, Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Sidebar from './Sidebar';
import { parseUserTerminals, parseGroundStations, getSimulationFiles } from '../utils/simulationUtils';

const theme = createTheme();

const SidebarContainer = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [simulationOptions, setSimulationOptions] = useState({
    length: 5,
    groundStationConfig: 'config1',
    userTerminalConfig: 'config1',
    userTerminalNumber: 10,
    routingAlgorithm: 'algorithm1'
  });
  const [simulationData, setSimulationData] = useState({
    userTerminals: [],
    groundStations: []
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleOptionChange = (option, value) => {
    setSimulationOptions(prev => ({ ...prev, [option]: value }));
  };

  const runSimulation = async () => {
    try {
      const { userTerminalsFile, groundStationsFile } = getSimulationFiles(
        simulationOptions.groundStationConfig,
        simulationOptions.userTerminalConfig
      );

      const userTerminals = await parseUserTerminals(simulationOptions.userTerminalNumber);
      const groundStations = await parseGroundStations();

      setSimulationData({
        userTerminals,
        groundStations
      });
      console.log(userTerminals)
      console.log(groundStations)
    } catch (error) {
      console.error("Error running simulation:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Sidebar 
          isOpen={isSidebarOpen}
          options={simulationOptions}
          onOptionChange={handleOptionChange}
          toggleSidebar={toggleSidebar}
          onRunSimulation={runSimulation}
        >
          <IconButton onClick={toggleSidebar}>
            {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Sidebar>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: isSidebarOpen ? '300px' : '0px',
          }}
        >
          {React.Children.map(children, child =>
            React.cloneElement(child, { simulationData })
          )}
        </Box>
    </ThemeProvider>
  );
};

export default SidebarContainer;