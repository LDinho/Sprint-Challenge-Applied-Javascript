class Carousel {
  constructor (carousel){
    this.carousel = carousel;

    this.leftBtn = this.carousel.querySelector('.left-button')
    this.rightBtn = this.carousel.querySelector('.right-button')
    this.allImages = this.carousel.querySelectorAll('img')

    this.index = 0;
    this.leftBtn.style.visibility = 'hidden';

    this.show();

    this.rightBtn.addEventListener('click', ()=>{
      this.hide();
      this.index = this.index + 1;
      this.maybeShowRightBtn();
      this.maybeShowLeftBtn();
      this.show()
    })

    this.leftBtn.addEventListener('click', ()=>{
      this.hide();
      this.index = this.index - 1;
      this.maybeShowLeftBtn();
      this.maybeShowRightBtn();
      this.show()
    })

  }

  show() {
    this.allImages[this.index].style.display="block";
  }

  hide() {
    this.allImages[this.index].style.display="none";
  }

  maybeShowRightBtn() {
    if (this.allImages.length - 1 === this.index) {
      this.rightBtn.style.visibility = 'hidden';
    } else {
      this.rightBtn.style.visibility = 'visible';
    }
  }

  maybeShowLeftBtn() {
    if (this.index > 0) {
      this.leftBtn.style.visibility = 'visible';
    } else {
      this.leftBtn.style.visibility = 'hidden';
    }
  }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
