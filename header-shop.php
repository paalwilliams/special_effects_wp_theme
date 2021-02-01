<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="wrapper" class="hfeed">
<header id="header" class="shop-header">
<div id="branding">
<div id="site-title">
</div>
</div>
<div id="bottom-header-wrapper">
    <div id="shop-header-img">
        <a href="/">
        <?php 
            $id = get_theme_mod( 'shop_menu_img' );
            $img_url = wp_get_attachment_url($id);
        ?>
            <img src="<?php echo $img_url?>" alt="">
        </a>
    </div>
    <nav id="menu">
        <?php wp_nav_menu( array( 'theme_location' => 'shop' ) ); ?>
    </nav>
</div>
</header>
<div id="container">