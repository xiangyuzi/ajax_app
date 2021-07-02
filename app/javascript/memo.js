function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);  //引数にformの要素を渡して入力されている値を取得。変数formDataに格納。
    const XHR = new XMLHttpRequest();  //新たに作成したXMLHttpRequestオブジェクトを変数XHRに格納。サーバーサイドにリクエストを送信するのに必要。 
    XHR.open("POST", "/posts", true);  //非同期で投稿したメモをdbに保存するのでHTTPメソッドはPOST。（メソッド、パス、非同期のON/OFF）
    XHR.responseType = "json";  //どういう形式でデータをレスポンスで渡すかの設定
    XHR.send(formData);
  });
};

window.addEventListener('load', post);