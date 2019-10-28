let menuItems = [
  {
    itemName: "Home",
    itemLink: "F:/Code/Web Development/website/index.html"
  },
  {
    itemName: "Book Review",
    itemLink: "F:/Code/Web Development/website/index.html"
  },
  {
    itemName: "K12 Learning",
    itemLink: 'F:/Code/Web Development/website/pages/k12.html'
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Header code starts from here

  let navBar =
    '<nav class="navbar is-transparent"><div class="navbar-brand"> \
<a class="navbar-item" href="index.html"><h3>Yashwardhan Blog</h3></a> \
<div class="navbar-burger burger" data-target="navbarExampleTransparentExample"> \
<span></span><span></span><span></span></div></div> \
<div id="navbarExampleTransparentExample" class="navbar-menu"> \
<div class="navbar-start">'


  for (let index = 0; index < menuItems.length; index++) {
    navBar +=
      '<a class="navbar-item" href="' +
      menuItems[index].itemLink +
      '">' +
      menuItems[index].itemName +
      "</a>";
  }

  /* <a class="navbar-item" href="#">Home</a> \
    <a class="navbar-item" href="#">Book Reviews</a> \
    <a class="navbar-item" href="#">K12 Learning Tools</a> \ */

  navBar += '</div><div class="navbar-end"></div></div></nav>';

  document.getElementById("nav-bar").innerHTML = navBar;

  // Header code ends here

  // Footer code Starts here

  let footerCommon =
    '<footer class="footer has-background-dark"> \
    <div id="social-icon" class="content has-text-center"> <a href="https://www.facebook.com/yash.takor">   \
    <i class="fab fa-facebook-square is-size-3 has-text-white object-pad "></i></a>          <i class="fab fa-instagram is-size-3 has-text-white object-pad"></i>         <i class="fab fa-twitter-square is-size-3 has-text-white object-pad"></i>             <i class="fab fa-whatsapp-square is-size-3 has-text-white object-pad"></i> <i class="fas fa-envelope-square is-size-3 has-text-white object-pad"></i> </div> \
    <div class="content has-text-center">  <span class="is-size-7 has-text-white"> © Yashwardhan Thakur</span> </div> </footer> ';

  document.getElementById("footer").innerHTML = footerCommon;
  // End here
});

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

          });
      });
  }

});