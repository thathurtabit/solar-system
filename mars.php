<?php
  // HEADER
  $pageName = 'Mars |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--mars sps">
            
           <h1>Mars</h1>
           <h2>The Red Planet</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--mars sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Mars</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>Equator Diameter:</dt>
                  <dd>6,792 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Distance:</dt>
                  <dd>227,943,824 km (1.52 AU)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Peroid:</dt>
                  <dd>687 days (1.9 years)</dd>
                </dl>                

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>6.42 x 10^23 kg (10.7% Earth)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Surface Temp:</dt>
                  <dd>-153 to 20&deg;C</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>First Recorded:</dt>
                  <dd>2nd millennium BC</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>Mars and Earth have approximately the same landmass</li>
                  <li>Mars is home to the tallest mountain in the solar system: Olympus Mons</li>
                  <li>Mars has the largest dust storms in the solar system</li>
                  <li>On Mars the Sun appears about half the size as it does on Earth</li>
                  <li>Pieces of Mars have fallen to Earth.</li>
                  
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Mars" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Mars</h4>
                  <img src="dist/images/img-mars-300x.png" alt="Mars" />                  
                </div>
                
                <div class="page--animation__satellites">
                <h4>Moons</h4>
                  <ul class="profile--satellites">
                    <li>Phobos</li>
                    <li>Deimos</li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>In the next 20-40 million years Mars' largest moon Phobos will be torn apart by gravitational forces leading to the creation of a ring that could last up to 100 million years.</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/jupiter" class="btn-next">
            <span><strong>Visit:</strong> Jupiter</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->

          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>