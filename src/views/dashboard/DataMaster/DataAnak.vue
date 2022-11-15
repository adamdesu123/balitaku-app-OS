<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Data Anak</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="dataanak" class="to-ds">Data Anak</router-link>
    </div>
  </div>
  <div class="bs-wrapp">
    <div class="row">
      <div class="col-6"><button class="btn-c unduh" @click="callModalDownload">Unduh</button></div>
      <div class="col-6 d-flex justify-content-end">
        <router-link to="detaildataanak" class="btn-c unduh">Detail</router-link>
      </div>
    </div>
    <div class="dropdown mb-2" align="right">
      <div class="btn-group">
        <button class="dropdown-toggle btn-kec bg1 d-flex align-items-center gap-2" type="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          <img src="../../../assets/img/f-tgl.png" alt=""> Last 30 days
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><input type="date" name="" id="" class="border-0"></li>
        </ul>
      </div>
      <div class="btn-group ms-3">
        <button class="dropdown-toggle btn-kec bg1 d-flex align-items-center gap-2" type="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Filter by
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a class="dropdown-item" href="#">Jenis Kelamin</a></li>
          <li><a class="dropdown-item" href="#">Status</a></li>
          <li><a class="dropdown-item" href="#">Usia</a></li>
        </ul>
      </div>
    </div>
    <table id="myTable" class="display table table-striped" style="width:100%">
      <thead class="">
        <tr>
          <th>No.</th>
          <th>Nama</th>
          <th>NIK</th>
          <th>Jenis Kelamin</th>
          <th>Usia</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
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
  name: 'dataanak',
  components: {
    ModalView
  },
  data() {
    return {
      modalDownload: false
    }
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    close() {
      this.modalDownload = false
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
              { data: "nik" },
              { data: "jeniskelamin" },
              { data: "usia" },
              { data: "status" },
            ],
          });
        })
        .catch((error) => console.log(error.response));
    },
  },
}
</script>
<style>

</style>
