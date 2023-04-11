const dropdownParent = document.querySelector('.nav__item.dropdown > a');
const dropdownList = document.querySelector('.dropdown-list');
let dropdownActive = dropdownParent.classList.contains('dropdown--active');

const displayDropdown = () => {
    dropdownActive = true;
    dropdownParent.classList.add('dropdown--active');
    dropdownParent.setAttribute('aria-expanded', 'true');
}

const hideDropdown = () => {
    dropdownActive = false;
    dropdownParent.classList.remove('dropdown--active');
    dropdownParent.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', event => {
    if(event.target === dropdownParent){
        // prevent clicking the parent from navigating to a new page
        event.preventDefault();

        dropdownActive ? hideDropdown() : displayDropdown();
    } else if(event.target !== dropdownList){
        hideDropdown();
    }
    
});

// add an event listener to the document so that the escape key closes the dropdown
document.addEventListener('keydown', event => {
    // check if the pressed key is the escape key
    if (event.key === "Escape") {
        hideDropdown();
    }
});

