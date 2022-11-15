<template>
      <div class="row set-head">
    <div class="col-6">
      <h3>Laporan Log Perubahan Antropometri</h3>
    </div>
    <div class="col-6 breadcrumb justify-content-end">
      <router-link to="beranda" class="to-bf">Beranda</router-link>
      <span class="px-2">/</span>
      <router-link to="log-perubahan" class="to-ds">Laporan Log Perubahan</router-link>
    </div>
  </div>
    <div class="bg-white">
      <LLPTabsWrapp>
        <LLPTabs title="Laki-laki">
          <div class="bg-white">
            <LLPSubTabsWrapp>
              <SubList title="BB/U">
                <!-- TABLE BB/U -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>08/09/2022</td>
                          <td>3</td>
                          <td>-3 SD</td>
                          <td>4.4</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>-2 SD</td>
                          <td>4.5</td>
                          <td>4.7</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>-1 SD</td>
                          <td>4.6</td>
                          <td>5.2</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>Median</td>
                          <td>4.9</td>
                          <td>5.5</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>+1 SD</td>
                          <td>5.3</td>
                          <td>5.9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="PB/U">
                <!-- TABLE PB/U -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Panjang Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>9</td>
                          <td>-2 SD</td>
                          <td>44.4</td>
                          <td>47.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>5</td>
                          <td>-2 SD</td>
                          <td>41.5</td>
                          <td>45.7</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>5</td>
                          <td>-1 SD</td>
                          <td>43.6</td>
                          <td>45.2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="TB/U">
                <!-- TABLE TB/U -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Tinggi Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>25</td>
                          <td>Median</td>
                          <td>88.4</td>
                          <td>89.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>27</td>
                          <td>-2 SD</td>
                          <td>90.5</td>
                          <td>91.7</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>27</td>
                          <td>-1 SD</td>
                          <td>93.6</td>
                          <td>95.2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="BB/PB">
                <!-- TABLE BB/PB -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>45.0</td>
                          <td>Median</td>
                          <td>4.4</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>45.5</td>
                          <td>-2 SD</td>
                          <td>4.5</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>46.0</td>
                          <td>-1 SD</td>
                          <td>9.6</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>47.0</td>
                          <td>-1 SD</td>
                          <td>4.9</td>
                          <td>5.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="BB/TB">
                <!-- TABLE BB/TB -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>65.0</td>
                          <td>Median</td>
                          <td>4.4</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>65.5</td>
                          <td>-2 SD</td>
                          <td>4.5</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>65.0</td>
                          <td>-1 SD</td>
                          <td>4.6</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>69.5</td>
                          <td>-1 SD</td>
                          <td>4.9</td>
                          <td>5.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
            </LLPSubTabsWrapp>
          </div>
        </LLPTabs>
        <LLPTabs title="Perempuan">
          <div class="bg-white">
            <LLPSubTabsWrapp>
              <SubList title="BB/U">
                <!-- TABLE BB/U -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2" style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>08/09/2022</td>
                          <td>3</td>
                          <td>-3 SD</td>
                          <td>4.4</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>-2 SD</td>
                          <td>4.5</td>
                          <td>4.7</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>-1 SD</td>
                          <td>4.6</td>
                          <td>5.2</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>Median</td>
                          <td>4.9</td>
                          <td>5.5</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>2</td>
                          <td>+1 SD</td>
                          <td>5.3</td>
                          <td>5.9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="PB/U">
                <!-- TABLE PB/U -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Panjang Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>9</td>
                          <td>-2 SD</td>
                          <td>44.4</td>
                          <td>47.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>5</td>
                          <td>-2 SD</td>
                          <td>41.5</td>
                          <td>45.7</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>5</td>
                          <td>-1 SD</td>
                          <td>43.6</td>
                          <td>45.2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="TB/U">
                <!-- TABLE TB/U -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Tinggi Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>25</td>
                          <td>Median</td>
                          <td>88.4</td>
                          <td>89.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>27</td>
                          <td>-2 SD</td>
                          <td>90.5</td>
                          <td>91.7</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>27</td>
                          <td>-1 SD</td>
                          <td>93.6</td>
                          <td>95.2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="BB/PB">
                <!-- TABLE BB/PB -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>45.0</td>
                          <td>Median</td>
                          <td>4.4</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>45.5</td>
                          <td>-2 SD</td>
                          <td>4.5</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>46.0</td>
                          <td>-1 SD</td>
                          <td>9.6</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>47.0</td>
                          <td>-1 SD</td>
                          <td>4.9</td>
                          <td>5.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
              <SubList title="BB/TB">
                <!-- TABLE BB/TB -->
                <div class="mt-3 d-flex gap-3 p-2">
                    <table class="table table-striped text-center c-v">
                      <thead>
                        <tr>
                          <th rowspan="2"  style="vertical-align : middle;">Tanggal</th>
                          <th rowspan="2" style="vertical-align : middle;">Umur (bulan)</th>
                          <th rowspan="2" style="vertical-align : middle;">Standar Deviasi</th>
                          <th colspan="2">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>Sebelum</th>
                          <th>Sesudah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13/10/2022</td>
                          <td>65.0</td>
                          <td>Median</td>
                          <td>4.4</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>65.5</td>
                          <td>-2 SD</td>
                          <td>4.5</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>65.0</td>
                          <td>-1 SD</td>
                          <td>4.6</td>
                          <td>4.9</td>
                        </tr>
                        <tr>
                          <td>08/09/2022</td>
                          <td>69.5</td>
                          <td>-1 SD</td>
                          <td>4.9</td>
                          <td>5.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </SubList>
            </LLPSubTabsWrapp>
          </div>
        </LLPTabs>
      </LLPTabsWrapp>
    </div>
  </template>

<script setup>
import LLPTabsWrapp from './LLPTabsWrapp.vue'
import LLPTabs from './LLPTabs.vue'
import LLPSubTabsWrapp from './Sublist/LLPSubTabsWrapp.vue'
import SubList from './Sublist/SubList.vue'
</script>
  
  <script>
  
  export default {
    name: 'LapLogPerubahan',
    components: {
     
    }
  }
  </script>