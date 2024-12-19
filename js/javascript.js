//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.off('click').on('click', function() {
        menu.toggle();
        tombolMenu.toggleClass('aktif'); // Menambahkan atau menghapus kelas aktif
    });
}

$(document).ready(function() {
    klikMenu(); // Panggil klikMenu sekali saat dokumen siap

    var width = $(window).width();
    if (width < 990) {
        menu.hide(); // Sembunyikan menu jika lebar kurang dari 990px
    }

    // Menambahkan offset untuk scroll
    $('nav ul li a').on('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default anchor
        var target = $(this).attr('href'); // Mendapatkan href dari link
        var offset = 70; // Sesuaikan dengan tinggi navbar Anda

        $('html, body').animate({
            scrollTop: $(target).offset().top - offset // Mengatur scroll ke posisi target dengan offset
        }, 500); // Durasi animasi dalam milidetik

        // Tutup menu setelah item diklik
        if (width < 990) {
            menu.hide(); // Menyembunyikan menu setelah item diklik
            tombolMenu.removeClass('aktif'); // Menghapus kelas aktif dari tombol menu
        }
    });
});

// Responsive menu pada resize
$(window).resize(function(){
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        tombolMenu.removeClass('aktif'); // Menghapus kelas aktif jika lebar lebih dari 989px
    } else {
        menu.css("display", "none");
    }
});

//efek scroll
$(document).ready(function(){
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    });
});

// Tambahkan event listener untuk menutup menu saat klik di luar
$(document).on('click', function(event) {
    if (!$(event.target).closest('nav').length) {
        menu.hide(); // Menyembunyikan menu saat klik di luar
        tombolMenu.removeClass('aktif'); // Menghapus kelas aktif dari tombol menu
    }
});

// Tambahkan validasi form jika diperlukan
$("form").on("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form default
    alert("Thank you for your message! We will get back to you soon.");
    $(this).trigger("reset"); // Reset form setelah pengiriman
});