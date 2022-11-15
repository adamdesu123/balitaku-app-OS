<template>
  <div class="row set-head">
    <div class="col-6">
      <h3>Pengaturan Whatsapp</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="ps-whatsapp" class="to-ds">Pengaturan Umum</router-link>
    </div>
  </div>
  <div class="bg-white br-6 overflow-hidden">
    <TabsWrapp>
      <Tab title="Wablas">
        <div class="m-5">
          <table width="60%" class="tb-tpw">
            <tr>
              <td>API Key <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>No. HP <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>OTP <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>Status <span class="required">*</span></td>
              <td>
                <select name="" id="" class="form-select s-o">
                  <option value="">Aktif</option>
                  <option value="">Tidak AKtif</option>
                </select>
              </td>
            </tr>
            <br><br>
            <tr>
              <td>&nbsp;</td>
              <td align="right">
                <div class="">
                  <router-link to="/" class="btn-c simpan">Simpan</router-link>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </Tab>
      <Tab title="Twilio">
        <div class="m-5">
          <table width="60%" class="tb-tpw">
            <tr>
              <td>Twilio Account SID <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>Authentication Token <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>Registered Phone Number <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>Status <span class="required">*</span></td>
              <td>
                <select name="" id="" class="form-select s-o">
                  <option value="">Aktif</option>
                  <option value="">Tidak AKtif</option>
                </select>
              </td>
            </tr>
            <br><br>
            <tr>
              <td>&nbsp;</td>
              <td align="right">
                <div class="">
                  <router-link to="/" class="btn-c simpan">Simpan</router-link>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </Tab>
      <Tab title="Clickatell">
        <div class="m-5">
          <table width="60%" class="tb-tpw">
            <tr>
              <td>Clickatell Username <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>Clickatell Password <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>Clickatell Api id <span class="required">*</span></td>
              <td><input type="text" name="" class="form-control"></td>
            </tr>
            <br>
            <tr>
              <td>Status <span class="required">*</span></td>
              <td>
                <select name="" id="" class="form-select s-o">
                  <option value="">Aktif</option>
                  <option value="">Tidak AKtif</option>
                </select>
              </td>
            </tr>
            <br><br>
            <tr>
              <td>&nbsp;</td>
              <td align="right">
                <div class="">
                  <router-link to="/" class="btn-c simpan">Simpan</router-link>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </Tab>
    </TabsWrapp>
  </div>
</template>
  
<script setup>
import TabsWrapp from './TabsWrapp.vue'
import Tab from './Tab.vue'

</script>

<style>
.br-6 {
  border-radius: 6px;
}

.nw a {
  padding: 15px 20px;
  flex: 1;
  color: #6B6B6B;
  border-bottom: 1px solid rgba(190, 190, 190, 0.3);
}

.nw .nw-active {
  color: #111;
  font-weight: 600;
  border-top: 3px solid #00205C;
  border-bottom: inherit;
  border-right: 1px solid rgba(190, 190, 190, 0.3);
}

.tb-tpw {
  font-weight: bold;
  color: #111;
}

.s-o {
  max-width: 170px;
  background-color: #fff;
}
</style>