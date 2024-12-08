function sendEmail() {
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!to || !subject || !message) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    // E-posta gönderme isteği
    fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, message })
    })
    .then(response => {
        if (response.ok) {
            alert("E-posta başarıyla gönderildi!");
        } else {
            alert("E-posta gönderilemedi.");
        }
    })
    .catch(error => {
        console.error("Hata:", error);
        alert("E-posta gönderilirken bir hata oluştu.");
    });
}