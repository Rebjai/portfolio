$ = (str) => document.querySelector(str);
$$ = (str) => document.querySelectorAll(str);

let carrouselItems = $$('.carrousel_item');
let activeIndex = 0;
let total = carrouselItems.length;

const addClass = (HTMLelement, className) => {
    // console.log(HTMLelement);
    
    let inElement = HTMLelement.classList.contains(className);
    if (!inElement) {
        HTMLelement.classList.add(className)
    }
    else{
        console.log('removing...', className , HTMLelement);
        
        HTMLelement.classList.remove(className)
    }

}
let checkActive = (e) => {
    clickedElement = e.currentTarget;
    let isActive = carrouselItems[activeIndex] == clickedElement;
    let active = activeIndex;
    let currentItem = (total + activeIndex) % total;
    let nextItem = (total + (activeIndex + 1)) % total;
    let prevItem = (total + (activeIndex - 1)) % total;
    console.log(currentItem, nextItem, prevItem);
    
    if (isActive) {
        console.log('noting');
    }
    else {
        carrouselItems.forEach((el, i) => {

            let isClicked = el == clickedElement

            if (isClicked) {
                let newCurrentItem = (total + i) % total;
                let newNextItem = (total + (i + 1)) % total;
                let newPrevItem = (total + (i - 1)) % total;
                active = i
                activeIndex = i
                addClass(carrouselItems[currentItem], 'item-active')
                addClass(carrouselItems[nextItem], 'item-right')
                addClass(carrouselItems[prevItem], 'item-left')

                addClass(el, 'item-active')
                addClass(carrouselItems[newNextItem], 'item-right')
                addClass(carrouselItems[newPrevItem], 'item-left')
                
            }
        })
    }
    console.log(active);


}

carrouselItems.forEach((element, i) => {
    let currentItem = (total + activeIndex) % total;
    let nextItem = (total + (activeIndex + 1)) % total;
    let prevItem = (total + (activeIndex - 1)) % total;
    if (i == currentItem) {
        addClass(element, 'item-active')
    }
    else if (i == nextItem) {
        addClass(element, 'item-right')
    }
    else if (i == prevItem) {
        addClass(element, 'item-left')
    }
    // element.addEventListener('click', function(){
    //     console.log(this);
    // })
    element.addEventListener('click', (e) => checkActive(e))
})




// 1 - 0
// 2 - 1
// 3 - 2
// 4 - 3

// 
// 
// 
// 

// 2
// 3
// 1







// console.log(carrouselItems[0], total);
