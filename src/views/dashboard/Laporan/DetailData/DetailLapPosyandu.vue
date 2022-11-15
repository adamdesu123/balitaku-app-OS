<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Detail Laporan Posyandu</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="lap-posyandu" class="to-bf">Laporan Posyandu</router-link>
            <span class="px-2">/</span>
            <router-link to="detail-lap-posyandu" class="to-ds">Detail</router-link>
        </div>
    </div>
    <div class="row row-dlp">
        <table class="tb-lp">
            <tr class="tb-lp-tr">
                <td class="no-tb">1</td>
                <td>Imunisasi di Medan Timur</td>
                <td>08 September 2022</td>
                <td><a data-bs-toggle="collapse" href="#lp-item1" role="button" aria-expanded="false"
                        aria-controls="lp-item1">Detail <img src="../../../../assets/img/right-arrow2.png" alt=""></a>
                </td>
            </tr>
            <div class="row m-0">
                <div class="collapse multi-collapse drop-detail" id="lp-item1">
                    <header>
                        <h4>Imunisasi di Medan Timur</h4>
                        <p>Kecamatan Sidorame | Kelurahan Parapung</p>
                    </header>
                    <div class="detail-lap">
                        <table>
                            <tr>
                                <td>Yang Melaporkan</td>
                                <td class="dot">:</td>
                                <td>Surtina</td>
                            </tr>
                            <tr>
                                <td>Tanggal Kegiatan</td>
                                <td class="dot">:</td>
                                <td>Kamis, 08 September 2022</td>
                            </tr>
                            <tr>
                                <td>Jadwal Kegiatan</td>
                                <td class="dot">:</td>
                                <td>08.00 - 11.00 Wib</td>
                            </tr>
                            <tr>
                                <td>Peserta</td>
                                <td class="dot">:</td>
                                <td>
                                    <ul>
                                        <li>Ibu dan balita 33 orang</li>
                                        <li>Kader posyandu 3 orang</li>
                                        <li>Jurim 1 orang</li>
                                        <li>Bidan 2 Orang</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Keterangan Kegiatan</td>
                                <td class="dot">:</td>
                                <td>Imunisasi Polio yang dilaksanakan berjalan dengan baik, seluruh balita yang hadir
                                    telah di imunisasi.</td>
                            </tr>
                            <tr>
                                <td>Dokumentasi Kegiatan</td>
                                <td class="dot">:</td>
                                <td><img src="../../../../assets/img/laporan/laporan_posyandu/detal-lap-img1.png"
                                        alt="">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <tr class="tb-lp-tr">
                <td class="no-tb">2</td>
                <td>Imunisasi di Medan Timur</td>
                <td>08 September 2022</td>
                <td><a data-bs-toggle="collapse" href="#lp-item2" role="button" aria-expanded="false"
                        aria-controls="lp-item2">Detail <img src="../../../../assets/img/right-arrow2.png" alt=""></a>
                </td>
            </tr>
            <div class="row m-0">
                <div class="collapse multi-collapse drop-detail" id="lp-item2">
                    <header>
                        <h4>Imunisasi di Medan Timur</h4>
                        <p>Kecamatan Sidorame | Kelurahan Parapung</p>
                    </header>
                    <div class="detail-lap">
                        <table>
                            <tr>
                                <td>Yang Melaporkan</td>
                                <td class="dot">:</td>
                                <td>Surtina</td>
                            </tr>
                            <tr>
                                <td>Tanggal Kegiatan</td>
                                <td class="dot">:</td>
                                <td>Kamis, 08 September 2022</td>
                            </tr>
                            <tr>
                                <td>Jadwal Kegiatan</td>
                                <td class="dot">:</td>
                                <td>08.00 - 11.00 Wib</td>
                            </tr>
                            <tr>
                                <td>Peserta</td>
                                <td class="dot">:</td>
                                <td>
                                    <ul>
                                        <li>Ibu dan balita 33 orang</li>
                                        <li>Kader posyandu 3 orang</li>
                                        <li>Jurim 1 orang</li>
                                        <li>Bidan 2 Orang</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Keterangan Kegiatan</td>
                                <td class="dot">:</td>
                                <td>Imunisasi Polio yang dilaksanakan berjalan dengan baik, seluruh balita yang hadir
                                    telah di imunisasi.</td>
                            </tr>
                            <tr>
                                <td>Dokumentasi Kegiatan</td>
                                <td class="dot">:</td>
                                <td><img src="../../../../assets/img/laporan/laporan_posyandu/detal-lap-img1.png"
                                        alt="">
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </table>
    </div>
</template>
<script>
export default {
    name: "DetailLapPosyandu"
}
</script>
<style>
.row-dlp .tb-lp .tb-lp-tr {
    display: block;
    overflow: hidden;
    border: 2px solid rgba(0, 0, 0, .3);
    background: #fff;
    margin-top: 10px;
    border-radius: 5px;
}

.row-dlp .tb-lp a {
    /* width    : 100%; */
    display: flex;
    align-items: center;
    gap: 40px;
    color: #00205C;
    font-weight: 500;
    transition: .3s;
}

.row-dlp table .no-tb {
    background-color: #00205C;
    color: #fff;
    max-width: 10%;
    border-radius: 5px;
    text-align: center;
}

.row-dlp .tb-lp td {
    width: 40%;
    height: 50px;
    padding: 6px 12px;
}

.drop-detail {
    background: #fff;
    width: 100%;
    padding: 20px 40px;
    transition: .3s;
}

.drop-detail header {
    text-align: center;
    width: 90%;
    margin: auto;
    border-bottom: 1px dashed rgba(0, 0, 0, .6);
}

.drop-detail header h4 {
    font-size: 1.4em;
    color: #222;
    font-weight: 600;
}

.drop-detail header p {
    color: rgba(0, 0, 0, .6);
}

.detail-lap {
    width: 90%;
    margin: auto;
}

.detail-lap table .dot {
    width: 5%;
}

.detail-lap table ul {
    list-style: square inside;
    display: block;
    padding: 0;
}
</style>