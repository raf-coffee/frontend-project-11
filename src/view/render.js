export default function (state, elements) {
  if (state.error) {
    elements.inputEl.classList.add('is-invalid');
    elements.errorEl.textContent = state.error;
  } else {
    elements.errorEl.textContent = '';
  }
}
