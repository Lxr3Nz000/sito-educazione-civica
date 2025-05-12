document.addEventListener('DOMContentLoaded', function () {
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  portfolioItems.forEach(item => {
    item.addEventListener('click', function () {
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
document.getElementById('alcoholForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const sex = document.getElementById('sex').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const alcohol = parseFloat(document.getElementById('alcohol').value);
  const hours = parseFloat(document.getElementById('hours').value);

  const r = sex === 'male' ? 0.55 : 0.68;
  const beta = 0.017;

  const BAC = (alcohol / (r * weight)) - (beta * hours);

  let resultMessage = `
            <table>
                <tr>
                    <th>Parametro</th>
                    <th>Valore</th>
                </tr>
                <tr>
                    <td>Tasso Alcolemico (BAC)</td>
                    <td>${BAC.toFixed(4)}</td>
                </tr>
            </table>`;

  if (BAC >= 0.08) {
    resultMessage += "<p><strong>Attenzione!</strong> Se guidi, sei oltre il limite legale.</p>";
  }

  document.getElementById('result').innerHTML = resultMessage;
});

