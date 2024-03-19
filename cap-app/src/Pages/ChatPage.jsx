import React, { useState, useEffect } from 'react';
import Navigationbar from '../Components/navbar';
import MobileView from './MobileView';
import DesktopView from './Desktopview';
import { useLocation, Link } from 'react-router-dom';

const ChatPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const usernm = location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const appStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <>
      <Navigationbar usernm={usernm } />
      <div className={isMobile ? 'mobile' : 'desktop'}>
        {isMobile && <MobileView usernm={ usernm} />}
        {!isMobile && <DesktopView usernm={ usernm}/>}
      </div>
    </>
  );
};

export default ChatPage;
