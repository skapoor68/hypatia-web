import React from 'react';
import { Drawer, List, ListItem, ListItemText, Slider, Select, MenuItem, FormControl, InputLabel, Typography, Box, Button } from '@mui/material';

const Sidebar = ({ isOpen, options, onOptionChange, toggleSidebar, onRunSimulation, children }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={isOpen}
      sx={{
        width: isOpen ? 300 : 50,
        '& .MuiDrawer-paper': {
          width: isOpen ? 300 : 50,
          boxSizing: 'border-box',
          transition: theme => theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
        {children}
      </Box>
      {isOpen && (
        <Box sx={{ overflow: 'auto', p: 2, mt: -7 }}>
          <Typography variant="h5">Simulation Options</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Simulation Length"
                secondary={`${options.length} seconds`}
              />
            </ListItem>
            <ListItem>
              <Slider
                value={options.length}
                onChange={(_, value) => onOptionChange('length', value)}
                min={30}
                max={300}
                step={30}
                valueLabelDisplay="auto"
              />
            </ListItem>

            <ListItem>
              <FormControl fullWidth>
                <InputLabel>Ground Station Config</InputLabel>
                <Select
                  value={options.groundStationConfig}
                  onChange={(e) => onOptionChange('groundStationConfig', e.target.value)}
                  label="Ground Station Config"
                >
                  <MenuItem value="config1">Starlink ground stations</MenuItem>
                  <MenuItem value="config2">Top 100 ground stations</MenuItem>
                </Select>
              </FormControl>
            </ListItem>

            <ListItem>
              <FormControl fullWidth>
                <InputLabel>User Terminal Config</InputLabel>
                <Select
                  value={options.userTerminalConfig}
                  onChange={(e) => onOptionChange('userTerminalConfig', e.target.value)}
                  label="User Terminal Config"
                >
                  <MenuItem value="config1">Latitude 0</MenuItem>
                  <MenuItem value="config2">Atlanta</MenuItem>
                </Select>
              </FormControl>
            </ListItem>

            <ListItem>
              <ListItemText 
                primary="User Terminal Number" 
                secondary={options.userTerminalNumber}
              />
            </ListItem>
            <ListItem>
              <Slider
                value={options.userTerminalNumber}
                onChange={(_, value) => onOptionChange('userTerminalNumber', value)}
                min={0}
                max={550}
                step={50}
                valueLabelDisplay="auto"
              />
            </ListItem>

            <ListItem>
              <FormControl fullWidth>
                <InputLabel>Routing Algorithm</InputLabel>
                <Select
                  value={options.routingAlgorithm}
                  onChange={(e) => onOptionChange('routingAlgorithm', e.target.value)}
                  label="Routing Algorithm"
                >
                  <MenuItem value="algorithm1">Max flow</MenuItem>
                  <MenuItem value="algorithm2">Hot potato</MenuItem>
                  <MenuItem value="algorithm3">Custom algorithm</MenuItem>
                </Select>
              </FormControl>
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={onRunSimulation}
              >
                Run Simulation
              </Button>
            </ListItem>

          </List>
        </Box>
      )}
    </Drawer>
  );
};

export default Sidebar;