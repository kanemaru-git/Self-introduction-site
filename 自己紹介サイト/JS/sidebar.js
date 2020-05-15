// ハンバーガーメニュー　クリック　サイドバー
$(function () {
  $(".hamburgermenu").on("click", function () {
    var offset = $(".sidebar").offset();
    var window_w = $("body").width();
    if (offset.left >= window_w) {
      $(".sidebar").animate(
        {
          right: "0",
          // width: "toggle",
        },
        500
      );
      event.stopPropagation();
    }
  });
});
// $(".hamburgermenu").click(function () {
//   event.stopPropagation(); //画面クリック防止
// });

//画面のどこかクリック
$(function () {
  $(window).on("click", function () {
    $(".sidebar").animate({ right: "-200" });
  });
});

//トップへ戻るボタン
$(document).ready(function () {
  var pagetop = $(".pagetop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 700);
    return false;
  });
});

// tooltip
// $(function () {
//   $(".backbord").tooltip({
//     track: true,
//   });
// });

// backbordのfadeinout
//ウィンドウの高さを取得する
var window_h = $(window).height();

//スクロールイベント
$(window).on("scroll load", function () {
  //スクロールの位置を取得する
  var scroll_top = $(window).scrollTop();

  $(".backbord").each(function () {
    //各要素のtopの位置を取得する
    var offset = $(this).offset().top;

    //どのタイミングでフェードインさせるか
    if (scroll_top > offset + window_h) {
      $(this).removeClass("fadein"); //画面の上の場合はクラス削除
    } else if (scroll_top > offset - window_h) {
      $(this).addClass("fadein"); //特定の位置を超えたらクラスを追加
    } else {
      $(this).removeClass("fadein"); //画面の下の場合はクラスを削除
    }
  });
});
