const inputHidden = document.querySelector('.form__item__hidden')
const iconsShow = inputHidden.querySelectorAll('.icon-hide')
iconsShow.forEach(item => item.addEventListener('click', (e) => showHiddenValue(e)))
function showHiddenValue(item){
    const iconsWrapper = item.currentTarget.closest('.icon-hide')
    const icons = iconsWrapper.querySelectorAll('.icon-hide__image')
    icons.forEach(icon => icon.classList.toggle('icon-active'))
    const hiddenInput = item.currentTarget.closest('.form__item').querySelector('.form-item__input')
    if(hiddenInput.getAttribute('type') === 'password'){
        hiddenInput.setAttribute('type', 'text')
    }else{
        hiddenInput.setAttribute('type', 'password')
    }
}