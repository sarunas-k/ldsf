<?php
if (array_key_exists('tema', $args) || array_key_exists('grupe', $args)) {
    if (array_key_exists('tema', $args)) {
        $renginiai = new WP_Query( 
            array(
                'post_type' => 'renginys',
                'posts_per_page' => 3, 
                'meta_key' => 'renginio_data',
                'orderby' => 'meta_value',
                'order' => 'ASC',
                'meta_query' => array(
                    array(
                        'key' => 'renginio_data',
                        'compare' => '>=',
                        'value' => date('Y-m-d H:i:s')
                    )),
                    'tax_query' => array(
                        array (
                            'taxonomy' => 'renginio-tema',
                            'field' => 'name',
                            'terms' => $args['tema']
                        )
                    ),
            )
        );
    } else if (array_key_exists('grupe', $args)) {
        $nuoIki = [0,0];
        if ($args['grupe'] == '1') {
            $nuoIki = [date('Y') . '-01-01 00:00:00', date('Y') . '-03-31 00:00:00'];
        } else if ($args['grupe'] == '2') {
            $nuoIki = [date('Y') . '-04-01 00:00:00', date('Y') . '-06-31 00:00:00'];
        } else if ($args['grupe'] == '3') {
            $nuoIki = [date('Y') . '-07-01 00:00:00', date('Y') . '-09-31 00:00:00'];
        } else if ($args['grupe'] == '4') {
            $nuoIki = [date('Y') . '-10-01 00:00:00', date('Y') . '-12-31 00:00:00'];
        }
        $renginiai = new WP_Query( 
            array(
                'post_type' => 'renginys',
                'meta_key' => 'renginio_data',
                'orderby' => 'meta_value',
                'order' => 'ASC',
                'meta_query' => array(
                    array(
                        'key' => 'renginio_data',
                        'compare' => 'BETWEEN',
                        'value' => $nuoIki
                    )),
            )
        );
    }
} else {
    $renginiai = new WP_Query( 
        array(
            'post_type' => 'renginys',
            'posts_per_page' => 3, 
            'meta_key' => 'renginio_data',
            'orderby' => 'meta_value',
            'order' => 'ASC',
            'meta_query' => array(
                array(
                    'key' => 'renginio_data',
                    'compare' => '>=',
                    'value' => date('Y-m-d H:i:s')
                ))
        )
    );
}

if ($renginiai->have_posts()) {
    
    ?>
    <table class="table events-table">
    <tbody>
        <thead>
            <th>Data</th>
            <th>Renginys</th>
        </thead>
    <?php
    while($renginiai->have_posts()) {
        $renginiai->the_post();
        ?>
        <tr>
            <td class="text-center"><?php echo DateTime::createFromFormat('Y-m-d H:i:s', get_field('renginio_data'))->format('Y-m-d'); ?></td>
            <td><strong><?php the_field('pavadinimas') ?></strong></td>
        </tr>
            <?php
        }
        ?>
        </tbody>
    </table>
    <?php
} else {
    echo 'Kol kas renginių nėra!';
}
wp_reset_postdata();
?>