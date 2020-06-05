// Scripts for Tab Start
let tabWrappers = document.querySelectorAll('.tab-wrapper'); // Tab Selectors

// Looping through each of the tab wrappers
tabWrappers.forEach(wrapper => {
    let tabSelectors = wrapper.querySelectorAll('.tab-item'); // Tab Selectors
    let tabContents = wrapper.querySelectorAll('.tab-content'); // Tab Contents

    function tabHandler(e) {
        e.preventDefault(); // Prevent Default action
        let currentTarget = e.currentTarget; // Current target, where event listener fires
        let selectedTabNum = currentTarget.dataset.tab; // Selected tab number
    
        // Looping through each of the tab selectors
        tabSelectors.forEach(item => {
            // Remove 'active' class from all tab selectors
           item.classList.remove('active');
        });

        // Add 'active' class to the current 'tab selector'
        currentTarget.classList.add('active');
    
    
        let j = 1; // Initialize counter
        // Looping through each of the tab contents
        tabContents.forEach(content => {
            // Assigning custom data tab number to each tab content
            content.dataset.tab = j;
            j++;
    
            // Remove 'active' class from all tab panel
            content.classList.remove('active');
    
            // Add 'active' class to the 'tab content'
            if(content.dataset.tab === selectedTabNum) {
                content.classList.add('active');
            }
        });
    }

    let i = 1; // Initialize counter
    // Looping through each tab selector
    tabSelectors.forEach((selector, index, tabSelectors) => {
        // Assigning custom data tab number to each tab selector
        selector.dataset.tab = i;
        i++;

        // Run event listener for each tab selector
        selector.addEventListener('click', tabHandler, true);
    });
});
// Scripts for Tab End