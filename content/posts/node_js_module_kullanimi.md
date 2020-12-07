---
title: Nodejs Module Kullanımı
description: NodeJS de modul oluşturma ekleme ve çıkarma işlemleri nasıl yapılır buna değindik.
keywords: javascript, module, import, nodejs
image: nodejs.png
tags:
    - Javascript
---

Module nesnesi globaldir ve modül yazmak ve yazılan modüller hakkında bilgi almak amacıyla kullanılır. İki tip kullanımı vardır.



# Yöntem 1 (En son toplu olarak çıkarmak)

```javascript
// kullanici.js dosyası

class Kullanici{
    constructor(_ad, _yas){
        this.ad= _ad
        this.yas =_yas
    }
}

function kullaniciAdiGetir(kullanici){
    return console.log(`AD: ${kullanici.ad}`)
}

function kullaniciYasiGetir(kullanici){
    return console.log(`YAS: ${kullanici.yas}`)
}

module.exports={
    kullaniciAdiGetir,
    kullaniciYasiGetir,
    Kullanici
}
```

# Yöntem 2 (İlgili fonksiyonda çıkarmak)

`exports` kelimesini bir nevi `module.expors `kısaltması olarak düşünebiliriz.

```javascript
// kullanici.js dosyası
exports.Kullanici = class {
    constructor(_ad, _yas){
        this.ad= _ad
        this.yas =_yas
    }
}

exports.kullaniciAdiGetir = function (kullanici){
    return console.log(`AD: ${kullanici.ad}`)
}

exports.kullaniciYasiGetir = function (kullanici){
    return console.log(`YAS: ${kullanici.yas}`)
}


```



# Modülü Başka Dosyada Kullanmak

`require `yazarak kullanıcı modülümüzü ekliyoruz. 

```javascript
// index.js dosyası
var kullanici_modul = require("./kullanici")

console.log(kullanici_modul)
```



Log çıktımıza baktığımızda modülümüze eklediğimiz fonksiyonları nesne içerisinde bize sunduğunu görebiliyoruz. 

```javascript
//Console.log() çıktısı
PS C:\Users\erdem.aytek\Desktop\Yeni klasör> node index.js
{
  Kullanici: [class (anonymous)],
  kullaniciAdiGetir: [Function],
  kullaniciYasiGetir: [Function]
}
```

Aşağıdaki gibi nesnemizinin içindeki fonsiyonları rahatlıkla kullanabiliriz

```javascript
var yeniKullanici = new kullanici_modul.Kullanici("Erdem",28) // Yeni bir kullanıcı oluşturduk.

// kullanici.js dosyasındaki fonksiyonları kullanıyoruz.
console.log(kullanici_modul.kullaniciAdiGetir(yeniKullanici)); 
console.log(kullanici_modul.kullaniciYasiGetir(yeniKullanici));


```


