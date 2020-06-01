// Scripts for Tab Start
let tabSelectors = document.querySelectorAll('.tab-item'); // Tab Selectors
let tabContents = document.querySelectorAll('.tab-content'); // Tab Contents

// Looping through each tab selector
tabSelectors.forEach((selector, index, tabSelectors) => {

    // Run event listener for each tab selector
    selector.addEventListener('click', function (e) {

        // Class list of each tab selector
        let taretElementClasses = e.target.classList;

        // Looping through each class name of each tab selector
        taretElementClasses.forEach(singleClass => {

            // If 'tab selector' not equel to 'triggered tab', then remove 'active' class 
            // Else add 'active' class to the 'tab selector'
            if (singleClass !== `tab-item-${index+1}`) {
                tabSelectors.forEach(tabSelector => {
                    tabSelector.classList.remove('active');
                });
            } else {
                this.classList.add('active');
            }
        });

        // Looping through each tab contents
        tabContents.forEach((content) => {

            // If 'tab content' not equel to 'selected tab', then remove 'active' class 
            // Else add 'active' class to the 'tab content'
            if (!content.classList.contains(`tab-content-${index+1}`)) {
                content.classList.remove('active');
            } else {
                content.classList.add('active');
            }
        });

    });
});
// Scripts for Tab End