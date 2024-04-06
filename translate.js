function Translate(word, language) {
  this.apikey = "apikey";
  this.word = word;
  this.language = language;

  this.xhr = new XMLHttpRequest();
}

// bind.this dersek olmaz (arrow function kullanamayız.)
Translate.prototype.translateWord = function (callback) {
  //Ajax işlemleri
  const endPoint = `url${this.word},${this.language},${this.apikey}`;

  this.xhr.open("GET", endPoint, true); // true zorunlu değil, async olarak gerçekleşecek mi?

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];
      console.log(text);

      callback(null, text);
      // console.log(JSON.parse(this.xhr.responseText).text[0]);
    } else {
      callback("bir hata oluştu", null);
    }
  };
  this.xhr.send();
};

Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
