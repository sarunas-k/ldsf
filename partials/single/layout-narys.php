<?php
/**
 * Single Narys layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

?>

<article id="post-<?php the_ID(); ?>" class="narys container-fluid">

	<?php

	// Get elements.
	$elements = oceanwp_blog_single_elements_positioning();
	// Return if quote format.
	if ('quote' === get_post_format()) {
		return;
	}

	// Heading tag.
	$heading = get_theme_mod('ocean_single_post_heading_tag', 'h2');
	$heading = $heading ? $heading : 'h2';
	$heading = apply_filters('ocean_single_post_heading', $heading);

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
	?>
	<div class="row">
		<div class="col-sm-6">
			<?php
			if (has_post_thumbnail()) {
				get_template_part('partials/single/media/blog-single', 'thumbnail');
			} else { ?>
				<div class="thumbnail"><img src="/wp-prod/wp-content/uploads/2024/02/narys-logo-1-300x233.jpg" /></div>
			<?php } ?>

		</div>
		<div class="col-sm-6">
			<?php do_action('ocean_before_single_post_title'); ?>

			<header class="entry-header clr">
				<<?php echo esc_attr($heading); ?> class="single-post-title
					entry-title"<?php oceanwp_schema_markup('headline'); ?>>
					<?php
					if ($asmuo) {
						echo $pareigos . " " . $vardasPavarde;
					} else {
						the_title();
					} ?>
				</<?php echo esc_attr($heading); ?>><!-- .single-post-title -->
				<?php
				if (!$asmuo) { ?>
					<h3><?php echo $pareigos . " " . $vardasPavarde; ?></h3>
				<?php } ?>
			</header><!-- .entry-header -->

			<?php do_action('ocean_after_single_post_title');

			// Loop through elements.
			foreach ($elements as $element) {

				if ('content' === $element) {

					do_action('ocean_before_single_post_content'); ?>

					<div class="entry-content clr" <?php oceanwp_schema_markup('entry_content'); ?>>
						<?php
						the_content();
						?>
						<?php if ($tel) { ?>
							<p class="info-phone"><strong>Tel.: </strong><a href="tel:<?php echo $tel; ?>"><?php echo $tel; ?></a></p>
						<?php }
						if ($elpastas) { ?>
							<p class="info-email"><strong>El.paštas: </strong><a
									href="mailto:<?php echo $elpastas; ?>"><?php echo $elpastas; ?></a></p>
							<div class="icon-section">
							<?php }
						if ($tel) { ?>
								<a href="tel:<?php echo $tel; ?>">
									<i class="fa fa-phone" aria-hidden="true"></i>
								</a>
							<?php }
						if ($elpastas) { ?>
								<a href="mailto:<?php echo $elpastas; ?>">
									<i class="fa fa-envelope" aria-hidden="true"></i>
								</a>
							<?php }
						if ($tinklapis) { ?>
								<a href="<?php echo $tinklapis; ?>">
									<i class="fa fa-globe" aria-hidden="true"></i>
								</a>
							<?php }
						if ($facebook) { ?>
								<a href="<?php echo $facebook; ?>">
									<i class="fa fa-brands fa-facebook" aria-hidden="true"></i>
								</a>
							<?php }
						if ($instagram) { ?>
								<a href="<?php echo $instagram; ?>">
									<i class="fa fa-brands fa-instagram" aria-hidden="true"></i>
								</a>
							<?php } ?>
						</div>
					</div><!-- .entry -->

					<?php
					do_action('ocean_after_single_post_content');
					?>

				<?php }

				// Tags.
				if ('tags' === $element) {

					get_template_part('partials/single/tags');

				}

			}
			?>
		</div>
	</div>
</article>