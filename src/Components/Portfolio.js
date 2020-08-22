import React from 'react'
import preciosclaros from '../Utils/portfolio/preciosclaros.png'
import rareguru from '../Utils/portfolio/rareguru.png'

const Portfolio = () => {

  return (
    <section id="portfolio">

      <div className="row">

        <div className="twelve columns collapsed">

          <h1>Some of My Works.</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div class="columns portfolio-item">
                <div class="item-wrap">
                    <a href="https://www.preciosclaros.gob.ar" title="Precios Claros" target="_blank">
                        <img alt="Precios Claros" src={preciosclaros} />
                        <div class="overlay">
                            <div class="portfolio-item-meta">
                                <h5>Precios Claros</h5>
                                <p>Look for the products you usually buy and compare their prices in the stores that have published them. Developed on Java</p>
                            </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-link"></i></div>
                    </a>
                </div>
            </div>              
            <div class="columns portfolio-item">
                <div class="item-wrap">
                    <a href="https://apps.apple.com/us/app/rareguru-rare-diseases/id1497253264" title="Rare Guru" target="_blank">
                        <img alt="Rare Guru" src={rareguru} />
                        <div class="overlay">
                            <div class="portfolio-item-meta">
                                <h5>Rare Guru</h5>
                                <p>RareGuru is a free mobile app that connects caregivers, parents, and patients with similar rare diseases or symptoms. Developed on React Native</p>
                            </div>
                        </div>
                        <div class="link-icon"><i class="fa fa-link"></i></div>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
