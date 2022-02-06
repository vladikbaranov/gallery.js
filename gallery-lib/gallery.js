const GalleryClassName = 'gallery';
const GalleryLineClassName = 'gallery-line';
const GallerySlideClassName = 'gallery-slide';


class Gallery {
  constructor(element, options = {}) {
    this.containerNode = element;
    this.size = element.childElementCount;
    this.currentSlide = 0;

    this.manageHTML - this.manageHTML.bind(this);
    this.manageHTML()
  }

  manageHTML(){
     this.containerNode.classList.add(GalleryClassName);
     this.containerNode.innerHTML = `
      <div class="${GalleryLineClassName}">
        ${this.containerNode.innerHTML}
      </div>
     `;
     this.lineNode= this.containerNode.querySelector('.${GalleryLineClassName}');
     this.slidesNodes = Array.from(this.lineNode.children).map((childNode) => 
      wrapElementByDiv({
        element: childNode,
        className: GallerySlideClassName
        })
      );
  }
}