import React from 'react';
import '../css/service.css';
import ios from '../images/services_imges/ios.jpg';
import android from '../images/services_imges/android.jpg';
import crossplatform from '../images/services_imges/cross-platform.png';
import website from '../images/services_imges/websites.png';
export default function Service() {
  return (
<div>
            <div className='features'>
        <h1 style={{color:"grey",opacity:'40%',marginBottom:'0px',fontSize:"3rem"}}>SERVICE</h1>
        <h4 style={{color:"RGB(19, 35, 74)",marginTop:'-25px',fontSize:"2rem",paddingTop:"px"}}>WE OFFER</h4>
      </div>


      {/* cross platform */}
      <div>
      <div className='task-format'>
      <img src={crossplatform} alt="crossplatform" className='task-img'/>
      </div>
      <div className='task-details'> 
        <h3 style={{color:"rgb(13, 13, 138)"}}> CROSS PLATFORM APPLICATIONS DEVELOPMENT </h3>

        <p> •Cross-Platform apps come with a range of benefits that help your specific user or group of users within an organization.
          <br/>  It helps your businesses to opperate on Android, iOS, Windows, and Web platforms using a unified codebase.
        </p>
        <p>•A few more advantages of cross-platform app development are Fast time to market,
          <br/> Low cost, Fast Development, and a broader audience reach and it also provides you competitive advantages</p>
      </div>
      </div>
      {/* android */}
      <div>
      <div className='task-format2'>
      <img src={android} alt="crossplatform" className='task-img2'/>
      </div>
      <div className='task-details2'> 
        <h3 style={{color:"rgb(13, 13, 138)"}}> CROSS PLATFORM APPLICATIONS DEVELOPMENT </h3>

        <p> •Cross-Platform apps come with a range of benefits that help your specific user or group of users within an organization.
          <br/>  It helps your businesses to opperate on Android, iOS, Windows, and Web platforms using a unified codebase.
        </p>
        <p>•A few more advantages of cross-platform app development are Fast time to market,
          <br/> Low cost, Fast Development, and a broader audience reach and it also provides you competitive advantages</p>
      </div>
      </div>
      {/* ios */}
      <div>
      <div className='task-format'>
      <img src={ios} alt="crossplatform" className='task-img'/>
      </div>
      <div className='task-details'> 
        <h3 style={{color:"rgb(13, 13, 138)"}}> CROSS PLATFORM APPLICATIONS DEVELOPMENT </h3>

        <p> •Cross-Platform apps come with a range of benefits that help your specific user or group of users within an organization.
          <br/>  It helps your businesses to opperate on Android, iOS, Windows, and Web platforms using a unified codebase.
        </p>
        <p>•A few more advantages of cross-platform app development are Fast time to market,
          <br/> Low cost, Fast Development, and a broader audience reach and it also provides you competitive advantages</p>
      </div>
      </div>
      {/* website */}
      <div>
      <div className='task-format2'>
      <img src={website} alt="crossplatform" className='task-img2'/>
      </div>
      <div className='task-details2'> 
        <h3 style={{color:"rgb(13, 13, 138)"}}> CROSS PLATFORM APPLICATIONS DEVELOPMENT </h3>

        <p> •Cross-Platform apps come with a range of benefits that help your specific user or group of users within an organization.
          <br/>  It helps your businesses to opperate on Android, iOS, Windows, and Web platforms using a unified codebase.
        </p>
        <p>•A few more advantages of cross-platform app development are Fast time to market,
          <br/> Low cost, Fast Development, and a broader audience reach and it also provides you competitive advantages</p>
      </div>
      </div>
   
</div>
  )
}
