<?php
/**
 * Renginys archive template file.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

<div id="content-wrap" class="container clr news">
	<h1>Naujienos</h1>
	<div id="primary" class="content-area clr">

		<div id="content" class="site-content clr">
		<div data-lhappid="2bddd1d0-ffe7-4d03-9c20-b39295a934a2"></div>
		<div data-lhappid="2bddd1d0-ffe7-4d03-9c20-b39295a934a2"></div>
			<?php

		if (have_posts()):
			?>
				<?php get_my_block('post-grid', [
					'post_type' => 'naujiena',
					'excerpt' => true,
					'date' => true,
					'shadow' => true,
					'columns' => 2,
					'image_size' => 3,
					'margin' => 4,
					'classes' => ['item-news-archive']
				]); ?>
				<?php
			// No posts found.
		else: ?>
				<?php
				get_template_part('partials/none'); ?>
				<?php
		endif;
		?>

		</div><!-- #content -->


	</div><!-- #primary -->
	<?php do_action('ocean_after_primary'); ?>

</div><!-- #content-wrap -->


<?php get_footer(); ?>