const { render, useState, Fragment } = wp.element;
import $ from 'jquery';


const UserLocalDateTime = () => {
    const today = new Date();
    let d = today.getDate();
    let dw = today.getDay();
    let m = today.getMonth();
    let y = today.getFullYear();

    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Append st/nd/rd/th to day of month

    // const nth = function(d) {
    //     if (d > 3 && d < 21) return 'th';
    //     switch (d % 10) {
    //       case 1:  return "st";
    //       case 2:  return "nd";
    //       case 3:  return "rd";
    //       default: return "th";
    //     }
    //   }

      const dateString = `Today is ${months[m]} ${d}, ${y}`.toUpperCase();

    return (
        <Fragment>
            <p>{dateString}</p>
        </Fragment>
    )
}

$('#webTicker').webTicker({
        height:'75px', 
        duplicate: true, 
        rssfrequency: 0, 
        startEmpty: false, 
        hoverpause: false, 
        speed: 20,
        height: '50px'
    })

$(window).resize(() => {
    $('#webTicker').webTicker('stop')
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        $('#webTicker').webTicker('cont')
    }, 250);
});


render(<UserLocalDateTime />, document.getElementById('current-date'))

const Greeting = () => {
    return (
        <Fragment>
            <p>GREETINGS, GUEST!</p>
        </Fragment>
    )
}

render(<Greeting />, document.getElementById('greeting-text'))