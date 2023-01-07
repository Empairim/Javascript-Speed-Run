const navBarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector('.bottom-container')

console.log(navBarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);


window.addEventListener('scroll',() => {
    if(window.scrollY > bottomContainerEl.offsetTop - navBarEl.offsetHeight - 50){
    navBarEl.classList.add('active');
}else {
    navBarEl.classList.remove('active');
    }
})