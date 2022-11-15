<template>
    <div class="m-content home">
        <h3>Detail Publikasi Artikel</h3>
        <div class="wrapp-detailartikel">
            <div class="wrapp-p detail-artikel">
            </div>
        </div>

    </div>
</template>
  
<script>

export default {
    name: 'DetailArtikel',
    components: {

    }
}
</script>
<style>
.wrapp-p {
    background-color: #fff;
    border-radius: 6px;
    border-top: 3px solid #00205C;
}

.wrapp-detailartikel .btn2 {
    background-color: #00205C;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: .9em;
    width: auto;

}

.wrapp-detailartikel .btn2.ed-il2 {
    padding: 6px 20px;
    background-color: #fff;
    border: 1px solid #00205C;
    color: #00205C;
}

.detail-artikel {
    padding: 40px;
    flex: 1;
}

.detail-artikel table {
    color: #222;
    font-weight: 600;
}

.detail-artikel table tr {
    border-bottom: 1px solid rgba(0, 0, 0, .3);
}

.detail-artikel table tr:nth-child(7),
.detail-artikel table tr:last-child {
    border: none;
}

.detail-artikel table td {
    padding: 12px;
}
</style>