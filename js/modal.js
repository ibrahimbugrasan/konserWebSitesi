// Modal ve butonları seçme
var modals = document.querySelectorAll('.modal');
var openModalBtns = document.querySelectorAll('.openModalBtn');
var closeBtns = document.querySelectorAll('.close');

// Butonlara tıklama olayları ekleyin
openModalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.getAttribute('data-modal'); // Butonun 'data-modal' özelliğinden modal id'sini al
        var modal = document.getElementById(modalId); // Modal'ı seç
        modal.style.display = "block"; // Modal'ı göster
    }
});

// Kapanma simgelerine tıklama olayları ekleyin
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest('.modal'); // Butonun ait olduğu modal'ı bul
        modal.style.display = "none"; // Modal'ı kapat
    }
});

// Modal dışına tıklanırsa modal'ı kapat
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
