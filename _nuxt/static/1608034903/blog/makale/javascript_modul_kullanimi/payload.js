__NUXT_JSONP__("/blog/makale/javascript_modul_kullanimi", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS){return {data:[{page:{slug:"javascript_modul_kullanimi",description:"JavaScript ES6 Modules kulllanımı node js de kullanıma göre biraz farklıdır buna değindik.",title:"Javascript Module Kullanımı",keywords:"javascript, module, import, nodejs",image:null,date:"09.12.2020",tags:["Javascript"],toc:[{id:at,depth:aI,text:aH},{id:aJ,depth:aI,text:aM}],body:{type:"root",children:[{type:b,tag:R,props:{id:"module-nedi̇r-ve-ne-i̇şi̇mi̇ze-yarar"},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#module-nedi%CC%87r-ve-ne-i%CC%87%C5%9Fi%CC%87mi%CC%87ze-yarar",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:"MODULE NEDİR VE NE İŞİMİZE YARAR?"}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Module denen şey aslında yazdığınız javascript dosyalarıdır. Kod yazarken başımıza gelen en önemli şey kod tekrarı ve karmaşası sorunudur. Module yapısı bize ayrı dosyalarda kodlar yazıp bunları istediğimiz yerde çağırabilme imkanı sunmaktadır. Bu sayade hem kod karmaşasınından hemde tekrardan kurtulmuş oluruz."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Module yapısı node js kullanırsanız daha farklıdır. Onu bu yazımda anlatmayacağım. Bu yazının konusu JavaScript ES6 Modules olacaktır."}]},{type:a,value:f},{type:b,tag:R,props:{id:"ön-bi̇lgi̇lendi̇rme"},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#%C3%B6n-bi%CC%87lgi%CC%87lendi%CC%87rme",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:"ÖN BİLGİLENDİRME"}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:aP}]},{type:a,value:" Bu dosyada çeşitli fonksiyonlarımız olacak ve burada yazdıklarımızı "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:"edip başka sayfada "},{type:b,tag:h,props:{},children:[{type:a,value:"import "}]},{type:a,value:"ederecek kullanmayı göreceğiz."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:av}]},{type:a,value:" Bu dosyaya "},{type:b,tag:h,props:{},children:[{type:a,value:aP}]},{type:a,value:" dosyasını modül şeklinde ekleyeceğiz. Bu modülüdeki "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:"edilen kodları kullanacağız."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"index.html"}]},{type:a,value:" Sonuçları görmek için test amaçlı kullanacağımız sayfadır."}]},{type:a,value:f},{type:b,tag:R,props:{id:"export-etme-i̇şlemi̇"},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#export-etme-i%CC%87%C5%9Flemi%CC%87",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:"EXPORT ETME İŞLEMİ"}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Javasript de yazdığımız fonksiyon, nesne vb. dışarı aktarmak için "},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:"kelimesini kullanırız. "},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:"kelimesinden sonra "},{type:b,tag:h,props:{},children:[{type:a,value:ao}]},{type:a,value:" yazmak, modülün çağrıldığı yerde varsayılanda çalışacak ve doğrudan erişilebilecek kısımdır."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"İki Farklı yöntem ile dosyalarımızı "},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:"edebiliriz. Hangisini seçeceğiniz sizlere kalmıştır."}]},{type:a,value:f},{type:b,tag:aK,props:{id:at},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#y%C3%B6ntem-1-tek-tek-d%C4%B1%C5%9Fa-aktar%C4%B1m-yapmak",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:aH}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Bu yöntemde "},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:" ifadesini ilgili fonksiyon veya neslerin önüne yazarız."}]},{type:a,value:f},{type:b,tag:ab,props:{className:[af]},children:[{type:b,tag:ai,props:{className:[Z,an]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:aL}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aF}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:v}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:v}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,i,ag]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,B]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,O,k,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:ae}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,i,ag]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,B]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,O,k,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:ae}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:aK,props:{id:aJ},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#y%C3%B6ntem-2-toplu-d%C4%B1%C5%9Far%C4%B1-aktar%C4%B1m-yapmak",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:aM}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Bu yöntemde kodlarımızın önüne herhangi bir "},{type:b,tag:h,props:{},children:[{type:a,value:z}]},{type:a,value:" ifadesi olmadan düz yazıyoruz. ve sayfanın sonunda topdan çıkarıyoruz. "},{type:b,tag:h,props:{},children:[{type:a,value:"export default "}]},{type:a,value:"işlemi dışındaki tüm durumlarda "},{type:b,tag:h,props:{},children:[{type:a,value:"export { } "}]},{type:a,value:"şeklinde yazım ile export yapıyoruz."}]},{type:a,value:f},{type:b,tag:ab,props:{className:[af]},children:[{type:b,tag:ai,props:{className:[Z,an]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:aL}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aF}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:v}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:v}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,i,ag]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,B]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,O,k,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:ae}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,i,ag]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t,B]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,O,k,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,_]},children:[{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:ae}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:p}]}]},{type:b,tag:c,props:{className:[d,H,o]},children:[{type:a,value:F}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"\u002F\u002FToptan Export Yapıyoruz."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:ao}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ax]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:z}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"exports"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:"import-etme-i̇şlemi̇"},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#import-etme-i%CC%87%C5%9Flemi%CC%87",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:"IMPORT ETME İŞLEMİ"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:ak,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Sadece"},{type:b,tag:h,props:{},children:[{type:a,value:" export default"}]},{type:a,value:" ile çıkarılanı eklemek için"},{type:b,tag:h,props:{},children:[{type:a,value:" import Kullanici from \".\u002Fkullanici.js\""}]},{type:a,value:" yazım şekli kullanılır. Burada yazan Kullanici takma isimdir başka birşeyde yazılabilir."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ak,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:aB},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:"yapılanları çağırmak için "},{type:b,tag:h,props:{},children:[{type:a,value:"import { kullaniciAdiGetir, kullaniciYasiGetir } from \".\u002Fkullanici.js\""}]},{type:a,value:" yazım şekli kullanılır ve çağırılacaklar "},{type:b,tag:h,props:{},children:[{type:a,value:"{ }"}]},{type:a,value:" içerisine yazılır."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ak,props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Hem "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:"hemde "},{type:b,tag:h,props:{},children:[{type:a,value:"export default"}]},{type:a,value:" ile çıkarılanları eklemek için "},{type:b,tag:h,props:{},children:[{type:a,value:"import Kullanici, { kullaniciAdiGetir, kullaniciYasiGetir } from \".\u002Fkullanici.js\""}]},{type:a,value:" yazım şekli kullanılır. Yani ilk iki maddenin brileşimi diyebiliriz."}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:aB},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:"ile dışa aktarılan dosyaları eklerken birebir aynı isimle çağırmayı unutmamak gerekiyor. Eğer ismini çağırdığınız yerde değiştirmek istiyor iseniz"},{type:b,tag:h,props:{},children:[{type:a,value:" { kullaniciAdiGetir as Yeniİsim, kullaniciYasiGetir }"}]},{type:a,value:" şeklinde bir yazım kullnabilirsiniz "},{type:b,tag:h,props:{},children:[{type:a,value:"as "}]},{type:a,value:"kelimesinden sonraki yazacağınız metin yeni ismi olacaktır."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:ab,props:{className:[af]},children:[{type:b,tag:ai,props:{className:[Z,an]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"\u002F\u002Findex.js dosyası"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:"import"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,ax]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i,x]},children:[{type:a,value:"from"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\".\u002Fkullanici.js\""}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"var"}]},{type:a,value:" yeniKullanici "},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"new"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"Erdem\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"28"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"\u002F\u002F Yeni bir kullanıcı oluşturduk."}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"\u002F\u002F kullanici.js dosyasındaki fonksiyonları kullanıyoruz."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t,B]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,O,k,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aD}]},{type:a,value:" \n"},{type:b,tag:c,props:{className:[d,t,B]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,O,k,q]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aD}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:"test"},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#test",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:"TEST"}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Modülümüzü head tagları arasında çağırıyoruz. Burada"},{type:b,tag:h,props:{},children:[{type:a,value:"type=\"module\""}]},{type:a,value:"eklemeyi unutmuyoruz. Aksi taktirde modülümüzü kullanamayız."}]},{type:a,value:f},{type:b,tag:ab,props:{className:[af]},children:[{type:b,tag:ai,props:{className:[Z,"language-html"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,"doctype"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C!"}]},{type:b,tag:c,props:{className:[d,"doctype-tag"]},children:[{type:a,value:"DOCTYPE"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aE]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"lang"}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,L]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"en"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aO}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"charset"}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,L]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"UTF-8"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aO}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,L]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"viewport"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"content"}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,L]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"width=device-width, initial-scale=1.0"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ap}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,L]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,L]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:b,tag:c,props:{className:[d,ap]},children:[]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Console görüntüsü aşağıdaki gibidir."}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:b,tag:"img",props:{alt:"",src:"\u002Fblog\u002Fmodule_log.png"},children:[]}]},{type:a,value:f},{type:b,tag:R,props:{id:"özet"},children:[{type:b,tag:C,props:{ariaHidden:G,href:"#%C3%B6zet",tabIndex:I},children:[{type:b,tag:c,props:{className:[K,J]},children:[]}]},{type:a,value:"ÖZET"}]},{type:a,value:f},{type:b,tag:l,props:{},children:[{type:a,value:"Yazmış olduduğun ilgili kodlarını export et, hangi dosyada kullanmak istiyor isen orada import et."}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fjavascript_modul_kullanimi",extension:".md",createdAt:aS,updatedAt:aS}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","\n"," ","code","keyword","tag","function","p",")","(","string","}","property-access",".","\"","console","\n\n","=","\u003E","module","{","export","\n    ","class-name","a","interpolation-punctuation","kullanici","`","true","template-punctuation",-1,"icon-link","icon","attr-equals","attr-value","\u003C","method","log","attr-name","h1","comment","parameter",",","export ","operator","Kullanici","ad","line-numbers","template-string","\u003C\u002F","yas","div","interpolation","this","${","nuxt-content-highlight","control-flow","return","pre","html","li","kullaniciYasiGetir","kullaniciAdiGetir","language-javascript","default","script","\n        ","AD: "," _ad\n        ","yöntem-1-tek-tek-dışa-aktarım-yapmak","_yas\n    ","index.js","YAS: ","maybe-class-name"," kullaniciAdiGetir"," kullaniciYasiGetir ","_ad","Sadece ","yeniKullanici",";","name","class"," _yas","Yöntem 1 (Tek Tek Dışa Aktarım Yapmak)",2,"yöntem-2-toplu-dışarı-aktarım-yapmak","h2","\u002F\u002Fkullanici.js dosyası","Yöntem 2 (Toplu Dışarı Aktarım Yapmak)","head","meta","kullanici.js","constructor","body","2020-12-15T12:20:37.691Z")));