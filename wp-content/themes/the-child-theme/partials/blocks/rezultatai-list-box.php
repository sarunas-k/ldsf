<?php
/*  
 * Layout block: Posts list 
 *              (Post type: Rezultatas)
 * 
 * Rendering to DOM:
 * get_my_block('rezultatai')
 * 
 */
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$rezultatai = new WP_Query( 
    array(
        'post_type' => 'rezultatas_senas',
        'posts_per_page' => 3, 
        'meta_key' => 'data',
        'orderby' => 'meta_value',
        'order' => 'ASC',
        'paged' => $paged)
    );
if ($rezultatai->have_posts()) {

?>
<table class="table results-table">
  <tbody>
  <thead>
        <th>Data</th>
        <th>Pavadinimas</th>
        <th>Peržiūra</th>
    </thead>
<?php
while($rezultatai->have_posts()) {
    $rezultatai->the_post();
    ?>
    <tr>
        <td class="text-center"><?php the_field('data'); ?></td>
        <td><strong><?php the_field('renginio_pavadinimas') ?></strong></td>
        <td class="text-center"><a href="<?php the_field('rezultatu_dokumentas') ?>">Parsisiųsti</a></td>
    </tr>
        <?php
    }
    ?>
    </tbody>
</table>
<div class="pagination-buttons">
<?php
echo paginate_links( array(
	'base' => esc_url(get_site_url() . '/rezultatai-seni/page/%#%'),
	'format' => '?paged=%#%',
	'current' => max( 1, $paged ),
	'total' => $rezultatai->max_num_pages
) );
?>
</div>
<?php
} else {
    echo 'Kol kas rezultatų nėra!';
}
wp_reset_postdata();
?>