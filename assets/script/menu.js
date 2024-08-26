const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    // Se o menu está escondido
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Mostrar o menu
    } else {
        menu.style.display = 'none'; // Esconder o menu
    }
});