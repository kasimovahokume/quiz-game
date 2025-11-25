//oyunun baslangici
alert("🌃 Gecə düşür\nYalnız cəsarətlilər və qorxmazlar şəhər küçələrinə çıxırlar. \nSəhər başlarını saymağa çalışacağıq…")
let question1 = confirm("Oynamaq isteyirsen?")

//indi true ve ya false qaytaracayiq
if(question1){
    alert("Əla, oyuna başlayaq!")
}else{
    alert("Təəssüfki istəmirsən sağol😔")
}
if (question1){
    let rol = "🕵️‍ Komissar Kattani"
    alert("Sen " + rol + "sen!\nƏsas şəhər müdafiəçisisən,vezifen donu tapmaqdi.\nOyunda vətəndaş, don və həkim var.")
    alert("Bu gece bir neferi vura  bilersen...")
}
//oyuncular
let players = prompt("Kimi vurmaq istəyirsən?\n1.Aytac\n2.Malik\n3.Xumar\n\n(rəqəm yazin)")
if(players==1){
    alert(" Aytac vətəndaşdır 👨🏼")
    alert("Təəssüfki, günahsizi vurduz,don qalib oldu")
}else if(players==2){
    alert("Malik Don-dur 🤵🏻")
    alert("Əla, Donu tapdız! Qalibsiz!")
    alert("Komissar rolunu qazandığın üçün sənə 💵 10 hesablandı!")
}else if(players==3){
    alert("Xumar həkimdir 👨🏼‍⚕️")
    alert("Təəssüfki, günahsizi vurduz,don qalib oldu")
}else{
    alert("Yanlış rəqəmi daxil etdiniz. Birdə yoxlayin.")
}

// İNDİ HƏKİM ROLU BAŞLAYIR

alert("Indi novbeti oyuncularla oynuyaq")

    let rol2 = "👨🏼‍⚕️ Hekim"
    alert("Sen " + rol2 + "sen!\nBu axşam kimi qoruyacağına sən qərar verirsən.\nKomissar Kattanini tapib qorumalisan! \n\nBu sefer yeni oyuncularimiz var.\n Oyunda iki vətəndaş, don və komissar var.")

//oyuncular
    let players2 = prompt("Kimi qorumaq istəyirsən?\n1.Aysel\n2.Mehemmed\n3.Fidan\n4.Babek\n\n(rəqəm yazin)")
if(players2==1){
    alert("Sənin seçimin Aysele")
}else if(players2==2){
    alert("Sənin seçimin Mehemmede")
}else if(players2==3){
    alert("Sənin seçimin Fidana")
}else if(players2==4){
    alert("Sənin seçimin Babeke")
}else{
    alert("Yanlış rəqəmi daxil etdiniz. Birdə yoxlayin.")
}
// Mafia həmişə Fidana hücum edir
let mafiaAttack = 3

if(players2 == mafiaAttack){
    alert("Mafia bu gecə Fidana hücum etdi!\nFidan komissar kattaniydi")
    alert("Təbriklər! Sən düzgün qorudun! Mafia bu tur uduzdu")
    alert("Həkim rolunu qazandığın üçün sənə 💵 10 hesablandı!")
}else{
    alert("Mafia bu gecə Fidana hücum etdi!\nFidan komissar kattaniydi")
    alert("Təəssüf... Sən başqa birini qorudun. Fidan öldü")
}

alert("Oyun bitdi! İndi növbəti rola keçirik...")
//Indi mafia roluna kececeysen ve buda sonuncudu
let rol3 = "🤵🏻 Don"
alert("Sen " + rol3 + "san!\nBu axşam kimi oldureceyine sən qərar verirsən.\nKomissar Kattanini tapib oldursen qalib olacaqsan! \n\n Oyunda iki vətəndaş, hekim və komissar var.")
let players3 = prompt("Kimi canini almaq istəyirsən?\n1.Aysel\n2.Mehemmed\n3.Fidan\n4.Babek\n\n(rəqəm yazin)")
let komissar = 2

if(players3 == komissar){
    alert("TƏBRİKLƏR! Komissari tapdin və oldurdun!")
    alert("🤵🏻 Don qalib oldu!")
    alert("Don rolunu qazandığın üçün sənə 💵 10 hesablandı!")
}else if(players3 == 1 || players3 == 3 || players3 == 4){
    alert("😢 Sən səhv etdin, komissari tapa bilmədin!")
    alert("🕵️ Komissar səni tapdı və öldürdü!\nHekimde basqasini qorudu")
    alert("Komissar qalib oldu!")
}else{
    alert("Yanlış rəqəmi daxil etdiniz. Birdə yoxlayin.")
}
alert("Oyun bu qeder idi\n\nOynadığınız üçün təşəkkürlər❤️")
