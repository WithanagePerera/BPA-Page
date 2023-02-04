const pagesButton = document.querySelector('#pages');
const sideNav = document.querySelector('#side-nav');
const exitNav = document.querySelector('#exit-nav');

pagesButton.addEventListener('click', (e) =>
    {
        e.preventDefault();
        sideNav.style.display = "block";
    }
)

exitNav.addEventListener('click', e =>
    {
        e.preventDefault();
        sideNav.style.display = "none";
    }
)

window.addEventListener("resize", e =>
    {
        e.preventDefault();
        if (!window.screenTop && !window.screenY) {
            sideNav.style.display = "none";
        }
    }
)