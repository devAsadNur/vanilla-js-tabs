// Scripts for Tab Start
let tabWrappers = document.querySelectorAll('.tab-wrapper'); // Tab Wrappers

// Looping through each of the tab wrappers
tabWrappers.forEach(wrapper => {
    let tabSelectors = wrapper.querySelectorAll('.tab-item'); // Tab Selectors
    let tabPanels = wrapper.querySelectorAll('.tab-panel'); // Tab Panles

    // Tab handler function
    function tabHandler(e) {
        e.preventDefault(); // Prevent default action
        let currentTarget = e.currentTarget; // Current target, where event listener sets
        let currentTabNum = currentTarget.dataset.tab; // Current tab number
    
        // Looping through each of the tab selectors
        tabSelectors.forEach(item => {
            // Remove 'active' class from all tab selectors
           item.classList.remove('active');
        });
        // Add 'active' class to the current 'tab selector'
        currentTarget.classList.add('active');
    
        // Looping through each of the tab panels
        tabPanels.forEach(panel => {
            // Remove 'active' class from all tab panels
            panel.classList.remove('active');
            // Add 'active' class to the current 'tab panel'
            if(panel.dataset.tab === currentTabNum) {
                panel.classList.add('active');
            }
        });
    }

    // Looping through each tab selector
    tabSelectors.forEach((selector, index, tabSelectors) => {
        // Run event listener for each tab selector
        selector.addEventListener('click', tabHandler, true);
    });
});
// Scripts for Tab End