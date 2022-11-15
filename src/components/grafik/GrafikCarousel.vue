<template lang="">
    <div class="row m-0 mt-4">
        <div class="col-lg-11 mx-auto col-md-10 col-sm-10 col-10">
      <div
        id="grafik-slide"
        class="carousel slide bs-wrapp overflow-hidden"
        data-bs-ride="true"
      >
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <h3>Grafik Berat Badan per Usia</h3>
            <div class="col-12 content-carousel flex-column gap-0 bg-white">
                <div class="dropdown mb-2" align="right">
                  <button class="dropdown-toggle btn-kec" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Pilih Usia Anak
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">0 Bulan - 20 Bulan</a></li>
                    <li><a class="dropdown-item" href="#">21 Bulan - 40 Bulan</a></li>
                    <li><a class="dropdown-item" href="#">41 Bulan - 60 Bulan</a></li>
                    </ul>
                </div>
                <div class="grafik gc">
                <canvas id="gBeratBadan"></canvas>
              </div>
            </div>
          </div>
          <!-- Slide 2 -->
          <div class="carousel-item">
            <h3>Grafik Tinggi Badan per Usia</h3>
            <div class="col-12 content-carousel flex-column gap-0 bg-white">
              <div class="dropdown mb-2" align="right">
                  <button class="dropdown-toggle btn-kec" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Pilih Usia Anak
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">0 Bulan - 20 Bulan</a></li>
                    <li><a class="dropdown-item" href="#">21 Bulan - 40 Bulan</a></li>
                    <li><a class="dropdown-item" href="#">41 Bulan - 60 Bulan</a></li>
                    </ul>
                </div>
                <div class="grafik gc">
                <canvas id="gTinggiBadan"></canvas>
              </div>
            </div>
          </div>
          <!-- Slide 3 -->
          <div class="carousel-item">
            <h3>Grafik Berat Badan per Tinggi Badan</h3>
            <div class="col-12 content-carousel flex-column gap-0 bg-white">
              <div class="dropdown mb-2" align="right">
                  <button class="dropdown-toggle btn-kec" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Pilih Usia Anak
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">0 Bulan - 20 Bulan</a></li>
                    <li><a class="dropdown-item" href="#">21 Bulan - 40 Bulan</a></li>
                    <li><a class="dropdown-item" href="#">41 Bulan - 60 Bulan</a></li>
                    </ul>
                </div>
                <div class="grafik gc">
                <canvas id="gBBTB"></canvas>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#grafik-slide"
          data-bs-slide="prev"
        >
          <span class="" aria-hidden="true"
            ><img src="../../assets/img/left.png" alt="" class="img-fluid"
          /></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#grafik-slide"
          data-bs-slide="next"
        >
          <span class="" aria-hidden="true"
            ><img src="../../assets/img/right.png" alt="" class="img-fluid"
          /></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    name: "grafikcarouusel",
    mounted() {
    // Grafik Berat Badan per Usia
    const myGBB = document.getElementById('gBeratBadan').getContext('2d');
    const gBeratBadan = new Chart(myGBB, {
      type: 'bar',
      data: {
        labels: [
          '21 Bulan',
          '22 Bulan',
          '23 Bulan',
          '24 Bulan',
          '25 Bulan',
          '26 Bulan',
          '27 Bulan',
          '28 Bulan',
          '29 Bulan',
          '30 Bulan',
          '31 Bulan',
          '32 Bulan',
          '33 Bulan',
          '34 Bulan',
          '35 Bulan',
          '36 Bulan',
          '37 Bulan',
          '38 Bulan',
          '39 Bulan',
          '40 Bulan'],
        datasets: [{
          label: 'Resiko Lebih',
          data: [60, 25, 3, 5, 2, 3],
          backgroundColor: [
            '#044AFF'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Berat Badan Sangat Kurang',
          data: [15, 20, 3, 5, 2, 3],
          backgroundColor: [
            '#EB0000'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Berat Badan Kurang',
          data: [0, 25, 3, 5, 2, 3],
          backgroundColor: [
            '#FFF507'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Berat Badan Sangat Kurang',
          data: [25, 30, 3, 5, 2, 3],
          backgroundColor: [
            '#33FF00'
          ],
          barPercentage: 0.5,
        },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            align: 'middle'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            ticks: {
              callback: (value, index, values) => {
                console.log(values)
                return `${value} %`;
              }
            }
          },
          x: {
            stacked: true,
            grid: {
              lineWidth: 0,
            }
          }
        }
      }
    });

    // Grafik Tinggi Badan per Usia
    const myGTB = document.getElementById('gTinggiBadan').getContext('2d');
    const gTinggiBadan = new Chart(myGTB, {
      type: 'bar',
      data: {
        labels: [
          '21 Bulan',
          '22 Bulan',
          '23 Bulan',
          '24 Bulan',
          '25 Bulan',
          '26 Bulan',
          '27 Bulan',
          '28 Bulan',
          '29 Bulan',
          '30 Bulan',
          '31 Bulan',
          '32 Bulan',
          '33 Bulan',
          '34 Bulan',
          '35 Bulan',
          '36 Bulan',
          '37 Bulan',
          '38 Bulan',
          '39 Bulan',
          '40 Bulan'],
        datasets: [{
          label: 'Tinggi',
          data: [60, 25, 3, 5, 2, 3],
          backgroundColor: [
            '#044AFF'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Sangat Pendek',
          data: [15, 20, 3, 5, 2, 3],
          backgroundColor: [
            '#EB0000'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Pendek',
          data: [0, 25, 3, 5, 2, 3],
          backgroundColor: [
            '#FFF507'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Normal',
          data: [25, 30, 3, 5, 2, 3],
          backgroundColor: [
            '#33FF00'
          ],
          barPercentage: 0.5,
        },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            align: 'middle'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            ticks: {
              callback: (value, index, values) => {
                console.log(values)
                return `${value} %`;
              }
            }
          },
          x: {
            stacked: true,
            grid: {
              lineWidth: 0,
            }
          }
        }
      }
    });

    // Grafik Berat Badan per Tinggi Badan
    const myGBBTB = document.getElementById('gBBTB').getContext('2d');
    const gBBTB = new Chart(myGBBTB, {
      type: 'bar',
      data: {
        labels: [
          '21 Bulan',
          '22 Bulan',
          '23 Bulan',
          '24 Bulan',
          '25 Bulan',
          '26 Bulan',
          '27 Bulan',
          '28 Bulan',
          '29 Bulan',
          '30 Bulan',
          '31 Bulan',
          '32 Bulan',
          '33 Bulan',
          '34 Bulan',
          '35 Bulan',
          '36 Bulan',
          '37 Bulan',
          '38 Bulan',
          '39 Bulan',
          '40 Bulan'],
        datasets: [{
          label: 'Gizi Lebih',
          data: [60, 25, 3, 5, 2, 3],
          backgroundColor: [
            '#044AFF'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Gizi Sangat Buruk',
          data: [15, 20, 3, 5, 2, 3],
          backgroundColor: [
            '#EB0000'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Gizi Buruk',
          data: [0, 25, 3, 5, 2, 3],
          backgroundColor: [
            '#FFF507'
          ],
          barPercentage: 0.5,
        }, {
          label: 'Normal',
          data: [25, 30, 3, 5, 2, 3],
          backgroundColor: [
            '#33FF00'
          ],
          barPercentage: 0.5,
        },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            align: 'middle'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            stacked: true,
            ticks: {
              callback: (value, index, values) => {
                console.log(values)
                return `${value} %`;
              }
            }
          },
          x: {
            stacked: true,
            grid: {
              lineWidth: 0,
            }
          }
        }
      }
    });
    }
}
</script>
<style lang="">
    
</style>