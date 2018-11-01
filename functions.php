<?php
  add_action( 'wp_print_scripts', 'add_my_scripts', 100 );
  function add_my_scripts() {
  if ( !is_admin() )
    {
      wp_deregister_script( 'jquery' );
      wp_register_script( 'jquery', ( 'js/jquery-3.3.1.js' ), false, null, true );
      wp_enqueue_script( 'jquery' );
      wp_register_script( 'master', 'js/master.js');
      wp_enqueue_script( 'master' );

      wp_enqueue_script( 'jquery' );
      wp_register_script( 'master', 'js/master.js');
      wp_enqueue_script( 'master' );
    }
  }
  add_action('init', 'add_my_scripts');
  add_theme_support( 'post-thumbnails' ); 
?>
