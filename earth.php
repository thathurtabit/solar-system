<?php
  // HEADER
  $pageName = 'Earth |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--earth sps">
            
           <h1>Earth</h1>
           <h2>You are here</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--earth sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Earth</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>Equator Diameter:</dt>
                  <dd>12,756 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Polar Diameter:</dt>
                  <dd>12,714 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Distance:</dt>
                  <dd>149,598,262 km (1 AU)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Peroid:</dt>
                  <dd>365.26 days</dd>
                </dl>                

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>5.97 x 10^24 kg</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Surface Temp:</dt>
                  <dd>-88 to 58&deg;C</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>The Earth’s rotation is gradually slowing; at approximately 17 milliseconds per hundred years</li>
                  <li>Earth has a powerful magnetic field due to its nickel-iron core, this helps protect us from solar wind</li>
                  <li>The Earth is the densest planet in the Solar System</li>
                  <li>The Earth's only natural satellite, The Moon, is slowly drifting further away.</li>
                  
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Earth" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Earth</h4>
                  <img src="dist/images/img-earth-300x.png" alt="Earth" />                  
                </div>
                
                <div class="page--animation__satellites">
                <h4>Moons</h4>
                  <ul class="profile--satellites">
                    <li>The Moon</li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>Earth's atmosphere and oceans were formed by volcanic activity and outgassing that included water vapor. The origin of the world's oceans was condensation augmented by water and ice delivered by asteroids, protoplanets, and comets.</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/mars" class="btn-next">
            <span><strong>Visit:</strong> Mars</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->

          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>