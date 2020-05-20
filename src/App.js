import React, { useState } from 'react';
import { ReactComponent as LinkedinSVG } from './linkedin_white.svg';
import './App.css';
import config from './config';

function App() {
  const [profile, setProfile ] =useState();
    window.addEventListener('message', (event)=>{
      console.log(event);
      if(event.data && event.data.type==='profile'){
        console.log(event.data.profile)
        setProfile(event.data.profile);
        console.log(event.data.profile.profilePicture['displayImage~'].elements[0].identifiers[0].identifier);
      }
        
    });
  const handleLoginButton=()=>{
    const url=`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86sj8qwrm6zlvy&redirect_uri=${config.apiUrl}/auth&state=bajrang&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
    var width = 400,
      height = 1000,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    const linkedin=window.open(
      url,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
    console.log(linkedin.closed);
  };
  return (
    <div className="App">
      <div className='title_bar'>
        <h1 className='heading'>Linkedin Api OAuth v2</h1>
        <h3 className='text'>Hellooooo! Try to login yourself using linkedin and get your details here.
        <img src="https://img.icons8.com/emoji/32/000000/smiling-face.png" alt='smiley'/>
         {/* <EmojiSVG fill="#fff" height="1.2em" width="1.2em" /> */}
         </h3>
      </div>
       <button className='login_button' onClick={handleLoginButton}><LinkedinSVG className='linkedin_svg' width="1.2em" height="1.2em"/>LOGIN with Linkedin </button>
       {profile && (
         <div className='profile_box'>
           <p className='name'>{profile.localizedFirstName} {profile.localizedLastName}</p>
           <img className='profile_pic' src={profile.profilePicture['displayImage~'].elements[0].identifiers[0].identifier} alt='profile' />
        </div>
       )}
    </div>
  
  );
}

export default App;
