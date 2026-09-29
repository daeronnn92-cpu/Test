console.log('Hello');

function LoaDate() {
    document.querySelector('footer').innerHTML = new Date().toLocaleString();
}

document.addEventListener('DOMContentLoaded', function () {
    LoaDate();

    setInterval(function () {
        LoaDate();
    }, 1000);
});
