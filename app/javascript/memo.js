const buildHTML = (XHR) => {
  const item = XHR.response.post;  //レスポンスの中から投稿されたメモ情報を抽出、変数itemに格納。
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時:${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;  //関数buildHTMLの返り値にhtmlを指定。
};

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
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;  //処理を一端中止するよう指示。エラーが出たらこれ以降の処理は行われない。
      };
      const list = document.getElementById("list")
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);