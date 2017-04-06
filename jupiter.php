<?php
  // HEADER
  $pageName = 'Jupiter |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--jupiter sps">
            
           <h1>Jupiter</h1>
           <h2>The Solar System's Largest Planet</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--jupiter sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Jupiter</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>Equator Diameter:</dt>
                  <dd>142,984 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Distance:</dt>
                  <dd>778,340,821 km (5.20 AU)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Peroid:</dt>
                  <dd>4,333 days (11.9 years)</dd>
                </dl>                

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>1.90 × 10^27 kg (318 Earths)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Effective Temp:</dt>
                  <dd>-148 &deg;C</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>First Recorded:</dt>
                  <dd>7th or 8th century BC</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>Jupiter has the shortest day of all the planets at just under 10 hours</li>
                  <li>Jupiter orbits the Sun once every 11.8 Earth years</li>
                  <li>Jupiter has a thin ring system, made of dust particles from comet and asteroid impacts</li>
                  <li>90% of the atmosphere of Jupiter is made of hydrogen</li>
                  <li>Jupiter's moon Ganymede is the largest moon in the Solar System; it's larger than the planet Mercury</li>
                  
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Jupiter" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Jupiter</h4>
                  <img src="dist/images/img-jupiter-300x.png" alt="Jupiter" />                  
                </div>
                
                <div class="page--animation__satellites">
                <h4>Moons</h4>
                  <ul class="profile--satellites">
                    <li>Io</li>
                    <li>Europa</li>
                    <li>Ganymede</li>
                    <li>Callisto</li>
                    <li>Metis</li>
                    <li>Adrastea</li>
                    <li>Amalthea</li>
                    <li>Thebe</li>
                    <li><a href="https://en.wikipedia.org/wiki/Moons_of_Jupiter" target="_blank">+ 59 others</a></li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>Jupiter's famous Great Red Spot is actually a huge storm, raging for over 350 years. It is so large 3 Earths could fit inside it </p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/saturn" class="btn-next">
            <span><strong>Visit:</strong> Saturn</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->

          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>