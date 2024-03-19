<?php
/*  
 * Layout block: Dropdown with a button to find posts by taxonomy 
 *          (Post type: renginys, Taxonomy: renginio-tema)
 * 
 * Rendering to DOM:
 * get_my_block('renginiu-temos')
 * 
 */
$temos = get_terms(array(
    'taxonomy' => 'renginio-tema',
    'hide_empty' => false)
);

if (!empty($temos)) {
    ?> <div class="renginiu-temos"><select id="renginiu-temu-sarasas">
        <?php 
        foreach($temos as $tema) {
            ?><option value="<?php echo get_site_url() . '/renginio-tema/' . $tema->slug ?>"><?php echo $tema->name ?></option> <?php
        }
        ?>
    </select>
    <button>Ieškoti renginių</button></div>
    <?php
}
?>