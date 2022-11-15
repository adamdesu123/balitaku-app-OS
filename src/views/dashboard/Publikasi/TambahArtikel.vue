<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Tambah Artikel</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="pub-artikel" class="to-bf">Artikel</router-link>
      <span class="px-2">/</span>
      <router-link to="tambahartikel" class="to-ds">Tambah</router-link>
    </div>
  </div>
  <div class="wrapp-banner t-Banner">
    <div class="wrapp-table col-9">
      <input type="title" class="form-control" id="InputTitleArtikel" aria-describedby="emailHelp" placeholder="Judul">
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" id="ckd"></ckeditor>
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
      <div class="wrapp-btn-t-b wrapp-btn-d-d">
        <input type="submit" class="btn-c t-b" value="Simpan">
        <input type="submit" class="btn btn-outline-danger" value="Simpan Sebagai Draft">
        <router-link to="pub-artikel" class="btn-c b-b">Batal</router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "TambahArtikel",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
};
</script>
  
<style>
.form-kalender {
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px;
}

.inp-kalender {
  border: solid 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ;
}

.btn-kalender {
  justify-items: flex-end;
  border: solid 1px;
  margin-top: 250px;
}

.ck-editor .ck-editor__main .ck-content {
  background-color: #F1F1F1;
  height: 350px;
}

.ck-toolbar {
  width: 1170px;
  max-width: 1170px;
}

.btn-artikel {
  float: left;
}
</style>
  