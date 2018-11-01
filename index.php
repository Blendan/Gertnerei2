

<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/master.css">
    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/css/nav.css">

    <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/jquery-3.3.1.js"></script>
    <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/master.js"></script>

    <nav class="weite">
      <ul  id="navigation" class="hideNavigation">
      </ul>
      <img class="akt_menu" src="<?php echo esc_url( get_template_directory_uri() ); ?>/bilder/menü_black.svg">
      <div id="akt_menue_deakt"></div>
    </nav>
  </head>
  <body>
      <div id="home" class="page weite">
        <h1>Loren Ipsumg GMBH</h1>
      </div>
      <div class="page weite">

        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'entry' ); ?>
        <?php endwhile; endif; ?>
        <?php get_template_part( 'nav', 'below' ); ?>

      </div>
  </body>
</html>
