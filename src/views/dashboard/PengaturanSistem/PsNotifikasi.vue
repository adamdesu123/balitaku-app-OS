<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Pengaturan Notifikasi</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="ps-notifikasi" class="to-ds">Pengaturan Notifikasi</router-link>
    </div>
  </div>
  <div class="wrapp-pengaturanUmum">
    <div class="wrapp-p">
      <table class="table table-striped fd">
        <thead>
          <tr>
            <th>Event</th>
            <th>Jenis</th>
            <th>Contoh Pesan</th>
            <th>Jadwal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Artikel</td>
            <td>
              <ul class="pn-item">
                <li><input type="checkbox" name="" id=""> Email</li>
                <li><input type="checkbox" name="" id=""> Whatsapp</li>
                <li><input type="checkbox" name="" id="" checked> Mobile App</li>
              </ul>
            </td>
            <td>Custom</td>
            <td>
              <ul class="pn-item">
                <li><input type="checkbox" name="" id="" checked> 1 Hari Setelah</li>
                <li><input type="checkbox" name="" id=""> 2 Hari Setelah</li>
                <li><input type="checkbox" name="" id=""> 3 Hari Setelah</li>
                <li><input type="checkbox" name="" id=""> 4 Hari Setelah</li>
                <li><a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tambah Opsi <img src="../../../assets/img/pengaturan/notif/nb-arrow-down.png" alt="">
                  </a>
                  <ul class="dropdown-menu p-3">
                    <li>1 Jam Setelah</li>
                    <li>2 Jam Setelah</li>
                    <li>3 Jam Setelah</li>
                    <li>6 Jam Setelah</li>
                    <li>12 Jam Setelah</li>
                    <li>1 Hari Setelah</li>
                    <li>2 Hari Setelah</li>
                    <li>3 Hari Setelah</li>
                    <li>4 Hari Setelah</li>
                    <li>5 Hari Setelah</li>
                    <li>6 Hari Setelah</li>
                    <li>7 Hari Setelah</li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table table-striped fd">
        <thead>
          <tr>
            <th>Event</th>
            <th>Jenis</th>
            <th>Contoh Pesan</th>
            <th>Jadwal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jadwal Kegiatan</td>
            <td>
              <ul class="pn-item">
                <li><input type="checkbox" name="" id=""> Email</li>
                <li><input type="checkbox" name="" id=""> Whatsapp</li>
                <li><input type="checkbox" name="" id="" checked> Mobile App</li>
              </ul>
            </td>
            <td>Kegiatan Posyandu dikecamatan Pulo Brayan</td>
            <td>
              <ul class="pn-item">
                <li><input type="checkbox" name="" id="" checked> 1 Hari Setelah</li>
                <li><input type="checkbox" name="" id=""> 2 Hari Setelah</li>
                <li><input type="checkbox" name="" id=""> 3 Hari Setelah</li>
                <li><input type="checkbox" name="" id=""> 4 Hari Setelah</li>
                <li><a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tambah Opsi <img src="../../../assets/img/pengaturan/notif/nb-arrow-down.png" alt="">
                  </a>
                  <ul class="dropdown-menu p-3">
                    <li>1 Jam Setelah</li>
                    <li>2 Jam Setelah</li>
                    <li>3 Jam Setelah</li>
                    <li>6 Jam Setelah</li>
                    <li>12 Jam Setelah</li>
                    <li>1 Hari Setelah</li>
                    <li>2 Hari Setelah</li>
                    <li>3 Hari Setelah</li>
                    <li>4 Hari Setelah</li>
                    <li>5 Hari Setelah</li>
                    <li>6 Hari Setelah</li>
                    <li>7 Hari Setelah</li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="" align="right">
        <button class="btn-c simpan">Simpan</button>
      </div>
    </div>
  </div>

</template>
  
<script>

export default {
  name: 'ps-notifikasi',
  components: {

  }
}
</script>
<style>
.wrapp-p {
  background-color: #fff;
  border-radius: 6px;
  border-top: 3px solid #00205C;
  padding: 30px;

}

.wrapp-p .fd .pn-item {
  list-style: none;
  padding: 0;
  display: inherit;
}

.wrapp-p .fd a {
  color: #222;
}
</style>