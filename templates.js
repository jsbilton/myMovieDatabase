
module.exports = {
  film:[
    "<img src='<%= cover =%>'>",
    "<h3><%= title =%>",
    "<h4><%= director =%></h4>",
    "<h5><%= release =%></h5>",
    "<p><%= plot =%></p>"

  ].join(""),

  form:[
    <form class="filmCard" action="index.html" method="post">
      "<input type = 'cover' name = 'cover' placeholder ='cover'>"
      "<input type = 'title' name = 'title' placeholder ='title'>"
      "<input type = 'release' name = 'release' placeholder ='release'>"
      "<input type = 'director' name = 'director' placeholder ='director'>"
      "<textarea name = 'plot' placeholder = 'synopsis'></textarea>"
    </form>

  ].join(""),

  header:[
    "<h2>My Movie Database</h2>",
    "<nav>",
    "<ul>",
    "<li>",
    "</ul>",
    "</nav>"

  ].join(""),

  footer:[
    "<span>2015 &copy; Jared Bilton. All rights reserved.</span>",
  ].join(""),
};




// <div class="coverTmpl">
//   <a href="#"><%= cover %></a>
// </div>
// <div class="titleTmpl">
//   <a href="#"><%= title %></a>
// </div>
// <div class="releaseTmpl">
//   <a href="#"><%= release %></a>
// </div>
// <div class="plotTmpl">
//   <a href="#"><%= plot %></a>
// </div>

// <form class="filmCard" action="index.html" method="post">
//
//   <button type="button" class="btn btn-default">Submit</button>
//   <!-- <button type="button" class="btn btn-default">Delete</button> -->
// </form>
