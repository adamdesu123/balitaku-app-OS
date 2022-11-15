<template lang="">
    <div class="row set-head">
        <div class="col-6"><h3>Beranda</h3></div>
        <div class="col-6 d-flex justify-content-end">
            <div class="dropdown">
                <div class="btn-group">
                <button class="dropdown-toggle btn-kec" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pilih Kecamatan
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Kec. Marimbun</a></li>
                    <li><a class="dropdown-item" href="#">Kec. Marimbun</a></li>
                    <li><a class="dropdown-item" href="#">Kec. Marimbun</a></li>
                </ul>
                </div>
                <div class="btn-group ms-3">
                <button class="btn-kec" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../assets/img/i-down.png" alt="">
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Unduh PNG</a></li>
                    <li><a class="dropdown-item" href="#">Unduh PDF</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row box-jumlah">
      <router-link to="/dashboard/dataanak">
        <div class="box-item b-anak">
          <img src="../../assets/img/box-item/anak.png" alt="" class="img-box-jumlah img-anak">
          <div class="detail-box">
            <span>Anak</span>
            <p>1021</p>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard/datakader">
        <div class="box-item b-kader">
          <img src="../../assets/img/box-item/kader.png" alt="" class="img-box-jumlah img-kader">
          <div class="detail-box">
            <span>Kader</span>
            <p>1021</p>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard/datanakes">
        <div class="box-item b-nakes">
          <img src="../../assets/img/box-item/nakes.png" alt="" class="img-box-jumlah">
          <div class="detail-box">
            <span>Nakes</span>
            <p>1021</p>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard/datapuskesmas">
        <div class="box-item b-puskesmas">
          <img src="../../assets/img/box-item/puskesmas.png" alt="" class="img-box-jumlah">
          <div class="detail-box">
            <span>Puskesmas</span>
            <p>1021</p>
          </div>
        </div>
      </router-link>
      <router-link to="/dashboard/dataposyandu">
        <div class="box-item b-posyandu">
          <img src="../../assets/img/box-item/posyandu.png" alt="" class="img-box-jumlah">
          <div class="detail-box">
            <span>Posyandu</span>
            <p>1021</p>
          </div>
        </div>
      </router-link>
    </div>
   <gstunting></gstunting>
   <gjumlah></gjumlah>
   <gpengunjung></gpengunjung>
   <gcarousel></gcarousel>
   <gimunisasi></gimunisasi>
</template>
<script>
import Chart from 'chart.js/auto';
import gstunting from '../../components/grafik/GrafikStunting.vue';
import gjumlah from '../../components/grafik/GrafikJumlah.vue';
import gpengunjung from '../../components/grafik/GrafikPengunjung.vue';
import gcarousel from '../../components/grafik/GrafikCarousel.vue';
import gimunisasi from '../../components/grafik/GrafikImunisasi.vue';


export default {
    name: "beranda",
    components:{
        gstunting,gjumlah,gpengunjung,gcarousel,gimunisasi
    },
}
</script>
<style lang="">
    
</style>