<?php
  // HEADER
  $pageName = 'Saturn |';
  $myPath = '';
  include_once('dist/includes/header.inc.php');
?>
                    
			<main id="barba-wrapper" class="main-content" role="document">
        
        <?php
          // NAV
          include_once('dist/includes/nav.inc.php');
        ?>

        <div class="barba-container">
          <div id="page-cover" class="page page--saturn sps">
            
           <h1>Saturn</h1>
           <h2>It will utterly annihilate your soul</h2>

           <button class="btn-scroll btn-scroll--down">
            <span class="sr-only">Scroll down</span>
          </button>

          </div>
          <div id="page-info" class="page-info page-info--saturn sps">
            
           <h2><i class="zigzag-long"></i><span>Welcome to</span> Saturn</h2>
          
          <div class="page-info-content container-fluid">
             <div class="row">
                <div class="col-md-4 offset-md-2 text-col">
                  <p>Once upon a time, there was a place of great goodness, called the White Lodge. Gentle fawns gamboled there amidst happy, laughing spirits...</p>

                  <p>The sounds of innocence and joy filled the air.  And when it rained, it rained sweet nectar that infused one's heart with a desire to live life in truth and beauty. Generally speaking, a ghastly place, reeking of virtue's sour smell. Engorged with the whispered prayers of kneeling mothers, mewling newborns, and fools, young and old, compelled to do good without reason...</p>
                </div>

                <div class="col-md-4 text-col">
                  <p>BUT, I am happy to point out that our story does not end in this wretched place of saccharine excess. For there's another place, its opposite...</p>

                  <p>A place of almost unimaginable power, chock full of dark forces and vicious secrets. No prayers dare enter this frightful maw. The spirits there care not for good deeds or priestly invocations, they're as likely to rip the flesh from your bone as greet you with a happy "good day." And if harnessed, these spirits in this hidden land of unmuffled screams and broken hearts would offer up a power so vast that its bearer might reorder the Earth itself to his liking.</p>
                </div>
             </div>

             

              <div class="text-center">
                <cite class="text-center">- Windom Earle</cite>
               </div>

           </div>

           

           <button class="btn-scroll btn-scroll--up">
            <span class="sr-only">Scroll up</span>
          </button>

          <a href="<?php echo $root; ?>/bob" class="btn-next" goto-bob>
            <span><strong>Meet:</strong> Bob</span>
          </a>

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