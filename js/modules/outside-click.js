export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const dataOutside = 'data-outside';
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(dataOutside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
  if (!element.hasAttribute(dataOutside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAttribute(dataOutside, '');
  }
}
