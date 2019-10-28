document.addEventListener('DOMContentLoaded', () => {

    // Books three cards

    // Getting data from Books data
    let k12 = JSON.parse(k12Data);

    let k12CardHTML = '<div class="container"><div class="columns">' // Need to close this tags in the end
    for (let index = 0; index < 3; index++) {
        k12CardHTML += '<div class="column"><div class="card"> \
            <a href="' + k12[index].k12PageUrl + '"><div class="card-image"><figure class="image is-3by5"> \
            <img src="' + k12[index].contentImage + '"></figure></div></a> \
            <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"> \
            <p class="title is-4">' + k12[index].contentTitle + '</p> \
            <a class="button is-primary" href="' + k12[index].k12PageUrl + '">Read More</a></div> \
            </div></div>';
    }
    k12CardHTML += '</div></div>';
    document.getElementById('k12Card').innerHTML = k12CardHTML;
});