<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Publikasi Artikel</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="pub-artikel" class="to-ds">Artikel</router-link>
    </div>
  </div>
  <div class="bs-wrapp p-0">
    <TabsWrapp>
      <Tab title="User">
        <div class="bs-wrapp">
          <div class="col-lg-12 text-end">
            <div class="btn-group me-2">
              <button class="dropdown-toggle btn-kec bg1 d-flex align-items-center gap-2" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Filter by
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Status</a></li>
              </ul>
            </div>
            <router-link to="tambahartikel"><button class="btn-c unduh"><img src="../../../assets/img/i-tambah.png"
                  alt=""> Tambah</button></router-link>
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
      </Tab>
      <Tab title="Kader">
        <div class="bs-wrapp">
          <div class="col-lg-12 text-end">
            <div class="btn-group me-2">
              <button class="dropdown-toggle btn-kec bg1 d-flex align-items-center gap-2" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Filter by
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Status</a></li>
              </ul>
            </div>
            <router-link to="tambahartikel"><button class="btn-c unduh"><img src="../../../assets/img/i-tambah.png"
                  alt=""> Tambah</button></router-link>
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
      </Tab>
      <Tab title="Nakes">
        <div class="bs-wrapp">
          <div class="col-lg-12 text-end">
            <div class="btn-group me-2">
              <button class="dropdown-toggle btn-kec bg1 d-flex align-items-center gap-2" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Filter by
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Status</a></li>
              </ul>
            </div>
            <router-link to="tambahartikel"><button class="btn-c unduh"><img src="../../../assets/img/i-tambah.png"
                  alt=""> Tambah</button></router-link>
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
      </Tab>
    </TabsWrapp>

  </div>
</template>

<script setup>
import TabsWrapp from '../../../components/tab/TabsWrapp.vue'
import Tab from '../../../components/tab/Tab.vue'
</script>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: 'p_artikel',
  components: {

  },
  mounted() {
    this.getUsers();
  },
  methods: {
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

  