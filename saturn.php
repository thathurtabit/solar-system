<?php
  // HEADER
  $pageName = 'Saturn |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--saturn sps">
            
           <h1>Saturn</h1>
           <h2>The ringed planet</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--saturn sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Saturn</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>Equatorial Diameter:</dt>
                  <dd>120,536 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Distance:</dt>
                  <dd>1,426,666,422 km (9.54 AU)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Peroid:</dt>
                  <dd>10,756 days (29.5 years)</dd>
                </dl>                

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>5.68 × 10^26 kg (95 Earths)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Effective Temp:</dt>
                  <dd>-178 &deg;C</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>First Recorded:</dt>
                  <dd>8th century BC</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>Saturn has the most extensive rings in the solar system</li>
                  <li>Saturn is a gas giant, like Jupiter</li>
                  <li>Saturn can be seen with the naked eye</li>
                  <li>Saturn is the flattest planet, this is due to its low density and fast rotation</li>
                  <li>Saturn is made mostly of hydrogen</li>
                  <li>Saturn has 150 moons and smaller moonlets.</li>
                  
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Saturn" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet saturn-ring">
                  <h4>Saturn</h4>
                  <img src="dist/images/img-saturn-300x.png" class="img-saturn" alt="Saturn" />
                  <span class="page--animation__planet-saturn-ring"></span>     
                </div>
                
                
                <div class="page--animation__satellites">
                <h4>Moons</h4>
                  <ul class="profile--satellites">
                    <li>Mimas</li>
                    <li>Enceladus</li>
                    <li>Tethys</li>
                    <li>Dione</li>
                    <li>Rhea</li>
                    <li>Titan</li>
                    <li>Iapetus</li>
                    <li><a href="https://en.wikipedia.org/wiki/Moons_of_Saturn" target="_blank">+ 55 others</a></li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>Saturn's rings are made up of are billions of particles that range in size from tiny dust grains to to objects as large as mountains. These are made up of chunks of ice and rock, believed to have come from asteroids comets or even moons.</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/uranus" class="btn-next">
            <span><strong>Visit:</strong> Uranus</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->

          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>