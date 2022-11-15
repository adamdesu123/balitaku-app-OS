<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Edit Data Puskesmas</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="datapuskesmas" class="to-bf">Data Puskesmas</router-link>
            <span class="px-2">/</span>
            <router-link to="editdatapuskesmas" class="to-ds">Edit</router-link>
        </div>
    </div>
        <div class="bs-wrapp wrapp-datamaster pt-5 pb-5">
            <form action="" method="post">
                <label for="">Nama Puskesmas <span>*</span></label>
                <br><input type="text" name="nama" id="" class="input-field">
                <div class="inp2">
                    <div class="inp inp-kiri">
                        <label for="">Total Posyandu <span>*</span></label>
                        <input type="text" name="total_posyandu" class="input-field">
                        <label for="">No. HP Puskesmas <span>*</span></label>
                        <input type="text" name="no_hp_puskesmas" class="input-field">
                    </div>
                    <div class="inp inp-kanan">
                        <label for="">PIC <span>*</span></label>
                        <input type="text" name="pic" class="input-field">
                        <label for="">Email Puskesmas <span>*</span></label>
                        <input type="text" name="email_puskesmas" class="input-field">
                    </div>
                </div>
                <span class="t-alamat">Alamat Puskesmas</span>
                <div class="inp3">
                    <div class="inp inp-kiri">
                        <label for="">Kabupaten/Kota <span>*</span></label>
                        <input type="text" name="kabupaten" class="input-field">
                    </div>
                    <div class="inp inp-tengah">
                        <label for="">Kecamatan <span>*</span></label>
                        <input type="text" name="kecamatan" class="input-field">
                    </div>
                    <div class="inp inp-kanan">
                        <label for="kelurahan">Kelurahan/Desa <span>*</span></label>
                        <select name="kelurahan" id="kelurahan" class="input-field">
                            <option value="">Data 1</option>
                            <option value="">Data 2</option>
                        </select>
                    </div>
                </div>
                <div class="inp3">
                    <div class="inp inp-kiri">
                        <label for="">Alamat Detail <span>*</span></label>
                        <textarea name="" id="" rows="3" class="input-field"></textarea>
                    </div>
                    <div class="inp inp-tengah">
                        <label for="">Kordinat Lokasi <span>*</span></label>
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
    name: 'EditDataPuskesmas',
    components: {
     
    }
}
</script>
<style >
    .wrapp-datamaster .inp2,
    .wrapp-datamaster .inp3{
        display: flex;
        gap: 20px;
        row-gap: 20px;
        margin-top: 15px;
    }

    .wrapp-datamaster form .inp{
        display: flex;
        flex-direction: column;
        flex: 1;
        row-gap: 15px;
    }

    .wrapp-datamaster form .input-field{
        border: 1px solid rgba(0, 0, 0, .2);
        padding: 5px 20px;
        border-radius: 5px;
        color: rgba(0, 0, 0, .5);
        font-weight: 600;
        width: 100%;
        background-color: #fff;
    }

    .wrapp-datamaster .wrapp-btn.post-kiri{
        justify-content: flex-end;
        margin-top: 60px;
    }

    .wrapp-datamaster .wrapp-btn .btn1{
    text-decoration: none;
    border: 1px solid #00205C;
    color: #00205C;
    font-weight: bold;
    padding: 4px 50px;
    background-color: #fff;
}

</style>