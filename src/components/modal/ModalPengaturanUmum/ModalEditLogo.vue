<template lang="">
    <div class="pop-up-fixed">
        <div class="row bs-wrapp main-color-font p-3 gap-3 wrp-e-logo">
            <div class="col-12 fw-semibold fs-5">
                Edit Logo
            </div>
            <div class="drag-inner d-flex justify-content-center align-items-center flex-column p-5">
                <img src="../../../assets/img/i-export/i-drag.png" alt="">
                <span class="mt-3">Seret dan Lepas Disini</span>
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button class="btn-c simpan" @click="close">Simpan</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "modaleditlogo",
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>
<style>
.wrp-e-logo {
    width: 60vh;
}

.drag-inner {
    width: 100%;
    height: 250px;
    border: 1px dashed #8A8888;
}
</style>