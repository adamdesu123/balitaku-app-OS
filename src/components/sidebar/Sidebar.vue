<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink, },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div v-if="collapsed" class="h-logo">
      <div><img src="../../assets/img/i-logo.png" alt="" height="30"></div>
      <span @click="toggleSidebar" class="i-burger"><i class="fas fa-bars"></i></span>
    </div>
    <div v-else>
      <div class="row">
        <div class="col">
          <div class="h-logo">
            <img src="../../assets/img/logo.png" alt="" height="55">
            <span @click="toggleSidebar" class="i-burger"><i class="fas fa-bars"></i></span>
          </div>
          <ul class="list-unstyled">
            <li>
              <SidebarLink to="/dashboard/beranda" icon="" class="s-icon"><img
                  src="../../assets/img/sidebar-icon/beranda.png" />Beranda</SidebarLink>
            </li>
            <li><a href="#datamaster-menu" data-bs-toggle="collapse" class="s-icon" role="button" aria-expanded="false"
                aria-controls="datamaster-menu"><img src="../../assets/img/sidebar-icon/datamaster.png" />Data Master
                <img src="../../assets/img/right-arrow.png" alt="" class="r-a"></a></li>
            <div class="collapse" id="datamaster-menu">
              <ul class="list-unstyled l-drop">
                <li>
                  <SidebarLink to="/dashboard/dataanak" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/datamaster/dataanak.png" alt=""> Data Anak</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/datakader" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/datamaster/datakader.png" alt=""> Data Kader</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/datanakes" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/datamaster/datanakes.png" alt=""> Data Nakes</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/datapuskesmas" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/datamaster/datapuskesmas.png" alt=""> Data Puskesmas
                  </SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/dataposyandu" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/datamaster/dataposyandu.png" alt=""> Data Posyandu
                  </SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/dataimunisasi" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/datamaster/dataimunisasi.png" alt=""> Data Imunisasi
                  </SidebarLink>
                </li>
              </ul>
            </div>
            <li><a href="#laporan-menu" data-bs-toggle="collapse" class="s-icon" role="button" aria-expanded="false"
                aria-controls="laporan-menu"><img src="../../assets/img/sidebar-icon/laporan.png" />Laporan
                <img src="../../assets/img/right-arrow.png" alt="" class="r-a"></a></li>
            <div class="collapse" id="laporan-menu">
              <ul class="list-unstyled l-drop">
                <li>
                  <SidebarLink to="/dashboard/lap-posyandu" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/laporan/lap_posyandu.png" alt=""> Posyandu</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/lap-penanganan" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/laporan/lap_posyandu.png" alt=""> Penanganan</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/log-perubahan" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/laporan/lap_posyandu.png" alt=""> Log Perubahan</SidebarLink>
                </li>
              </ul>
            </div>
            <li><a href="#publikasi-menu" data-bs-toggle="collapse" class="s-icon" role="button" aria-expanded="false"
                aria-controls="publikasi-menu"><img src="../../assets/img/sidebar-icon/publikasi.png" />Publikasi
                <img src="../../assets/img/right-arrow.png" alt="" class="r-a"></a></li>
            <div class="collapse" id="publikasi-menu">
              <ul class="list-unstyled l-drop">
                <li>
                  <SidebarLink to="/dashboard/pub-artikel" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/publikasi/artikel.png" alt=""> Artikel</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/pub-banner" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/publikasi/banner.png" alt=""> Banner</SidebarLink>
                </li>
              </ul>
            </div>
            <li>
              <SidebarLink to="/dashboard/jadwalkegiatan" icon="" class="s-icon"><img
                  src="../../assets/img/sidebar-icon/jadwal.png" /> Jadwal Kegiatan</SidebarLink>
            </li>
            <li><a href="#pengaturan-sistem-menu" data-bs-toggle="collapse" class="s-icon" role="button" aria-expanded="false"
                aria-controls="pengaturan-sistem-menu"><img src="../../assets/img/sidebar-icon/pengaturan.png" /> Pengaturan Sistem
                <img src="../../assets/img/right-arrow.png" alt="" class="r-a"></a></li>
            <div class="collapse" id="pengaturan-sistem-menu">
              <ul class="list-unstyled l-drop">
                <li>
                  <SidebarLink to="/dashboard/ps-umum" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Umum</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/ps-antropometri" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Antropometri</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/ps-roles" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Roles</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/ps-email" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Email</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/ps-send" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Send Email/WA</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/ps-whatsapp" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Whatsapp</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/ps-notifikasi" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Notifikasi</SidebarLink>
                </li>
                <li>
                  <SidebarLink to="/dashboard/ps-session" icon="" class="s-icon"><img
                      src="../../assets/img/sidebar-icon/pengaturan.png" alt=""> Session</SidebarLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
:root {
  --sidebar-bg-color: #00205c;
  --sidebar-item-hover: rgba(255, 255, 255, 0.2);
  --sidebar-item-active: rgba(255, 255, 255, 0.2);
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
}

.teks {
  color: rgb(248, 244, 244);
}

.sidebar .h-logo {
  width: 100%;
  font-weight: bold;
  height: 60px;
  font-size: 1.5em;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* sidebar and content */
.sidebar ul {
  display: inherit;
}

.sidebar ul li {
  width: 100%;
  list-style: none;
}

.sidebar ul li a {
  text-decoration: none;
  display: block;
  padding: 6px 12px;
  color: #fff;
  font-weight: normal;
}

.sidebar .l-drop {
  margin-left: 15px;
}

.sidebar .s-icon img {
  margin-right: 10px;
}

.sidebar .s-icon .r-a {
  float: right;
  margin-top: 5px;

}

.sidebar ul li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.i-burger {
  position: absolute;
  right: -50px;
  cursor: pointer;
  color: #00205c;
  font-size: 1.2em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
