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

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const close = document.getElementsByClassName("close")[0];

// Clic sull'immagine
document.querySelectorAll('.clickable-image').forEach(img => {
  img.onclick = () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  }
});

// Clic sulla X
close.onclick = () => {
  modal.style.display = "none";
}

// Clic fuori dall'immagine
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Premi ESC per chiudere
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

