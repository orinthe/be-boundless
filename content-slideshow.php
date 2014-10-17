<div class="uw-homepage-slider-container">

  <?php if ( class_exists('UW_Slideshow') ) : foreach ( UW_Slideshow::get_latest_slideshow() as $slide ) : ?>

  <div class="uw-hero-image uw-homepage-slider slide-<?php echo $slide->id ?>" data-id="<?php echo $slide->id; ?>" style="background:url(<?php echo $slide->image; ?>) no-repeat center; background-size:cover;">

  <?php if ( isset( $slide->mobileimage ) ) : ?>
    <img src="<?php echo $slide->mobileimage; ?>" alt="<?php esc_attr( $slide->mobileimage ); ?>" class="mobile-image" />
  <?php endif; ?>

    <div class="container hero-container vertical-center">

      <div class="row">
        <div class="col-md-8">

          <h1><?php echo $slide->title; ?></h1>

          <span class="udub-slant"><span></span></span>

          <?php echo apply_filters( 'the_content', $slide->text ); ?> <?php echo $slide->link; ?>

        </div>

      </div>

    </div>

  </div>

  <?php endforeach; endif;?>

      <div class="slideshow-controls">
          <span class="uw-boundless">Be Boundless</span>

          <p class="next-headline"></p>
      </div>

</div>