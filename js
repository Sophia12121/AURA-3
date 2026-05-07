document.getElementById('mainContact')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent successfully. We will get back to you within 24 hours.");
    this.reset();
});
