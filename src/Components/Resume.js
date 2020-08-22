import React from 'react'
import java from '../Utils/tech/java.jpg'
import laravel from '../Utils/tech/laravel.jpg'
import react from '../Utils/tech/react.jpg'
import mongo from '../Utils/tech/mongo.jpg'
import node from '../Utils/tech/node.jpg'
import php from '../Utils/tech/php.jpg'
import springboot from '../Utils/tech/springboot.jpg'
import symfony from '../Utils/tech/symfony.jpg'
import python from '../Utils/tech/python.jpg'
import htmlcss from '../Utils/tech/htmlcss.jpg'
import javascript from '../Utils/tech/javascript.jpg'
import angular from '../Utils/tech/angular.jpg'
import typescript from '../Utils/tech/typescript.jpg'
import android from '../Utils/tech/android.jpg'
import mysql from '../Utils/tech/mysql.jpg'
import postgresql from '../Utils/tech/postgresql.jpg'
import aws from '../Utils/tech/aws.jpg'
import apache from '../Utils/tech/apache.jpg'
import linux from '../Utils/tech/linux.jpg'
import ubuntu from '../Utils/tech/ubuntu.jpg'

const Resume = () => {
    return (
        <section id="resume">
          <div className="row work">
            <div className="three columns header-col">
                <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <h3>Frontend Developer</h3>
                <p class="info remove-bottom ">Leniolabs_ LLC </p>
                <p class="remove-bottom"><em class="date"><i className="fa fa-calendar"></i> December 2019 - Present</em></p>
                <p > <em class="date"><i className="fa fa-map-marker"></i> Argentina / Chile / USA </em></p>
                <p>
                  Develop features for a high performing single page application with
                  Advanced React.js, Redux, AngularJs, Jquery
                </p>
              </div>
              
              <div>
                <h3>Tech Lead</h3>
                <p class="info remove-bottom ">Matrice Consulting </p>
                <p class="remove-bottom"><em class="date"><i className="fa fa-calendar"></i> October 2012 - December 2020</em></p>
                <p > <em class="date"><i className="fa fa-map-marker"></i> Argentina</em></p>
                <p>
                  I Worked in different kind of projects, from CMS/ADMIN/Single Page
                  Apps/ APIs with different tech tools like
                  PHP/Java/Groovy/Node.js/Python with
                  Laravel/SpringBoot/Grails/Serverless , relationship DB,
                  Apache/Tomcat/Nginx,
                  AWS EC2, Lambda etc), NewRelic, Android SDK (mobile apps), always
                  learning, improving and trying to do my best in each project
                </p>
              </div>
              
              <div>
                <h3>Software Engineer Senior Groovy/PHP</h3>
                <p class="info remove-bottom ">Teracode </p>
                <p class="remove-bottom"><em class="date"><i className="fa fa-calendar"></i> October 2011 - October 2012</em></p>
                <p > <em class="date"><i className="fa fa-map-marker"></i> Argentina</em></p>
                <p>
                  Develop PaneraBread project, a Deilvery APP integrated with Java API
                  microservice, implementing Groovy and Grails with Prototype.js for
                  Frontend
                </p>
              </div>
              
              <div>
                <h3>SemiSenior PHP Developer</h3>
                <p class="info remove-bottom ">Ogilvy & Mather </p>
                <p class="remove-bottom"><em class="date"><i className="fa fa-calendar"></i> August 2009 - October 2011</em></p>
                <p > <em class="date"><i className="fa fa-map-marker"></i> Argentina</em></p>
                <p>
                   Responsible for create, maintain and improve a PHP CMS developed
                   with Codeigniter and Ext.js 
                </p>
              </div>
            </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p class="lead center">Following the thrends and the needs, here are some of the technologies i worked with the most.</p>  
          </div>
            <ul className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns feature-item">
                  <img className="skill" alt="Java" src={java} />
                  <h5>Java</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="SpringBoot" src={springboot} />
                  <h5>SpringBoot</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Laravel" src={laravel} />
                  <h5>Laravel</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Symfony" src={symfony} />
                  <h5>Symfony 1.2/2</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="PHP" src={php} />
                  <h5>PHP</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Python" src={python} />
                  <h5>Python</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Node.Js" src={node} />
                  <h5>Node Js</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="HTML/CSS" src={htmlcss} />
                  <h5>HTML/CSS</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Javascript" src={javascript} />
                  <h5>Javascript</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Typescript" src={typescript} />
                  <h5>Typescript</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Angular" src={angular} />
                  <h5>Angular Js</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="React.Js" src={react} />
                  <h5>React Js</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Android" src={android} />
                  <h5>Android SDK </h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="React Native" src={react} />
                  <h5>React Native</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Mysql" src={mysql} />
                  <h5>Mysql</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Postgresql" src={postgresql} />
                  <h5>Postgresql</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="MongoDB" src={mongo} />
                  <h5>MongoDB</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="AWS" src={aws} />
                  <h5>AWS</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Apache/Tomcat/Nginx" src={apache} />
                  <h5>Apache/Tomcat/Nginx</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="Linux" src={linux} />
                  <h5>Linux</h5>
              </div>
              <div className="columns feature-item">
                  <img className="skill" alt="CentOs/Ubuntu" src={ubuntu} />
                  <h5>CentOs/Ubuntu</h5>
              </div>
           </ul>
        </div>
    </section>
    );
}

export default Resume;
