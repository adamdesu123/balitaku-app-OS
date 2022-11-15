<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Jadwal Kegiatan</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="jadwalkegiatan" class="to-ds">Jadwal Kegiatan</router-link>
        </div>
    </div>
    <div class="row wrapp-jadwalKegiatan m-0 gap-4 justify-content-between">
        <div class="col-lg-5 left-content">
            <div class="tgl-jadwal">
                <h3>Agustus</h3>
            </div>
        </div>
        <div class="col-lg-6 right-content">
            <span>Kegiatan Posyandu Mendatang di Kec. Medan Barat</span>
            <div class="loc-item l-box">
                <div class="l-icon">
                    <a href="#JadDetailSubmenu1" data-bs-toggle="collapse"
                        class="d-flex flex-column text-center text-white">
                        <span>Rabu</span>
                        <span>17</span>
                    </a>
                </div>
                <div class="t-loc d-flex justify-content-between">
                    <span class="fw-bold">Kegiatan Imunisasi 2</span>
                    <span>08:00 - 12:00 WIB</span>
                </div>
            </div>
            <div class="collapse list-unstyled drop-detail" id="JadDetailSubmenu1">
                <div class="loc-item l-box">
                    <router-link to="detailjadwal">
                        <div class="l-icon bg-sub">
                            <img src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt="">
                        </div>
                    </router-link>
                    <div class="t-loc">
                        <p>Kecamatan Medan Barat</p>
                        <span>Jl.Sidorukun No.70 Medan Timur</span>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="loc-item l-box">
                <div class="l-icon">
                    <a href="#JadDetailSubmenu2" data-bs-toggle="collapse"
                        class="d-flex flex-column text-center text-white">
                        <span>Jum'at</span>
                        <span>19</span>
                    </a>
                </div>
                <div class="t-loc d-flex justify-content-between">
                    <span class="fw-bold">Kegiatan Imunisasi 2</span>
                    <span>08:00 - 12:00 WIB</span>
                </div>
            </div>
            <div class="collapse list-unstyled drop-detail" id="JadDetailSubmenu2">
                <div class="loc-item l-box">
                    <router-link to="detailjadwal">
                        <div class="l-icon bg-sub">
                            <img src="../../../assets/img/jadwal-kegiatan/icon-loc.png" alt="">
                        </div>
                    </router-link>
                    <div class="t-loc">
                        <p>Kecamatan Medan Barat</p>
                        <span>Jl.Sidorukun No.70 Medan Timur</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>

export default {
    name: 'detailjadwal',
    components: {

    }
}
</script>
