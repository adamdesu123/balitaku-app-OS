<template>
    <div class="row set-head">
        <div class="col-6">
            <h3>Pengaturan Antropometri</h3>
        </div>
        <div class="col-6 breadcrumb justify-content-end">
            <router-link to="beranda" class="to-bf">Beranda</router-link>
            <span class="px-2">/</span>
            <router-link to="ps-antropometri" class="to-ds">Pengaturan Antropometri</router-link>
        </div>
    </div>
    <div class="bg-white">
      <PATabsWrapp>
        <PATabs title="Laki-laki">
          <div class="bs-wrapp p-0">
            <PASubTabsWrapp>
              <SubList title="BB/U">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Berat Badan menurut Umur (BB/U) Anak Laki-laki Umur 0-60
                    Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE BB/U -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Umur (bulan)</th>
                          <th colspan="8">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0</td>
                          <td>2.1</td>
                          <td>2.5</td>
                          <td>2.9</td>
                          <td>3.3</td>
                          <td>3.9</td>
                          <td>4.4</td>
                          <td>5</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>2.9</td>
                          <td>3.4</td>
                          <td>3.9</td>
                          <td>4.5</td>
                          <td>5.1</td>
                          <td>5.8</td>
                          <td>6.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>3.8</td>
                          <td>4.3</td>
                          <td>4.9</td>
                          <td>5.6</td>
                          <td>6.3</td>
                          <td>7.1</td>
                          <td>8</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="PB/U">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Panjang Badan menurut Umur (PB/U) Anak Laki-Laki Umur 0 - 24 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE PB/U -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Umur (bulan)</th>
                          <th colspan="8">Panjang Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0</td>
                          <td>44.2</td>
                          <td>46.1</td>
                          <td>48.0</td>
                          <td>49.9</td>
                          <td>51.8</td>
                          <td>53.7</td>
                          <td>53.7</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>48.9</td>
                          <td>50.8</td>
                          <td>52.8</td>
                          <td>54.7</td>
                          <td>56.7</td>
                          <td>58.6</td>
                          <td>58.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>52.4</td>
                          <td>54.5</td>
                          <td>56.4</td>
                          <td>58.4</td>
                          <td>60.4</td>
                          <td>62.4</td>
                          <td>62.4</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="TB/U">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Tinggi Badan menurut Umur (TB/U) Anak Laki-Laki Umur 24-60 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE TB/U -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Umur (bulan)</th>
                          <th colspan="8">Tinggi Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>24</td>
                          <td>78.0</td>
                          <td>81.0</td>
                          <td>84.1</td>
                          <td>87.1</td>
                          <td>87.1</td>
                          <td>87.1</td>
                          <td>87.1</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>78.6</td>
                          <td>81.7</td>
                          <td>84.9</td>
                          <td>88.3</td>
                          <td>88.3</td>
                          <td>88.3</td>
                          <td>88.3</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>79.3</td>
                          <td>82.5</td>
                          <td>85.6</td>
                          <td>88.2</td>
                          <td>88.2</td>
                          <td>88.2</td>
                          <td>88.2</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="BB/PB">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Berat Badan menurut Panjang Badan (BB/PB) Anak Laki-Laki Umur 0-24 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE BB/PB -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Panjang Badan (cm)</th>
                          <th colspan="8">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>55.0</td>
                          <td>2.1</td>
                          <td>2.5</td>
                          <td>2.9</td>
                          <td>3.3</td>
                          <td>3.9</td>
                          <td>4.4</td>
                          <td>5</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>55.5</td>
                          <td>2.9</td>
                          <td>3.4</td>
                          <td>3.9</td>
                          <td>4.5</td>
                          <td>5.1</td>
                          <td>5.8</td>
                          <td>6.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>56.0</td>
                          <td>3.8</td>
                          <td>4.3</td>
                          <td>4.9</td>
                          <td>5.6</td>
                          <td>6.3</td>
                          <td>7.1</td>
                          <td>8</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="BB/TB">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Berat Badan menurut Tinggi Badan (BB/TB) Anak Laki-Laki Umur 24-60 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE BB/TB -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Tinggi Badan (cm)</th>
                          <th colspan="8">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>65.0</td>
                          <td>2.1</td>
                          <td>2.5</td>
                          <td>2.9</td>
                          <td>3.3</td>
                          <td>3.9</td>
                          <td>4.4</td>
                          <td>5</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>65.5</td>
                          <td>2.9</td>
                          <td>3.4</td>
                          <td>3.9</td>
                          <td>4.5</td>
                          <td>5.1</td>
                          <td>5.8</td>
                          <td>6.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>66.0</td>
                          <td>3.8</td>
                          <td>4.3</td>
                          <td>4.9</td>
                          <td>5.6</td>
                          <td>6.3</td>
                          <td>7.1</td>
                          <td>8</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
            </PASubTabsWrapp>
          </div>
        </PATabs>
        <PATabs title="Perempuan">
          <div class="bs-wrapp p-0">
            <PASubTabsWrapp>
              <SubList title="BB/U">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Berat Badan menurut Umur (BB/U) Anak Perempuan Umur 0-60
                    Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE BB/U -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Umur (bulan)</th>
                          <th colspan="8">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0</td>
                          <td>2.1</td>
                          <td>2.5</td>
                          <td>2.9</td>
                          <td>3.3</td>
                          <td>3.9</td>
                          <td>4.4</td>
                          <td>5</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>2.9</td>
                          <td>3.4</td>
                          <td>3.9</td>
                          <td>4.5</td>
                          <td>5.1</td>
                          <td>5.8</td>
                          <td>6.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>3.8</td>
                          <td>4.3</td>
                          <td>4.9</td>
                          <td>5.6</td>
                          <td>6.3</td>
                          <td>7.1</td>
                          <td>8</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="PB/U">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Panjang Badan menurut Umur (PB/U) Anak Perempuan Umur 0 - 24 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE PB/U -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Umur (bulan)</th>
                          <th colspan="8">Panjang Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>0</td>
                          <td>44.2</td>
                          <td>46.1</td>
                          <td>48.0</td>
                          <td>49.9</td>
                          <td>51.8</td>
                          <td>53.7</td>
                          <td>53.7</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>48.9</td>
                          <td>50.8</td>
                          <td>52.8</td>
                          <td>54.7</td>
                          <td>56.7</td>
                          <td>58.6</td>
                          <td>58.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>52.4</td>
                          <td>54.5</td>
                          <td>56.4</td>
                          <td>58.4</td>
                          <td>60.4</td>
                          <td>62.4</td>
                          <td>62.4</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="TB/U">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Tinggi Badan menurut Umur (TB/U) Anak Perempuan Umur 24-60 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE TB/U -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Umur (bulan)</th>
                          <th colspan="8">Tinggi Badan (cm)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>24</td>
                          <td>78.0</td>
                          <td>81.0</td>
                          <td>84.1</td>
                          <td>87.1</td>
                          <td>87.1</td>
                          <td>87.1</td>
                          <td>87.1</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>25</td>
                          <td>78.6</td>
                          <td>81.7</td>
                          <td>84.9</td>
                          <td>88.3</td>
                          <td>88.3</td>
                          <td>88.3</td>
                          <td>88.3</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>26</td>
                          <td>79.3</td>
                          <td>82.5</td>
                          <td>85.6</td>
                          <td>88.2</td>
                          <td>88.2</td>
                          <td>88.2</td>
                          <td>88.2</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="BB/PB">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Berat Badan menurut Panjang Badan (BB/PB) Anak Perempuan Umur 0-24 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE BB/PB -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Panjang Badan (cm)</th>
                          <th colspan="8">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>55.0</td>
                          <td>2.1</td>
                          <td>2.5</td>
                          <td>2.9</td>
                          <td>3.3</td>
                          <td>3.9</td>
                          <td>4.4</td>
                          <td>5</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>55.5</td>
                          <td>2.9</td>
                          <td>3.4</td>
                          <td>3.9</td>
                          <td>4.5</td>
                          <td>5.1</td>
                          <td>5.8</td>
                          <td>6.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>56.0</td>
                          <td>3.8</td>
                          <td>4.3</td>
                          <td>4.9</td>
                          <td>5.6</td>
                          <td>6.3</td>
                          <td>7.1</td>
                          <td>8</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
              <SubList title="BB/TB">
                <div class="p-4">
                  <span class="text-danger fw-bold">Standar Berat Badan menurut Tinggi Badan (BB/TB) Anak Perempuan Umur 24-60 Bulan</span>
                  <div class="mt-4">
                    <img src="../../../../assets/img/pengaturan/p_antro/rumus.png" alt="">
                  </div>
                  <!-- TABLE BB/TB -->
                  <div class="mt-5 d-flex gap-3">
                    <table class="table table-striped text-center tb-kanan">
                      <thead>
                        <tr>
                          <th rowspan="2">Tinggi Badan (cm)</th>
                          <th colspan="8">Berat Badan (kg)</th>
                        </tr>
                        <tr>
                          <th>-3SD</th>
                          <th>-2SD</th>
                          <th>-1SD</th>
                          <th>Median</th>
                          <th>+1SD</th>
                          <th>+2SD</th>
                          <th>+3SD</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>65.0</td>
                          <td>2.1</td>
                          <td>2.5</td>
                          <td>2.9</td>
                          <td>3.3</td>
                          <td>3.9</td>
                          <td>4.4</td>
                          <td>5</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>65.5</td>
                          <td>2.9</td>
                          <td>3.4</td>
                          <td>3.9</td>
                          <td>4.5</td>
                          <td>5.1</td>
                          <td>5.8</td>
                          <td>6.6</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                        <tr>
                          <td>66.0</td>
                          <td>3.8</td>
                          <td>4.3</td>
                          <td>4.9</td>
                          <td>5.6</td>
                          <td>6.3</td>
                          <td>7.1</td>
                          <td>8</td>
                          <td><img src="../../../../assets/img/pengaturan/p_antro/i-edit.png" alt=""></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SubList>
            </PASubTabsWrapp>
          </div>
        </PATabs>
      </PATabsWrapp>
    </div>
</template>
  
<script setup>
import PATabsWrapp from './PATabsWrapp.vue'
import PATabs from './PATabs.vue'
import PASubTabsWrapp from './Sublist/PASubTabsWrapp.vue'
import SubList from './Sublist/SubList.vue'
</script>


<script>

export default {
  name: 'PengaturanAntropometri',
  components: {

  }
}
</script>

<style>
.tb-kiri{
  flex: .3;
}

.tb-kanan{
  flex: 1;
  height: 100%;
}

</style>
  