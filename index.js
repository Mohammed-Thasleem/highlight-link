const links = Array.from(document.querySelectorAll('a'))
const hightlight = document.createElement('span')
hightlight.classList.add('highlight')
document.body.append(hightlight)

function hightlightLink() {
    const linkSize = this.getBoundingClientRect()
    console.log(linkSize);

    const coordinates = {
        width: linkSize.width,
        height: linkSize.height,
        top: linkSize.top - window.scrollY,
        left: linkSize.left - window.scrollX
    }

    hightlight.style.width = `${coordinates.width}px`;
    hightlight.style.height = `${coordinates.height}px`;
    hightlight.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`
}

links.forEach(a => a.addEventListener('mouseenter', hightlightLink))