<?php
if ( ! function_exists( 'wp_crop_image' ) ) {
	include( ABSPATH . 'wp-admin/includes/image.php' );
}

// Load after WordPress has finished loading
add_action('init', 'gb_regen_load');

// Load recreate attachment image sizes
function gb_regen_load() {

	$images = new WP_Query(array(
		'post_type' => 'attachment',
		'post_status' => 'inherit',
		'posts_per_page' => -1,
		array('key' => 'post_mime_type', 'operator' => 'LIKE', 'value' => 'image')
	));

	while ($images->have_posts()) {
		$images->the_post();
		$meta = wp_get_attachment_metadata(get_the_ID());
        $file = wp_get_original_image_path(get_the_ID());

		if ($meta) {
			// Remove intermediate and backup images if there are any.
			if ( isset( $meta['sizes'] ) && is_array( $meta['sizes'] ) ) {
				$intermediate_dir = path_join( wp_get_upload_dir()['basedir'], dirname( $file ) );

				foreach ( $meta['sizes'] as $size => $sizeinfo ) {
					$intermediate_file = str_replace( wp_basename( $file ), $sizeinfo['file'], $file );

					if ( ! empty( $intermediate_file ) ) {
						$intermediate_file = path_join( wp_get_upload_dir()['basedir'], $intermediate_file );

						if ( ! wp_delete_file_from_directory( $intermediate_file, $intermediate_dir ) ) {
							
							echo '<p>Error deleting ' . $intermediate_file . '</p>';
						} else {
							echo '<p>Deleted ' . $intermediate_file . '</p>';
						}
						
					}
				}
				$meta['sizes'] = [];
			}

			wp_update_attachment_metadata(get_the_ID(), $meta);

			echo '<p>Cleared images with intermediate sizes. Id ' . get_the_ID() . '</p>';
		}
    
            if ($file && file_exists($file)) {
                wp_generate_attachment_metadata(get_the_ID(), $file);
                echo '<p>Recreated images with intermediate sizes. Id ' . get_the_ID() . '</p>';
                echo '------------------------------------------------------------------------';
            }
	}
	$images->wp_reset_postdata();

}