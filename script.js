const images = [
    "images/slide/img01.png",
    "images/slide/img03.png",
    "images/slide/img02.png",
    "images/slide/img04.png",

]
let imgIndex = 0
const imgElement = document.getElementById('slider');
let headingIndex = 0
const headingElement = document.getElementById('slider')
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++

}, 2000)

const blogs = document.getElementsByClassName('blog')
for (const blog of blogs) {
    blog.innerHTML = fdsgfdsfg`<h1>fghdfhdfh</h1>`
    console.log(blog.innerHTML)
}

