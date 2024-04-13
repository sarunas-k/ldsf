<?php
/**
 * Renginys archive template file.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr all-news">
		<h1>Naujienos</h1>
		<div id="primary" class="content-area clr">

			<div id="content" class="site-content clr"><?php

				if (have_posts()) :
                    ?><div class="news-archive">
                            <?php get_my_block('post-grid', [
                                'post_type' => 'naujiena',
                                'excerpt' => true,
                                'date' => true,
                                'shadow' => true,
								'columns' => 2,
								'image_size' => 3,
								'margin' => 4]); ?>
                    </div>
					<?php
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
