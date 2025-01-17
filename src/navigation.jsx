import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Fade from '@mui/material/Fade';
import { useState, useEffect } from 'react';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Fade in={isLoaded} timeout={1000}>
    <Box
      sx={{
        width: '100%',
        maxWidth: 500,
        margin: '0 auto',
        position: 'fixed',
        bottom: 30,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderRadius: '20px',
        backdropFilter: 'blur(10px)', // Glassmorphism blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Subtle shadow
        border: '1px solid rgba(255, 255, 255, 0.3)', // Border with transparency
        // '&:hover':{transform: 'scale(1.1)'},
        // transition: 'transform 0.5s ease-in-out',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: 'transparent', // Transparent to let the glass effect show
          
          flexWrap: 'wrap',
        }}
      >
        <BottomNavigationAction onClick={() => handleScroll('home')} sx={{ borderRadius: '20px','&:hover':{transform: 'scale(1.3)'},transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out', color: 'white' ,'&.Mui-selected': { color: '#818CF8'} }} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={() => window.open('https://www.linkedin.com/in/atharvkadole/', '_blank')} sx={{'&:hover':{transform: 'scale(1.3)'},transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out', color: 'white','&.Mui-selected': { color: '#818CF8'} }} label="Linkdin" icon={<LinkedInIcon />} />
        <BottomNavigationAction onClick={() => window.open('https://github.com/atharvkadole', '_blank')} sx={{ color: 'white','&:hover':{transform: 'scale(1.3)'},transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out','&.Mui-selected': { color: '#818CF8'} }} label="Github" icon={<GitHubIcon />} />
        <BottomNavigationAction onClick={() => handleScroll('contact')} sx={{ borderRadius: '20px','&:hover':{transform: 'scale(1.3)'},transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out', color: 'white','&.Mui-selected': { color: '#818CF8'} }} label="Contact" icon={<ContactsIcon />} />
      </BottomNavigation>
    </Box>
    </Fade>
  );
}
