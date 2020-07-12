const slider = document.querySelector('.slider');
const links = document.querySelectorAll('.go-to-next');

slider1 = document.querySelector('.slider__slide:nth-child(1)');
let width = '';
width = slider.getBoundingClientRect().width;

window.addEventListener('resize', function(){
    width = slider.getBoundingClientRect().width;
})


console.log(width);

links[0].addEventListener('click', function()
{
    document.body.style.transform += `translateX(-${width/3}px)`;
})


links[1].addEventListener('click', function(){
    document.body.style.transform += `translateX(-${width/3}px)`;
})

links[2].addEventListener('click', function(){
    document.body.style.transform += `translateX(${width - width/3}px)`;

    

})