<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Jadwal Kegiatan</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="jadwalkegiatan" class="to-ds">Jadwal Kegiatan</router-link>
    </div>
  </div>
  <div class="row wrapp-jadwalKegiatan m-0 gap-4 justify-content-between">
    <div class="col-lg-5 left-content">
      <div class="tgl-jadwal">
        <h3>Agustus</h3>
        <DatePicker v-model="date" is-expanded></DatePicker>
      </div>
    </div>
    <div class="col-lg-6 right-content">
      <div class="loc-item l-box">
        <a href="#JadDetailSubmenu1" data-bs-toggle="collapse" class="l-icon"><img
            src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt=""></a>
        <div class="t-loc">
          <span>Kecamatan Medan Barat</span>
        </div>
      </div>
      <div class="collapse list-unstyled drop-detail" id="JadDetailSubmenu1">
        <div class="loc-item l-box">
          <router-link to="detailjadwal">
            <div class="l-icon bg-sub">
              <img src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt="">
            </div>
          </router-link>
          <div class="t-loc">
            <p>Kecamatan Medan Barat</p>
            <span>Jl.Sidorukun No.70 Medan Timur</span>
          </div>
        </div>
      </div>

      <div class="loc-item l-box">
        <a href="#JadDetailSubmenu2" data-bs-toggle="collapse" class="l-icon"><img
            src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt=""></a>
        <div class="t-loc">
          <span>Kecamatan Medan Barat</span>
        </div>
      </div>
      <div class="collapse list-unstyled drop-detail" id="JadDetailSubmenu2">
        <div class="loc-item l-box">
          <router-link to="detailjadwal">
            <div class="l-icon bg-sub">
              <img src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt="">
            </div>
          </router-link>
          <div class="t-loc">
            <p>Kecamatan Medan Barat</p>
            <span>Jl.Sidorukun No.70 Medan Timur</span>
          </div>
        </div>
      </div>

      <div class="loc-item l-box">
        <a href="#JadDetailSubmenu3" data-bs-toggle="collapse" class="l-icon"><img
            src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt=""></a>
        <div class="t-loc">
          <span>Kecamatan Medan Barat</span>
        </div>
      </div>

      <div class="loc-item l-box">
        <a href="#JadDetailSubmenu4" data-bs-toggle="collapse" class="l-icon"><img
            src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt=""></a>
        <div class="t-loc">
          <span>Kecamatan Medan Barat</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {DatePicker} from 'v-calendar';
import 'v-calendar/dist/style.css';

export default {
  name: 'JadwalKegiatan',
  components: {
    DatePicker
  },
  data() {
    return {
      date: new Date(),
    }
  }
}
</script>
