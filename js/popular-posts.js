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
                    '<a href="single-blog-' + post["post-id"] + '.html" style="width:50%"><img style="width:100%" src="../img/blog/posts/post-' + post["post-id"] + '/cover.jpg" alt="post"></a>' +
                    '<div class="media-body">' +
                    '<a href="single-blog-' + post["post-id"] + '.html"><h3>' + post["post-title"] + '</h3></a>' +
                    '</div>' +
                    '</div>'
                );
                index = index + 1;
            }
        });
});