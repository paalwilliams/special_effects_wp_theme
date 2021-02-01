<?php 

// Remove page title from woocommerce template
add_filter( 'woocommerce_show_page_title', '__return_false' );

// Impport webticker jQuery dependency
add_action('wp_enqueue_scripts', 'enqueue_ticker_js');

function enqueue_ticker_js() {
  wp_enqueue_script('ticker_js_min', get_stylesheet_directory_uri() . '/site_assets/js/dependencies/webticker.min.js' );
}

// wrap product info on archive page with custom div
add_action('woocommerce_after_shop_loop_item_title', 'add_prod_info_wrap_div_start');

function add_prod_info_wrap_div_start() {
    echo "<div class='prod-info-wrap'>";
}

add_action('woocommerce_after_shop_loop_item', 'add_prod_info_wrap_div_end', 30 );

function add_prod_info_wrap_div_end(){
    echo "</div>";
}

// Refactor add to cart button
add_filter( 'woocommerce_loop_add_to_cart_link', 'ts_replace_add_to_cart_button', 10, 2 );
function ts_replace_add_to_cart_button( $button, $product ) {
    if (is_product_category() || is_shop()) {
        $button_text = __(" View Product -->", "woocommerce");
        $button_link = $product->get_permalink();
        $prod_price = $product ->get_price_html();
        $button = '<a href="' . $button_link . '">' . $prod_price .  $button_text . '</a>';
        return $button;
    }
}
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10 );

// remove sort/order by.
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );

remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );

remove_action( 'woocommerce_before_main_content' , 'woocommerce_breadcrumb' , 20, 0);

register_nav_menus( array( 'shop' => esc_html__( 'Main Menu', 'blankslate' ) ) );

// Include Customizer Mods
require_once(__DIR__ . '/sfx_customizer.php');

?>