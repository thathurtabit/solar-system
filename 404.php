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
          <div id="page-cover" class="page page--404 sps">
            
           <h1>404</h1>
           <h2>Houston, we have a problem</h2>

           
          </div>
                    

          <?php
            // CHARACTER MENU
            include('dist/includes/character-menu.inc.php');
          ?>
        </div>
      </main><!-- /.main -->
                                     

<?php
  // FOOTER
  include_once('dist/includes/footer.inc.php');
?>