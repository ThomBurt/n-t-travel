function searchItinerary() {
    
   const input = document.getElementById('filter').value.toUpperCase();
   //console.log(input)

   const blogContainer = document.getElementById('card-lists');

   const blogs = blogContainer.getElementsByClassName('blog-card');

   
   for(let i = 0; i < blogs.length; i++) {
    let title = blogs[i].querySelector(".blog-body h3.blog-title");
    console.log(title)
    if(title.innerText.toUpperCase().indexOf(input) > -1) {
        blogs[i].style.display = "";
    } else {
        // blogs[i].style.display = "none";
        //blogs[i].classList.add("display-none");
        blogs[i].setAttribute('style', 'display: none !important;');
    }
   }
}


// function searchBlogs() {
//     const input = document.getElementById('filter').value.toUpperCase();

//     const cardContainer = document.getElementById('card-lists');
    
//     const cards = cardContainer.getElementsByClassName('card')

//     for(let i = 0; i < cards.length; i++) {
//         let title = cards[i].querySelector(".card-body h5.card-title");
//         console.log(title)

//         if(title.innerText.toUpperCase().indexOf(input) > -1) {
//             cards[i].style.display = "";
//         } else {
//             cards[i].classList.add("display-none");
//         }
//     }
// }