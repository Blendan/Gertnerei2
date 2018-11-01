<section class="entry-content">
<?php
  $content = get_the_content( $more_link_text, $strip_teaser );

  $content = apply_filters( 'the_content', $content );
  $content = str_replace( ']]>', ']]&gt;', $content );

  $content = str_replace( '<h2>', '</div><div class="event_post"><h2>', $content );
  $content = str_replace( '</div><div class="event_post"><h2>', '<div class="event_post"><h2>', $content ,1);

  echo $content."</div>";
?>
</section>
