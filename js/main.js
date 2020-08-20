function bindClickEvent() {
    var menu = document.querySelector('ul');
    var menuLink = document.querySelector('img');

    menuLink.addEventListener('click', function (e) {
        menu.classList.toggle('active');
        e.preventDefault();
    });
}

bindClickEvent();