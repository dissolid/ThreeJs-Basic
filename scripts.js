
var goruntuleyici = new THREE.WebGLRenderer({ antialias: true }); // Görüntileyici(renderer) oluşturduk

goruntuleyici.setClearColor("#000000"); // goruntuleyici arka planı rengini belirledik
goruntuleyici.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(goruntuleyici.domElement);

// Sahne
var sahne = new THREE.Scene();

//Kamera
var bakisAcisi = 75; //(Field of View) 75 derecelik bir açıyla bakacağımız anlamına geliyor
var yakinSinir = 0.1; // Kameranın görüntüleyeceği en yakın sınır başlangıcı.
var uzakSinir = 8;  // Kameranın görüntüleyeceği en uzak sınır noktası.
var boyutOran = window.innerWidth / window.innerHeight; // Pencerenenin oranı
var kamera = new THREE.PerspectiveCamera(bakisAcisi, boyutOran, yakinSinir, uzakSinir); 

// Blok tanımı
var blokGenislik = 1;
var blokyukseklik = 1;
var blokDerinlik = 1;
var bicim = new THREE.BoxGeometry(blokGenislik, blokyukseklik, blokDerinlik);
var malzeme = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
var blokMatris = new THREE.Object3D(); // Birden fazla objeyi ekranda görmek istiyoruz. Bu yüzden Object3D() kullanacağız.


for(var j=0;j<2;j++){

    for (var i = 0; i < 4; i++) {
        var blok = new THREE.Mesh(bicim, malzeme);
        blok.position.x = 2 * (i % 2);
        blok.position.y = 2*Math.floor(i/2); //floor metodu sayının virgülden sonrasını atar.(Aslında aşağı yuvarlar. 1.5 > 1, 2.9 > 2)
        blok.position.z = j * -2;
        blokMatris.add(blok);
        console.log("bloklar eklendi");
    }
    
}



kamera.position.set(1, 1, 4);
sahne.add(blokMatris);
goruntuleyici.render(sahne, kamera);