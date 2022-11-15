<template>
  <!-- TOPBAR -->
  <div class="topbar nb-md">
    <div class="logo">
      <img src="../assets/img/logo-home.png" alt="" />
    </div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Kecukupan Gizi</a></li>
      <li><a href="#">Pelayanan Kesehatan</a></li>
      <li><a href="#">FAQ</a></li>
      <li>
        <router-link to="/login" class="btn-login">Login</router-link>
      </li>
    </ul>
    <button @click="isOpen = true" class="i-burger2"><i class="fas fa-bars"></i></button>
  </div>



  <!-- CAROUSEL -->
  <div class="row carousel-wrapp">
    <div class="col-lg-11 mx-auto col-md-10 col-sm-10 col-10">
      <div id="carouselExampleIndicators" class="carousel slide rounded-4 overflow-hidden" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="content-carousel main-bg">
              <div class="col-lg-8 col-md-8 col-sm-8 col-8 left-content">
                <h3>Pendataan Stunting Pemko Medan</h3>
                <p>
                  Hal ini bertujuan untuk menekan angka stunting di Kab/Kota
                  karena sejak dini pemerintah mempunyai data yang valid karena
                  nantinya akan dilakukan secara langsung oleh kader posyandu
                  dan stackholder terkait.
                </p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                <img src="../assets/img/carousel/img-1.png" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="content-carousel main-bg">
              <div class="col-lg-8 col-md-8 col-sm-8 col-8 left-content">
                <h3>Pendataan Stunting Pemko Medan</h3>
                <p>
                  Hal ini bertujuan untuk menekan angka stunting di Kab/Kota
                  karena sejak dini pemerintah mempunyai data yang valid karena
                  nantinya akan dilakukan secara langsung oleh kader posyandu
                  dan stackholder terkait.
                </p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                <img src="../assets/img/carousel/img-2.png" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
          <!-- Slide 3 -->
          <div class="carousel-item">
            <div class="content-carousel main-bg">
              <div class="col-lg-8 col-md-8 col-sm-8 col-8 left-content">
                <h3>Pendataan Stunting Pemko Medan</h3>
                <p>
                  Hal ini bertujuan untuk menekan angka stunting di Kab/Kota
                  karena sejak dini pemerintah mempunyai data yang valid karena
                  nantinya akan dilakukan secara langsung oleh kader posyandu
                  dan stackholder terkait.
                </p>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                <img src="../assets/img/carousel/img-3.png" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="" aria-hidden="true"><img src="../assets/img/left.png" alt="" class="img-fluid" /></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="" aria-hidden="true"><img src="../assets/img/right.png" alt="" class="img-fluid" /></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <!-- GRAFIK -->
  <div class="row wrapper mt-5">
    <div class="col-12 mb-4">
      <gstunting></gstunting>
    </div>
    <div class="col-12 mb-4">
      <gjumlah></gjumlah>
    </div>
    <div class="col-12 mb-4">
      <gpengunjung></gpengunjung>
    </div>
    <div class="col-12 mb-4">
      <gcarousel></gcarousel>
    </div>
    <div class="col-12 mb-4">
      <gimunisasi></gimunisasi>
    </div>
  </div>
  <!-- BERITA -->
  <div class="row mt-5">
    <div class="garis-b col-10"></div>
  </div>
  <div class="row mt-5 p-5 justify-content-center gap-5">
    <div class="col-lg-7 berita-kiri">
      <!-- Berita Utama 1 -->
      <div class="berita-utama">
        <h4>Masalah stunting pada anak dan cara mengatasinya</h4>
        <div class="tgl-post">
          <img src="../assets/img/homepage/berita/clock.png" alt="" height="30" class="img-fluid">
          <span>12 Maret 2022</span>
        </div>
        <div class="d-flex mt-3 bu-c">
          <img src="../assets/img/homepage/berita/berita-utama/bu-img-1.png" alt="" class="img-fluid">
          <span>Anak pendek atau sangat pendek belum tentu stunting akibat masalah gizi kronis, dikarenakan anak pendek
            atau sangat pendek dapat juga terjadi karena faktor genetika (keturunan). Kondisi ini perlu dilakukan
            pemeriksaan secara lebih lanjut oleh tenaga kesehatan dengan tujuan untuk menentukan anak tersebut stunting
            atau tidak.faktor genetika (keturunan). Kondisi ini <a href="#">selengkapnya</a></span>
        </div>
      </div>
      <!-- Berita Utama 2 -->
      <div class="berita-utama">
        <h4>Masalah stunting pada anak dan cara mengatasinya</h4>
        <div class="tgl-post">
          <img src="../assets/img/homepage/berita/clock.png" alt="" height="30" class="img-fluid">
          <span>29 April 2022</span>
        </div>
        <div class="d-flex mt-4 bu-c">
          <img src="../assets/img/homepage/berita/berita-utama/bu-img-2.png" alt="" class="img-fluid">
          <span>Anak pendek atau sangat pendek belum tentu stunting akibat masalah gizi kronis, dikarenakan anak pendek
            atau sangat pendek dapat juga terjadi karena faktor genetika (keturunan). Kondisi ini perlu dilakukan
            pemeriksaan secara lebih lanjut oleh tenaga kesehatan dengan tujuan untuk menentukan <a
              href="#">selengkapnya</a></span>
        </div>
      </div>
    </div>
    <div class="col-lg-3 berita-kanan">
      <span class="hd-bt">Berita terbaru</span>
      <div class="col card-bt">
        <img src="../assets/img/homepage/berita/berita-terbaru/img-1.png" alt="" class="img-fluid">
        <br>
        <img src="../assets/img/homepage/berita/clock.png" alt="" class="img-fluid">
        <span>15 September 2022</span>
        <p>Kenali apa itu campak rubella, serta bagaimana penanganannya.</p>
      </div>
      <div class="col card-bt">
        <img src="../assets/img/homepage/berita/berita-terbaru/img-2.png" alt="" class="img-fluid">
        <br>
        <img src="../assets/img/homepage/berita/clock.png" alt="" class="img-fluid">
        <span>15 September 2022</span>
        <p>Meningkatnya batuk pilek pada anak di kota Medan.</p>
      </div>
    </div>
  </div>

  <!-- INFO GIZI -->
  <div class="row mt-5" id="info">
    <div class="col-10 mx-auto wrapp-IG">
      <h3>Informasi Kecukupan Gizi</h3>
      <table class="tb-gizi">
        <tr>
          <th bgcolor="#C6303E">Umur</th>
          <th bgcolor="#E5AD06">BB (Kg)</th>
          <th bgcolor="#24963E">TB (cm)</th>
          <th bgcolor="#F51E1E">Energi (kkal)</th>
          <th bgcolor="#BE7520">Karbohidrat (g)</th>
          <th bgcolor="#0783B9">Air (ml)</th>
          <th bgcolor="#F9199F">Serat (g)</th>
        </tr>
        <tr>
          <td>0 - 6 bulan</td>
          <td>6</td>
          <td>61</td>
          <td>550</td>
          <td>61</td>
          <td>61</td>
          <td>61</td>
        </tr>
        <tr>
          <td>7 - 11 bulan</td>
          <td>9</td>
          <td>71</td>
          <td>725</td>
          <td>71</td>
          <td>71</td>
          <td>71</td>
        </tr>
        <tr>
          <td>1 - 3 tahun</td>
          <td>13</td>
          <td>91</td>
          <td>1125</td>
          <td>91</td>
          <td>91</td>
          <td>91</td>
        </tr>
        <tr>
          <td>4 - 6 tahun</td>
          <td>19</td>
          <td>112</td>
          <td>1600</td>
          <td>112</td>
          <td>112</td>
          <td>112</td>
        </tr>
        <tr>
          <td>7 - 9 tahun</td>
          <td>27</td>
          <td>130</td>
          <td>1850</td>
          <td>130</td>
          <td>130</td>
          <td>130</td>
        </tr>
      </table>
    </div>
  </div>

  <!-- FAQ -->
  <div class="row mt-5">
    <div class="col-10 wrapp-faq mx-auto">
      <h3>FAQ</h3>
      <div class="ask">
        <!-- Pertanyaan ke1 -->
        <span class="sub-judul">Imunisasi</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul1-1" role="button" aria-expanded="false"
            aria-controls="sub-judul1-1">
            Apa saja imunisasi dasar lengkap yang harus dipenuhi anak usia 0-11 bulan ?
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul1-1">
            <div class="ms-3 mt-2">
              1 bulan : BCG Polio 1, mencegah penularan tuberculosis dan polio
              <br>2 bulan : DPT-HB 1 Polio 2, mencegah polio, difteri, batuk rejan, retanus, hepatitis B,
              meningitis, & pneumonia
              <br>3 bulan : DPT-HB-Hib 2 Polio 3
              <br>4 bulan : DPT-HB-Hib 3 polio 4
              <br>9 bulan : Campak, mencegah campak
            </div>
          </div>
        </div>
        <!-- Pertanyaan ke2 -->
        <span class="sub-judul mt-3">Efek Vaksin</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul2-1" role="button" aria-expanded="false"
            aria-controls="sub-judul2-1">
            Anak Demam setelah imunisasi, apakah wajar ?
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul2-1">
            <div class="ms-3 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <!-- Pertanyaan ke3 -->
        <span class="sub-judul mt-3">Pemeriksaan Ibu Hamil</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul3-1" role="button" aria-expanded="false"
            aria-controls="sub-judul3-1">
            Bagaimana saya mengetahui kandungan saya ?
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul3-1">
            <div class="ms-3 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <!-- Pertanyaan ke4 -->
        <span class="sub-judul mt-3">Pencegahan Stunting</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul4-1" role="button" aria-expanded="false"
            aria-controls="sub-judul4-1">
            Bagaimana cara mencegah stunting pada Bayi/Balita ?
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul4-1">
            <div class="ms-3 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <!-- Pertanyaan ke5 -->
        <span class="sub-judul mt-3">Jenis Vaksin</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul5-1" role="button" aria-expanded="false"
            aria-controls="sub-judul5-1">
            Apa saja imunisasi yang perlu diberikan pada bayi ?
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul5-1">
            <div class="ms-3 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <!-- Pertanyaan ke6 -->
        <span class="sub-judul mt-3">Kebutuhan gizi Anak</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul6-1" role="button" aria-expanded="false"
            aria-controls="sub-judul6-1">
            Apa saja makanan yang dapat diberikan kepada bayi umur dibawah 6 bulan ?
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul6-1">
            <div class="ms-3 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <!-- Pertanyaan ke7 -->
        <span class="sub-judul mt-3">Data Stunting</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul7-1" role="button" aria-expanded="false"
            aria-controls="sub-judul7-1">
            Berapa banyak kejadian stunting di Kota Medan
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul7-1">
            <div class="ms-3 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <!-- Pertanyaan ke8 -->
        <span class="sub-judul mt-3">Catatan Imunisasi</span><br>
        <div class="wrapp-ask">
          <a class="" data-bs-toggle="collapse" href="#sub-judul8-1" role="button" aria-expanded="false"
            aria-controls="sub-judul8-1">
            Kapan pemberian vaksin DPT-HB-Hib lanjutan ?
            <img src="../assets/img/arrow-down-faq.png" alt="" height="10">
          </a>
          <div class="collapse multi-collapse" id="sub-judul8-1">
            <div class="ms-3 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="footer">
    <div class="d-flex justify-content-between gap-5">
      <div class="f-kiri">
        <span>Dinas Komunikasi dan Informatika</span>
        <br>
        <span>JMGP+7V9, Jl. Sidorukun, Pulo Brayan Darat II, Kec. Medan Tim., Kota Medan, Sumatera Utara Kode Pos:
          20237</span>
      </div>
      <div class="f-kanan">
        <span><img src="../assets/img/homepage/footer/e-mail.png" alt=""> : diskominfo@gmail.com</span>
        <br>
        <span><img src="../assets/img/homepage/footer/telp.png" alt=""> : +62 82XXXXXXXXX</span>
        <div class="sosmed mt-5 d-flex gap-2">
          <a href=""><img src="../assets/img/homepage/footer/fb.png" alt=""></a>
          <a href=""><img src="../assets/img/homepage/footer/ig.png" alt=""></a>
          <a href=""><img src="../assets/img/homepage/footer/tweet.png" alt=""></a>
        </div>
      </div>
    </div>
    <div class="f-bawah d-flex align-items-center gap-5 mt-5">
      <div class="d-flex align-items-center gap-2">
        <img src="../assets/img/homepage/footer/kominfo-logo.png" alt="">
        <div><span>Dinas Komunikasi dan Informatika <br> Kota Medan</span></div>
      </div>

      <img src="../assets/img/homepage/footer/metromatika-logo.png" alt="" height="50">
    </div>
  </div>


  <teleport to='body'>
    <div class="right-bar" v-if="isOpen">

      <ul>
        <li><button @click="isOpen = false" class="btn"><i class="fas fa-xmark text-white"></i></button></li>
        <li><a href="#">Kecukupan Gizi</a></li>
        <li><a href="#">Pelayanan Kesehatan</a></li>
        <li><a href="#">FAQ</a></li>
        <li>
          <router-link to="/login" class="btn btn-light text-dark">Login</router-link>
        </li>
      </ul>
    </div>
  </teleport>

</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<script>
import Chart from 'chart.js/auto';
import gstunting from '../components/grafik/GrafikStunting.vue';
import gjumlah from '../components/grafik/GrafikJumlah.vue';
import gpengunjung from '../components/grafik/GrafikPengunjung.vue';
import gcarousel from '../components/grafik/GrafikCarousel.vue';
import gimunisasi from '../components/grafik/GrafikImunisasi.vue';

export default {
  name: "HomeView",
  components: {
    gstunting, gjumlah, gpengunjung, gcarousel, gimunisasi
  },
};
</script>

<style src="../assets/css/LandingPage.css">

</style>
