<template lang="">
    <div class="row i-grafik">
      <div class="s-grafik g-jumlah-1">
        <h3>Grafik Jumlah Kader</h3>
        <div class="grafik">
          <canvas id="gJumlahKader" height="auto"></canvas>
        </div>
      </div>
      <div class="s-grafik g-jumlah-2">
        <h3>Grafik Jumlah Posyandu</h3>
        <div class="grafik">
          <canvas id="gJumlahPosyandu" height="auto"></canvas>
        </div>
      </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    name: "grafikjumlah",
    mounted() {
    // Grafik jumlah kader
    const gKader = document.getElementById('gJumlahKader');
    const gJumlahKader = new Chart(gKader, {
      type: 'bar',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          data: [12, 19, 10, 5, 8, 9],
          backgroundColor: [
            '#1713B2'
          ],
          borderWidth: 1,
          barPercentage: 0.5,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            grid: {
              lineWidth: 0,
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    // Grafik jumlah posyandu
    const gPosyandu = document.getElementById('gJumlahPosyandu');
    const gJumlahPosyandu = new Chart(gPosyandu, {
      type: 'bar',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          data: [12, 19, 10, 5, 8, 9],
          backgroundColor: [
            '#FE2062'
          ],
          borderWidth: 1,
          barPercentage: 0.5,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            grid: {
              lineWidth: 0,
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    }
}
</script>
<style lang="">
    
</style>