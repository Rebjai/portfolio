$ = str => document.querySelector(str)
$$ = str => document.querySelectorAll(str)


let elements = $$('.rotate-on-scroll')

let rotateElement = (el) => {
    console.log('rotating', el);
    el.style.transform = `rotate(${window.pageYOffset}deg)`

}
let targets = {};
let isEventAdded = false

function rotation() {
    for (const property in targets) {
        targets[property].style.transform = `rotate(${window.pageYOffset}deg)`
    }
}


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        let propName = entry.target.src
        if (entry.isIntersecting) {
            if (targets[propName] == undefined) {
                console.log('adding object', propName);
                
                targets[propName] = entry.target;
            }

            if (!isEventAdded) {
                console.log('adding event');
                document.addEventListener('scroll', rotation);
                isEventAdded = true
            }

        } else {
            
            console.log('removing',propName,delete targets[propName])
            if (Object.keys(targets).length == 0 & isEventAdded) {
                console.log('removed event');
                isEventAdded = false
                document.removeEventListener('scroll', rotation);
            }

            console.log('parar de rotar', Object.keys(targets).length);

        }


    });
})

elements.forEach(el => {
    console.log('observing', el);

    observer.observe(el)
}
)

