const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

// btn.addEventListener('click', () => alert('hu'))

// for(let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => console.log(btns[i]))
// }

btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        btns.forEach((item) => {
            item.classList.remove('feature__link_active')
        })
        item.classList.add('feature__link_active')

        lists.forEach((listItem) => {
            listItem.classList.add('hidden')
        })

        lists[index].classList.remove('hidden')
    })
})