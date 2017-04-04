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
             <h2>It will utterly annihilate your soul</h2>

             <button class="btn-scroll btn-scroll--down">
              <span class="sr-only">Scroll down</span>
            </button>

            

           
           

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          <div id="page-info" class="page-info page-info--sun sps">
            
          
          <div class="page-col page--col1">
              <div class="page--title">
                <h1>Sun</h1>
                <h2>It will utterly annihilate your soul</h2>
              </div>
            </div>

            <div class="page-col page--col2">
              <div class="page--animation">
                <div class="page--animation__planet">
                  <img src="dist/images/img-sun-300x.png" alt="Sun" />
                </div>
              </div>

              <div class="page--snippet">
                <h2>Did you know?</h2>
                <p>Once upon a time, there was a place of great goodness, called the White Lodge. Gentle fawns gamboled there amidst happy, laughing spirits...</p>
              </div>
            </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/mercury" class="btn-next">
            <span><strong>Visit:</strong> Mercury</span>
          </a>

          </div>

          
        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>