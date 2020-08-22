import React from 'react'
import image from '../Utils/profilepic.jpg'

const About = () => {

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={image} alt="JuanPa" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I Worked in different kind of projects, from CMS/ADMIN/Single Page
               Apps/ APIs with different tech tools like
               PHP/Java/Groovy/Node.js/Python with
               Laravel/SpringBoot/Grails/Serverless , relationship DB,
               Apache/Tomcat/Nginx,
               AWS EC2, Lambda etc), NewRelic, Android SDK (mobile apps), always
               learning, improving and trying to do my best in each project</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Juan Pablo Monaco</span><br />
                     <span> Mar del Plata, Bs. As. Argentina
                     </span><br />
						   <span>+54 9 1135613535</span><br />
                     <span>joh1989@gmail.com</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
}

export default About;
