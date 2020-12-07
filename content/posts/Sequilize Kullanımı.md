---
title: MODULE NEDİR VE NE İŞİMİZE YARAR?
description: Sayfa açıklaması
etiket: ''
tags:
    - Vue JS1
---

# MODEL YAPISINI ANLAMAK

Modeller Sequelize'nin özüdür. Model denen yapı aslında veritabanınımızdaki tabloyu temsil eden bir soyutlamadır. 

Modeller sayesinde veri tabanındaki tablonun ismini, hangi kolonlardan oluşacağını ve bu kolanların ne tür veri yapıda veriler saklayacağını belirleme ve öğrenme konusunda bize yardımcı olur. Her modelimizin bir ismi olur fakat bu isim veritabanındaki tablo adı ile aynı olmak zurunda değildir. 

Modellerimizi iki şekilde tanımlayabiliriz.

1. `sequelize.define` ile tanımlamak. [`sequelize.define(modelName, attributes, options)`](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-define)
2. `Model`sınıfından miras alarak tanımlamak. [`init(attributes, options)`](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-init)

# 1) sequelize.define kullanarak tanımlamak

```javascript
 const Kisi = sequelize.define("KisiModel",{
      isim:{
          type:DataTypes.STRING,
          allowNull:false
      },
      yas:{
          type:DataTypes.INTEGER,
          allowNull:false
      }
  })
  console.log(Kisi === sequelize.models.KisiModel); // true
```

# 2) Model sınıfından miras alarak tanımlamak

```javascript
 class Yorum extends Model {} 
  Yorum.init({
      yorum_aciklama:{
          type: DataTypes.STRING,
      }
  },{
      sequelize, //Bağlantı örneğini geçmemiz gerekiyor
      modelName:"YorumModel" //Model adını seçmemiz gerekiyor
  })

  console.log(Yorum === sequelize.models.YorumModel); // true
```

Temelde ikiside aynıdır. `sequelize.define` , `Model.init` çağırır.

# TABLO İSİMLENDİRMESİ

Dikkat ederseniz yukarıdaki örneklerde tablo adını yazmadık. Sadece model adını belirttik. Peki Sequelize tablo adlarını nasıl belirliyor? 

### Otomatik tablo adı oluşturma

