<?php
/**
 * Narys archive template file.
 *
 * @package OceanWP WordPress theme
 */

get_header(); ?>

<div id="content-wrap" class="container clr">

	<div id="primary" class="content-area clr">

		<div id="content" class="site-content clr">

			<?php

			if (have_posts()): ?>
				<div id="blog-entries" class="<?php oceanwp_blog_wrap_classes(); ?> custom-blog-entries team-members-blog">
					<?php
					$columns = 5;

					// Define counter for clearing floats.
					$oceanwp_count = 0;
					// Loop through posts.
					while (have_posts()):
						the_post();
						// Add to counter.
						$oceanwp_count++;
						$asmuo = true;
						if (get_field('pobudis') == 'Organizacija')
							$asmuo = false;

						$pareigos = get_field('pareigos');
						$vardasPavarde = get_field('vardas_pavarde');
						$tel = get_field('telefono_nr');
						$elpastas = get_field('el_pastas');
						$tinklapis = get_field('tinklapis');
						$facebook = get_field('facebook');
						$instagram = get_field('instagram');
						$postUrl = esc_url(ocean_link_post_url(get_the_ID()));
						?>
						<article class="postid-<?php the_ID() ?> blog-entry blog-entry-team entry-column-<?php echo $columns ?>">
							<div class="blog-entry-thumbnail">
								<a href="<?php the_permalink(); ?>"> <?php
									if (has_post_thumbnail()) {
										the_post_thumbnail(array(414, 232), array('alt' => 'alt text', 'itemprop' => 'image', ));
									} else {
										echo '<img src="' . get_narys_thumbnail_path() . '"/>';
									} ?>
								</a>
							</div>
							<div>
								<header class="blog-entry-header clr text-center">
									<div class="blog-entry-team-icons">
										<?php if ($tel) { ?>
											<a href="tel:<?php echo $tel; ?>">
												<i class="fa fa-phone" aria-hidden="true"></i>
											</a>
										<?php } ?>
										<?php if ($elpastas) { ?>
											<a href="mailto:<?php echo $elpastas; ?>">
												<i class="fa fa-envelope" aria-hidden="true"></i>
											</a>
										<?php } ?>
										<?php if ($tinklapis) { ?>
											<a href="<?php echo $tinklapis; ?>">
												<i class="fa fa-globe" aria-hidden="true"></i>
											</a>
										<?php } ?>
										<?php if ($facebook) { ?>
											<a href="<?php echo $facebook; ?>">
												<i class="fa fa-brands fa-facebook" aria-hidden="true"></i>
											</a>
										<?php } ?>
										<?php if ($instagram) { ?>
											<a href="<?php echo $instagram; ?>">
												<i class="fa fa-brands fa-instagram" aria-hidden="true"></i>
											</a>
										<?php } ?>

									</div>
									<?php if (!$asmuo) { ?>
										<h2 class="blog-entry-title entry-title">
											<a href="<?php echo $postUrl; ?>" rel="bookmark"><?php the_field('pavadinimas'); ?></a>
										</h2>
										<h3 class="blog-entry-title entry-title">
											<a href="<?php echo $postUrl; ?>"
												rel="bookmark"><?php echo '<span>' . $pareigos . '</span> ' . $vardasPavarde; ?></a>
										</h3>
									<?php } else {
										?>
										<h2 class="blog-entry-title entry-title">
											<a href="<?php echo $postUrl; ?>" rel="bookmark"><?php echo $pareigos . ' ' . $vardasPavarde; ?></a>
										</h2>
										<?php
									} ?>

								</header>
							</div>
						</article>
						<?php

						// Reset counter to clear floats.
						if (oceanwp_blog_entry_columns() == $oceanwp_count) {
							$oceanwp_count = 0;
						} ?>

					<?php endwhile; ?>

				</div><!-- #blog-entries -->

				<?php
				// Display post pagination.
				oceanwp_blog_pagination();

				// No posts found.
			else: ?>
				<?php
				// Display no post found notice.
				get_template_part('partials/none'); ?>
				<?php
			endif;
			?>

		</div><!-- #content -->

	</div><!-- #primary -->

</div><!-- #content-wrap -->

<?php get_footer(); ?>