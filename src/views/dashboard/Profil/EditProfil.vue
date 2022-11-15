<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Profil</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="profil" class="to-ds">Profil</router-link>
        </div>
    </div>
    <div class="wrapp-datamaster wrapp-p">
        <form action="" method="post" class="mt-4">
            <div class="t-img-p"><img src="../../../assets/img/p-profil.png" alt="" height="150">
                <p>Ganti Foto</p>
            </div>
            <div class="inp2">
                <div class="inp inp-kiri">
                    <label for="">Nama Depan</label>
                    <input type="text" name="" value="Jesika" class="input-field">
                    <label for="">No. HP</label>
                    <input type="text" name="" value="081234567899" class="input-field">
                </div>
                <div class="inp inp-kanan">
                    <label for="">Nama Belakang</label>
                    <input type="text" name="" value="Iskandar Muda" class="input-field">
                    <label for="">Jenis Kelamin</label>
                    <input type="text" name="" value="Perempuan" class="input-field">
                </div>
            </div>
            <span class="t-alamat">Alamat Rumah</span>
            <div class="inp3">
                <div class="inp inp-kiri">
                    <label for="">Lingkungan</label>
                    <select name="" id="" class="input-field">
                        <option value="" selected>Sianjur</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-tengah">
                    <label for="">Kelurahan</label>
                    <select name="" id="" class="input-field">
                        <option value="" selected>Sidodame</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan">
                    <label for="">Kecamatan <span>*</span></label>
                    <select name="" id="" class="input-field">
                        <option value="" selected>Sidodame</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
            </div>
            <br><label for="">Alamat Kerja</label>
            <br><input type="text" name="nama" id="" value="Medan, Jl. Melati No.39 Purian" class="input-field">
            <span class="t-alamat">Alamat Rumah</span>
            <div class="inp3">
                <div class="inp inp-kiri">
                    <label for="">Lingkungan</label>
                    <select name="" id="" class="input-field">
                        <option value="" selected>Sianjur</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-tengah">
                    <label for="">Kelurahan</label>
                    <select name="" id="" class="input-field">
                        <option value="" selected>Sidodame</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
                <div class="inp inp-kanan">
                    <label for="">Kecamatan <span>*</span></label>
                    <select name="" id="" class="input-field">
                        <option value="" selected>Sidodame</option>
                        <option value="">Data 2</option>
                    </select>
                </div>
            </div>
            <br><label for="">Alamat Kerja</label>
            <br><input type="text" name="nama" id="" value="Medan, Jl. Melati No.39 Purian" class="input-field">
            <div class="wrapp-btn post-kiri">
                <router-link to="profil" class="btn-c btn1">Simpan</router-link>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'TambahDataPuskesmas',
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

.t-img-p {
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 50px;
    width: 150px;
    height: 150px;
    overflow: hidden;
}

.t-img-p p {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .3);
    width: 150px;
    color: #fff;
    height: 150px;
    position: absolute;
    line-height: 150px;
    text-align: center;
    margin-top: -150px;
    transition: .3s;
    opacity: 0;
}

.t-img-p p:hover {
    opacity: 1;
}
</style>