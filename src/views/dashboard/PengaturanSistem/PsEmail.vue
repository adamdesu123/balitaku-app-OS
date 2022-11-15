<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Pengaturan Email</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="ps-email" class="to-ds">Pengaturan Email</router-link>
        </div>
    </div>
    <div class="wrapp-pengaturanUmum">
        <div class="wrapp-p edit-umum">
            <table width="100%">
                <tr>
                    <td>Email Engine</td>
                    <td>SMTP</td>
                </tr>
                <tr>
                    <td>SMTP</td>
                    <td>balitaku@asjd.com</td>
                </tr>
                <tr>
                    <td>SMTP Password</td>
                    <td>***</td>
                </tr>
                <tr>
                    <td>SMTP Server</td>
                    <td>smtp.hodtinger.co.id</td>
                </tr>
                <tr>
                    <td>Format Tanggal</td>
                    <td>dd, mm, yyyy</td>
                </tr>
                <tr>
                    <td>SMTP Port</td>
                    <td>587</td>
                </tr>
                <tr>
                    <td>SMTP Security</td>
                    <td>tls</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td align="right"><button class="btn-c simpan" @click="callModalEmail">Edit</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
<ModalEmailView v-if="modalEmail" @close="close"></ModalEmailView>
</template>
    
<script setup>
import ModalEmailView from '../../../components/modal/ModalEmailView.vue'
import { ref } from 'vue'
</script>
  
<script>

export default {
    name: 'ps-email',
    components: {
        ModalEmailView
    },
    data() {
        return {
        modalEmail: false
        }
    },
    methods: {
        close() {
        this.modalEmail = false
        },
        callModalEmail() {
        this.modalEmail = true
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