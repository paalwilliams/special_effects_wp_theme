// eslint-disable-next-line
const { render, Fragment, React } = wp.element;
const $ = require("jquery");

const UserLocalDateTime = () => {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth();
    const y = today.getFullYear();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dateString = `Today is ${months[m]} ${d}, ${y}`.toUpperCase();

    return (
        // eslint-disable-next-line react/jsx-indent
        <Fragment>
            <p>{dateString}</p>
        </Fragment>
    );
};

// render userlocaldatetime component to header
if (document.getElementById("current-date")) {
    render(<UserLocalDateTime />, document.getElementById("current-date"));
}
// create webticker instance on page load
if (document.getElementById("ticker")) {
    $("#webTicker").webTicker({
        duplicate: true,
        rssfrequency: 0,
        startEmpty: false,
        hoverpause: false,
        speed: 20,
        height: "50px",
    });
}

// watch for window resize

if (document.getElementById("ticker")) {
    $(window).resize(() => {
        $("#webTicker").webTicker("stop");
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(() => {
            $("#webTicker").webTicker("cont");
        }, 250);
    });
}

// Greeting component

const Greeting = () => (
    <Fragment>
        <p>GREETINGS, GUEST!</p>
    </Fragment>
);

// render greeting component to header

if (document.getElementById("greeting-text")) {
    render(<Greeting />, document.getElementById("greeting-text"));
}

// Create Swiper Slideshow
const images = $(".woocommerce-product-gallery__wrapper").children();
$(".woocommerce-product-gallery__wrapper").remove();
$(".woocommerce-product-gallery").append("<div class=\"swiper-wrapper\"></div>");

images.forEach((img) => {
    $(img).children().children().addClass("wp-post-image");
    $(".swiper-wrapper").append(img);
});

$(".woocommerce-product-gallery__image").wrap("<div class=\"swiper-slide\"></div>");
$(".swiper-wrapper").wrap("<div class=\"swiper-container\"></div>");
$(".wp-post-image").on("click", (e) => {
    e.preventDefault();
});

$(".swiper-container").append("<div id=\"swiper-controls\"><div class=\"swiper-prev\"></div><div class=\"swiper-next\"></div></div>");

// eslint-disable-next-line
const swiper = new Swiper(".swiper-container", {
    speed: 0,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    loop: "true",
});
