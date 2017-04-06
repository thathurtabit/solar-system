<?php
  // HEADER
  $pageName = '';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--home sps">
            
           <h1><span>The </span>Solar System</h1>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          <div id="page-info" class="page-info page-info--home sps">
                       
          
          <div class="page-info-content container-fluid">
            <div class="row">
              <h2 class="col-md-4 offset-md-4 text-center"><span>Welcome to</span> The Solar System</h2>
            </div>


             <div class="row">
                <div class="col-md-4 offset-md-2 text-col">
                  The Solar System formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with most of the remaining mass contained in Jupiter.
                </div>

                <div class="col-md-4 text-col">
                   <p>The four smaller inner planets, Mercury, Venus, Earth and Mars, are terrestrial planets, being primarily composed of rock and metal. The four outer planets are giant planets, being substantially more massive than the terrestrials.</p>
                </div>
             </div>

             

              <div class="text-center">
                 <p class="cite-p"><cite>- <a href="https://en.wikipedia.org/wiki/Solar_System" title="Wiki" target="_blank" class="btn-slide-bg">Further Reading</a></cite> </p>
               </div>

           </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/sun" class="btn-next">
            <span><strong>Visit:</strong> Sun</span>
          </a>

          </div>

          

        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>