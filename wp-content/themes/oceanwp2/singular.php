<?php
/**
 * The template for displaying all pages, single posts and attachments
 *
 * This is a new template file that WordPress introduced in
 * version 4.3.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<?php do_action( 'ocean_before_content_wrap' ); ?>

	<div id="content-wrap" class="container clr">

		<?php do_action( 'ocean_before_primary' ); ?>

		<div id="primary" class="content-area clr">

			<?php do_action( 'ocean_before_content' ); ?>

			<div id="content" class="site-content clr">

				<?php do_action( 'ocean_before_content_inner' );

					// Start loop.
					while ( have_posts() ) :
						the_post();

						if ( is_singular( 'download' ) ) {

							// EDD Page.
							get_template_part( 'partials/edd/single' );

						} elseif ( is_singular( 'naujiena' ) ) {

							// Single naujiena
							get_template_part( 'partials/single/layout-naujiena', 'naujiena' );

						} elseif ( is_singular( 'disciplina' ) ) {

							// Single disciplina
							get_template_part( 'partials/single/layout-disciplina', 'disciplina' );

						} elseif ( is_singular( 'narys' ) ) {

							// Single narys
							get_template_part( 'partials/single/layout-narys', 'narys' );

						} elseif ( is_singular( 'page' ) ) {

							// Single post.
							get_template_part( 'partials/page/layout' );

						} elseif ( is_singular( 'oceanwp_library' ) || is_singular( 'elementor_library' ) ) {

							// Library post types.
							get_template_part( 'partials/library/layout' );

						} else {

							// All other post types.
							get_template_part( 'partials/single/layout', get_post_type() );

						}

					endwhile;
				?>

				<?php do_action( 'ocean_after_content_inner' ); ?>

			</div><!-- #content -->

			<?php do_action( 'ocean_after_content' ); ?>

		</div><!-- #primary -->

		<?php do_action( 'ocean_after_primary' ); ?>

	</div><!-- #content-wrap -->

	<?php do_action( 'ocean_after_content_wrap' ); ?>

<?php get_footer(); ?>
