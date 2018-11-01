<section class="entry-content">
<?php
$content = get_the_content( $more_link_text, $strip_teaser );

$content = apply_filters( 'the_content', $content );
$content = str_replace( ']]>', ']]&gt;', $content );

$content = str_replace( '<h2>', '</div><div class="post_conten_block"><h2>', $content );

echo "<div>".$content."</div>";

//the_content();
?>
</section>
