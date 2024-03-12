<?php
/**
 * Renginys archive template file.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

	<div id="content-wrap" class="container clr">

		<div id="primary" class="content-area clr">

			<div id="content" class="site-content clr container-fluid"><?php

				if (have_posts()) :
                    ?><div class="row">
						
                        <div class="col-sm-6">
                            <?php echo get_my_block("renginiu-temos"); ?>
                        </div>

                        <div class="col-sm-6">
                            <?php echo get_my_block("renginiu-accordion"); ?>
                        </div>

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

	</div><!-- #content-wrap -->


<?php get_footer(); ?>
