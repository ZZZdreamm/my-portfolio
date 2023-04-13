export function ObserverIsVisible(element:any, classEffect:string){
    window!.addEventListener("load", ()=>{
        const options = {
          rootMargin: '0px',
          threshold: 1.0
        };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            console.log(entry.intersectionRatio > 0 ? 'visible' : 'invisible');
            console.log(element)
            console.log(element.classList)

            if(entry.intersectionRatio < 0){
                element!.classList.remove(classEffect);
                console.log('sdsds')
            }else{
                element!.classList.add(classEffect);
            }
          });
        }, options);
      observer.observe(element);
      },false);
}