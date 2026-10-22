const book = document.querySelector('.book');
const dialog = document.querySelector('#book-dialog');
const closeButton = document.querySelector('.close');

book.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // The site remains fully usable online if service-worker registration fails.
    });
  });
}
