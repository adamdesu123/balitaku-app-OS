<template lang="">
    <div class="wrapp-psedu pop-up-fixed">
        <div class="ps-edu bs-wrapp p-0 mx-auto">
            <h3>Edit Pengaturan Umum</h3>
            <div class="tb-epu">
                <table width="100%">
                    <tr>
                        <td>Email Engine</td>
                        <td>
                            <select name="" id="" class="form-select">
                                <option value="">SMTP</option>
                                <option value="">Send Mail</option>
                            </select>
                        </td>
                    </tr>
                    <br>
                    <tr>
                        <td>SMTP Username</td>
                        <td><input type="text" name="" value="balitaku@asjd.com"
                                                        class="form-control"></td>
                    </tr>
                    <br>
                    <tr>
                        <td>SMTP Password</td>
                        <td><input type="text" name="" value="balitaku123" class="form-control"></td>
                    </tr>
                    <br>
                    <tr>
                        <td>SMTP Server</td>
                        <td><input type="text" name="" value="smtp.hodtinger.co.id"
                                                        class="form-control"></td>
                    </tr>
                    <br>
                    <tr>
                        <td>SMTP Port</td>
                        <td><input type="text" name="" value="587" class="form-control"></td>
                    </tr>
                    <br>
                    <tr>
                        <td>SMTP Security</td>
                        <td><input type="text" name="" value="tls" class="form-control"></td>
                    </tr>
                    <br><br><br>
                    <tr>
                        <td>&nbsp;</td>
                        <td align="right">
                            <button class="btn-c simpan" @click="close">Simpan</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ModalEmailView",
    methods: {
        close() {
            this.$emit('close')
        }
    }
}

</script>
<style>
    .ps-edu {
    height: 90vh;
    overflow-y: scroll;
    position: relative;
}

.ps-edu h3 {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    color: #00205C;
    font-weight: 600;
    padding: 20px;
    font-size: 1.6em;
    background: #fff;

}

.ps-edu .tb-epu {
    padding: 20px 40px;
}

.ps-edu table {
    font-weight: 600;
    margin-bottom: 20px;
}

.ps-edu table td {
    padding: 0 20px;
}
    
</style>