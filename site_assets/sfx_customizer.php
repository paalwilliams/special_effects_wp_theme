<?php

add_action( 'customize_register', 'sfx_customizer_settings' );
function sfx_customizer_settings( $wp_customize ) {

$wp_customize->add_section( 'theme_options' , array(
    'title'      => 'Theme Options',
    'priority'   => 30,
) );

$wp_customize->add_setting( 'shop_menu_img' , array(
    'default'     => '',
    'transport'   => 'refresh',
) );

$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, 'background_color', array(
	'label'        => 'Shop Menu Image',
	'section'    => 'theme_options',
	'settings'   => 'shop_menu_img',
) ) );


}
?>