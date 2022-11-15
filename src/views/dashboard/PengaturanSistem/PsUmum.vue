<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Pengaturan Umum</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="ps-umum" class="to-ds">Pengaturan Umum</router-link>
        </div>
    </div>
    
    <div class="wrapp-pengaturanUmum d-flex gap-3">
        <div class="wrapp-p edit-logo">
            <div class="item-logo d-flex gap-4 mb-4">
                <img src="../../../assets/img/pengaturan/umum/logo.png" alt="" height="80">
                <button class="btn2 ed-il" @click="callModalELogo">Edit Logo</button>
            </div>
            <!-- <div class="item-logo d-flex gap-4 mb-4">
                <img src="../../../assets/img/pengaturan/umum/logo.png" alt="" height="80">
                <button class="btn2 ed-il" @click="callModalELogo">Edit Logo User Mobile App</button>
            </div>
            <div class="item-logo d-flex gap-4 mb-4">
                <img src="../../../assets/img/pengaturan/umum/logo.png" alt="" height="80">
                <button class="btn2 ed-il" @click="callModalELogo">Edit Logo Kader Mobile App</button>
            </div>
            <div class="item-logo d-flex gap-4 mb-4">
                <img src="../../../assets/img/pengaturan/umum/logo.png" alt="" height="80">
                <button class="btn2 ed-il" @click="callModalELogo">Edit Logo Nakes Mobile App</button>
            </div> -->
        </div>

        <div class="wrapp-p edit-umum">
            <table width="100%">
                <tr>
                    <td>Nama website</td>
                    <td>Balitaku</td>
                </tr>
                <tr>
                    <td>No. Telepon</td>
                    <td>08226754353</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>balitaku@gmail.com</td>
                </tr>
                <tr>
                    <td>Bahasa</td>
                    <td>Indonesia</td>
                </tr>
                <tr>
                    <td>Format Tanggal</td>
                    <td>dd, mm, yyyy</td>
                </tr>
                <tr>
                    <td>Font</td>
                    <td>Poppins</td>
                </tr>
                <tr>
                    <td>Tema</td>
                    <td>
                        <img src="../../../assets/img/pengaturan/umum/tema1.png" alt="">
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td align="right"><button class="btn-c simpan" @click="callModalEdit">Edit</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>

<ModalEditView v-if="modalEdit" @close="close"></ModalEditView>
<ModalEditLogo v-if="modalELogo" @close="close"></ModalEditLogo>

</template>
  
<script setup>
import ModalEditView from '../../../components/modal/ModalPengaturanUmum/ModalEditUmum.vue'
import ModalEditLogo from '../../../components/modal/ModalPengaturanUmum/ModalEditLogo.vue'
import { ref } from 'vue'
</script>
  
<script>
export default {
    name: 'PengaturanUmum',
    components: {
        ModalEditView,ModalEditLogo
    },
    data() {
        return {
        modalEdit: false,
        modalELogo: false
        }
    },
    methods: {
        close() {
        this.modalEdit = false,
        this.modalELogo = false
        },
        callModalEdit() {
        this.modalEdit = true
        },
        callModalELogo() {
            this.modalELogo = true
        }
    }
}
</script>
<style>
.wrapp-p {
    background-color: #fff;
    border-radius: 6px;
    border-top: 3px solid #00205C;
}

.edit-logo {
    flex: .4;
    padding: 20px;
    max-width: 300px;
}

.edit-logo .item-logo {
    text-align: center;
    border: 1px solid #00205C;
    border-radius: 3px;
    padding: 10px;
    flex-direction: column;
    align-items: center;

}

.wrapp-pengaturanUmum .btn2 {
    background-color: #00205C;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: .9em;
    width: auto;

}

.wrapp-pengaturanUmum .btn2.ed-il2 {
    padding: 6px 20px;
    background-color: #fff;
    border: 1px solid #00205C;
    color: #00205C;
}

.edit-umum {
    padding: 40px;
    flex: 1;
}

.edit-umum table {
    color: #222;
    font-weight: 600;
}

.edit-umum table tr {
    border-bottom: 1px solid rgba(0, 0, 0, .3);
}

.edit-umum table tr:nth-child(7),
.edit-umum table tr:last-child {
    border: none;
}

.edit-umum table td {
    padding: 12px;
}

</style>