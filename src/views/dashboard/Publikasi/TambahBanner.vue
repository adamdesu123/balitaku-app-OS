<template lang="">
      <div class="row set-head">
    <div class="col-6">
      <h3>Tambah Banner</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="pub-banner" class="to-bf">Banner</router-link>
      <span class="px-2">/</span>
      <router-link to="tambahbanner" class="to-ds">Tambah</router-link>
    </div>
  </div>
      <div class="wrapp-banner t-Banner">
        <div class="inp-img">
          <input type="file" class="input-img">
        </div>
        <div class="inp-content">
          <div class="inp-tgl">
            <div class="inp-tgl-p">
              <span>Tanggal Publikasi</span>
              <br><input type="date">
            </div>
            <div class="inp-tgl-ex">
              <span>Tanggal Expired</span>
              <br><input type="date">
            </div>
            </div>  
            <div class="wrapp-btn-t-b">
              <input type="submit" class="btn-c t-b" value="Simpan">
              <router-link to="pub-banner" class="btn-c b-b">Batal</router-link>
            </div>
        </div>
      </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>