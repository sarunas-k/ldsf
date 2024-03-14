<?php if (!array_key_exists('post_type', $args) && !array_key_exists('gallery', $args))
    return;

// How many slides to show on screen, if not set by user
$slidesToShow = 5;

if (array_key_exists('show', $args) && is_numeric($args['show']) && $args['show'] > 0)
    $slidesToShow = $args['show'];

?> 
<div class="custom-slider-container"> <?php

if (array_key_exists('post_type', $args)) {
    $postsAll = new WP_Query(
        array(
            'post_type' => $args['post_type'],
            'posts_per_page' => -1
        )
    );

    if (!$postsAll->have_posts()) {
        return;
    }
    // If total number of slides is equal to $show, duplicate all slides for slider to work
    if ($postsAll->found_posts <= $slidesToShow) {
        $slidesToShow = $postsAll->found_posts;
        $postsAll = array_merge($postsAll->posts, $postsAll->posts);
    } ?>
    <div class='custom-slider post-slider slider-"<?php echo $args['post_type']; ?>"'
        data-show='<?php echo $slidesToShow ?>'>
        <?php
        while ($postsAll->have_posts()) { ?>
            <?php $postsAll->the_post(); ?>

            <a href='<?php the_permalink() ?>'>
                <div class='custom-slide'>
                    <div class='custom-slide-image'><img src="<?php the_post_thumbnail_url() ?>" /></div>
                    <div class='custom-slide-title'>
                        <?php the_field('pavadinimas') ?>
                    </div>
                </div>
            </a>
            <?php
        }
        wp_reset_postdata();
        ?>
    </div>
    <?php
} elseif (array_key_exists('gallery', $args)) {
    
    $postsAll = get_post_gallery_images($args['gallery']);
    if (!$postsAll)
        return;
    
    // If total number of slides is equal to $slidesToShow, duplicate all slides for slider to work
    if (count($postsAll) <= $slidesToShow) {
        $slidesToShow = count($postsAll);
        $postsAll = array_merge($postsAll, $postsAll);
    } ?>
    <div class='custom-slider gallery-slider gallery-slider-"<?php $args['gallery'] ?>"' data-show='<?php echo $slidesToShow ?>'>
        <?php
        foreach ($postsAll as $src) {
            ?>
            <div class='custom-slide'>
                <div class='custom-slide-image'><img src="<?php echo $src; ?>" /></div>
            </div>
        <?php }
        ?>
    </div>
<?php } ?>
</div>