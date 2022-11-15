import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "loginPage",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/verif",
    name: "verifpage",
    component: () => import("../views/VerifPage.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard/Dashboard.vue"),
    children:[
      {
        path: "beranda",
        name: "beranda",
        component: () => import("../views/dashboard/Beranda.vue")
      },
      {
        path: "profil",
        name: "profil",
        component: () => import("../views/dashboard/Profil/Profil.vue")
      },
      {
        path: "editprofil",
        name: "editprofil",
        component: () => import("../views/dashboard/Profil/EditProfil.vue")
      },
      // Data Master
      {
        path: "dataanak",
        name: "datanak",
        component: () => import("../views/dashboard/DataMaster/DataAnak.vue"),
        // children:[
        //   {
        //     path: "editdataanak",
        //     name: "editdataanak",
        //     component: () => import("../views/dashboard/DataMaster/editdataanak.vue")
        //   }
        // ]
      },
      {
        path: "detaildataanak",
        name: "detaildataanak",
        component: () => import("../views/dashboard/DataMaster/DetailData/DetailDataAnak.vue")
      },
      // Data Kader
      {
        path: "datakader",
        name: "datakader",
        component: () => import("../views/dashboard/DataMaster/DataKader.vue")
      },
      {
        path: "tambahdatakader",
        name: "tambahdatakader",
        component: () => import("../views/dashboard/DataMaster/TambahData/TambahDataKader.vue")
      },
      {
        path: "detaildatakader",
        name: "detaildatakader",
        component: () => import("../views/dashboard/DataMaster/DetailData/DetailDataKader.vue")
      },
      {
        path: "editdatakader",
        name: "editdatakader",
        component: () => import("../views/dashboard/DataMaster/EditData/EditDataKader.vue")
      },
      // Data Nakes
      {
        path: "datanakes",
        name: "datanakes",
        component: () => import("../views/dashboard/DataMaster/DataNakes.vue")
      },
      {
        path: "tambahdatanakes",
        name: "tambahdatanakes",
        component: () => import("../views/dashboard/DataMaster/TambahData/TambahDataNakes.vue")
      },
      {
        path: "detaildatanakes",
        name: "detaildatanakes",
        component: () => import("../views/dashboard/DataMaster/DetailData/DetailDataNakes.vue")
      },
      {
        path: "editdatanakes",
        name: "editdatanakes",
        component: () => import("../views/dashboard/DataMaster/EditData/EditDataNakes.vue")
      },
      // Data Puskesmas
      {
        path: "datapuskesmas",
        name: "datapuskesmas",
        component: () => import("../views/dashboard/DataMaster/DataPuskesmas.vue")
      },
      {
        path: "tambahdatapuskesmas",
        name: "tambahdatapuskesmas",
        component: () => import("../views/dashboard/DataMaster/TambahData/TambahDataPuskesmas.vue")
      },
      {
        path: "detaildatapuskesmas",
        name: "detaildatapuskesmas",
        component: () => import("../views/dashboard/DataMaster/DetailData/DetailDataPuskesmas.vue")
      },
      {
        path: "editdatapuskesmas",
        name: "editdatapuskesmas",
        component: () => import("../views/dashboard/DataMaster/EditData/EditDataPuskesmas.vue")
      },
      // Data Posyandu
      {
        path: "dataposyandu",
        name: "dataposyandu",
        component: () => import("../views/dashboard/DataMaster/DataPosyandu.vue")
      },
      {
        path: "tambahdataposyandu",
        name: "tambahdataposyandu",
        component: () => import("../views/dashboard/DataMaster/TambahData/TambahDataPosyandu.vue")
      },
      {
        path: "detaildataposyandu",
        name: "detaildataposyandu",
        component: () => import("../views/dashboard/DataMaster/DetailData/DetailDataPosyandu.vue")
      },
      {
        path: "editdataposyandu",
        name: "editdataposyandu",
        component: () => import("../views/dashboard/DataMaster/EditData/EditDataPosyandu.vue")
      },
      // Data Imunisasi
      {
        path: "dataimunisasi",
        name: "dataimunisasi",
        component: () => import("../views/dashboard/DataMaster/DataImunisasi.vue")
      },
      {
        path: "tambahdataimunisasi",
        name: "tambahdataimunisasi",
        component: () => import("../views/dashboard/DataMaster/TambahData/TambahDataImunisasi.vue")
      },
      {
        path: "detaildataimunisasi",
        name: "detaildataimunisasi",
        component: () => import("../views/dashboard/DataMaster/DetailData/DetailDataImunisasi.vue")
      },
      {
        path: "editdataimunisasi",
        name: "editdataimunisasi",
        component: () => import("../views/dashboard/DataMaster/EditData/EditDataImunisasi.vue")
      },
      // Laporan
      {
        path: "lap-posyandu",
        name: "lap-posyandu",
        component: () => import("../views/dashboard/Laporan/LapPosyandu.vue")
      },
      {
        path: "detail-lap-posyandu",
        name: "detail-lap-posyandu",
        component: () => import("../views/dashboard/Laporan/DetailData/DetailLapPosyandu.vue")
      },
      {
        path: "lap-penanganan",
        name: "lap-penanganan",
        component: () => import("../views/dashboard/Laporan/LapPenanganan.vue")
      },
      {
        path: "detail-lap-penanganan",
        name: "detail-lap-penanganan",
        component: () => import("../views/dashboard/Laporan/DetailData/DetailLapPenanganan.vue")
      },
      {
        path: "log-perubahan",
        name: "log-perubahan",
        component: () => import("../views/dashboard/Laporan/Laporan-Log-Perubahan/LapLogPerubahan.vue")
      },
      // Publikasi
      {
        path: "pub-artikel",
        name: "pub-artikel",
        component: () => import("../views/dashboard/Publikasi/PublikasiArtikel.vue")
      },
      {
        path: "tambahartikel",
        name: "tambahartikel",
        component: () => import("../views/dashboard/Publikasi/TambahArtikel.vue")
      },
      {
        path: "pub-banner",
        name: "pub-banner",
        component: () => import("../views/dashboard/Publikasi/PublikasiBanner.vue")
      },
      {
        path: "tambahbanner",
        name: "tambahbanner",
        component: () => import("../views/dashboard/Publikasi/TambahBanner.vue")
      },
      // Jadwal Kegiatan
      {
        path: "jadwalkegiatan",
        name: "jadwalkegiatan",
        component: () => import("../views/dashboard/JadwalKegiatan/JadwalKegiatan.vue")
      },
      {
        path: "detailjadwal",
        name: "detailjadwal",
        component: () => import("../views/dashboard/JadwalKegiatan/DetailJadwal.vue")
      },
      // Pengaturan Sistem
      {
        path: "ps-umum",
        name: "ps-umum",
        component: () => import("../views/dashboard/PengaturanSistem/PsUmum.vue")
      },
      {
        path: "ps-antropometri",
        name: "ps-antropometri",
        component: () => import("../views/dashboard/PengaturanSistem/PAntropometri/PsAntropometri.vue")
      },
      {
        path: "ps-roles",
        name: "ps-roles",
        component: () => import("../views/dashboard/PengaturanSistem/PsRoles.vue")
      },
      {
        path: "ps-email",
        name: "ps-email",
        component: () => import("../views/dashboard/PengaturanSistem/PsEmail.vue")
      },
      {
        path: "ps-send",
        name: "ps-send",
        component: () => import("../views/dashboard/PengaturanSistem/PsSend.vue")
      },
      {
        path: "ps-whatsapp",
        name: "ps-whatsapp",
        component: () => import("../views/dashboard/PengaturanSistem/PWhatsapp/PsWhatsapp.vue")
      },
      {
        path: "ps-notifikasi",
        name: "ps-notifikasi",
        component: () => import("../views/dashboard/PengaturanSistem/PsNotifikasi.vue")
      },
      {
        path: "ps-session",
        name: "ps-session",
        component: () => import("../views/dashboard/PengaturanSistem/PsSession.vue")
      },
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
