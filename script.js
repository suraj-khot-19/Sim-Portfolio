document.querySelector('.download-button').addEventListener('click', function () {

    document.getElementById('popup').style.display = 'block';

    setTimeout(function () {
        document.getElementById('popup').style.display = 'none';
    }, 10000);
});
