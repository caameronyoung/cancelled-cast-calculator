const form = document.getElementById('form');
const button = document.getElementById('button');
let name = document.getElementById('name').value;
let log = document.getElementById('log');
const parser = new FileReader();
let count = 0;

function submitForm()
{
    let file = log.files[0];

    parser.readAsText(file);

    parser.onload = function()
    {        
        const matches = parser.result.match(/You cancel/g);
        const totalCasts = parser.result.match(/You cast Fall Malefic/g);
        console.log('you cancelled ' + matches.length + ' casts'); //number of matches in the search = cancelled casts
        let totalGCD = matches.length + totalCasts.length;
        let lostUptime = ((matches.length)/(totalGCD))*100;
        document.getElementById('placeHere').innerHTML += (matches.length) + ' of a total ' + totalGCD;
        document.getElementById('uptime').innerHTML += (lostUptime) + '%';
    }
    parser.onerror = function()
    {
        console.log(reader.error);
    }
}