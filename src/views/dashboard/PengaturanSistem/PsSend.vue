<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Pengaturan Send Email/WA</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="ps-send" class="to-ds">Pengaturan Send Email/WA</router-link>
        </div>
    </div>
    <div class="wrapp-banner t-Banner">
      <div class="wrapp-table col-9">
        <h4>Judul <span class="required">*</span></h4>
        <input type="title" class="form-control" id="InputTitleArtikel" aria-describedby="emailHelp">
        <h4 class="mt-2">Kirim melalui <span class="required">*</span></h4>
        <div class="d-flex gap-4 mb-2">
          <span><input type="checkbox"> Email</span>
          <span><input type="checkbox"> Whatsapp</span>
          <span><input type="checkbox"> Mobile App</span>
        </div>
        <h4 class="mt-2">Isi <span class="required">*</span></h4>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" id="ckd"></ckeditor>
      </div>
      <div class="inp-content">
        <h4>Kepada <span class="required">*</span></h4>
        <div class="cb-to d-flex flex-column gap-2 text-dark">
          <span><input type="checkbox"> Kader</span>
          <span><input type="checkbox"> Nakes</span>
          <span><input type="checkbox"> User</span>  
        </div>
        <div class="wrapp-btn-t-b wrapp-btn-d-d">
          <button class="btn-c simpan">Kirim</button>
        </div>
      </div>
    </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
    name: "ps-send",
    data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  }
}
</script>
<style>

.wrapp-banner.t-Banner{
  color: #111;
}

.wrapp-banner.t-Banner h4{
  font-size: 1.2em;
  font-weight: bold;
  
}

.cb-to{
  margin-top: -375px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
  padding: 15px;
  border-radius: 5px;
}


  .form-kalender {
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px;
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