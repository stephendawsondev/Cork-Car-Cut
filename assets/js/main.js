// select menu dropdown item
const dropdownParent = document.querySelector('.nav__item.dropdown > a');
const dropdownList = document.querySelector('.nav__item.dropdown > .dropdown-list');


// add the click event listener to toggle the menu item
dropdownParent.addEventListener('click', event => {
    // prevent clicking the parent from navigating to a new page
    event.preventDefault();

    let dropdownActive = dropdownParent.classList.contains('dropdown--active')

    // if the dropdown is active then set aria-expanded to false
    // otherwise set it to true
    if(dropdownActive){
        dropdownParent.setAttribute('aria-expanded', 'false')
    } else {
        dropdownParent.setAttribute('aria-expanded', 'true')
    }
    
    // this adds the class if not present then removes it if it is present
    dropdownParent.classList.toggle('dropdown--active')
})