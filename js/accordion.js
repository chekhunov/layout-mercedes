const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        btns[index].classList.toggle('feature__link_active')
        lists[index].classList.toggle('hidden')
    })
})