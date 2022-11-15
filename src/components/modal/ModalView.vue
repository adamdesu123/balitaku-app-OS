<template lang="">
    <div class="pop-up-fixed">
      <div class="bs-wrapp pop-up-unduh p-5 gap-4 text-center">
        <img src="../../assets/img/i-succes.png" alt="" />
      <h3>Berhasil di {{ title }}</h3>
      <button class="btn btn-ok" @click="close">OK</button>
      </div>
    </div>
</template>
<script>
export default {
    name: "Modal",
    props: {
        title: {
            type: String,
            required: false
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>
<style lang="">
    
</style>