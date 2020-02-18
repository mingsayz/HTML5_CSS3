 //라이트 박스
 $(".lightgallery").lightGallery({
     thembnail: true,
     autoplay: true,
     pause: 3000,
     progressBar: true
 });

 //윈도우 팝업
 $(".window").click(function (e) {
     e.preventDefault();
     //window.open("파일명","팝업이름","옵션");
     //옵션 : left,top,width,height,status,toolbar,location,menubar,scrollbars,fullscreen
     window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0")
 });

 //레이어 팝업
 $(".layer").click(function (e) {
     e.preventDefault();
     //$("#layer").css("display","block");
     //$("#layer").show();
     $("#layer").fadeIn(200);
     //$("#layer").slideDown();
 });

 $("#layer .close").click(function (e) {
     e.preventDefault();
     //$("#layer").css("display","block");
     //$("#layer").show();
     $("#layer").fadeOut(200);
     //$("#layer").slideDown();
 });

 //탭메뉴
 var $tab_list = $(".tab_menu");

 $tab_list.find("ul ul").hide();
 $tab_list.find("li.active > ul").show();

 function tabMenu(e) {
     e.preventDefault();
     var $this = $(this);
     $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
 }
 $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

 // 배너
 // html 마크업 세팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출
 $('.ban').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     autoplay: true,
     autoplaySpeed: 3000,
     dots: true
 });

 // 갤러리
 $(".gallery_img").slick({
     arrows: false,
     fade: true,
     pauseOnHover: true,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 300,
     slidesToShow: 1
 });
 $(".play").click(function () {
     $(".gallery_img").slick("slickPlay");
 });
 $(".pause").click(function () {
     $(".gallery_img").slick("slickPause");
 });
 $(".prev").click(function () {
     $(".gallery_img").slick("slickPrev");
 });
 $(".next").click(function () {
     $(".gallery_img").slick("slickNext");
 });

 //버튼을 클릭하면 전체 메뉴를 보이게 함
 $(".tit .btn").click(function (e) {
     e.preventDefault();
     //$("#cont_nav").css("display","block");
     //$("#cont_nav").show(); //위와 같음
     //$("#cont_nav").fadeIn(); //페이드인 효과
     //$("#cont_nav").slideDown(); //슬라이드 처럼
     //$("#cont_nav").toggle(); //보여줬다 숨기는거까지 기능으로 제공
     //$("#cont_nav").fadeToggle(); //페이드 기능까지 제공
     $("#cont_nav").slideToggle(100); // 슬라이드 효과 토글형
     //$(".tit .btn").addClass("on"); //누르면 클래스에 on 추가함, 추가하고 css에 .tit .btn.on {background-position: 0 -660px;} 추가
     $(this).toggleClass("on"); //누르면 클래스에 on,다시 누르면 on 사라짐 , this: 자기자신
 });
