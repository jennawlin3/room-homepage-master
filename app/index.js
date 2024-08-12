// Slider

const leftArrow = document.querySelectorAll(".arrow-left");
const rigthArrow = document.querySelectorAll(".arrow-right");
const $slider = document.querySelector(".slider-hero_container");
let count = 1;
let countLeft = 0;
let width = 0;

rigthArrow.forEach((rightBtn) => {
    rightBtn.addEventListener("click", e => {
    if(e) {
        if(count !== 3) {
        width = count * -100;
        $slider.style.transform = `translateX(calc(${count} * (-100vw)))`;
        count++;
        } else {
         return
            }
        }
    })
})

leftArrow.forEach(leftBtn => {
    leftBtn.addEventListener("click", e => {
        if(e) {
            if(count === 1) {
                return;
            } else {
                $slider.style.transform = `translateX(${width + 100}vw)`;
                count--;
                width += 100;            
            }
        }
    })
})

// Menu

const $iconMenu = document.querySelector(".icon-menu");
const $mobileMenu = document.querySelector(".mobile-nav");
const $overlay = document.querySelector(".overlay");

$iconMenu.addEventListener("click", e => {
    if (e) {
        $mobileMenu.classList.toggle("hide");
        $mobileMenu.classList.toggle("active");

        if($mobileMenu.classList.contains("active")) {
            console.log($iconMenu.getAttribute);
            $iconMenu.setAttribute ("src", "./images/icon-close.svg");
             $overlay.classList.remove("hide");
        } else {
            $iconMenu.setAttribute("src", "./images/icon-hamburger.svg");
            $overlay.classList.add("hide");
        }
    }
})

// Button effect 

const $slideBtn = document.querySelectorAll(".slide-btn");
const $arrowBtn = document.querySelectorAll(".arrow-btn");

console.log($arrowBtn);

$slideBtn.forEach((slideBtn) => {
    slideBtn.addEventListener("mouseover", e => {
    if(e) {
    $arrowBtn.forEach((arrow) => {
      arrow.setAttribute("src", "./images/icon-arrowEffect.svg");
            })
        }
    })
}) 

$slideBtn.forEach((slideBtn) => {
    slideBtn.addEventListener("mouseout", e => {
    if(e) {
    $arrowBtn.forEach((arrow) => {
      arrow.setAttribute("src", "./images/icon-arrow.svg");
            })
        }
    })
}) 

