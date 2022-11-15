<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Data Anak</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="dataanak" class="to-bf">Data Anak</router-link>
            <span class="px-2">/</span>
            <router-link to="detaildataanak" class="to-ds">Detail</router-link>
        </div>
    </div>
    <div class="row wrapp-datamaster detail-dm gap-3">
        <div class="detail-img bs-wrapp position-relative">
            <!-- Icon menu vertical -->
            <div class="dropdown i-mv">
                <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../../assets//img/publikasi-banner/menu-vertical.png" alt="">
                </a>

                <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li><a class="dropdown-item" href="#"><img src="../../../../assets//img/i-export/i-pdf.png" alt="">
                            Unduh PDF</a></li>
                    <li><a class="dropdown-item" href="#"><img src="../../../../assets//img/i-export/i-print.png"
                                alt=""> Print</a></li>
                </ul>
            </div>
            <!--  -->
            <div class="img-profile">
                <img src="../../../../assets/img/data-master/detail-dataanak/img-dataanak.png" alt="" />
            </div>
            <div class="detail-name-profile">
                <span>Jocelyn Workman</span>
            </div>
            <div class="info-profile ip1 mt-3">
                <table>
                    <tr>
                        <td>Tempat Lahir</td>
                        <td class="td-kanan">Medan</td>
                    </tr>
                    <tr>
                        <td>Tanggal Lahir</td>
                        <td class="td-kanan">12/10/2021</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td class="td-kanan">Perempuan</td>
                    </tr>
                    <tr>
                        <td>Usia</td>
                        <td class="td-kanan">12 bulan</td>
                    </tr>
                    <tr>
                        <td>Berat Badan Saat Lahir</td>
                        <td class="td-kanan">3.00 kg</td>
                    </tr>
                    <tr>
                        <td>Tinggi Badan Saat Lahir</td>
                        <td class="td-kanan">55.6 cm</td>
                    </tr>
                    <tr>
                        <td>Anak ke-</td>
                        <td class="td-kanan">1</td>
                    </tr>
                    <tr>
                        <td>Nama Ibu</td>
                        <td class="td-kanan">Siti Khodijah</td>
                    </tr>
                    <tr>
                        <td>Nama Ayah</td>
                        <td class="td-kanan">Abu Bakar</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="detail-profile bs-wrapp p-0 overflow-hidden position-relative">
            <!-- Icon menu vertical -->
            <div class="dropdown i-mv">
                <a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../../../../assets//img/publikasi-banner/menu-vertical.png" alt="">
                </a>

                <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li><a class="dropdown-item" href="#"><img src="../../../../assets//img/i-export/i-excel.png"
                                alt=""> Unduh Excel</a></li>
                    <li><a class="dropdown-item" href="#"><img src="../../../../assets//img/i-export/i-pdf.png" alt="">
                            Unduh PDF</a></li>
                    <li><a class="dropdown-item" href="#"><img src="../../../../assets//img/i-export/i-print.png"
                                alt=""> Print</a></li>
                </ul>
            </div>
            <!--  -->
            <TabsWrapp>
                <Tab title="Data Orang Tua">
                    <div class="info-profile ip2">
                        <table>
                            <tr>
                                <td>Nama Lengkap</td>
                                <td class="td-kanan">Siti Khodijah</td>
                            </tr>
                            <tr>
                                <td>NIK</td>
                                <td class="td-kanan">1120091009920100</td>
                            </tr>
                            <tr>
                                <td>No. Telepon</td>
                                <td class="td-kanan">081234567890</td>
                            </tr>
                            <tr>
                                <td>Tanggal Lahir</td>
                                <td class="td-kanan">6 Juli 1994</td>
                            </tr>
                            <tr>
                                <td>Jumlah Anak</td>
                                <td class="td-kanan">3</td>
                            </tr>
                            <tr>
                                <td>Pekerjaan</td>
                                <td class="td-kanan">Wirausaha</td>
                            </tr>
                            <tr>
                                <td>Pendapatan</td>
                                <td class="td-kanan">Rp 10.000.000 / bln</td>
                            </tr>
                            <tr>
                                <td>Alamat</td>
                                <td class="td-kanan">Sumatera Utara, Kota Medan, Medan Timur 20113</td>
                            </tr>
                            <tr>
                                <td>Detail Alamat</td>
                                <td class="td-kanan">Jalan Sidorukun No.189283 Rumah Berwarna Merah</td>
                            </tr>
                        </table>
                        <div class="img-ip2">
                            <img src="../../../../assets/img/data-master/detail-dataanak/img-dataorangtua.png" alt="">
                        </div>
                    </div>
                </Tab>
                <Tab title="Hasil Pemeriksaan">
                    <div class="wrapp-card">
                        <!-- Card 1 -->
                        <div class="card-bulan-hp p-3">
                            <div class="head-card">
                                <div class="h-l-card">
                                    <h3>Bulan ke- 0</h3>
                                    <p>12 Oktober 2022</p>
                                </div>
                                <div class="h-r-card">
                                    <img src="../../../../assets/img/data-master/detail-dataanak/e-normal.png" alt="">
                                    <h3>Normal</h3>
                                </div>
                            </div>
                            <div class="row content-card">
                                <div class="col-6 c-l-card">
                                    <h3>Lokasi Posyandu:</h3>
                                    <p>Posyandu Mawar</p>
                                    <h3>Kader yang memeriksa</h3>
                                    <p>Cintiaa Melati Anggrek Sinaga</p>
                                </div>
                                <div class="col-6 c-r-card">
                                    <h3>Hasil Pemeriksaan:</h3>
                                    <table>
                                        <tr>
                                            <td>Usia (Bulan)</td>
                                            <td class="td-kanan">12</td>
                                        </tr>
                                        <tr>
                                            <td>Berat Badan (kg)</td>
                                            <td class="td-kanan">4.5</td>
                                        </tr>
                                        <tr>
                                            <td>Tinggi Badan (cm)</td>
                                            <td class="td-kanan">82.5</td>
                                        </tr>
                                        <tr>
                                            <td>Lingkar Kepala (cm)</td>
                                            <td class="td-kanan">82.5</td>
                                        </tr>
                                        <tr>
                                            <td>Lingkar Lengan (cm)</td>
                                            <td class="td-kanan">82.5</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- Card 2 -->
                        <div class="card-bulan-hp c-2 p-3">
                            <div class="head-card">
                                <div class="h-l-card">
                                    <h3>Bulan ke- 0</h3>
                                    <p>12 Oktober 2022</p>
                                </div>
                                <div class="h-r-card">
                                    <img src="../../../../assets/img/data-master/detail-dataanak/e-gejala.png" alt="">
                                    <h3>Gejala</h3>
                                </div>
                            </div>
                            <div class="row content-card">
                                <!-- <button class="btn-c simpan"
                                    @click="isOpen = true">Lihat Detail Penanganan</button> -->
                                <div class="col-6 c-l-card">
                                    <h3>Lokasi Posyandu:</h3>
                                    <p>Posyandu Mawar</p>
                                    <h3>Kader yang memeriksa</h3>
                                    <p>Cintiaa Melati Anggrek Sinaga</p>
                                </div>
                                <div class="col-6 c-r-card">
                                    <h3>Hasil Pemeriksaan:</h3>
                                    <table>
                                        <tr>
                                            <td>Usia (Bulan)</td>
                                            <td class="td-kanan">12</td>
                                        </tr>
                                        <tr>
                                            <td>Berat Badan (kg)</td>
                                            <td class="td-kanan">4.5</td>
                                        </tr>
                                        <tr>
                                            <td>Tinggi Badan (cm)</td>
                                            <td class="td-kanan">82.5</td>
                                        </tr>
                                        <tr>
                                            <td>Lingkar Kepala (cm)</td>
                                            <td class="td-kanan">82.5</td>
                                        </tr>
                                        <tr>
                                            <td>Lingkar Lengan (cm)</td>
                                            <td class="td-kanan">82.5</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="col-12 text-center mt-3">
                                    <button class="btn-c simpan"
                                    @click="isOpen = true">Lihat Detail Penanganan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Riwayat Vaksinasi">
                    <div class="content-vaksin">
                        <div class="card-vaksin">
                            <div class="c-cv1">
                                <h4>Vaksin Campak Rubella</h4>
                                <span>No. Tiket: 10274884</span>
                                <br><span>Lokasi & Jadwal Imunisasi</span>
                                <table>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-tgl.png"
                                                alt=""></td>
                                        <td>Senin, 08/09/2022</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-jam.png"
                                                alt=""></td>
                                        <td>07.15 pm</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-loc.png"
                                                alt=""></td>
                                        <td>Posyandu Melati</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="c-cv2">
                                <img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/sk-vaksin.png"
                                    alt="">
                            </div>
                            <div class="c-cv3">
                                <span>Keterangan:</span>
                                <p>Budi Utomo telah diberikan vaksin campak rubella tepat waktu yaitu pada usia 0
                                    bulan.</p>
                            </div>
                        </div>
                        <div class="card-vaksin">
                            <div class="c-cv1">
                                <h4>Vaksin Campak</h4>
                                <span>No. Tiket: 10274884</span>
                                <br><span>Lokasi & Jadwal Imunisasi</span>
                                <table>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-tgl.png"
                                                alt=""></td>
                                        <td>Senin, 08/09/2022</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-jam.png"
                                                alt=""></td>
                                        <td>07.15 pm</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-loc.png"
                                                alt=""></td>
                                        <td>Posyandu Melati</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="c-cv2">
                                <img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/sk-vaksin.png"
                                    alt="">
                            </div>
                            <div class="c-cv3">
                                <span>Keterangan:</span>
                                <p>Budi Utomo telah diberikan vaksin campak rubella tepat waktu yaitu pada usia 0
                                    bulan.</p>
                            </div>
                        </div>
                        <div class="card-vaksin">
                            <div class="c-cv1">
                                <h4>Vaksin Campak Rubella</h4>
                                <span>No. Tiket: 10274884</span>
                                <br><span>Lokasi & Jadwal Imunisasi</span>
                                <table>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-tgl.png"
                                                alt=""></td>
                                        <td>Senin, 08/09/2022</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-jam.png"
                                                alt=""></td>
                                        <td>07.15 pm</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-loc.png"
                                                alt=""></td>
                                        <td>Posyandu Melati</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="c-cv2">
                                <img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/sk-vaksin.png"
                                    alt="">
                            </div>
                            <div class="c-cv3">
                                <span>Keterangan:</span>
                                <p>Budi Utomo telah diberikan vaksin campak rubella tepat waktu yaitu pada usia 0
                                    bulan.</p>
                            </div>
                        </div>
                        <div class="card-vaksin">
                            <div class="c-cv1">
                                <h4>Vaksin Campak</h4>
                                <span>No. Tiket: 10274884</span>
                                <br><span>Lokasi & Jadwal Imunisasi</span>
                                <table>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-tgl.png"
                                                alt=""></td>
                                        <td>Senin, 08/09/2022</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-jam.png"
                                                alt=""></td>
                                        <td>07.15 pm</td>
                                    </tr>
                                    <tr>
                                        <td><img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/i-loc.png"
                                                alt=""></td>
                                        <td>Posyandu Melati</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="c-cv2">
                                <img src="../../../../assets/img/data-master/detail-dataanak/riwayat-vaksin/sk-vaksin.png"
                                    alt="">
                            </div>
                            <div class="c-cv3">
                                <span>Keterangan:</span>
                                <p>Budi Utomo telah diberikan vaksin campak rubella tepat waktu yaitu pada usia 0
                                    bulan.</p>
                            </div>
                        </div>
                    </div>
                </Tab>
            </TabsWrapp>
        </div>

    </div>

    <teleport to='body'>
        <div class="pop-up2" v-if="isOpen">
            <div class="wrapp-pop-up2 btn-kec text-dark">
                <h3 class="text-center mt-4 fw-semibold fs-4">Penanganan yang sudah dilakukan</h3>
                <div class="row p-3 justify-content-center">
                    <div class="col-6 d-flex align-items-end gap-2">
                        <img src="../../../../assets/img/box-item/nakes.png" alt="">
                        Jaxson Rhiel Madsen
                    </div>
                    <div class="col-6 d-flex align-items-end justify-content-end">15 Oktober 2022</div>
                    <div class="col-12 text-center mt-3 fw-semibold text-dark h-pop-up2">Pasokan</div>
                    <div class="col-12 mt-3">
                        <span>Tablet Tambah Darah</span><br>
                        <span>Suplemen Gizi Mikro (Taburia)</span>
                    </div>
                    <div class="col-12 text-center mt-3 fw-semibold text-dark h-pop-up2">
                        Penanganan lainnya
                    </div>
                    <div class="col-12 mt-3">Pemberian Imunisasi Polio</div>
                    <div class="col-12 text-center mt-3 fw-semibold text-dark h-pop-up2">Dokumentasi</div>
                    <div class="row mt-3">
                        <div class="col-4"><img
                                src="../../../../assets/img/data-master/detail-dataanak/dokumentasi/doc-img1.png" alt=""
                                class="img-fluid"></div>
                        <div class="col-4"><img
                                src="../../../../assets/img/data-master/detail-dataanak/dokumentasi/doc-img1.png" alt=""
                                class="img-fluid"></div>
                        <div class="col-4"><img
                                src="../../../../assets/img/data-master/detail-dataanak/dokumentasi/doc-img1.png" alt=""
                                class="img-fluid"></div>
                    </div>
                </div>

                <button class="btn" @click="isOpen = false"><i class="fas fa-xmark"></i></button>
            </div>
        </div>
    </teleport>

