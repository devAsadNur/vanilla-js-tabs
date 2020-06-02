// Scripts for Tab Start
let tabWrappers = document.querySelectorAll('.tab-wrapper'); // Tab Selectors

// Looping through each of the tab wrappers
tabWrappers.forEach(wrapper => {
    let tabSelectors = wrapper.querySelectorAll('.tab-item'); // Tab Selectors
    let tabContents = wrapper.querySelectorAll('.tab-content'); // Tab Contents

    // Looping through each tab selector
    tabSelectors.forEach((selector, index, tabSelectors) => {

        // Run event listener for each tab selector
        selector.addEventListener('click', function (e) {

            let selectedTabNum = e.target.dataset.tab; // Selected tab number

            // Looping through each of the tab selectors
            tabSelectors.forEach(item => {

                // If 'tab selector' not equel to 'triggered tab', then remove 'active' class 
                // Else add 'active' class to the 'tab selector'
                if(item.dataset.tab !== selectedTabNum) {
                    item.classList.remove('active');
                } else {
                    this.classList.add('active');
                }
            });

            // Looping through each of the tab contents
            tabContents.forEach(content => {

                // If 'tab content' not equel to 'selected tab', then remove 'active' class
                // Else add 'active' class to the 'tab content'
                if(content.dataset.tab !== selectedTabNum) {
                    content.classList.remove('active');
                } else {
                    content.classList.add('active');
                }
            });

        });
    });

});
// Scripts for Tab End