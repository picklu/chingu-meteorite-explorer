export default (tagName = 'h3', text = 'Hello, World!') => {
  const element = document.createElement(tagName);

  element.innerHTML = text;

  return element;
};
