const render = (structure, selector) => {
  const element =
    typeof selector === "string" ? document.querySelector(selector) : selector;

  const { type, props, children } = structure;

  // Création de l'élément
  const newElement = document.createElement(type);

  // Ajout des propriétés
  Object.keys(props).forEach((prop) => {
    // newElement.setAttribute(prop, props[prop]);
    newElement[prop] = props[prop];
  });

  // Ajout des enfants
  switch (typeof children) {
    case "string":
      newElement.innerHTML = children;
      break;
    case "object":
      render(children, newElement);
      break;
    case "array":
      children.forEach((child) => render(child, newElement));
      break;
    default:
      throw new Error("Type de children non supporté");
  }

  // Ajout de l'élément dans le DOM
  element.appendChild(newElement);
};

const niveau1 = {
  type: "a",
  props: {
    href: "http://ynov.com",
    style: "color: #23b2a4; font-size: 40px",
  },
  children: `Lien vers ynov`,
};

const niveau2 = {
  type: "div",
  props: {
    id: "container",
    style: "padding: 10px 30px; background: #23b2a4; display: inline-block",
  },
  children: {
    type: "a",
    props: {
      href: "http://ynov.com",
      target: "_blank",
      class: "link",
      style: "text-decoration: none",
    },
    children: {
      type: "p",
      props: {
        style: "color: white; font-size: 25px",
      },
      children: "YNOV",
    },
  },
};

window.addEventListener("load", () => {
  render(niveau2, "#root"); // une fois que ça fonctionne avec la variable "niveau1", remplacer par "niveau2"
});
