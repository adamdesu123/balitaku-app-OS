<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Edit Data Imunisasi</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="dataimunisasi" class="to-bf">Data Imunisasi</router-link>
            <span class="px-2">/</span>
            <router-link to="editdataimunisasi" class="to-ds">Edit</router-link>
        </div>
    </div>
    <div class="bs-wrapp wrapp-datamaster pt-5 pb-5">
        <form action="" method="post">
            <label for="">Jenis Vaksin <span class="required">*</span></label>
            <input type="text" name="nama_posyandu" value="Hepatitis" class="input-field">
            <div class="inp3">
                <div class="inp inp-kiri flex-2">
                    <label for="">Nama Vaksin <span class="required">*</span></label>
                    <input type="text" name="nama_vaksin" value="Hepatitis A" class="input-field">
                </div>
                <div class="inp inp-tengah flex-05">
                    <label for="">Target Vaksin <span class="required">*</span></label>
                    <select name="awal" id="awal" class="input-field">
                        <option value="">4</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan flex-05">
                    <label for="">&nbsp;</label>
                    <select name="akhir" id="akhir" class="input-field">
                        <option value="">9</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan flex-05">
                    <label for="">&nbsp;</label>
                    <p>Bulan</p>
                </div>
            </div>
            <span class="t-alamat">Imunisasi Berikutnya</span>
            <label for="">Jenis Vaksin Berikutnya <span class="required">*</span></label>
            <input type="text" name="jenis_vaksi_b" class="input-field" value="Hepatitis">
            <div class="inp3">
                <div class="inp inp-kiri flex-2">
                    <label for="">Nama Vaksin <span class="required">*</span></label>
                    <input type="text" name="nama_vaksin" value="Hepatitis B" class="input-field">
                </div>
                <div class="inp inp-tengah flex-05">
                    <label for="">Target Vaksin <span class="required">*</span></label>
                    <select name="awal" id="awal" class="input-field">
                        <option value="">10</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan flex-05">
                    <label for="">&nbsp;</label>
                    <select name="akhir" id="akhir" class="input-field">
                        <option value="">15</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan flex-05">
                    <label for="">&nbsp;</label>
                    <p>Bulan</p>
                </div>
            </div>
            <div class="wrapp-btn post-kiri">
                <router-link to="editdataimunisasi" class="btn-c btn1">Edit</router-link>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'EditDataImunisasi',
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

.wrapp-datamaster form .inp.flex-2 {
    flex: 2;
}

.wrapp-datamaster form .inp.flex-05 {
    flex: .5;
}

.wrapp-datamaster form .input-field {
    border: 1px solid rgba(0, 0, 0, .2);
    padding: 5px 20px;
    border-radius: 5px;
    color: rgba(0, 0, 0, .5);
    font-weight: 600;
    width: 100%;
    background-color: #fff;
    min-width: 120px;
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