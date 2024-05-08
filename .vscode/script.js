function toggleMode() {
    const html = document.documentElement
html.classList.toggle('light')

// pegar a tap img
const img = document.querySelector("#profile img")

//subsitituir a imagem
if(html.classList.contains('light')) {
// se tiver light mode, adicionar img light
img.setAttribute('src', './assets/anjo-porreta.jpg')
img.setAttribute('alt', 'anjo gente fina')

} else {
    img.setAttribute('src', './assets/capeta-brabo.jpg')
    img.setAttribute('alt', 'capeta doidao')

// se n light mode = img normal
}

}