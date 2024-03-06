// memanggil list navbar yang akan ditampilkan ketika hamburger menu diklik
let navList = document.querySelector('.list-nav');
// memanggil class navbar-extra membuat event dari hamburger menu
let navBar = document.querySelector('.navbar-extra');

// buat event ketika icon hamburger menu di klik
navBar.addEventListener('click', function(e) {
    e.preventDefault();
    // class aktif ditambahkan
    navList.classList.toggle('aktif');
    // jika class aktif sudah ditambahkan
    if ( navList ) {
        // maka ganti icon humburger menu dengan icon close
        navBar.querySelector('i').classList.toggle('fa-xmark');
    }
})