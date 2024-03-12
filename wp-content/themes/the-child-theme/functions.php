<?php
/**
 * OceanWP Child Theme Functions
 *
 * When running a child theme (see http://codex.wordpress.org/Theme_Development
 * and http://codex.wordpress.org/Child_Themes), you can override certain
 * functions (those wrapped in a function_exists() call) by defining them first
 * in your child theme's functions.php file. The child theme's functions.php
 * file is included before the parent theme's file, so the child theme
 * functions will be used.
 *
 * Text Domain: oceanwp
 * @link http://codex.wordpress.org/Plugin_API
 *
 */

/**
 * Load the parent style.css file
 *
 * @link http://codex.wordpress.org/Child_Themes
 */
function oceanwp_child_enqueue_parent_style() {

	// Dynamically get version number of the parent stylesheet (lets browsers re-cache your stylesheet when you update the theme).
	$theme   = wp_get_theme( 'OceanWP' );
	$version = $theme->get( 'Version' );

	// Load the stylesheet.
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'oceanwp-style' ), $version );
	
}

add_action( 'wp_enqueue_scripts', 'oceanwp_child_enqueue_parent_style' );

add_filter( 'acf/shortcode/allow_in_block_themes_outside_content', '__return_true' );

/**
 * Alter your post layouts
 *
 * Replace is_singular( 'post' ) by the function where you want to alter the layout
 * You can also use is_page ( 'page name' ) to alter layouts on specific pages
 * @return full-width, full-screen, left-sidebar, right-sidebar or both-sidebars
 *
 */
function my_post_layout_class( $class ) {
	$class = '';
	// Alter your layout
	if ( 
		is_post_type_archive( 'narys' ) || 
		is_post_type_archive( 'renginys' ) || 
		is_search() || 
		is_404()) {
		$class = 'full-width';
	}

	// Return correct class
	return $class;

}
add_filter( 'ocean_post_layout_class', 'my_post_layout_class', 20 );

/**
 * Add the OceanWP Settings metabox in your CPT
 */
function oceanwp_metabox( $types ) {
	// Custom post type
	$types[] = 'disciplina';
	$types[] = 'naujiena';
	$types[] = 'renginys';
	$types[] = 'rezultatas_senas';
	$types[] = 'narys';

	return $types;

}
add_filter( 'ocean_main_metaboxes_post_types', 'oceanwp_metabox', 20 );

function get_search_shortcode() {
	return do_shortcode('[oceanwp_library id="1262"]');
}

function get_disciplina_sidebar_shortcode() {
	return do_shortcode('[oceanwp_library id="1108"]');
}

function get_my_block($id, $atts = array()) {
	if (!$id)
		return;
	$atts['id'] = $id;
	do_shortcode_func($atts);
}

// Shortcodes
add_shortcode( 'sectionCode', 'do_shortcode_func' );
function do_shortcode_func( $atts ) {
	if (!array_key_exists('id', $atts))
		return;

	if ($atts['id'] == 'renginiai') {
		get_template_part('./templates/blocks/renginiai-list-box', null, $atts);
			
	} else if ($atts['id'] == 'rezultatai') {
		get_template_part('./templates/blocks/rezultatai-list-box');

	} else if ($atts['id'] == 'renginiu-temos') {
		get_template_part('./templates/blocks/renginiu-temos');
		wp_enqueue_script('renginiu-temos', get_theme_file_uri() . '/assets/js/renginiu-temos.js');

	} else if ($atts['id'] == 'renginiu-accordion') {
		get_template_part('./templates/blocks/renginiu-accordion');
	}
}

add_action('wp_enqueue_scripts', 'my_edit_enqueue', 9);
add_action('elementor/widget/before_render_content', 'my_edit_enqueue_htmega');
add_action('elementor/widgets/register', 'my_edit_enqueue_elementor');

function my_edit_enqueue() {
	// CSS minimized stiliai.css
	wp_enqueue_style( 'stiliai', get_theme_file_uri() . '/build/stiliai.min.css');

	// CSS minimized HT Mega Plugin
	if (is_front_page()) {
		wp_enqueue_style( 'htmega-widgets-min', get_theme_file_uri() . '/build/htmega-widgets.min.css');
	}

	// CSS/JS Bootstrap
	wp_enqueue_style( 'bootstrap.min', get_theme_file_uri() . '/assets/css/bootstrap/bootstrap.min.css');
	wp_enqueue_script( 'bootstrap.bundle.min', get_theme_file_uri() . '/assets/js/bootstrap/bootstrap.bundle.min.js');

	// CSS/JS Turn off defaults

	// Debugging variables
	// global $wp_scripts; 
	// global $wp_styles;
	// var_dump($wp_scripts->queue); 
	// var_dump($wp_styles->queue); 
    wp_dequeue_style('htmega-block-fontawesome');
    wp_dequeue_style('htmega-block-common-style');
    wp_dequeue_style('htmega-block-style');

    wp_dequeue_script('htmega-block-main');
}

// Turn off HT Mega CSS
function my_edit_enqueue_htmega() {
		wp_dequeue_style('htmega-widgets');
}
// Turn off default CSS
function my_edit_enqueue_elementor() {
	wp_dequeue_style('hfe-widgets-style');
	wp_dequeue_style('hfe-style');
	wp_dequeue_style('htmega-block-style');
	wp_dequeue_style('htmega-block-common-style');
	wp_dequeue_style('htmega-block-fontawesome');
}
function get_narys_thumbnail_path() {
	return get_site_url() . '/wp-content/uploads/2024/02/narys-logo-1-300x233.jpg';
}
