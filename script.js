const images = [
    "images/slide/img01.png",
    "images/slide/img03.png",
    "images/slide/img02.png",
    "images/slide/img04.png",

]
const headline = [
    'Find your SoulMate',
    'Keep your Commitment',
    'WE Create Couple',
    'WE Create FAmily',

]
let imgIndex = 0
const imgElement = document.getElementById('slider');
let headingIndex = 0
const headingElement = document.getElementById('slider')
setInterval(() => {
    if (headingIndex >= headline.length) {
        headingIndex = 0
    };
    const headingUrl = headline[headingIndex];
    headingElement.setAttribute('src', headingUrl)
    headingIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++

}, 2000)
