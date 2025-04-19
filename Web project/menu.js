const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
const modal = document.getElementById('item-modal');
const closeModal = document.getElementById('close-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDescription = document.getElementById('modal-description');
const modalIngredients = document.getElementById('modal-ingredients');
const modalTime = document.getElementById('modal-time');
const menuItems = {
    appetizers: [
        {
            id: 1,
            name: "Truffle Arancini",
            image: "https://images.pexels.com/photos/5638713/pexels-photo-5638713.jpeg",
            price: "$14",
            description: "Crispy risotto balls infused with black truffle and mozzarella, served with truffle aioli.",
            ingredients: ["Arborio rice", "Black truffle", "Mozzarella", "Breadcrumbs", "Truffle oil"],
            time: "15 minutes"
        },
    ],
    mains: [
        {
            id: 101,
            name: "Filet Mignon",
            image: "https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg",
            price: "$42",
            description: "8oz grass-fed beef tenderloin with red wine reduction, served with truffle mashed potatoes and seasonal vegetables.",
            ingredients: ["Beef tenderloin", "Red wine", "Shallots", "Truffle", "Potatoes"],
            time: "25 minutes"
        },
    ],
};
function openModal(item) {
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDescription.textContent = item.description;
    modalIngredients.innerHTML = '';
    item.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
    });
    
    modalTime.textContent = item.time;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Menu website initialized');
});