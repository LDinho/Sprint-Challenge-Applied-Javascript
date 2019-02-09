class Carousel {
  constructor (carousel){
    this.carousel = carousel;
    console.log('WORK:', this.carousel);

    this.leftBtn = this.carousel.querySelector('.left-button')
    this.rightBtn = this.carousel.querySelector('.right-button')
    this.allImages = this.carousel.querySelectorAll('img')

    this.index = 0;
    // this.index = 1;
    console.log('WHAT IS THIS:', this.index)
    this.allImages[this.index].style.display="block";

    this.rightBtn.addEventListener('click', ()=>{
      this.index = this.index + 1;
      this.allImages[this.index].style.display="block";
      console.log(this.index);
    })

    this.leftBtn.addEventListener('click', ()=>{
      this.index = this.index - 1;
      this.allImages[this.index].style.display="block";
      console.log(this.index);
    })
    console.log('INDEX:',this.index);

  }

}

let carousel = document.querySelector('.carousel');
const carouselInstance = new Carousel(carousel);
console.log('HEREERE::', carouselInstance);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
