const presubPage = document.querySelector('#presubs');
const infoPage = document.querySelector('#status');

function slideshowFunction()
{
    const slideshowImages = document.querySelectorAll(".intro .slideshow-img");
    const nextImageDelay = 1500;
    let currentImageCounter = 0;

    slideshowImages[currentImageCounter].style.display = "block";

    setInterval(nextImage, nextImageDelay);

    function nextImage()
    {
        slideshowImages[currentImageCounter].style.display = "none";
        currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
        slideshowImages[currentImageCounter].style.display = "block";
    }
}

slideshowFunction(); 

const morePages = document.querySelector('#more-pages');
const popup = document.querySelector('#popup');
const slideshow = document.querySelector('#placeholder');

morePages.addEventListener('click', (e) =>
{
    e.preventDefault();
    let html =
    `
        <div id = 'black-screen' style = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0 , 0.8);'></div>
        <div style = 'position: absolute; top: 30%; left: 15%; width: 70%; height: fit-content; margin: auto; background-color: white; border: red solid; border-width: 7px; border-radius: 15px; padding: 10px 20px 10px 20px;'>
            <ul class = 'nav-links'>
                <li><a class = 'nav-link' id = 'selected' href = 'index.html'>Home</a></li>
                <li><a class = 'nav-link' href = 'forms-documents.html'>Forms-Documents</a></li>
                <li><a class = 'nav-link' href = 'meeting-info.html'>Meeting-Info</a></li>
                <li><a class = 'nav-link' href = 'presubmissions.html'>Presubmissions</a></li>
                <li><a class = 'nav-link' href = 'info-status.html'>Status</a></li>
                <li><a class = 'nav-link' href = 'officers.html'>Officers</a></li>
                <li><a class = 'nav-link' href = 'contact.html'>Contact</a></li>
            </ul>
        </div>
    `;

    popup.innerHTML = html;
    var slideshowHTML = slideshow.innerHTML;
    slideshow.innerHTML = '';

    const blackScreen = document.querySelector('#black-screen');

    blackScreen.addEventListener('click', (e) =>
    {
        e.preventDefault();
        popup.innerHTML = '';
        slideshow.innerHTML = slideshowHTML;
        slideshowFunction();
    })
})