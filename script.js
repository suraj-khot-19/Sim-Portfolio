document.getElementById('downloadButton').addEventListener('click', function() {
    var downloadButton = this;
    var popup = document.querySelector('.popup');
    

    var buttonRect = downloadButton.getBoundingClientRect();
    var buttonX = buttonRect.left;
    var buttonY = buttonRect.top;
    
    
    popup.style.left = buttonX + 'px';
    popup.style.top = buttonY + 'px';
    
    
    popup.style.display = 'block';
});

    setTimeout(function () {
        document.getElementById('popup').style.display = 'none';
    }, 10000);
}
