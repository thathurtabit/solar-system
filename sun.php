<?php
  // HEADER
  $pageName = 'Sun |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--sun sps">
            
            
              
             <h1>Sun</h1>
             <h2>The centre of the solar system</h2>

             <button class="btn-scroll btn-scroll--down">
              <span class="sr-only">Scroll down</span>
            </button>


          </div>

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--sun sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Sun</h1>
                <h2>Star Profile:</h2>

                <dl class="profile--dl">
                  <dt>Age:</dt>
                  <dd>4.6 Billion Years</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Type:</dt>
                  <dd>Yellow Dwarf (G2V)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Diameter:</dt>
                  <dd>1,392,684 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>1.99 × 10^30 kg (333,060 Earths)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Surface Temp:</dt>
                  <dd>5,500 &deg;C</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>At its centre the Sun reaches temperatures of 15 million &deg;C</li>
                  <li>The Sun is 4.6 billion years old</li>
                  <li>The Sun is all the colours mixed together, this appears white to our eyes</li>
                  <li>The Sun is mostly composed of hydrogen (70%) and Helium (28%)</li>
                  <li>The Sun is 109 times wider than the Earth and 330,000x as massive.</li>
                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Sun" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Sun</h4>
                  <img src="dist/images/img-sun-300x.png" alt="Sun" />                  
                </div>
                
                <div class="page--animation__satellites">
                <h4>Satellites</h4>
                  <ul class="profile--satellites">
                    <li>Mercury</li>
                    <li>Venus</li>
                    <li>Earth</li>
                    <li>Mars</li>
                    <li>Jupiter</li>
                    <li>Saturn</li>
                    <li>Uranus</li>
                    <li>Neptune</li>
                  </ul>
                </div>
              </div>

              <div class="page--snippet">
                <h3>Did you know?</h3>
                <p>After exhausting its supply of hydrogen, the Sun will eventually turn into a <a href="https://en.wikipedia.org/wiki/Red_giant" target="_blank">red giant</a>, swelling in size until it becomes large enough to consume Mercury, Venus, and the Earth.</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/mercury" class="btn-next">
            <span><strong>Visit:</strong> Mercury</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->

          
        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>