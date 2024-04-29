<?php
/**
 * Single disciplina layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit();
} ?>

<article id="post-<?php the_ID(); ?>" class="disciplina container-fluid">

	<?php // Return if quote format.
 if ('quote' === get_post_format()) {
 	return;
 } ?>

	<header class="entry-header clr">
		<div class="image-overlay" style="background-image: url('<?php the_field(
  	'didele_nuotrauka'
  ); ?>')">
		</div>
		<div class="header-image-title">
			<h1>
				<?php the_field('pavadinimas'); ?>
			</h1>
			<h2>Apie discipliną</h2>
			<div class="dropdown-divider"></div>
		</div>
	</header><!-- .entry-header -->

	<div class="row">
		<div class="col-md-8 main-section">

			<div class="entry-content description clr" <?php oceanwp_schema_markup(
   	'entry_content'
   ); ?>>
				<?php the_field('aprasymas'); ?>
			</div><!-- .entry -->

			<div class="renginiai">
				<h2>
					<?php echo 'Artimiausi renginiai. ' . get_the_title(); ?>
				</h2>
				<?php get_my_block('renginiai', ['tema' => get_the_title()]); ?>

			</div>
		</div>
		<div class="col-md-4 sidebar-small">

			<?php get_my_block('small-sidebar'); ?>

		</div>
	</div>
	<?php if ($post->ID == 330) {
 	echo '<div data-lhappid="2bddd1d0-ffe7-4d03-9c20-b39295a934a2"></div>';
 } ?>

</article>