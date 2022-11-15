<template>
  <div class="wrapp-login">
    <div class="box-login">
      <div class="login-gambar">
        <img src="../assets/img/login/login-slide.png" height="250" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. hendrerit
          orci. Leo amet id.
        </p>
      </div>
      <div class="login-input">
        <div class="title">
          <img src="../assets/img/logo.png" alt="" />
          <h3>Kode OTP</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. hendrerit
            orci. Leo amet id.
          </p>
        </div>
        <form>
          <span>Masukan Kode OTP</span>
          <div class="otp">
            <input type="text" name="" maxlength="1" class="otp-input" />
            <input type="text" name="" maxlength="1" class="otp-input" />
            <input type="text" name="" maxlength="1" class="otp-input" />
            <input type="text" name="" maxlength="1" class="otp-input" />
          </div>
          <router-link to="/dashboard/beranda"
            ><button type="submit" class="btn-submit">
              Masuk
            </button></router-link
          >
          <p class="re-code">
            Belum menerima kode? <a href="/">Kirim Ulang</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VerifView",
  components: {},
};
</script>
<style></style>
