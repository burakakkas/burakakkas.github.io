// Main post area with latest post feature
$(document).ready(function () {
  var index = 0;
  fetch("blog-data.json") //1
    .then((response) => response.json()) //2
    .then((data) => {
      while (index <= 3) {
        $.each(data["Posts"], function (idx, post) {
          if (index == idx) {
            $("#blog-post").append(
              '<article class="row blog_item">' +
              '<div class="col-md-3">' +
              '<div class="blog_info text-right">' +
              '<div class="post_tag">' +
              '<a class="active" href="#">Technology</a>' +
              '</div>' +
              '<ul class="blog_meta list">' +
              '<li><a href="#">YBA<i class="lnr lnr-user"></i></a></li>' +
              '<li><a href="#">' + post["post-date"] + '<i class="lnr lnr-calendar-full"></i></a></li>' +
              '<li><a href="#">' + post["view-num"] + ' Views<i class="lnr lnr-eye"></i></a></li>' +
              '</ul>' +
              '</div>' +
              '</div>' +
              '<div class="col-md-9">' +
              '<div class="blog_post">' +
              '<img src="img/blog/posts/post-' + post["post-id"] + '/cover.jpg" alt="">' +
              '<div class="blog_details">' +
              '<a href="blog-posts/single-blog-' + post["post-id"] + '.html"><h2>' + post["post-title"] + '</h2></a>' +
              '<p>' + post["post-desc"] + '</p>' +
              '<a href="blog-posts/single-blog-' + post["post-id"] + '.html" class="white_bg_btn">View More</a>' +
              '</div>' +
              '</div>' +
              '</div>' +
              '</article>'
            );
            index = index + 1;
          }
        });
      }
    });
});

// Popular post area with most view post feature
$(document).ready(function () {
  var index = 0;
  fetch("../popular-posts.json")
    .then((response) => response.json())
    .then((data) => {
      while (index <= 3) {
        post = data["Posts"][index]
        $("#popular-posts").append(
          '<div class="media post_item">' +
          '<a href="blog-posts/single-blog-' + post["post-id"] + '.html" style="width:50%"><img style="width:100%" src="img/blog/posts/post-' + post["post-id"] + '/cover.jpg" alt="post"></a>' +
          '<div class="media-body">' +
          '<a href="blog-posts/single-blog-' + post["post-id"] + '.html"><h3>' + post["post-title"] + '</h3></a>' +
          '</div>' +
          '</div>'
        );
        index = index + 1;
      }
    });
});





