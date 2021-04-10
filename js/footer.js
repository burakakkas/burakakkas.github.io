// Footer area 
$(document).ready(function () {
    var date = new Date().getFullYear();
    $("#footer-area").append(
        '<div class="container"><div class= "row footer_inner" >' +

        '<div class="col-lg-5 col-sm-6"><aside class="f_widget ab_widget"><div class="f_title"><h3>About Me</h3></div><p>A developer coding new ideas and own dreams on the computer most of his day. In his spare time, he likes to watch series, movies and making DIY projects.</p><p>Copyright &copy; ' + 

        date + 

        ' All rights reserved | This template is made with <i class="fa fa-coffee" aria-hidden="true"></i> by YBA </p></aside></div>' +

        '<div class="col-lg-5 col-sm-6"><aside class="f_widget news_widget"><div class="f_title"><h3>Newsletter</h3></div><p>Stay updated with our latest trends</p><div id="mc_embed_signup"><form target="_blank" action="https://ybakkas.us2.list-manage.com/subscribe/post?u=784b8b5a8db8aef124db7c48e&amp;id=4f328fad88" method="post" class="subscribe_form relative" novalidate><div class="input-group d-flex flex-row"><input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'Email Address \'" required="" type="email"><button class="btn sub-btn"><span class="lnr lnr-arrow-right"></span></button></div><div class="mt-10 info"></div></form></div></aside></div>' +

        '<div class="col-lg-2"><aside class="f_widget social_widget"><div class="f_title"><h3>Follow Me</h3></div><p>Let us be social</p><ul class="list"><li><a href="https://www.instagram.com/pxiess.jpg" target="_blank"><i class="fa fa-instagram"></i></a></li><li><a href="https://twitter.com/Pxiess" target="_blank"><i class="fa fa-twitter"></i></a></li ><li><a href="https://www.linkedin.com/in/burakakkas/" target="_blank"><i class="fa fa-linkedin"></i></a></li><li><a href="https://github.com/burakakkas" target="_blank"><i class="fa fa-github"></i></a></li></ul ></aside ></div >' +

        '</div></div>'
    );
});