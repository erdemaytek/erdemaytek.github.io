---
title: Prisma ORM Kullanımı
description: Prisma, veritabanı şemanıza göre uyarlanmış, otomatik olarak oluşturulan ve tür güvenli bir sorgu oluşturucu ile veritabanı erişimini kolaylaştırır. Geleneksel ORM'lere ve SQL sorgu oluşturuculara bir alternatif sağlar.
keywords: javascript, Prisma, nodejs
image: 
tags:
    - Javascript
---

prisma init /prisma projesi oluştur.

prisma introspect // Ver tabanından şemaları çek

# Prisma schema

# Kurulum

Projemize Prisma CLI yüklüyoruz. Takma ad olarak bundan sonra `npx` olarak çağıracağız..

```shell
npm init -y
npm install @prisma/cli --save-dev
```

`npx prisma` komutu ile kullanabileceğimiz parametreleri görürüz.

```bash
npx prisma // Bu komut ile kullanabileceğimiz parametreleri görürüz.
```

Projemizde Prisma Schema ve veritabanı bağlantısı için gerekli olan dosyaları yüklemek için `prisma init` komutunu kullanıyoruz.

```shell
npx prisma init
```

Bu komutu kullandığımızda projemize `prisma `isminde bir klasör eklenecektir. Bu klasörün içerisinde aşağıdaki dosyalar vardır.

- `schema.prisma` : Veritabanı bağlantısı, Prisma Client oluşturucusu ve Prisma schemalarını içerir.

- `.env` : Ortam değişkenlerini tanımlamak için .env dosyası kullanılır. (veritabanı bağlantımızda burada yazılır.)

# Veritabanı Bağlantısı

Veritabanına bağlantısı için gerekli olan bilgileri `.env` dosyasındaki `DATABASE_URL` kısmına yazıyoruz. Aşağıdaki bağlantımız local postgresql içindir.  [Diğer Bağlantı Bilgileri](https://www.prisma.io/docs/reference/database-connectors/connection-urlshttps://www.prisma.io/docs/reference/database-connectors/connection-urls)

```javascript
//Bağlantı Formatı
DATABASE_URL="postgresql://KULLANICI_ADI:ŞİFRE@MAKINE_IP:PORT/VERİTABANI_ADI?schema=ŞEMA_ADI"
```

# Veritabanında Bulunan Şemalarımızı Projemize Çekmek

Veritabanı bağlantısı için gerekli olan işlemleri yukarıda yaptık. Veri tabanında bulunan tablolalarımızı proje içerisinde prisma schema şekline çevirerek eklememiz gerekiyor. Bunun için `npx prisma introspect` komutunu kullanacağız. Bu komut veritabanını inceleyecek ve gerekli şemaları `schema.prisma` dosyamıza yazacaktır.

```shell
npx prisma introspect
```

> Bu işlemi yapma sebebimiz `Prisma Client` tarafında sorgular yazarken bu modellerimizi kullanacağımız içindir. Bir nevi veritabanının soyutlamasını yapmış olduk. Buda sorgu yazarken bize ciddi kolaylık sağlacaktır.

![](resimler/f7itiYw.png)

# Prisma Client Oluşturma ve Yükleme

Prisma client ile veritabanında gerekli olan CRUD işlemlerinin tamamını yapabiliriz. Bunun için öncelikle `@prisma/client `paketini projemize yüklememiz gerekiyor.

```shell
npm install @prisma/client
```

Şimdi de prisma client'in bizim oluşturduğumuz schemaları okuyabilmesi için `npx prisma generate` komutunu kullanıyoruz. Şemamızda değişiklik olursa bu komutu tekrardan çalıştırmamız gerekir. Böylelikle prisma client yaptığımız değişikliği bilmiş olur.

```shell
npx prisma generate
```

![](resimler/FensWfo.png)

# İlk Sorgumuzu Yazalım

`PrismaClient `dosyamıza ekledik. Daha sonra `new PrismaClient()` diyerek yeni örnek oluşturduk. Bu örnek üzerinden `user `tablosuna erişerek `findMany()` fonsiyonu ile tüm verileri getirdik.

```javascript
const { PrismaClient } = require('@prisma/client') 
const prisma = new PrismaClient()

async function veriGetir(){
    const users =  await prisma.user.findMany();
    console.log(users)
}

veriGetir()

// Çıktı
[ { id: 1, name: 'erde', email: 'er', post: [ [Object] ] } ]
```
