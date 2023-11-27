const shareBtn = document.getElementsByClassName('sharebtn');
const shareBtnArr = Array.from(shareBtn);
const counter = document.querySelector('.counter')
const toggle = document.querySelector('.toggle')
const container = document.getElementsByClassName('container')[0];
const header = document.getElementsByClassName('header')[0];
const heading = document.getElementsByClassName('heading')[0];
const para = document.getElementsByTagName('p')[0];
//Share counter logic
let count = 0;
shareBtnArr.forEach(function (element) {
    element.addEventListener('click', function () {
        count++
        counter.textContent = count
    });
});

//Mode toggle logic
toggle.addEventListener('click', () => {
    if (toggle.textContent == "Light Mode") {
        toggle.textContent = "Dark Mode"
        location.href = location.href
    } else {
        toggle.textContent = "Light Mode"
        toggleDark()

    }
})

function toggleDark() {
    container.classList.add('darkMode');
    header.classList.add('darkMode-header');
    heading.classList.add('darkMode-header-h1');
    para.style.color = "white"
}
