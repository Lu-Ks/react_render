const generateId = (number) => {
	const digits = `${number}`.split('');
	const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	return digits.map((digit) => values[Math.floor(Math.random() * values.length)]).join('');
}

const render = (structure, selector) => {
	console.debug('structure', structure, selector);
	const root = document.querySelector(selector);
  if (!root) return;
	const element = document.createElement(structure.type);
	let elementId = generateId(new Date().getTime());
	element.id = elementId;
	Object.entries(structure.props).forEach(([key, value]) => {
		element.setAttribute(key, value);
		if (key === "id") elementId	= value;
	});
	console.debug('element', element);
	root.appendChild(element);
	if (structure.children?.type) {
		console.debug('children is object')
		render(structure.children, `#${elementId}`);
	} else {
		console.debug('children is text')
		element.innerText = structure.children;
	}
};

const niveau1 = {
	type: "a",
	props: {
		href: 'ynov.com',
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
	render(niveau2, "#root"); // une fois que ça fonctionne avec la variable "niveau1", remplacer par "niveau2"
});
