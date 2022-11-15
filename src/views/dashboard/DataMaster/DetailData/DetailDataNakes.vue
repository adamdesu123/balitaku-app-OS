<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Detail Data Nakes</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="datanakes" class="to-bf">Data Nakes</router-link>
            <span class="px-2">/</span>
            <router-link to="detaildatanakes" class="to-ds">Detail</router-link>
        </div>
    </div>
    <div class="wrapp-datamaster bg-transparent">
        <div class="wrapp-detail detail-img">
            <div class="img-profile">
                <img src="../../../../assets/img/data-master/detail-data-kader/profile.png" alt="" />
            </div>
            <div class="detail-img-profile">
                <button class="btn-z"><img src="../../../../assets/img/data-master/detail-data-kader/magnifier.png" alt="">
                    Lihat Profil</button>
            </div>
        </div>
        <div class="wrapp-detail detail-profile">
            <table>
                <tr>
                    <td>Nama <span>*</span></td>
                    <td><input type="text" name="" value="Jesika Sudrajat" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>Status <span>*</span></td>
                    <td><input type="text" name="" value="Aktif" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>NIK<span>*</span></td>
                    <td><input type="text" name="" value="1120091009920101" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>NIP <span>*</span></td>
                    <td><input type="text" name="" value="112009100992010022" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>No. HP <span>*</span></td>
                    <td><input type="text" name="" value="081234567890" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>Tanggal Lahir <span>*</span></td>
                    <td><input type="text" name="" value="06 Juli 1996" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>Kecamatan <span>*</span></td>
                    <td><input type="text" name="" value="Pulo Brayan" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>Kelurahan <span>*</span></td>
                    <td><input type="text" name="" value="Harjo Sari" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>Lingkungan <span>*</span></td>
                    <td><input type="text" name="" value="Sailis" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>Alamat Rumah <span>*</span></td>
                    <td><input type="text" name="" value="Jl. Sidodame, Pulu Brayan, Medan" class="input-field"></td>
                </tr>
                <br>
                <tr>
                    <td>Nama Puskesmas <span>*</span></td>
                    <td><input type="text" name="" value="Bestari" class="input-field"></td>
                </tr>
                <br><br>
                <tr>
                    <td>&nbsp;</td>
                    <td>
                        <div class="wrapp-btn">
                            <router-link to="editdatanakes" class="btn-c btn1">Edit</router-link>
                        </div>
                    </td>
                </tr>
            </table>

        </div>

    </div>

</template>
  
<script>

export default {
    name: 'DetailDataNakes',
    components: {

    }
}
</script>
<style>
.wrapp-datamaster {
    display: flex;
    gap: 20px;
    row-gap: 20px;
}

.wrapp-datamaster .wrapp-detail {
    border-top: 4px solid #00205C;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    border-radius: 6px;
    padding: 40px 30px;
    box-sizing: border-box;
}

.wrapp-detail.detail-img {
    display: flex;
    flex-direction: column;
    flex: .7;
    height: 100%;
    align-items: center;
}

.wrapp-detail .detail-img-profile {
    margin-top: 40px;
}

.wrapp-detail .detail-img-profile .btn-z {
    padding: 5px 50px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 5px;
}

.wrapp-detail.detail-profile {
    flex: 2;
}

.wrapp-detail.detail-profile table {
    color: #222;
    font-weight: bold;
    width: 100%;
}

.wrapp-detail.detail-profile table span {
    color: #FF0000;
}

.wrapp-detail.detail-profile table .input-field {
    border: 1px solid rgba(0, 0, 0, .2);
    padding: 5px 20px;
    border-radius: 5px;
    color: rgba(0, 0, 0, .5);
    font-weight: 600;
    width: 100%;
}

.wrapp-datamaster .wrapp-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.wrapp-datamaster .wrapp-btn .btn1 {
    text-decoration: none;
    border: 1px solid #00205C;
    color: #00205C;
    font-weight: bold;
    padding: 4px 50px;
}
</style>