<?php
  // HEADER
  $pageName = 'Venus |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--venus sps">
            
           <h1>Venus</h1>
           <h2>Earth's 'sister planet'</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--venus sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Venus</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>First Record:</dt>
                  <dd>17th century BC</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Discovered by:</dt>
                  <dd>Babylonian astronomers</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Diameter:</dt>
                  <dd>12,104 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>4.87 x 10^24 kg (81.5% Earth)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Surface Temp:</dt>
                  <dd>462&deg;C</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>A year on Venus takes 225 Earth days</li>
                  <li>Venus is nearly as big as the Earth with a diameter of 12,104 km</li>
                  <li>A day on the surface of Venus (solar day) would appear to take 117 Earth days</li>
                  <li>The surface temperature on Venus can reach 471&deg;C</li>
                  
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Venus" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Venus</h4>
                  <img src="dist/images/img-venus-300x.png" alt="Venus" />                  
                </div>
                
                <div class="page--animation__satellites">
                <h4>Moons</h4>
                  <ul class="profile--satellites">
                    <li>None</li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>The surface of the planet is obscured by an opaque layer of clouds made up of sulphuric acid.</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/earth" class="btn-next">
            <span><strong>Visit:</strong> Earth</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->


          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>