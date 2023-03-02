const generateId = (number) => {
  const digits = `${number}`.split('');
  const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return digits.map(() => values[Math.floor(Math.random() * values.length)]).join('');
};

const render = (structure, selector) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const newElement = document.createElement(structure.type);

  newElement.href = structure.props.href ?? '';
  newElement.style = structure.props.style ?? '';
  newElement.target = structure.props.target ?? '';
  newElement.className = structure.props.class ?? '';
  newElement.id = structure.props.id ?? selector.slice(1);

  if (typeof structure.children === 'string') {
    newElement.innerHTML = structure.children ?? '';
  }

  element.appendChild(newElement);

  if (!structure.children) return;
  const elementId = generateId(new Date().getTime());

  if (structure.props.id) render(structure.children, `#${structure.props.id}`);
  if (structure.props.class) render(structure.children, `.${structure.props.class}`);
  render(structure.children, `#${elementId}`);
};

const niveau1 = {
  type: 'a',
  props: {
    href: 'ynov.com',
    style: 'color: #23b2a4; font-size: 40px',
  },
  children: `Lien vers ynov`,
};

const niveau2 = {
  type: 'div',
  props: {
    id: 'container',
    style: 'padding: 10px 30px; background: #23b2a4; display: inline-block',
  },
  children: {
    type: 'a',
    props: {
      href: 'http://ynov.com',
      target: '_blank',
      class: 'link',
      style: 'text-decoration: none'
    },
    children: {
      type: 'p',
      props: {
        style: 'color: white; font-size: 25px',
      },
      children: 'YNOV',
    },
  },
};

window.addEventListener('load', () => {
  render(niveau2, '#root'); // une fois que ça fonctionne avec la variable "niveau1", remplacer par "niveau2"
});