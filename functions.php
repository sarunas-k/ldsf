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
 * Tik development aplinkai
 */
if (file_exists(__DIR__ . '/dev-functions.php') && preg_match('/localhost|127\.0\.0\.1/', $_SERVER['HTTP_HOST']))
	require __DIR__ . '/dev-functions.php';

/**
 * Load the parent style.css file
 *
 */

function oceanwp_child_enqueue_parent_style() {

	// Dynamically get version number of the parent stylesheet (lets browsers re-cache your stylesheet when you update the theme).
	$theme = wp_get_theme('OceanWP');
	$version = $theme->get('Version');

	// Load the stylesheet.
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() .
					'/style.css', array('oceanwp-style'), $version);

}

add_action('wp_enqueue_scripts', 'oceanwp_child_enqueue_parent_style');

add_filter('acf/shortcode/allow_in_block_themes_outside_content', '__return_true');


/**
 * Priskirti layout būdą atskiriems puslapiams
 * 	(full-width, full-screen, right-sidebar, left-sidebar, both-sidebars)
 */
function my_post_layout_class($class) {
	$class = '';
	if (
		is_post_type_archive('narys') ||
		is_post_type_archive('renginys') ||
		is_search() ||
		is_404()
	) {
		$class = 'full-width';
	}

	return $class;

}
add_filter('ocean_post_layout_class', 'my_post_layout_class', 20);

/**
 * Įjungti temos settingsus custom post tipams
 */
function oceanwp_metabox($types) {
	return array_merge($types, [
		'disciplina',
		'naujiena',
		'renginys',
		'rezultatas_senas',
		'narys']);
}
add_filter('ocean_main_metaboxes_post_types', 'oceanwp_metabox', 20);

/**
 * Gauti custom bloko šabloną
 */
function get_my_block($block, $args = array()) {
	if (!$block)
		return;
	$args['block'] = $block;
	echo do_shortcode_func($args);
}

// Shortkodai
add_shortcode('sectionCode', 'do_shortcode_func');
function do_shortcode_func($args) {
	if (!array_key_exists('block', $args))
		return;
	ob_start();
	if ($args['block'] == 'renginiai') {
		get_template_part('./partials/blocks/renginiai-list-box', null, $args);

	} else if ($args['block'] == 'rezultatai') {
		get_template_part('./partials/blocks/rezultatai-list-box');

	} else if ($args['block'] == 'renginiu-temos') {
		get_template_part('./partials/blocks/renginiu-temos');
		wp_enqueue_script('renginiu-temos', get_theme_file_uri() . '/assets/js/renginiu-temos.js');

	} else if ($args['block'] == 'renginiu-accordion') {
		get_template_part('./partials/blocks/renginiu-accordion');

	} else if ($args['block'] == 'slider') {
		get_template_part('./partials/blocks/custom-slider', null, $args);
		load_slider_assets();

	} else if ($args['block'] == 'small-sidebar') {
		echo do_shortcode('[oceanwp_library id="1108"]');

	} else if ($args['block'] == 'search-field') {
		echo do_shortcode('[oceanwp_library id="1262"]');

	} else if ($args['block'] == 'post-grid') {
		get_template_part('./partials/blocks/custom-post-grid', null, $args);

	}
	return ob_get_clean();
}

add_action('wp_enqueue_scripts', 'enqueue_my_assets', 9);
add_action('elementor/widgets/register', 'my_edit_enqueue_elementor');

function load_slider_assets() {
	wp_enqueue_style('jquery-slick-style', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
	wp_enqueue_style('jquery-slick-style-theme', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css');
	wp_enqueue_script('jquery-slick-script', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', ['jquery-core']);
	wp_enqueue_script('custom-slider', get_theme_file_uri() . '/assets/js/custom-slider-script.js', ['jquery-core', 'jquery-slick-script', 'all-helper']);
}
function enqueue_my_assets() {

	// CSS/JS Bootstrap
	wp_enqueue_style('bootstrap.min', get_theme_file_uri() . '/assets/css/bootstrap/bootstrap.min.css');
	wp_enqueue_script('bootstrap.bundle.min', get_theme_file_uri() . '/assets/js/bootstrap/bootstrap.bundle.min.js');

	wp_enqueue_script('all-helper', get_theme_file_uri() . '/assets/js/all.js', ['jquery-core']);
	// CSS minimized stiliai.css
	wp_enqueue_style('stiliai', get_theme_file_uri() . '/build/stiliai.min.css', ['oceanwp-style', 'wp-block-library', 'bootstrap.min']);

	/**
	 * Tik testams
	 */
	if (is_page(1384) || is_archive('naujiena') || is_single(330)) {
		wp_enqueue_script('leadhat', "https://static.leadhat.ai/embed/next/leadhat-embedded.js");
		add_filter('wp_script_attributes', 'add_type_attribute', 10, 1);
		function add_type_attribute($attributes) {
			if (isset($attributes['id']) && $attributes['id'] === 'leadhat-js') {
				$attributes['type'] = 'module';
			}
			return $attributes;
		}
	}

}

// Išimti default CSS
function my_edit_enqueue_elementor() {
	wp_dequeue_style('hfe-widgets-style');
	wp_dequeue_style('hfe-style');
}
function get_narys_thumbnail_path() {
	return get_site_url() . '/wp-content/uploads/2024/02/narys-logo-1-300x233.jpg';
}

/**
 * Pakeisti ištraukos ilgį
 */
function set_custom_excerpt_length($length) {
	return 20;
}
add_filter('excerpt_length', 'set_custom_excerpt_length', 999);

/**
 * Pridėti standartinius image dydžius
 */
add_image_size('crop-1', 400, 230, true);
add_image_size('crop-2', 600, 345, true);
add_image_size('crop-3', 800, 460, true);
add_image_size('crop-4', 1000, 600, true);

/**
 * Pakeisti vertimą į kitokį
 */
add_filter('gettext', 'change_translations');
function change_translations($words) {
	switch ($words) {
		case '&laquo; Ankstesnis':
			return 'Atgal';
		case 'Kitas &raquo;':
			return 'Toliau';
	}
	return $words;
}

/**
 * Pakeisti templatų direktoriją į /templates iš root
 */
add_filter('template_include', 'use_different_template');
function use_different_template($template) {

	if (is_post_type_archive('naujiena'))
		$template = ($_template = locate_template('templates/archive-naujiena.php')) ? $_template : $template;

	if (is_post_type_archive('narys'))
		$template = ($_template = locate_template('templates/archive-narys.php')) ? $_template : $template;

	if (is_post_type_archive('renginys'))
		$template = ($_template = locate_template('templates/archive-renginys.php')) ? $_template : $template;

	if (is_tax('naujienu-tema'))
		$template = ($_template = locate_template('templates/taxonomy-naujienu-tema.php')) ? $_template : $template;

	return $template;
}