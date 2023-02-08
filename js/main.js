document.addEventListener('DOMContentLoaded', function () {
  // choices
  const element = document.querySelector('.js-choice');
  new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

  // formValidate
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error !== 0) {
      alert('Заполните форму!')
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    console.log(error);
    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }

    let sel = document.querySelector('.choices__item--selectable');
    let choices = document.querySelector('.choices');

    if (sel.dataset.id === '1') {
      formAddError(choices);
      error++;
    } else {
      formRemoveError(choices)
    }

    return error
  }


  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});



