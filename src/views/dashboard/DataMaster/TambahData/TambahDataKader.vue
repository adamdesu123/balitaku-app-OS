<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Tambah Data Kader</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="datakader" class="to-bf">Data Kader</router-link>
            <span class="px-2">/</span>
            <router-link to="tambahdatakader" class="to-ds">Tambah</router-link>
        </div>
    </div>
    <div class="bs-wrapp wrapp-datamaster pt-5 pb-5">
        <form action="" method="post">
            <label for="">Nama <span class="required">*</span></label>
            <br><input type="text" name="nama" id="" class="input-field">
            <div class="inp2">
                <div class="inp inp-kiri">
                    <label for="">NIK <span class="required">*</span></label>
                    <input type="text" name="nik" class="input-field">
                    <label for="">Alamat Rumah <span class="required">*</span></label>
                    <input type="text" name="alamat_r" class="input-field">
                    <label for="status">Status <span class="required">*</span></label>
                    <select name="status" id="status" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan">
                    <label for="">No. HP <span class="required">*</span></label>
                    <input type="text" name="nik" class="input-field">
                    <label for="nama_posyandu">Nama Posyandu <span class="required">*</span></label>
                    <select name="nama_posyandu" id="nama_posyandu" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                    <label for="peran">Peran <span class="required">*</span></label>
                    <select name="peran" id="peran" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
            </div>
            <div class="wrapp-btn post-kiri">
                <input type="submit" name="save" value="Simpan" class="btn-c btn1">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'TambahDataKader',
    components: {

    }
}
</script>
<style >
.wrapp-datamaster .inp2 {
    display: flex;
    gap: 20px;
    row-gap: 20px;
    margin-top: 15px;
}

.wrapp-datamaster form .inp {
    display: flex;
    flex-direction: column;
    flex: 1;
    row-gap: 15px;
}

.wrapp-datamaster form .input-field {
    border: 1px solid rgba(0, 0, 0, .2);
    padding: 5px 20px;
    border-radius: 5px;
    color: rgba(0, 0, 0, .5);
    font-weight: 600;
    width: 100%;
    background-color: #fff;
}

.wrapp-datamaster .wrapp-btn.post-kiri {
    justify-content: flex-end;
    margin-top: 60px;
}

.wrapp-datamaster .wrapp-btn .btn1 {
    text-decoration: none;
    border: 1px solid #00205C;
    color: #00205C;
    font-weight: bold;
    padding: 4px 50px;
    background-color: #fff;
}
</style>