/* main.js file that controls the pdf viewer navigation, functionality*/

/* 1. Selecting the HTML Elements 

The first step is to get references to the HTML elements we need to interact with. 
This is done using document.getElementById().

*/

const pageInfo = document.getElementById('pageInfo');
const previousPageButton = document.getElementById('previousPage');
const nextPageButton = document.getElementById('nextPage');

/* 2. Setting Up Event Listeners */

let pageNum = 1; // Starts on the first page
let pdfDoc = null; // A variable to hold the loaded PDF document object


/* 3. The Navigation Functions

The previousPageButton and nextPageButton each have an event listener that triggers 
a function when clicked.

*/

previousPageButton.addEventListener('click', () => {
    if (pageNum <= 1) {
        return ; // Prevent going to a page number less than 1
    }
    pageNum--;
    updatePageInfo();
});

nextPageButton.addEventListener('click', () => {
    if (pageNum >= pdfDoc.numPages) {
        return ; // Prevent going to a page number greater than the total
    }
    pageNum++;
    updatePageInfo();
}); 

