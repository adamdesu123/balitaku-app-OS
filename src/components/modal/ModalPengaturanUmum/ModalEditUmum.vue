<template lang="">
    <div class="wrapp-psedu pop-up-fixed">
        <div class="ps-edu bs-wrapp p-0 mx-auto">
            <h3>Edit Pengaturan Umum</h3>
            <div class="tb-epu">
                <table width="100%">
                    <tr>
                        <td>Nama Website</td>
                         <td><input type="text" name="" value="Balitaku" class="form-control">
                            </td>
                    </tr>
                    <br>
                    <tr>
                        <td>No. Telepon</td>
                        <td><input type="text" name="" value="08226754353" class="form-control">
                          </td>
                    </tr>
                    <br>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" name="" value="balitaku@gmail.com" class="form-control"></td>
                    </tr>
                    <br>
                    <tr>
                        <td>Bahasa</td>
                        <td>
                            <select name="" id="" class="form-select">
                                <option value="">Afrikaans</option>
                                <option value="">Arabic</option>
                                <option value="">Dutch</option>
                                <option value="">English</option>
                                <option value="">Hindi</option>
                                <option value="">Indonesia</option>
                                <option value="">Punjabi</option>
                            </select>
                        </td>
                    </tr>
                    <br>
                    <tr>
                    <td>Format Tanggal</td>
                    <td>
                        <select name="" id="" class="form-select">
                            <option value="">dd-mm-yyyy</option>
                            <option value="">dd/mm/yyyy</option>
                            <option value="">dd.mm.yyyy</option>
                            <option value="">mm-dd-yyyy</option>
                            <option value="">mm/dd/yyyy</option>
                            <option value="">mm.dd.yyyy</option>
                        </select>
                      </td>
                    </tr>
                    <br>
                    <tr>
                    <td>Font</td>
                    <td>
                        <select name="" id="" class="form-select">
                            <option value="">ABeeZee</option>
                            <option value="">Ballet</option>
                            <option value="">Cabi</option>
                            <option value="">DM Sans</option>
                            <option value="">Inter</option>
                            <option value="">Poppins</option>
                        </select>
                    </td>
                    </tr>
                    <br>
                    <tr>
                    <td>Tema</td>
                    <td>
                        <div class="d-flex gap-3 flex-column">
                            <div class="d-flex gap-3">
                                <img src="../../../assets/img/pengaturan/umum/tema2.png" alt="">
                                <img src="../../../assets/img/pengaturan/umum/tema1.png" alt="">
                            </div>
                            <div>
                                <img src="../../../assets/img/pengaturan/umum/tema3.png" alt="">
                            </div>
                        </div>
                    </td>
                </tr>
                <br><br>
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
    name: "ModalEditUmum",
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