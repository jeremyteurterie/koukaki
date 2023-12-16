<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <video id="background_video" src="<?php echo get_stylesheet_directory_uri() . '/assets/video/video.mp4'; ?>" autoplay loop muted></video>
        <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
    </section>
    <section id="#story" class="story">
        <h2>
            <div class="title-animation">L'histoire </div>
        </h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>
        <article id="characters">
            <div class="main-character">
                <h3>
                    <div class="title-animation">Les personnages</div>
                </h3>
                <?php get_template_part('swiper'); ?>
            </div>
        </article>
        <article id="place">
            <div>
                <h3 class="title-animation">Le Lieu</h3>
                <p><?php echo get_theme_mod('place'); ?></p>
                <img class="big-cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/big_cloud.png'; ?> " alt="gros nuage">
                <img class="small-cloud" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/little_cloud.png'; ?> " alt="petit nuage">
            </div>

        </article>
    </section>
    <section id="studio">
        <h2>
            <div class="title-animation">Studio Koukaki </div>
        </h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
</main>
<?php
get_footer();
