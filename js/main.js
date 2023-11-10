const tabItems = document.querySelectorAll('.tab-item');
//console.log(tabItems);
const tabContentItems = document.querySelectorAll('.tab-content-item');
//console.log(tabContentItems);
//Select tab content item

function selectItem(e) {
    // add border to current tab

    removeborder();
    removeshow();
    this.classList.add('tab-border');
    // grab content from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}


//remove border
function removeborder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeshow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));