<?php
  // HEADER
  $pageName = 'Mercury |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--mercury sps">
            
           <h1>Mercury</h1>
           <h2>The smallest planet in the Solar System</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          

          <!-- PAGE INFO -->
          <div id="page-info" class="page-info page-info--mercury sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Mercury</h1>
                <h2>Planet Profile:</h2>

                <dl class="profile--dl">
                  <dt>First Record:</dt>
                  <dd>14th century BC</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Discovered by:</dt>
                  <dd>Unknown</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Diameter:</dt>
                  <dd>4,879 km</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Mass:</dt>
                  <dd>3.30 x 10^23 kg (5.5% Earth)</dd>
                </dl>

                <dl class="profile--dl">
                  <dt>Surface Temp:</dt>
                  <dd>-173 to 427&deg;C</dd>
                </dl>

                <h2>Quick Facts:</h2>

                <ul class="profile--list">
                  <li>Mercury does not have any moons or rings</li>
                  <li>Your weight on Mercury would be 38% of your weight on Earth</li>
                  <li>A day on the surface of Mercury lasts 176 Earth days</li>
                  <li>A year on Mercury takes 88 Earth days</li>
                  <li>Mercury has a diameter of 4,879 km, making it the smallest planet</li>
                  <li>It’s not known who discovered Mercury.</li>

                </ul>

                <p class="cite-p"><cite>- <a href="http://space-facts.com/" title="Info: Space Facts" target="_blank" class="btn-slide-bg">More Facts</a></cite> </p>
                <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Mercury_(planet)" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <h4>Mercury</h4>
                  <img src="dist/images/img-mercury-300x.png" alt="Mercury" />                  
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
                <p>Due to its proximity to the Sun, Mercury is only visible to us 13 times every century. The event is called a transit.</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/venus" class="btn-next">
            <span><strong>Visit:</strong> Venus</span>
          </a>

          </div>
          <!-- ! PAGE INFO -->


          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>