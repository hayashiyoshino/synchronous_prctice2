// javascriptでページを遷移させる
// 同期通信
// 同期通信とは、リクエストを投げ、サーバーからの応答があるまでブラウザ側の表示が変化しないような通信。サーバーからの応答があるまでブラウザ側の処理が止まるため、どの間ユーザーは処理を行うことができない。
// 非同期通信
// 非同期通信とは、リクエストを投げた直後からブラウザ側での操作ができるような通信をいう。サーバーからの応答があり次第、コールバックを実行する。通信中にもブラウザ上での操作ができるので、ユーザービリティを高めることができる。
// windowオブジェクト
// クライアントサイドjabvascript(ブラウザ上で動くjabascript)では、実行されるタイミングで自動的にwindowオブジェクト、というオブジェクトが作られる。windowオブジェクトはブラウザのウインドウを抽象化したもので、ブラウザに関する様々なプロパティやメソッドを持っている。
// nabigator:ブラウザ自身に関する情報をもつNavigatorオブジェクト
// location:現在のページに関する情報を持つLocationオブジェクト
// history:ブラウザの履歴をたどるback()、forward()を持つHistoryオブジェクト
// screen:画面に関する情報を持つScreenオブジェクト
// document:ページのHTML文書に関する情報を持つDocumentオブジェクト
// this参照
// Rubyでいうselfのようなものとして、javascriptにはthis参照という概念がある。this参照を説明するために以下のようなjavascriptのオブジェクトを考えてみる。
// var person = {
//   fiestName: 'yuki',
//   lastName: 'hayashi',
//   getFullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };
// 上の函数では、変数personにオブジェクトを代入している。personオブジェクトは3つのメンバを持つ。２つは単純なプロパティ、１つはメソッド。
// 函数内のthisは、該当関数が所属しているオブジェクト(=当該メソッドのレシーバ)を参照する。上の例でいうとthisはpersonオブジェクトを参照している。これは、Rubyのメソッド内に書いたselfが、メソッドのレシーバーを参照するのと本質的に同じ。
// コールバック
// 必要なタイミングで呼び出せるように、あらかじめ定義しておく関数のことをコールバックと呼ぶ。javascriptではコールバックを多用する。
// 例えばjQueryのon()は第二引数にコールバックをとる。
// $('button').on('click', function() {
//   console.log(this);
// });
// この場合、コールバック内のthisはイベントが発火した要素を参照する。

// 同期通信を実装しよう
// window.locationを使って同期通信をしよう
// 3つのHTMLファイルが互いにリンクするようにする。
// 具体的には「GO TO INDEX○」のボタンを押した時に発生するイベントにイベントハンドラを設定し、window.locationプロパティを書き換える。

$(function() {
  $('.index1').click(function() {
    window.location = './index1.html';
  });

  $('.index2').click(function() {
    window.location = './index2.html';
  });

  $('.index3').click(function() {
    window.location = './index3.html';
  });
});



// $(function() {
//   $('.index1').click(function() {
//     window.location = './index1.html';
//   });

//   $('.index2').on('click', function(e) {
//     window.location = './index2.html';
//     // console.log(window.location)
//     // e.preventDefault();
//   });

//   $('.index3').click(function() {
//     window.location = './index3.html';
//   });

//   $('.back').click(function() {
//     window.history.back();
//   });

//   $('.forward').click(function() {
//     window.history.forward();
//   });
// });
