<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Data Nakes</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="datanakes" class="to-ds">Data Nakes</router-link>
    </div>
  </div>
  <div class="bg-white bs-wrapp p-0">
    <PATabsWrapp>
      <PATabs title="Aktif">
        <div class="p-3">
          <div class="wrapp-btn">
            <button class="btn-c unduh" @click="callModalDownload">Unduh</button>
            <div class="btn-kanan">
              <button class="btn-c b-import" @click="callModalImport">
                Import
                <img src="../../../assets/img/i-import.png" alt="" />
              </button>
              <router-link to="tambahdatanakes" class="btn-c unduh">
                <img src="../../../assets/img/i-tambah.png" alt="" />
                Tambah
              </router-link>
            </div>
          </div>
          <div class="dropdown mb-2" align="right">
            <div class="btn-group">
              <button class="
                    dropdown-toggle
                    btn-kec
                    bg1
                    d-flex
                    align-items-center
                    gap-2
                  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../../../assets/img/f-tgl.png" alt="" />
                Last 30 days
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><input type="date" name="" id="" class="border-0" /></li>
              </ul>
            </div>
            <div class="btn-group ms-3">
              <button class="
                    dropdown-toggle
                    btn-kec
                    bg1
                    d-flex
                    align-items-center
                    gap-2
                  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter by
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Posyandu</a></li>
                <li><a class="dropdown-item" href="#">Peran</a></li>
              </ul>
            </div>
          </div>
          <table id="myTable" class="display table table-striped" style="width: 100%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>NIP</th>
                <th>Puskesmas</th>
                <th>Kecamatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../assets/img/arrow-down.png" alt="" />
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <router-link to="detaildatanakes">
                        <img src="../../../assets/img/i-eye.png" alt="" />
                        Detail
                      </router-link>
                    </li>
                    <li>
                      <router-link to="editdatanakes">
                        <img src="../../../assets/img/i-edit.png" alt="" />
                        Edit
                      </router-link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PATabs>
      <PATabs title="Nonaktif">
        <div class="p-3">
          <div class="wrapp-btn">
            <button class="btn-c unduh" @click="callModalDownload">Unduh</button>
            <div class="btn-kanan">
              <button class="btn-c b-import" @click="callModalImport">
                Import
                <img src="../../../assets/img/i-import.png" alt="" />
              </button>
              <router-link to="tambahdatanakes" class="btn-c unduh">
                <img src="../../../assets/img/i-tambah.png" alt="" />
                Tambah
              </router-link>
            </div>
          </div>
          <div class="dropdown mb-2" align="right">
            <div class="btn-group">
              <button class="
                    dropdown-toggle
                    btn-kec
                    bg1
                    d-flex
                    align-items-center
                    gap-2
                  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../../../assets/img/f-tgl.png" alt="" />
                Last 30 days
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><input type="date" name="" id="" class="border-0" /></li>
              </ul>
            </div>
            <div class="btn-group ms-3">
              <button class="
                    dropdown-toggle
                    btn-kec
                    bg1
                    d-flex
                    align-items-center
                    gap-2
                  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter by
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#">Posyandu</a></li>
                <li><a class="dropdown-item" href="#">Peran</a></li>
              </ul>
            </div>
          </div>
          <table id="myTable" class="display table table-striped" style="width: 100%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>NIP</th>
                <th>Puskesmas</th>
                <th>Kecamatan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../assets/img/arrow-down.png" alt="" />
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <router-link to="detaildatanakes">
                        <img src="../../../assets/img/i-eye.png" alt="" />
                        Detail
                      </router-link>
                    </li>
                    <li>
                      <router-link to="editdatanakes">
                        <img src="../../../assets/img/i-edit.png" alt="" />
                        Edit
                      </router-link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PATabs>
    </PATabsWrapp>
  </div>
  <ModalView v-if="modalImport" :title="'import'" @close="close">
  </ModalView>
  <ModalView v-if="modalDownload" :title="'unduh'" @close="close">
  </ModalView>
</template>
<script setup>
import PATabsWrapp from '../../../components/tab/tab0/PATabsWrapp.vue'
import PATabs from '../../../components/tab/tab0/PATabs.vue'
import ModalView from '../../../components/modal/ModalView.vue'
import { ref } from 'vue'
</script>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'DataKader',
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
    this.getUsers()
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
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          $('#myTable').DataTable({
            data: response.data,
            columns: [{ data: 'id' }, { data: 'name' }]
          })
        })
        .catch((error) => console.log(error.response))
    }
  }
}
</script>

<style>
.dropdown-menu li a {
  color: #00205c;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.bs-wrapp .wrapp-ul {
  background-color: #fff;
}
</style>
