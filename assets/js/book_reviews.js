document.addEventListener('DOMContentLoaded', () => {
    // Getting data from Books data
    let books = JSON.parse(booksData);
    let bookId = 0;
    for (let index = 0; index < books.length; index++) {
        if (window.location.href.includes(books[index].bookPageUrl.slice(1))) {
            // document.getElementById("book-name").innerText = books[index].bookName;
            bookId = index;
            break;
        }
    }

    document.getElementById("book-name").innerHTML = books[bookId].bookName;
    document.getElementById("book-intro").innerHTML = books[bookId].bookIntroduction;
    document.getElementById("book-content").innerHTML = books[bookId].bookPlotSummary;
    document.getElementById("book-preview").innerHTML = books[bookId].bookPersonalReview






});