<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Data Imunisasi</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="dataimunisasi" class="to-ds">Data Imunisasi</router-link>
    </div>
  </div>
  <div class="bs-wrapp">
    <div class="wrapp-btn">
      <button class="btn-c unduh" @click="callModalDownload">Unduh</button>
      <div class="btn-kanan">
        <button class="btn-c b-import" @click="callModalImport">Import <img src="../../../assets/img/i-import.png" alt=""></button>
        <router-link to="tambahdataimunisasi" class="btn-c unduh"><img src="../../../assets/img/i-tambah.png" alt="">
          Tambah
        </router-link>
      </div>
    </div>
    <div class="dropdown mb-2" align="right">
      <div class="btn-group ms-3">
        <button class="dropdown-toggle btn-kec bg1 d-flex align-items-center gap-2" type="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Filter by
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Jenis Vaksin</a></li>
          <li><a class="dropdown-item" href="#">Target Vaksin</a></li>
        </ul>
      </div>
    </div>
    <table id="myTable" class="display table table-striped" style="width:100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Jenis Vaksin</th>
          <th>Nama Vaksin</th>
          <th>Target Vaksin</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../../../assets/img/arrow-down.png" alt="">
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-3">
              <li>
                <router-link to="detaildataimunisasi"><img src="../../../assets/img/i-eye.png" alt=""> Detail
                </router-link>
              </li>
              <li>
                <router-link to="editdataimunisasi"><img src="../../../assets/img/i-edit.png" alt=""> Edit</router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <ModalView v-if="modalImport" :title="'import'" @close="close">
  </ModalView>
  <ModalView v-if="modalDownload" :title="'unduh'" @close="close">
  </ModalView>
</template>
<script setup>
import ModalView from '../../../components/modal/ModalView.vue'
import { ref } from 'vue'
</script>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: 'DataImunisasi',
  components: {
    ModalView
  },
  data() {
    return {
      modalImport: false,
      modalDownload: false
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    close() {
      this.modalImport = false
      this.modalDownload = false
    },
    callModalImport() {
      this.modalImport = true
    },
    callModalDownload() {
      this.modalDownload = true
    },
    getUsers() {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          $("#myTable").DataTable({
            data: response.data,
            columns: [
              { data: "id" },
              { data: "name" },
            ],
          });
        })
        .catch((error) => console.log(error.response));
    },
  },
}
</script>

<style>
.dropdown-menu li a {
  color: #00205C;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600
}
</style>
