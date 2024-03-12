<?php
/**
 * Single post layout
 *
 * @package OceanWP WordPress theme
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>

<article id="post-<?php the_ID(); ?>" class="naujiena container-fluid">

	<?php
	// Get posts format.
	$format = get_post_format();

	// Get elements.
	$elements = oceanwp_blog_single_elements_positioning();
// Return if quote format.
if ( 'quote' === get_post_format() ) {
	return;
}

// Heading tag.
$heading = get_theme_mod( 'ocean_single_post_heading_tag', 'h2' );
$heading = $heading ? $heading : 'h2';
$heading = apply_filters( 'ocean_single_post_heading', $heading );

?>

<header class="entry-header clr">
	<<?php echo esc_attr( $heading ); ?> class="single-post-title entry-title text-center"<?php oceanwp_schema_markup( 'headline' ); ?>><?php the_title(); ?></<?php echo esc_attr( $heading ); ?>><!-- .single-post-title -->
</header><!-- .entry-header -->
<?php
get_template_part( 'partials/single/media/blog-single', 'thumbnail');?>
<div class="row">
	<div class="col-md-8"><?php
	// Loop through elements.
	foreach ( $elements as $element ) {

		// Content.
		if ( 'content' === $element ) {
		?>
				<div class="entry-content clr"<?php oceanwp_schema_markup( 'entry_content' ); ?>>
					<?php
					the_content();

					wp_link_pages(
						array(
							'before'      => '<div class="page-links">' . __( 'Pages:', 'oceanwp' ),
							'after'       => '</div>',
							'link_before' => '<span class="page-number">',
							'link_after'  => '</span>',
						)
					);
				?>

				</div><!-- .entry -->

		<?php }

		// Tags.
		if ( 'tags' === $element ) {

			get_template_part( 'partials/single/tags' );

		}

	}
	?>
	</div>
	<div class="col-md-4"><?php do_action( 'ocean_after_primary' ); ?></div>
	</div>
</article>
