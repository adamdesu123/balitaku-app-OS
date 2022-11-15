<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Pengaturan Session</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="ps-session" class="to-ds">Pengaturan Session</router-link>
        </div>
    </div>
    <div class="d-flex gap-3">
        <div class="wrapp-r tambah-session">
            <span>Tambah Session</span>
            <form action="" class="d-flex flex-column gap-4">
                <input type="text" name="" id="" class="input-field">
                <input type="submit" value="Simpan" class="btn simpan">
            </form>
        </div>
        <div class="wrapp-r daftar-session">
            <span>Daftar Session</span>
            <div class="d-flex justify-content-between">
                <form action="">
                    <div class="f-search d-flex">
                        <input type="search" name="" id="" class="input-search">
                        <img src="../../../assets/img/search.png" alt="">
                    </div>
                </form>
                <div class="wrapp-btn">
                    <button class="btn-c unduh" data-bs-toggle="dropdown">Export</button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li><a class="dropdown-item" href="#"><img src="../../../assets//img/i-export/i-excel.png"
                                    alt=""> Unduh Excel</a></li>
                        <li><a class="dropdown-item" href="#"><img src="../../../assets//img/i-export/i-pdf.png" alt="">
                                Unduh PDF</a></li>
                        <li><a class="dropdown-item" href="#"><img src="../../../assets//img/i-export/i-print.png"
                                    alt=""> Print</a></li>
                    </ul>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Session</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2014 - 15</td>
                        <td>&nbsp;</td>
                        <td><a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../../assets/img/arrow-down.png" alt="" />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                    <router-link to="ps-session">
                                        <img src="../../../assets/img/i-hapus.png" alt="" />
                                        Hapus
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="ps-session">
                                        <img src="../../../assets/img/i-edit.png" alt="" />
                                        Edit
                                    </router-link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2016 - 17</td>
                        <td>&nbsp;</td>
                        <td><a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="../../../assets/img/arrow-down.png" alt="" />
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end p-3">
                                <li>
                                    <router-link to="ps-session">
                                        <img src="../../../assets/img/i-hapus.png" alt="" />
                                        Hapus
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="ps-session">
                                        <img src="../../../assets/img/i-edit.png" alt="" />
                                        Edit
                                    </router-link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>2018 - 19</td>
                        <td>&nbsp;</td>
                        <td><a href=""><img src="../../../assets/img/pengaturan/roles/arrow-down.png" alt=""></a></td>
                    </tr>
                    <tr>
                        <td>2020 - 21</td>
                        <td>&nbsp;</td>
                        <td><a href=""><img src="../../../assets/img/pengaturan/roles/arrow-down.png" alt=""></a></td>
                    </tr>
                    <tr>
                        <td>2022 - 23</td>
                        <td class="text-success">Aktif</td>
                        <td><a href=""><img src="../../../assets/img/pengaturan/roles/arrow-down.png" alt=""></a></td>
                    </tr>
                    <tr>
                        <td>2023 - 24</td>
                        <td>&nbsp;</td>
                        <td><a href=""><img src="../../../assets/img/pengaturan/roles/arrow-down.png" alt=""></a></td>
                    </tr>
                    <tr>
                        <td>2024 - 25</td>
                        <td>&nbsp;</td>
                        <td><a href=""><img src="../../../assets/img/pengaturan/roles/arrow-down.png" alt=""></a></td>
                    </tr>
                    <tr>
                        <td>2025 - 26</td>
                        <td>&nbsp;</td>
                        <td><a href=""><img src="../../../assets/img/pengaturan/roles/arrow-down.png" alt=""></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
  
<script>

export default {
    name: 'PengaturanSession',
    components: {

    }
}
</script>
<style>
.wrapp-r {
    background-color: #fff;
    border-radius: 6px;
    border-top: 3px solid #00205C;
    padding: 20px 20px 40px;
}

.wrapp-r.tambah-session {
    flex: .5;
    height: 100%;
}

.wrapp-r.daftar-session {
    flex: 1;
}

.wrapp-r span {
    display: block;
    font-weight: 700;
    color: #222;
    margin-bottom: 20px;
    font-size: 1.2em;
}

.wrapp-r .input-field {
    padding: 6px 12px;
    border-radius: 5px;
    border: 1px solid #BEBEBE
}

.wrapp-r .btn.simpan {
    background-color: #00205C;
    color: #fff;
    max-width: 80px;
    align-self: flex-end;
}

.wrapp-r.wrapp-r.daftar-session .f-search .input-search {
    border: 1px solid #BEBEBE;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.wrapp-r.wrapp-r.daftar-session .f-search img {
    border: 1px solid #BEBEBE;
    padding: 6px 8px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
}

.wrapp-r.wrapp-r.daftar-session table td,
.wrapp-r.wrapp-r.daftar-session table th {
    padding-left: 3%;
}
</style>