Modelimizi oluşturduğumuzda herhangi bir tablo adı ayarı yapmadıysak varsayılan oalrak sequelize  [inflection](https://www.npmjs.com/package/inflection) kütüphanesini kullanarak otomatik tekil isimleri çoğul hallerine çeviriyor. Tabi isimlendirmeleri ingilizce olarak yaptığınız varsayıyorum. Çeviri işlemini yakarken sadece `s` takısı koymuyor düzensiz çoğullarıda olması gereken isime  de çeviriyor. Örneğin: `person -> people` 

### Model adı ile tablo adını aynı yapmak

Sequelize ile gerçekleştirilen otomatik isimlendirmeyi`freezeTableName: true` komutunı `Options` olarak vererek durdurabilirsiniz. Bu komutu yazdığınızda Sequelize model adı ile tablo adını aynı yapacaktır.

```javascript
  const Kisi = sequelize.define("KisiModel",{
     // ... Model özellikleri (Attributes)
  },
  {
       // Model seçenekleri (Options)
      freezeTableName:true // Tablo adı ile model adı aynı olacak.
  })
  console.log(Kisi === sequelize.models.KisiModel); // true
siModel); // true
```

Bu ayarı her model için tek tek yapmka zor olacağı için global olarakta belirleyebiliriz. Sequelize oluşturulurken bu özelliği `Options `olarak geçebiliriz. 

```javascript
const sequelize = new Sequelize('sqlite::memory:', {
  define: {
    freezeTableName: true // Tüm oluşacak modellerde otomatik tablo ismi çoğullaştıma iptal edildi.
  }
});
```

### Tablo adını kendimizin belirtmesi

`tableName `seçeneği ile istediğimiz tablo ismini kendimiz verebiliriz.

```javascript
  const Kisi = sequelize.define("KisiModel",{
     // ... Model özellikleri (Attributes)
  },
  {
       // Model seçenekleri (Options)
      tableName: 'Kisiler' // Tablo adını kendimiz belirledik.
  })
  console.log(Kisi === sequelize.models.KisiModel); // true
siModel); // true
```

# MODELİMİZİ VERİ TABANINA SENKRONİZE ETMEK

Modelimizi veri tabanına göndereceğimiz zaman bazı sorular akla geliyor. 

- Tablom veri tabanında yoksa nasıl davranılacak?

- Tablom var ama bazı kolonlar eksik yada fazla senkronize nasıl olacak? vb...

Öncelikle bir modeli veri tabanına senkronize etmek istiyorsaniz (yani tabloları oluşturmak) bunun için  `modelAdi.sync(options)` fonksiyonunu kullanırız. Bu fonksiyon asenkron çalışır ve geriye Prmise döndürür. Bu çağrı ile Sequelize, veritabanına otomatik olarak bir SQL sorgusu gerçekleştirecektir. Bu sorgunun tek amacı veri tabanında ilgili tabloları oluşturmaktır. Javascript modelimizde herhangi bir değişiklik yapmaz. 

Bu fonksiyonumuzun üç farklı alabileceği seçenek vardır.

- `Kisi.sync ()`  Tablo veritabanında mevcut değilse tabloyu oluşturur (Tablo varsa hiçbir şey yapmaz)

- `Kisi.sync({ force: true })` Mevcutta tablo varsa siler ve yeniden oluşturur.

- `User.sync({ alter: true })` Veritabanın mevcut durumunu kontrol eder (kolanlar, veri türleri vb.) Eğer tablo ile model arasında değişiklik var ise modeldeki gerekli değişiklikleri tabloya uygular.

```javascript
Kisi.sync({ force: true });
console.log("Kişi tablosu silindi ve yeniden oluşturuldu.");
```

### Tüm modelleri aynı anda senkronize etme

Modellerin tamamı ile ilgili işlemler yapmak istiyor isek `new Sequelize() `ile oluşturduğumuz sabit kullanılır. 

```javascript
const sequelize = new Sequelize('sqlite::memory:')

sequelize.sync();
console.log("Tüm tablolar oluşturuldu.");
```

### Tablo silme işlemi

`sequelize.drop()` ile tüm tabloları silebiliriz. sadece tek tabloyu silmek istoyr isek `modelAdi.drop() `kullanılır.

```javascript
const sequelize = new Sequelize('sqlite::memory:')

sequelize.drop(); // TÜm tabloları silmek.
console.log("Tüm tabloları silindi.");


Kisi.drop(); //Tek tablo silmek
console.log("Kişi tablosu silindi." );
```

# GÜVENLİ ŞEKİLDE VERİTABANI İLE İŞLEM YAPMAK

sync ve drop işlemleri veri tabanında yıkıcı görevi vardır. Basit bir tedbir ile neleri `sync` veya `drop `edebileceğinizi belirleyebilirsiniz. Sequelize, match kullnarak `RegExp `ifadeler ile kural oluşturmamıza izin veriyor.

Aşağıdaki örnekte veritabanı adı `_test` ile bitenlerde `sync` işleminin çalışacağını belirtmiş olduk.

```javascript
sequelize.sync({ force: true, match: /_test$/ });
```

Yukarıda belirttiğim işlemler geliştirme ortmaında rahatlıkla kullanılabilir fakat gerçek ortama yaptığınız değişi,klikleri göndermek istediğiniz kensinlikle  [Migrations](https://sequelize.org/master/manual/migrations.html) konusuna bakmanız gerekir.

### Zaman Damgaları

Sequelize otomatik olarak tüm modellere `createdAt` ve `updatedAt` isimlerinde alanlar ekler. Bunların tipi ise `DataType.Date` formatındadır. Bir kayıt oluşturulduğunda veya değiştirildiğinde bu alanlar otomatik güncellenir. Bu güncelleme işlemi için veri tabanına gönderdiği kendi sorgularını kullanır. 

`timestamps:false` ile bu özelliği isterseniz kapatabilirsiniz.

```javascript
sequelize.define('Kisi', {
  // ... (attributes)
}, {
  timestamps: false
});
```

İsterseniz globalde kapatmanıza rağmen bazı modellerinizde bu özelliği aktif edebilirsiniz.

```javascript
  const Kisi = sequelize.define("KisiModel",{
      //...  özellikler
  },
  {
      tableName:"Kisiler",
      timestamps:true, // Taman damgasını aktif ettik
      updatedAt:false, // Update eklemesine gerek yok dedik.
      createdAt="OlusturmaTarihi" //createdAt ismi yerine OlusturmaTarihi ismini belirledim

  })
```

### Varsayılan Kolon değerleri

Sequelize varsayılanda kolanlara `null `değerini atar. Biz istersek bu değerleri değiştirebiliriz. Bunun için `defaultValue` alanını kullanacağız.

```javascript
sequelize.define('Kisi', {
  isim: {
    type: DataTypes.STRING,
    defaultValue: "Erdem AYTEK"
  },
 islem_tarihi: {
    type: DataTypes.DATETIME,
    defaultValue: Sequelize.NOW // Her kayıda o anki zaman bilgisini girecektir.
  },
});
```

### Data Tipleri

Tüm kolonlar için muuhakkak veri tipi belirtmemiz gerekir. Bunun için `DataTypes `projemize eklememiz gerekir. Aşağıda destekli olan tiplerden bazıları vardır.

```javascript
const { DataTypes } = require("sequelize");
```

```javascript
//Strings
DataTypes.STRING             // VARCHAR(255)
DataTypes.STRING(1234)       // VARCHAR(1234)
DataTypes.STRING.BINARY      // VARCHAR BINARY
DataTypes.TEXT               // TEXT
DataTypes.TEXT('tiny')       // TINYTEXT
DataTypes.CITEXT             // CITEXT          PostgreSQL and SQLite only.

//Boolean
DataTypes.BOOLEAN            // TINYINT(1)

//Numbers

DataTypes.INTEGER            // INTEGER
DataTypes.BIGINT             // BIGINT
DataTypes.BIGINT(11)         // BIGINT(11)

DataTypes.FLOAT              // FLOAT
DataTypes.FLOAT(11)          // FLOAT(11)
DataTypes.FLOAT(11, 10)      // FLOAT(11,10)

DataTypes.REAL               // REAL            PostgreSQL only.
DataTypes.REAL(11)           // REAL(11)        PostgreSQL only.
DataTypes.REAL(11, 12)       // REAL(11,12)     PostgreSQL only.

DataTypes.DOUBLE             // DOUBLE
DataTypes.DOUBLE(11)         // DOUBLE(11)
DataTypes.DOUBLE(11, 10)     // DOUBLE(11,10)

DataTypes.DECIMAL            // DECIMAL
DataTypes.DECIMAL(10, 2)     // DECIMAL(10,2)

// Unsigned & Zerofill integers - MySQL/MariaDB only

DataTypes.INTEGER.UNSIGNED
DataTypes.INTEGER.ZEROFILL
DataTypes.INTEGER.UNSIGNED.ZEROFILL

//Dates

DataTypes.DATE       // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.DATE(6)    // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
DataTypes.DATEONLY   // DATE without time

//UUIDs
// UUID'ler için DataTypes.UUID kullanın. PostgreSQL ve SQLite için UUID veri türü ve MySQL için CHAR (36) olur. Sequelize, bu alanlar için otomatik olarak UUID'ler oluşturabilir; varsayılan değer olarak Sequelize.UUIDV1 veya Sequelize.UUIDV4'ü kullanmanız yeterlidir:
{
  type: DataTypes.UUID,
  defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
}
```

---

# Model Instances

Modeller [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) yapısını kullanmaktadır. Doğal olarak yeni örnekler oluşturarak kullnabiliriz.

```javascript
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

(async () => {
  await sequelize.sync({ force: true });
  // Kodlar buraya yazılacak.
})();
```

### Yeni örnek oluşturmak.

Normal şartlarda `class `yapılarında `new `oparatörünü kullanarak örnek alabiliriz.  Fakat bunu bizim yerimize `model.build()` yapıyor. 

```javascript
const jane = User.build({ name: "Jane" }); // Yeni kullanıcı oluşturdukç
console.log(jane.name); // "Jane"  
```

Bu yaptığımız kayıt vertabanına daha işlenmedi. Veri tabanına kayıt icin `model.save()` kullanmamız gerekiyor.

```javascript
const jane = User.build({ name: "Jane" }); // Yeni kullanıcı oluşturduk.
await  jane.save();  //Kullanıcıyı veritabanına kaydettik.
console.log(jane.name); // "Jane"  
```

`save()` asenkron olduğu için `await `kullandık.

`save() `ile uğraşmadan doğrudan kayıt yapmak için `model.create() `kullanabliriz. Bu şekilde yapılan kayıt doğrudan veritabanına işlenir.

```javascript
const jane = await User.create({ name: "Jane" }); // Kayıt oluştu ve veritabanına kaydedildi.
console.log(jane.name); // "Jane"
```

### Logları Kontrol Edebilmek

`console.log() `kullanarak sonuçları hızlıca kullanabiliriz. Fakat bu biraz karmaşa ve istediğimizden fazla bilgi verebilir. Daha sade görmek istersek`toJSON()`kullanabiliriz.

```javascript
console.log(erdem);

//LOG ÇIKTISI

user {
  dataValues: {
    favoriteColor: 'green',
    id: 1,
    name: 'Erdem AYTEK',
    updatedAt: 2020-11-01T09:08:30.296Z,
    createdAt: 2020-11-01T09:08:30.296Z
  },
  _previousDataValues: {
    name: 'Erdem AYTEK',
    id: 1,
    favoriteColor: 'green',
    age: undefined,
    cash: undefined,
    createdAt: 2020-11-01T09:08:30.296Z,
    updatedAt: 2020-11-01T09:08:30.296Z
  },
  _changed: Set {},
  _options: {
    isNewRecord: true,
    _schema: null,
    _schemaDelimiter: '',
    attributes: undefined,
    include: undefined,
    raw: undefined,
    silent: undefined
  },
  isNewRecord: false
}
```

```javascript
console.log(erdem.toJSON())

//LOG ÇIKTISI
{
  favoriteColor: 'green',
  id: 1,
  name: 'Erdem AYTEK',
  updatedAt: 2020-11-01T09:10:18.402Z,
  createdAt: 2020-11-01T09:10:18.402Z
}
```

### Save Çalışma Prensibi

`Save `yöntemi, yalnızca gerçekten değişen alanları güncellemek için optimize edilmiştir. Bu, herhangi bir şeyi değiştirmezseniz ve` save() `fonksiynunu çağırırsanız, Sequelize'in kaydetmenin gereksiz olduğunu bileceği ve hiçbir şey yapmayacağı anlamına gelir, yani hiçbir sorgu oluşturulmayacaktır.

Ayrıca, kaydetme çağrısı yaptığınızda yalnızca birkaç öznitelik değiştiyse, performansı artırmak için `UPDATE `sorgusunda yalnızca bu alanlar gönderilecektir.