</template>
<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
import TabsWrapp from '../../../../components/tab/TabsWrapp.vue'
import Tab from '../../../../components/tab/Tab.vue'
</script>


<script>

export default {
    name: 'DetailDataAnak',
    components: {

    }
}
</script>
<style>
.wrapp-datamaster.detail-dm {
    background-color: transparent;
}

.i-mv {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
}

.wrapp-datamaster .info-profile table td {
    padding: 8px;
    color: rgba(0, 0, 0, .6);
}

.wrapp-datamaster .info-profile table .td-kanan {
    text-align: right;
    font-weight: 500;
    color: #222;
}

.detail-img {
    display: flex;
    flex-direction: column;
    flex: .7;
    align-items: center;
    padding: 30px 20px;
    border-top: 4px solid #00205C;
}

.detail-name-profile {
    margin-top: 40px;
}

.detail-name-profile span {
    font-weight: 600;
    color: #222;
    font-size: 1.2em;
}

.detail-profile {
    flex: 2;
}

.wrapp-datamaster .menu-dataanak {
    padding: 0;
    margin: 0;
}

.wrapp-datamaster .li-active a {
    border-top: 4px solid #00205C;
    border-bottom: none;
    color: #222;
    font-weight: 600;
}

.detail-profile table {
    width: 95%;
    margin: auto;
    font-size: 1.1em;
}

