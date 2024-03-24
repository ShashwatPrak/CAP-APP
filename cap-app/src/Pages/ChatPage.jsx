import React, { useState, useEffect } from 'react';
import Navigationbar from '../Components/navbar';
import MobileView from './MobileView';
import DesktopView from './Desktopview';
import { useLocation } from 'react-router-dom';

const ChatPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const pathParams = location.pathname.split("/").filter(param => param !== "");
  let usernm = null;
  let chatcode = null;

  if (pathParams.length >= 2) {
    usernm = pathParams[pathParams.length - 2]; // Second last parameter
    chatcode = pathParams[pathParams.length - 1]; // Last parameter
  } else if (pathParams.length === 1) {
    usernm = pathParams[pathParams.length - 1];
    chatcode = '';// Last parameter
  }

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

  return (
    <>
      <Navigationbar usernm={usernm} />
      <div className={isMobile ? 'mobile' : 'desktop'}>
        {isMobile && <MobileView usernm={usernm} chatcode={chatcode} />}
        {!isMobile && <DesktopView usernm={usernm} chatcode={chatcode} />}
      </div>
    </>
  );
};

export default ChatPage;
