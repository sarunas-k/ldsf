<?php
/**
 * Tema taxonomy template file.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr">
	<div class="blog-entries-title text-center">
		<h1><?php echo single_term_title(); ?></h1>
		<?php if ( function_exists('yoast_breadcrumb') ) {
  					yoast_breadcrumb( '</p><p id="breadcrumbs">','</p><p>' );
				} ?>
	</div>

		<div id="primary" class="content-area clr">

			<div id="content" class="site-content clr">

				<?php
				if ( have_posts() ) : ?>

						<div id="blog-entries" class="<?php oceanwp_blog_wrap_classes(); ?> custom-blog-entries">
							<?php
								$columns = 2;
							
								if (function_exists('oceanwp_blog_entry_columns')) {
									$columns = oceanwp_blog_entry_columns();
								}

								// Define counter for clearing floats.
								$oceanwp_count = 0;
								
								while ( have_posts() ) :
										the_post();
									
										$oceanwp_count++;
									?>

								<article class="postid-<?php the_ID() ?> blog-entry entry-column-<?php echo $columns ?>">
										<div class="blog-entry-thumbnail">
											<a href="<?php the_permalink(); ?>"> <?php
												the_post_thumbnail( array(414, 232), array('alt' => 'alt text', 'itemprop' => 'image',) );?>
											</a>
										</div>
										<div>
											<header class="blog-entry-header clr">
												<h2 class="blog-entry-title entry-title">
													<a href="<?php echo esc_url( ocean_link_post_url( get_the_ID() ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
												</h2>
											</header>
											<div>
												<?php
													// Display excerpt.
													if ( '500' !== get_theme_mod( 'ocean_blog_entry_excerpt_length', '30' ) ) :
												?>
														<p>
															<?php echo oceanwp_excerpt( get_theme_mod( 'ocean_blog_entry_excerpt_length', '30' ) ); ?>
														</p>
															<?php
													// If excerpts are disabled, display full content.
													else :
														the_content( '', '&hellip;' );
													endif;
												?>
											</div>
											<p class="blog-entry-date"><?php the_date(); ?></p>
										</div>
								</article>
									<?php

									// Reset counter to clear floats.
									if ( oceanwp_blog_entry_columns() == $oceanwp_count ) {
										$oceanwp_count = 0;
									}?>

							<?php endwhile; ?>

						</div><!-- #blog-entries -->

							<?php
							// Display post pagination.
							oceanwp_blog_pagination();
					// No posts found.
				else :?>
				<?php
					get_template_part( 'partials/none' );?>
				<?php 
				endif; 
				?>
			</div><!-- #content -->

		</div><!-- #primary -->
		<?php do_action( 'ocean_after_primary' ); ?>
	</div><!-- #content-wrap -->

<?php get_footer(); ?>
