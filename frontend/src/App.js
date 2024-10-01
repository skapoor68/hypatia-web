import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useRttData, useThroughputData, useMapMarkers } from './hooks';
import { Map, RttChart, MaxFlowChart, Header } from './components';
import SidebarContainer from './components/SidebarContainer';

function App() {
  const { rttData, error: rttError } = useRttData();
  const { maxFlowData, error: maxFlowError } = useThroughputData();
  const { markers, addMarker } = useMapMarkers();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <SidebarContainer>
        <Box sx={{ flexGrow: 1, mt: 5, width: '100%', overflowY: 'auto' }}>
          <Box sx={{ mb: 4, height: '700px', width: '100%' }}>
            <Map markers={markers} onMapClick={addMarker} />
          </Box>
          <Container sx={{ py: 2 }}>
            <ChartSection title="RTT over Time" error={rttError}>
              <RttChart data={rttData} />
            </ChartSection>
            <ChartSection title="Max Flow over Time" error={maxFlowError}>
              <MaxFlowChart data={maxFlowData} />
            </ChartSection>
          </Container>
        </Box>
      </SidebarContainer>
    </Box>
  );
}

const ChartSection = ({ title, error, children }) => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h5" component="h2" sx={{ mb: 2 }}>{title}</Typography>
    {error ? <Typography color="error">{error}</Typography> : children}
  </Box>
);

export default App;