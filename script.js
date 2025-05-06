document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const pdfUrl = this.getAttribute('data-pdf-url');
            const websiteUrl = this.getAttribute('data-url');
            const dataType = this.getAttribute('data-type');

            if (pdfUrl) {
                window.open(pdfUrl, '_blank');
            } else if (websiteUrl) {
                window.open(websiteUrl, '_blank');
            } else {
                console.error('Nessun URL (PDF o sito web) trovato per questo lavoro.');
            }
        });
    });
});