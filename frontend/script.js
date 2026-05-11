const API = "http://localhost:3000/catatan";

async function getcatatan() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("catatanList");
  list.innerHTML = "";

  data.forEach(catatan => {
    list.innerHTML += `
      <div class="catatan">
        <h3>${catatan.judul}</h3>
        <p>${catatan.isi}</p>
        <button onclick="deletecatatan(${catatan.id})">Hapus</button>
      </div>
    `;
  });
}

async function addcatatan() {
  const judul = document.getElementById("judul").value;
  const isi = document.getElementById("isi").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ judul, isi })
  });

  getcatatan();
}

async function deletecatatan(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  getcatatan();
}

getcatatan();