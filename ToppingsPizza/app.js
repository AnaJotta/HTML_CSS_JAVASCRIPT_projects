/*const listadeToppings = document.getElementById('lista-toppings');

/*const toppingNuevo = document.createElement('li');

toppingNuevo.classList.add('topping' , 'fondo-marron');
toppingNuevo.innerText = 'Queso Extra';

listadeToppings.append(toppingNuevo);*/

/*console.dir(listadeToppings.parentNode);*/

/*console.dir(listadeToppings.children);*/

const toppings = document.getElementsByClassName('topping');

function mostrarClic(e) {
    console.log(e.target.innerText);
}

for (const topping of toppings) {
    topping.addEventListener('click', mostrarClic);
}








