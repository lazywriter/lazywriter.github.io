document.addEventListener('DOMContentLoaded', () => {

    let k12 = JSON.parse(k12Data)
    let k12Id = 0;
    for (let index = 0; index < k12.length; index++) {
        if (window.location.href.includes(k12[index].bookPageUrl.slice(1))) {
            // document.getElementById("book-name").innerText = books[index].bookName;
            k12Id = index;
            break;
        }
    }

    
    document.getElementById("contentTitle").innerHTML = k12[k12Id].contentTitle;
    document.getElementById("content").innerHTML = k12[k12Id].content;
    
});