<?php
  // HEADER
  $pageName = 'Neptune |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--neptune sps">
            
           <h1>Neptune</h1>
           <h2>It will utterly annihilate your soul</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

           <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--neptune sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Neptune</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>Equatorial Diameter:</dt>
                  <dd>49,528 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Orbit Peroid:</dt>
                  <dd>60,190 days (164.8 years)</dd>
                </dl>                

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>1.02 × 10^26 kg (17 Earths)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Effective Temp:</dt>
                  <dd>-214 &deg;C</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Discovered:</dt>
                  <dd>September 23rd 1846</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Discovered by:</dt>
                  <dd>Urbain Le Verrier &amp; Johann Galle</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>Neptune is the smallest of the ice giants, but has a greater mass than Uranus</li>
                  <li>Neptune appears blue because the methane absorbs the red light</li>
                  <li>Large storms whirl through its upper atmosphere, and high-speed winds track around the planet at up 600 meters per second</li>
                  <li>Neptune has a very thin collection of rings</li>
                  <li>Neptune spins on its axis very rapidly, despite its size, the clouds on its equator circle the planet every 18 hours</li>
                  
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Neptune" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Neptune</h4>
                  <img src="dist/images/img-neptune-300x.png" alt="Neptune" />                  
                </div>
                
                <div class="page--animation__satellites">
                <h4>Moons</h4>
                  <ul class="profile--satellites">
                    <li>Triton</li>
                    <li>Nereid</li>
                    <li>Proteus</li>
                    <li>Despina</li>
                    <li>Larissa</li>
                    <li>Galatea</li>
                    <li>Thalassa</li>
                    <li>Naiad</li>
                    <li><a href="https://en.wikipedia.org/wiki/Moons_of_Neptune" target="_blank">+ 6 others</a></li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>Neptune has an incredibly thick atmosphere comprised of 74% hydrogen, 25% helium and approximately 1% methane. Its atmosphere also contains icy clouds and the fastest winds recorded in the solar system.</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/sun" class="btn-next">
            <span><strong>Visit:</strong> Sun</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->

          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>