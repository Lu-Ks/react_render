
const render = (structure, selector) => {
    const elt = document.createElement(structure.type);
    const container = document.querySelector(selector);
    container.appendChild(elt)
    console.log(container)
    for (let prop in structure.props) {
        elt.setAttribute(prop, structure.props[prop]);
    }
    if (typeof structure.children == "string") {
        elt.innerHTML = structure.children;
    }
    
};

const niveau1 = {
    type: "a",
    props: {
        href: 'https://ynov.com',
        style: 'color: #23b2a4; font-size: 40px',
    },
    children: `Lien vers ynov`,
}

const niveau2 = {
    type: "div",
    props: {
        id: 'container',
        style: 'padding: 10px 30px; background: #23b2a4; display: inline-block',
    },
    children: {
        type: "a",
        props: {
            href: 'http://ynov.com',
            target: '_blank',
            class: 'link',
            style: 'text-decoration: none'
        },
        children: {
            type: "p",
            props: {
                style: 'color: white; font-size: 25px',
            },
            children: 'YNOV',
        },
    },
}

window.addEventListener('load', () => {
    render(niveau1, "#root"); // une fois que ça fonctionne avec la variable "niveau1", remplacer par "niveau2"
});