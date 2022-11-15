<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Tambah Data Nakes</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="datanakes" class="to-bf">Data Nakes</router-link>
            <span class="px-2">/</span>
            <router-link to="tambahdatanakes" class="to-ds">Tambah</router-link>
        </div>
    </div>
    <div class="bs-wrapp wrapp-datamaster pt-5 pb-5">
        <form action="" method="post">
            <div class="inp2">
                <div class="inp inp-kiri">
                    <label for="">Nama <span class="required">*</span></label>
                    <input type="text" name="nama" class="input-field">
                    <label for="">NIK <span class="required">*</span></label>
                    <input type="text" name="nik" class="input-field">
                    <label for="">No. HP <span class="required">*</span></label>
                    <input type="text" name="no_hp" class="input-field">
                </div>
                <div class="inp inp-kanan">
                    <label for="status">Status <span class="required">*</span></label>
                    <select name="status" id="status" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                    <label for="nip">NIP <span class="required">*</span></label>
                    <input type="text" name="nip" class="input-field">
                    <label for="tgl_lahir">Tanggal Lahir <span class="required">*</span></label>
                    <input type="date" name="tgl_lahir" class="input-field">
                </div>
            </div>
            <div class="inp3">
                <div class="inp inp-kiri">
                    <label for="kecamatan">Kecamatan <span class="required">*</span></label>
                    <select name="kecamatan" id="kecamatan" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-tengah">
                    <label for="kelurahan">Kelurahan <span class="required">*</span></label>
                    <select name="kelurahan" id="kelurahan" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan">
                    <label for="">Lingkungan <span class="required">*</span></label>
                    <input type="text" name="lingkungan" class="input-field">
                </div>
            </div>
            <div class="inp2">
                <div class="inp inp-kiri">
                    <label for="">Alamat Rumah<span class="required">*</span></label>
                    <input type="text" name="alamat_r" class="input-field">
                </div>
                <div class="inp inp-kanan">
                    <label for="nama_puskesmas">Nama Puskesmas <span class="required">*</span></label>
                    <select name="nama_puskesmas" id="nama_puskesmas" class="input-field">
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
    name: 'TambahDataNakes',
    components: {

    }
}
</script>
<style >
.wrapp-datamaster .inp2,
.wrapp-datamaster .inp3 {
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