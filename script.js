

function expand() {
    var check = document.querySelector('.show-links');
  
    if(check !== null)
    {   
        var navLinks = document.querySelector('.uk-navbar-container .uk-navbar-right .uk-navbar-nav');
        navLinks.classList.add('hide-links');
        navLinks.classList.remove('show-links');
    }
    else {
        var navLinks = document.querySelector('.uk-navbar-container .uk-navbar-right .uk-navbar-nav');
        navLinks.classList.add('show-links');
        var navContainer = document.getElementById('myTopnav');
        navContainer.classList.add('column-direction');
        navLinks.classList.remove('hide-links');
    }
}