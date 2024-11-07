const rootStyles = document.documentElement.style;
const buttonElemnt = document.getElementById('button')
const modalElemnt = document.getElementById('modal')

const showModal = () => {
    modalElemnt.classList.add('modal-show')
}
const hideModal = () => {
    modalElemnt.classList.remove('modal-show')
}

buttonElemnt.addEventListener('click', showModal)
modalElemnt.addEventListener('click', hideModal)

