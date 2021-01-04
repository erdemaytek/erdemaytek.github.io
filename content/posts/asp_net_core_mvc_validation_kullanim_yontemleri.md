---
title: Asp.Net Core MVC Validation Kullanım Yöntemleri
description: Bu yazımda Asp.Net Core MVC kullanarak nasıl verilerde doğrulama kontrolleri yapabiliriz onları aktarmaya çalışacağım.
keywords: asp.net, mvc, validation
image: 
date: 03.01.2021
tags:
    - Asp.Net Core
---

## 1) Doğrudan Ana Sınıfınıza Uygulamak

Bu yöntemde kullandığımız sınıfın ilgili propertisine doğrudan validate işlemi yapıyoruz. Bunun için sayfamızda `using System.ComponentModel.DataAnnotations;` ekli olması gerekiyor. Aşağıdaki örnekte Açıklama alanının dolu olması gerektiğini ve hata durumunda vereceği hatayı belirttik.

Bu yöntem her nekadar kolay gelsede buraya yazdığımız kuralların code first gibi yaklaşımlarda veri tabanı tablolarına da yansıyacağını unutmamak lazım. Gene benzer şeklide database first şeklindeki yaklaşımda ise her veritabanı güncelleştirmemizde ana sınıflara yaptığımız tüm bu kurallar silinecektir.

```csharp
   public class Kisi
    {
        [Required(ErrorMessage = "Boş Geçmeyiniz.")]
        public string Aciklama { get; set; }
    }
```

## 2) ModelMetadataType Kullanarak Başka Sınıfta Validate İşlemi Yapmak

Bu yöntem de validate işlemini başka bir sınıfa veriyoruz. Bu sayade asıl sınıfımız daha temiz kalmış ve validate görevi başka bir sınıfa devredilmiş oluyor.

```csharp
[ModelMetadataType(typeof(KisiMetadaType))]
    public class Kisi
    {
        public string Aciklama { get; set; }
    }

    public class KisiMetadaType
    {
        [Required(ErrorMessage = "Boş Geçmeyiniz.")]
        public string Aciklama { get; set; }

    }
```

## 3) FluentValidation Kütüphanesi İle Validation Yapmak

`Nuget `üzerinden klasik asp.net için `FluentValidation`, asp.net core için `FluentValidation.AspNetCore` paketini yüklüyoruz. Makalemi asp.net core mvc ye göre anlatıyorum.

Öncelikle `Startup `dosyamıza` using FluentValidation.AspNetCore; `paketini ekliyoruz ve `ConfigureServices `metodunda `AddFluentValidation` ile kayıt işlemişini yapıyoruz.

```csharp
  public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews().AddFluentValidation(x=>x.RegisterValidatorsFromAssemblyContaining<Startup>());
        }
```

`RegisterValidatorsFromAssemblyContaining() `: Bu fonksiyon sayesinde Fluent yapısının projemizdeki gösterdiğimiz assembly içindeki tüm validation yapılarını bulmasını sağladık. Startup yerine projedeki başka bir sınıfıda verebilirdik.

Bu vakitden sonra FluentValidation yapısı projemizdeki `AbstractValidator `sınıfından türeyen tüm yapıları takip edecektir.

```csharp
 public class Kisi
    {
        public string Aciklama { get; set; }
    }

    public class KisiFluentValidation : AbstractValidator<Kisi>
    {
        public KisiFluentValidation()
        {
            RuleFor(x => x.Aciklama).NotNull().WithMessage("Bu alan null geçilemez.");
            RuleFor(x => x.Aciklama).NotEmpty().WithMessage("Bu alan emty geçilemez.");
        }
    }
```

Yukarıdaki örnekte `KisiFluentValidation `sınıfımızı `AbstractValidator `sınıfından Kisi tipinde ekledik. Fluent yapısı bizden kurallarımızı Constructor içerisinde tanımlamamızı istiyor. `RoleFor `diyerek ilede kurallarımızı yazdık.

Genelde esteknik anlamında ikinci veya üçüncü yöntem kullanılmaktadır.