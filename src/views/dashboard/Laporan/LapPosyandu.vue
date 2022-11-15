<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Laporan Posyandu</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="lap-posyandu" class="to-ds">Laporan Posyandu</router-link>
        </div>
    </div>
    <div class="bs-wrapp">
        <div class="wrapp-btn">
            <button class="btn-c unduh" @click="callModalDownload">Unduh</button>
            <div class="btn-kanan">
                <router-link to="detail-lap-posyandu" class="btn-c unduh">Detail</router-link>
            </div>
        </div>
        <table id="myTable" class="display table table-striped" style="width:100%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Kegiatan</th>
                    <th>Nama Posyandu</th>
                    <th>Kecamatan</th>
                    <th>Kelurahan</th>
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
                        <router-link to="detail-lap-posyandu"><img src="../../../assets/img/i-wrapp_eye.png" alt="">
                        </router-link>
                    </td>
                </tr>
            </tbody>
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
    name: 'lap-posyandu',
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
  