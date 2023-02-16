//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
const wait = (waitingTime) =› {
    const starTime = new Date() - getTime ()
    while (new Date() - getTime() < starTime + waitingTime) {
    }
    console. log( "hello")
    // alert ("hi") //? bLocking code
    console.time("myTimer")
    wait (2000) //? blocking code
    console.timeEnd("mytimer")
    console.log("fs13");

//* Asenkron (setTimeout)
//*----------------------------------------------------

//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------
