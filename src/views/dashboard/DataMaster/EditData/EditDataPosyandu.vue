<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Edit Data Posyandu</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="dataposyandu" class="to-bf">Data Posyandu</router-link>
            <span class="px-2">/</span>
            <router-link to="editdataposyandu" class="to-ds">Edit</router-link>
        </div>
    </div>
    <div class="bs-wrapp wrapp-datamaster pt-5 pb-5">
        <form action="" method="post">
            <div class="inp2">
                <div class="inp inp-kiri">
                    <label for="">Nama Posyandu <span class="required">*</span></label>
                    <input type="text" name="nama_posyandu" class="input-field">
                    <label for="">PIC <span class="required">*</span></label>
                    <input type="text" name="PIC" class="input-field">
                </div>
                <div class="inp inp-kanan">
                    <label for="status">Status <span class="required">*</span></label>
                    <select name="status" id="status" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                    <label for="">No. HP PIC <span class="required">*</span></label>
                    <input type="text" name="no_hp_pic" class="input-field">
                </div>
            </div>
            <span class="t-alamat">Alamat Posyandu</span>
            <div class="inp3">
                <div class="inp inp-kiri">
                    <label for="">Kabupaten/Kota <span class="required">*</span></label>
                    <input type="text" name="kabupaten" class="input-field">
                </div>
                <div class="inp inp-tengah">
                    <label for="">Kecamatan <span class="required">*</span></label>
                    <input type="text" name="kecamatan" class="input-field">
                </div>
                <div class="inp inp-kanan">
                    <label for="kelurahan">Kelurahan/Desa <span class="required">*</span></label>
                    <select name="kelurahan" id="kelurahan" class="input-field">
                        <option value="">Data 1</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
            </div>
            <div class="inp3">
                <div class="inp inp-kiri">
                    <label for="">Alamat Detail <span class="required">*</span></label>
                    <textarea name="" id="" rows="3" class="input-field"></textarea>
                </div>
                <div class="inp inp-tengah">
                    <label for="">Kordinat Lokasi <span class="required">*</span></label>
                    <input type="number" name="latitude" class="input-field">
                    <p>Latitude</p>
                </div>
                <div class="inp inp-kanan">
                    <label for="">&nbsp;</label>
                    <input type="number" name="longitude" class="input-field">
                    <p>Longitude</p>
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
    name: 'EditDataPosyandu',
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