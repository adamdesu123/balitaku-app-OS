<template>
    <div class="row">
        <div class="col-12 header">
            <!-- Notifikasi -->
      <div class="btn-group">
        <a href="#TabsNotif" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="TabsNotif"><img
            src="../assets/img/lonceng.png" alt="" height="25"></a>
            <div class="WTabs p-3 collapse" id="TabsNotif">
              <TabsWrapp>
                <Tab title="Laporan Penanganan">
                  <p class="text-end text-primary">Tandai sudah dibaca</p>
                  <div class="mb-4 info">
                    <h4>Hari ini</h4>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun1.png" alt="" height="30"><span>Laporan penanganan di desa Pangkirapan</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun2.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun3.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun4.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                  </div>
                  <div class="mb-4 info">
                    <h4>Kemarin</h4>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun1.png" alt="" height="30"><span>Laporan penanganan di desa Pangkirapan</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun2.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun3.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun4.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                  </div>
                  <div class="mb-4 info">
                    <h4>Sen, 25 Maret 2022</h4>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun2.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun3.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                  </div>
                </Tab>
                <Tab title="Laporan Posyandu">
                  <p class="text-end text-primary">Tandai sudah dibaca</p>
                  <!-- Hari ini -->
                  <div class="mb-4 info">
                    <h4>Hari ini</h4>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun1.png" alt="" height="30"><span>Laporan penanganan di desa Pangkirapan</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun2.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun3.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun4.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                  </div>
                  <!-- Kemarin -->
                  <div class="mb-4 info">
                    <h4>Kemarin</h4>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun1.png" alt="" height="30"><span>Laporan penanganan di desa Pangkirapan</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun2.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun3.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                    <div class="d-flex gap-3 align-items-center mt-1 mb-3">
                      <img src="../assets/img/notif/akun4.png" alt="" height="30"><span>Pananganan Stunting di Medan Timur</span>
                    </div>
                  </div>
                  <!-- 2 Hari yang lalu -->
                </Tab>
              </TabsWrapp>
            </div>
      </div>
            <!-- Profil -->
            <div class="btn-group ms-3">
                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img
                        src="../assets/img/user.png" alt="" height="35"></a>
                <div class="dropdown-menu p-0 overflow-hidden wrapp-dd">
                    <div class="d-flex flex-column gap-3 text-center fs-5 p-3">
                        <div><img src="../assets/img/user.png" alt="" height="35"></div>
                        <span class="p-nama">Nathan Simanungkalit</span>
                        <span class="p-level">Admin</span>
                    </div>
                    <div class="d-flex justify-content-between p-btn align-items-center p-2">
                        <router-link to="profil" class="text-white btn border border-white fs-b">Profil
                        </router-link>
                        <router-link to="/" class="text-white btn border border-white fs-b">Keluar</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import TabsWrapp from '../components/tab/NotifTabsWrapp.vue'
import Tab from '../components/tab/Tab.vue'
</script>

<script>
export default {
    name: "TobNavbar"
}
</script>
<style>
.header {
    height: 60px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 2% 0 2%;
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 999;
}

.WTabs {
    position: absolute;
    right: 10%;
    top: 35px;
    background: #FFFFFF;
    border: 1px solid #BEBEBE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 400px;
    max-height: 70vh;
    overflow-y: auto;
}

.WTabs p {
    font-size: .9em;
    cursor: pointer;
}

.WTabs h4 {
    font-size: .95em;
    color: #6B6B6B;
}

.WTabs .info{
    font-size: .9em;
}


.wrapp-dd {
    width: 250px;
}

.p-nama {
    font-weight: bold;
    color: #00205C;
    font-size: .9em;
}

.p-level {
    margin-top: -15px;
    color: #00205C;
    font-size: .9em;
    font-weight: 500;
}

.p-btn {
    background-color: #00205C;
}

.fs-b {
    font-size: .9em;
}
</style>