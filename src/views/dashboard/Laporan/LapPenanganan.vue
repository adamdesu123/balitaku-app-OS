<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Laporan Penanganan</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="lap-penanganan" class="to-ds">Laporan Penanganan</router-link>
        </div>
    </div>
    <div class="bs-wrapp">
        <div class="wrapp-btn">
            <button class="btn-c unduh" @click="callModalDownload">Unduh</button>
            <div class="btn-kanan">
                <router-link to="detail-lap-penanganan" class="btn-c unduh">Detail</router-link>
            </div>
        </div>
        <table id="myTable" class="display table table-striped" style="width:100%">
            <thead>
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
const isOpen = ref(false)
</script>
<script>
import axios from "axios";
import $ from "jquery";

export default {
    name: 'lap-penanganan',
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
  