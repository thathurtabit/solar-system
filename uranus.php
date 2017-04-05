<?php
  // HEADER
  $pageName = 'Uranus |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--uranus sps">
            
           <h1>Uranus</h1>
           <h2>The Ice Giant</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--uranus sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Uranus</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>Equatorial Diameter:</dt>
                  <dd>51,118 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Peroid:</dt>
                  <dd>30,687 days (84.0 years)</dd>
                </dl>                

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>8.68 × 10^25 kg (15 Earths)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Effective Temp:</dt>
                  <dd>-216 &deg;C</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Discovered:</dt>
                  <dd>March 13th 1781</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Discovered by:</dt>
                  <dd>William Herschel</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>Uranus was officially discovered by Sir William Herschel in 1781</li>
                  <li>Uranus is only visible via telescope</li>
                  <li>Uranus turns on its axis once every 17 hours, 14 minutes</li>
                  <li>Uranus is often referred to as an "ice giant" planet</li>
                  <li>Uranus hits the coldest temperatures of any planet, with a minimum atmospheric temperature of -224 &deg;C</li>
                  
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Uranus" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Uranus</h4>
                  <img src="dist/images/img-uranus-300x.png" alt="Uranus" />                  
                </div>
                
                <div class="page--animation__satellites">
                <h4>Moons</h4>
                  <ul class="profile--satellites">
                    <li>Miranda</li>
                    <li>Ariel</li>
                    <li>Umbriel</li>
                    <li>Titania</li>
                    <li>Oberon</li>
                    <li>Puck</li>
                    <li>Belinda</li>
                    <li>Desdemona</li>
                    <li><a href="https://en.wikipedia.org/wiki/Moons_of_Uranus" target="_blank">+ 19 others</a></li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>Uranus is tipped over on its side with an axial tilt of 98 degrees. It is often described as "rolling around the Sun on its side."</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/neptune" class="btn-next">
            <span><strong>Visit:</strong> Neptune</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->
          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>