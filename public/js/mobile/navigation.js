const morePages = document.querySelector('#more-pages');
const popup = document.querySelector('#popup');

morePages.addEventListener('click', (e) =>
{
    let html =
    `
        <div id = 'black-screen' style = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0 , 0.8);'></div>
        <div style = 'position: absolute; top: 30%; left: 15%; width: 70%; height: fit-content; margin: auto; background-color: white; border: red solid; border-width: 7px; border-radius: 15px; padding: 10px 20px 10px 20px;'>
            <ul class = 'nav-links'>
                <li><a class = 'nav-link' id = 'index' href = 'index.html'>Home</a></li>
                <li><a class = 'nav-link' id = 'forms-documents' href = 'forms-documents.html'>Forms-Documents</a></li>
                <li><a class = 'nav-link' id = 'meeting-info' href = 'meeting-info.html'>Meeting-Info</a></li>
                <li><a class = 'nav-link' id = 'presubmissions' href = 'presubmissions.html'>Presubmissions</a></li>
                <li><a class = 'nav-link' id = 'info-status' href = 'info-status.html'>Status</a></li>
                <li><a class = 'nav-link' id = 'officers' href = 'officers.html'>Officers</a></li>
                <li><a class = 'nav-link' id = 'contact' href = 'contact.html'>Contact</a></li>
            </ul>
        </div>
    `;

    popup.innerHTML = html;

    const nav =
[
    'index.html',
    'forms-documents.html',
    'meeting-info.html',
    'presubmissions.html',
    'info-status.html',
    'officers.html',
    'contact.html'
]

    let url = window.location.href;
    let path = url.indexOf('mobile/') + 7;

    for (let i = 0; i < nav.length; i++)
    {
        if (url.substring(path) == nav[i])
        {
            document.getElementById(url.substring(path, url.length-5)).style.backgroundColor = 'rgb(0, 60, 91)';
            document.getElementById(url.substring(path, url.length-5)).style.color = 'white';
            document.getElementById(url.substring(path, url.length-5)).style.textDecoration = 'underline';
            document.getElementById(url.substring(path, url.length-5)).style.borderRadius = '5px';
        }
    }

    const blackScreen = document.querySelector('#black-screen');

    blackScreen.addEventListener('click', (e) =>
    {
        popup.innerHTML = '';
    })
})