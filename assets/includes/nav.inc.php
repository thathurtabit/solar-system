<?php
// NOTE: You'll need to change this on the live server

$root = "http://localhost/blank-space";

?>

<nav class="navbar navbar-toggleable-sm fixed-top navbar-light">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-bar"></span>
  </button>
  <a class="navbar-brand nav-link" href="<?php echo $root ?>" data-animation="false" data-toggle="tooltip" data-placement="right" title="Blank Space"><h1 class="sr-only">Blank Space</h1></a>

  <div class="collapse navbar-collapse" id="navbarToggler">
    <ul class="navbar-nav">
      <li class="nav-item nav-sun">
        <a class="nav-link" href="<?php echo $root ?>/sun" title="Sun">Sun</a>
      </li>
      <li class="nav-item nav-mercury">
        <a class="nav-link" href="<?php echo $root ?>/mercury" title="Mercury">Mercury</a>
      </li>
      <li class="nav-item nav-venus">
        <a class="nav-link" href="<?php echo $root ?>/venus" title="Venus">Venus</a>
      </li>
      <li class="nav-item nav-earth">
        <a class="nav-link" href="<?php echo $root ?>/earth" title="Earth">Earth</a>
      </li>
      <li class="nav-item nav-mars">
        <a class="nav-link" href="<?php echo $root ?>/mars" title="Mars">Mars</a>
      </li>
      <li class="nav-item nav-jupiter">
        <a class="nav-link" href="<?php echo $root ?>/jupiter" title="Jupiter">Jupiter</a>
      </li>
      <li class="nav-item nav-saturn">
        <a class="nav-link" href="<?php echo $root ?>/saturn" title="Saturn">Saturn</a>
      </li>
      <li class="nav-item nav-uranus">
        <a class="nav-link" href="<?php echo $root ?>/uranus" title="Uranus">Uranus</a>
      </li>
      <li class="nav-item nav-neptune">
        <a class="nav-link" href="<?php echo $root ?>/neptune" title="Neptune">Neptune</a>
      </li>     
    </ul>
  </div>
</nav>