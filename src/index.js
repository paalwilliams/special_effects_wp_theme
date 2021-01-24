const { render, useState, Fragment } = wp.element;
import Ticker from 'react-ticker'
import Marquee from 'jsmarquee'

(function($) {
    $(document).ready(function(){
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

        console.log( "ready!" );

    const mm = new Marquee({
        element: '#ticker',
        velocity: 1
      })

      mm.run();

      const dateString = `Today is ${week[dw]}, ${months[m]} ${d} ${y}`.toUpperCase();

      $('#webTicker').webTicker();

    return (
        <Fragment>
            <p>{dateString}</p>
        </Fragment>
    )
}

render(<UserLocalDateTime />, document.getElementById('current-date'))

const Greeting = () => {
    return (
        <Fragment>
            <p>GREETINGS, GUEST!</p>
        </Fragment>
    )
}

render(<Greeting />, document.getElementById('nerds'))

const TickerTape = () => {
    return (
        <Ticker speed="2">
        {() => (
            <>
                <h1><span></span>Publishing for the New Age : California, USA<span></span></h1>
            </>
        )}
    </Ticker>
    )
}

})
}(jQuery));