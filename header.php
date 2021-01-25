<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="wrapper" class="hfeed">
<header id="header">
<div id="branding">
<div id="site-title">
</div>
<div id="ticker">
    <ul id="webTicker">
        <li>Publishing for the New Age<img src="/wp-content/uploads/2021/01/sparkle_1x1.png">California, USA<img src="/wp-content/uploads/2021/01/sparkle_1x1.png"></li>
    </ul>
</div>
</div>
<div id="bottom-header-wrapper">
    <div id="greeting">
        <p id="greeting-text"></p>
    </div>
    <nav id="menu">
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
    </nav>
    <div id="current-date">
    </div>
</div>
<div id="site-title">
<?php if ( function_exists( 'the_custom_logo' ) ) {
 the_custom_logo();
} ?>
</div>
</header>
<div id="container">