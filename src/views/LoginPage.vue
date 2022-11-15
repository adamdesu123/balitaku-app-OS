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
          <h3>Selamat Datang</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. hendrerit
            orci. Leo amet id.
          </p>
        </div>
        <form>
          <span>Masukan No. Handphone</span>
          <input type="text" name="" class="input-field" required />
          <router-link to="/verif"
            ><button type="submit" class="btn-submit">
              Lanjut
            </button></router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<style src="../assets/css/LoginStyle.css"></style>
