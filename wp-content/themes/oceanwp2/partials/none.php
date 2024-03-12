<?php
/**
 * The template for displaying a "Not found" message.
 *
 * @package OceanWP WordPress theme
 */

?>

<div class="page-content">

	<?php if ( is_search() ) { ?>
		<p>
			<h2>
				<?php esc_html_e( 'Nieko nerasta pagal paiešką: "', 'oceanwp' ); ?>
				<?php echo get_search_query() . '"' ?>
			</h2>
			<?php echo get_search_shortcode(); ?>
		</p>
	<?php } elseif ( is_category() ) { ?>
		<p>
			<?php
			esc_html_e( 'Įrašų šioje kategorijoje kolkas nėra.', 'oceanwp' );
			?>
		</p>
	<?php } elseif (is_tax()) { 

				if (is_tax('naujienu-tema')) { ?>
					<?php 
					if ( current_user_can('administrator') ) { ?>
						<p>
							<?php
							/* translators: 1: Admin URL 2: </a> */
							global $wp_query;
							echo sprintf( esc_html__( 'Norite pridėti pirmąją šios temos naujieną? %1$sSpauskite čia%2$s.', 'oceanwp' ), '<a href="' . esc_url( admin_url( 'edit.php?post-type=naujiena&naujienu-tema=' . $wp_query->get_queried_object()->slug ) ) . '" target="_blank">', '</a>' );
							?>
						</p>
					<?php 
					} else { ?>
					<p>
						<?php
						esc_html_e( 'Nerasta įrašų šioje naujienų temoje.', 'oceanwp' );
						?>
					</p>
					<?php 
					} 
				} else {?>
					<p>
						<?php
						esc_html_e( 'Įrašų šia tema kolkas nėra.', 'oceanwp' );
						?>
					</p>
				<?php 
				}
		} elseif ( is_tag() ) { ?>
			<p>
				<?php
				esc_html_e( 'Įrašų su šia žyma kolkas nėra.', 'oceanwp' );
				?>
			</p>
		<?php } else { ?>
			<p>
				<?php
				esc_html_e( 'Nerasta.', 'oceanwp' );
				?>
			</p>
		<?php } ?>

</div><!-- .page-content -->
