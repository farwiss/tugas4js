let frm = document.getElementById("outputGaji");

let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value=""> Pilih Jabatan ------</option>`;
for (let j in jabatanPilihan) {
  pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`;
}

let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value=""> Pilih Status ------</option>`;
for (let s in statusPilihan) {
  pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]}</option>`;
}

frm.jabatan.innerHTML = pilihJabatan;
frm.status.innerHTML = pilihStatus;

function gajiPegawai() {
  let nama = frm.nama.value;
  let jabatan = frm.jabatan.value;
  let status = frm.status.value;

  let gapok;

  switch (jabatan) {
    case "Manager":
      gapok = 15000000;
      break;
    case "Asisten Manager":
      gapok = 10000000;
      break;
    case "Staff":
      gapok = 5000000;
      break;
    default:
      gapok = 0;
  }

  let tnjJabatan = gapok * 0.15;
  let bpjs = gapok * 0.1;

  // ternary
  let tnjKeluarga = status == "Menikah" ? 0.2 * gapok : 0;

  let totalGaji = gapok + tnjJabatan + bpjs + tnjKeluarga;

  // sweet alert
  swal({
    html: ` 
    <h1> Hasil Output</h1>
  <table border="1"
  align="center"
  cellpadding="5"
  cellspacing="0"
  width="25">

<thead>
<tr>
<th>Nama Pegawai </th>
<th>Jabatan Pegawai </th> 
<th>Status Pegawai </th> 
<th>Gaji Pokok </th>
<th>Tunjangan Jabatan </th> 
<th>BPJS </th> 
<th>Tunjangan Keluarga </th>
</tr>
</thead>

<tbody>
<tr>
<td>${nama}</td>
<td>${jabatan}</td>
<td>${status}</td>
<td>${convertToRupiah(gapok)}</td>
<td>${convertToRupiah(tnjJabatan)}</td>
<td>${convertToRupiah(bpjs)}</td>
<td>${convertToRupiah(tnjKeluarga)}</td>
</tr>
</tbody>

<tfoot>
<tr>
<td colspan="7">Total Gaji : ${convertToRupiah(totalGaji)}</td>
</tr>
</tfoot>
</table>
`,
  });
}

function convertToRupiah(angka) {
  var rupiah = "";
  var angkarev = angka.toString().split("").reverse().join("");
  for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
}
