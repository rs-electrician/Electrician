// WhatsApp quick button
function openWhatsApp() {
    window.open('https://wa.me/916389293604', '_blank');
}

// Feedback star rating (feedback.html)
document.addEventListener('DOMContentLoaded', function() {
    var stars = document.querySelectorAll('.rating-stars input[type="radio"]');
    var feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your feedback!');
            feedbackForm.reset();
        });
    }
});