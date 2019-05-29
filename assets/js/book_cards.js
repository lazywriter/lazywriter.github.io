document.addEventListener('DOMContentLoaded', () => {

    // Books three cards

    // Getting data from Books data
    let books = JSON.parse(booksData);

    let booksCardHTML = '<div class="container"><div class="columns">' // Need to close this tags in the end
    for (let index = 0; index < 3; index++) {
        booksCardHTML += '<div class="column"><div class="card"> \
            <a href="' + books[index].bookPageUrl + '"><div class="card-image"><figure class="image is-3by5"> \
            <img src="' + books[index].bookImage + '"></figure></div></a> \
            <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"> \
            <img class="is-rounded" src="' + books[index].bookAuthorImage + '"></figure></div> \
            <div class="media-content"> \
            <p class="title is-4">' + books[index].bookName + '</p> \
            <p class="subtitle is-6">' + books[index].bookSubTitle + '</p></div></div> \
            <div class="content">' + books[index].bookDescription + '</div> \
            <a class="button is-primary" href="' + books[index].bookPageUrl + '">Read More</a></div> \
            </div></div>';
    }
    booksCardHTML += '</div></div>';
    document.getElementById('bookCards').innerHTML = booksCardHTML;
});