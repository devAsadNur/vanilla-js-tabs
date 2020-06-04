// Scripts for Tab Start
var tabWrappers = document.querySelectorAll('.tab-wrapper'); // Tab Selectors

/*
    Function for click event
*/
function tabClick(e) {
    e.preventDefault();

    var target = e.target; //get terget event
    var filterDataTab = target.dataset.tab; //get filter tab data tab
    var filerClass = Object.values(target.classList).indexOf('tab-item'); //check filter tab class exist or not

    if( 'LI' === target.nodeName && 'undefined' !== filterDataTab && -1 !== filerClass ){
        var allFilterItem =  target.parentElement.childNodes; //get all filter tab item
        var content = this.querySelectorAll('.tab-content') //get all content body

        // Add and remove active class from all filter tab
        allFilterItem.forEach( function(filter){
            if('classList' in filter){
                filter.classList.remove('active');
            }   
        });

        // Add active class to clicked filter tab
        target.classList.add('active');  

        // Add and remove active class to content
        content.forEach( function(contentItem){
            var contentDataTab = contentItem.dataset.tab;
            if( filterDataTab !== contentDataTab ){
                contentItem.classList.remove('active');
            } else {
                contentItem.classList.add('active');
            }
        });
    }

}

tabWrappers.forEach( function(item, index, arr) {
    item.addEventListener('click', tabClick,true);
});
// Scripts for Tab End