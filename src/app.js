import validator from './utils/validator';
import render from './view/render';
import store from './store/store';

export default () => {
  const elements = {
    formEl: document.querySelector('.rss-form'),
    inputEl: document.getElementById('url-input'),
    errorEl: document.getElementById('input-error'),
  };

  elements.formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(elements.formEl);
    validator({ url: formData.get('url') })
      .then((data) => {
        store.formInput.isValid = true;
        store.formInput.error = '';
        store.feeds.push(data.url);
        render(store, elements);
      })
      .catch((e) => {
        store.formInput.isValid = false;
        store.formInput.error = e.message;
        render(store, elements);
      });
  });
};
