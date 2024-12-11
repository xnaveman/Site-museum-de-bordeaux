/*function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}


var fixedText = document.getElementById("fixedText");      
    var lastScrollPosition = 0; 
    function moveFixedText(newTopVH, newLeftVH) {

      var newTopPixels = window.innerHeight * (newTopVH / 100);
      var newLeftPixels = window.innerHeight * (newLeftVH / 100);

        fixedText.style.top = newTopPixels + "px";
        fixedText.style.left = newLeftPixels + "px";
    } 
    function handleScroll() {             
        var currentScrollPosition = window.scrollY || window.pageYOffset;
                    
        if (currentScrollPosition >= window.innerHeight * 0.1) {
            moveFixedText(2, 1);
        } else if (currentScrollPosition < lastScrollPosition) {
            moveFixedText(15, 1);
        }
        lastScrollPosition = currentScrollPosition;
    }
window.addEventListener("scroll", handleScroll);*/

/* VOIR PLUS TARD */

