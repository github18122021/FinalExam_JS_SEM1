let header = document.querySelector('#header');
let footer = document.querySelector('#footer');

fetch('../global/header.html')
    .then(response => response.text())
    .then(html => header.innerHTML = html);

fetch('../global/footer.html')
    .then(response => response.text())
    .then(html => footer.innerHTML = html);
