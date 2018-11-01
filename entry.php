<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<header>
<?php echo '<h1 class="post_heading">'; ?><?php the_title(); ?><?php echo '</h1>'; ?>
<div style="background-image: url('<?php if ( has_post_thumbnail() ) { the_post_thumbnail_url(); } ?>');" class="tumbnail_image" ></div>
<?php if ( !is_search() ) get_template_part( 'entry', 'meta' ); ?>
</header>
<?php  ?>
<?php get_template_part( 'entry', 'content'  ); ?>
<hr>
</article>
