import React from 'react';
import {Home as HomeIcon} from 'react-feather'

export default function SettingsIcons({ toggleIsHome, showHomeIcon=true }) {
  let homeIconStyleObj;
    showHomeIcon ? homeIconStyleObj = {display: 'inline'} : homeIconStyleObj = {display: 'none'};  
 return ( 
    <>
         <HomeIcon className='icon homeIcon' onClick={toggleIsHome}
                size={30} style={homeIconStyleObj}
            />
    </>
    )
}