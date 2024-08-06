function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("transaksiForm");
  const transaksiList = document.getElementById("transaksiList");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const ID = document.getElementById("ID").value;
    const SERVER = document.getElementById("SERVER").value;
    const no.WA = document.getElementById("No.WA").value;
    const Jenis Pembelian = document.getElementById("Jenis Pembelian").value;
    const BELI MENGGUNAKAN = document.getElementById("BELI MENGGUNAKAN").value;
    const jumlah = document.getElementById("jumlah").value;

    const transaksiItem = document.createElement("div");
    transaksiItem.classList.add("transaksi-item");
    transaksiItem.innerHTML = `
        <p><strong>ID:</strong> ${nama}</p>
        <p><strong>SERVER:</strong> ${alamat}</p>
        <p><strong>No.WA:</strong> ${noHandphone}</p>
        <p><strong>Jenis Pembelian:</strong> ${tipe}</p>
        <p><strong>BELI MENGGUNAKAN:</strong> ${BELI MENGGUNAKAN}</p>
        <p><strong>Jumlah:</strong> ${jumlah}</p>
      `;

    transaksiList.appendChild(transaksiItem);

    form.reset();
    showSection("Transaksi");
  });
});
