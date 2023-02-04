const countdown = document.querySelector('#countdown');

const dueDate = 1667361599000;

// in milliseconds
var second = 1000;
var minute = second*60;
var hour = minute*60;
var day = hour*24;

if (Date.now() >= dueDate)
{
    let html =
    `
        <h2 style = 
        '
            text-decoration: none; 
            font-size: 30px; 
            background-color: red; 
            border: black solid; 
            border-radius: 10px;
            padding: 5px 15px 5px 15px; 
            width: fit-content; 
            margin: auto;
        '>Expired</h2>
    `;

    countdown.innerHTML = html;
}
else
{
    setInterval(function() 
    {
        var difference = dueDate - new Date();

        var days = Math.floor(difference/day);
        var hours = Math.floor((difference%day)/hour);
        var minutes = Math.floor((difference%hour)/minute);
        var seconds = Math.floor((difference%minute)/second);

        let html =
        `
            <h2 style = 
            '
                text-decoration: none; 
                font-size: 30px; 
                background-color: lightgreen; 
                border: black solid; 
                border-radius: 10px;
                padding: 5px 15px 5px 15px; 
                width: fit-content; 
                margin: auto;
            '>${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds</h2>
        `;
        countdown.innerHTML = html;
    }, 1000)
}