.detail-profile .info-profile.ip2 {
    display: flex;
}

.detail-profile .info-profile.ip2 table {
    flex: 1;
    margin: 0 20px;
}

.detail-profile .info-profile.ip2 table td {
    padding: 10px;
}

.detail-profile .info-profile.ip2 .img-ip2 {
    flex: .3;
    text-align: center;
}

.detail-profile .info-profile.ip2 td {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
}

.detail-profile .info-profile.ip2 .td-kanan {
    text-align: left;
}

.detail-profile table .input-field {
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

.detail-profile .wrapp-card {
    padding: 20px;
}

.detail-profile .card-bulan-hp {
    border: 3px solid #28A745;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin: 20px 0;
}

.detail-profile .card-bulan-hp .head-card {
    display: flex;
    justify-content: space-between;
}

.detail-profile .card-bulan-hp .head-card .h-r-card {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 100%;
}

.detail-profile .card-bulan-hp .head-card .h-r-card img {
    margin-top: -20px;
}

.detail-profile .card-bulan-hp .head-card .h-r-card h3 {
    color: #28A745;

}

.detail-profile .card-bulan-hp h3 {
    font-weight: 600;
    color: #111;
    font-size: 1.2em;
}

.detail-profile .card-bulan-hp p {
    margin-top: -10px;
}

.detail-profile .card-bulan-hp .content-card {
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 10px;
    box-sizing: border-box;
    color: #222;
    font-weight: 500;
    position: relative;
}

.detail-profile .card-bulan-hp .content-card h3 {
    color: #28A745;
}

.detail-profile .card-bulan-hp .content-card .c-l-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.detail-profile .card-bulan-hp .content-card table td {
    padding: 6px;
}

.detail-profile .card-bulan-hp .content-card table .td-kanan {
    padding-left: 50px;
}

.detail-profile .card-bulan-hp.c-2 {
    border: 3px solid #FFBE00;
}

.detail-profile .card-bulan-hp.c-2 .head-card .h-r-card h3 {
    color: #FFBE00;
}

.detail-profile .card-bulan-hp.c-2 .content-card h3 {
    color: #FFBE00;
}


.wrapp-datamaster .content-vaksin {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
    row-gap: 20px;
    flex-wrap: wrap;
}

.wrapp-datamaster .card-vaksin {
    background-color: rgba(112, 181, 246, .3);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    border-radius: 4px;
    max-width: 320px;
}

.wrapp-datamaster .card-vaksin span {
    font-weight: 600;
}

.wrapp-datamaster .card-vaksin table {
    margin-top: 10px;
}


.wrapp-datamaster .card-vaksin .c-cv1 {
    color: #222;
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    padding: 20px 20px 0 20px;
}

.wrapp-datamaster .card-vaksin .c-cv2 {
    border-top: 1px dashed rgba(0, 0, 0, .4);
    border-bottom: 1px dashed rgba(0, 0, 0, .4);
    padding: 20px;
    text-align: center;
}

.wrapp-datamaster .card-vaksin .c-cv3 {
    padding: 20px;
}
</style>