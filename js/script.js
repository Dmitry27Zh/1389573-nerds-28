var feedbackButton = document.querySelector('.button-feedback');
var modal = document.querySelector('.modal');
var modalClose = modal.querySelector('.modal-close');
var modalForm = modal.querySelector('.message');
var inputName = modalForm.querySelector('[name=user-name]');
var inputEmail = modalForm.querySelector('[name=user-email]');
var inputText = modalForm.querySelector('[name=text]');
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

if (isStorageSupport) {
  storageEmail = localStorage.getItem('user-email');
}

feedbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  if (isStorageSupport) {
    if (storageName) {
      inputName.value = storageName;
      if (storageEmail) {
        inputEmail.value = storageEmail;
        inputText.focus();
      } else {
        inputEmail.focus();
      }
    }
  }
  else {
    inputName.focus();
  }
})

// Валидация формы

modalForm.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputEmail.value || !inputText.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal-error');
  } else {
    localStorage.setItem('user-name', inputName.value);
    localStorage.setItem('user-email', inputEmail.value);
  }
})

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.remove('modal-show');
    modal.classList.remove('modal-error');
  }
})

