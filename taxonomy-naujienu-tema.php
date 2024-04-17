<?php
/**
 * Tema taxonomy template file.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

<div id="content-wrap" class="container clr news">
	<div class="blog-entries-title text-center">
		<h1><?php echo single_term_title(); ?></h1>
		<?php if (function_exists('yoast_breadcrumb')) {
			yoast_breadcrumb('</p><p id="breadcrumbs">', '</p><p>');
		} ?>
	</div>

	<div id="primary" class="content-area clr">

		<div id="content" class="site-content clr">

			<?php
			if (have_posts()): ?>
					<?php get_my_block('post-grid', [
						'post_type' => 'naujiena',
						// Filter by custom category. Global $taxonomy and $term variables
						'filter_tax' => array($taxonomy => $term),
						'excerpt' => true,
						'date' => true,
						'columns' => 2,
						'image_size' => 3,
						'margin' => 4,
						'classes' => ['item-news-archive']
					]); ?>

				<?php
				// TODO: Pagination
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