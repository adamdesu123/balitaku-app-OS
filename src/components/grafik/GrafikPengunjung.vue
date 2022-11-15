<template lang="">
    <div class="row i-grafik">
      <div class="s-grafik g-pengunjung-1">
        <h3>Grafik Anak Mengunjungi Posyandu</h3>
        <div class="grafik">
          <canvas id="gAMPosyandu" height="auto"></canvas>
        </div>
      </div>
      <div class="s-grafik g-pengunjung-2">
        <h3>Top 5 Jumlah Pengunjung Posyandu</h3>
        <div class="grafik">
          <canvas id="pieChart2" height="auto"></canvas>
        </div>
      </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    name: "grafikpengunjung",
    mounted() {
    // Grafik anak mengunjungi posyandu
    const gAnakPosyandu = document.getElementById('gAMPosyandu');
    const gAMPosyandu = new Chart(gAnakPosyandu, {
      type: 'bar',
      data: {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'],
        datasets: [{
          data: [12, 19, 10, 5, 8, 9, 38],
          backgroundColor: [
            '#D27404'
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

    // Top 5 jumlah pengunjung posyandu
    const dataJPP = {
      labels: [
        'Gembira',
        'Soalagogo',
        'Anggrek',
        'Setia',
        'Melati',
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [200, 150, 100, 50, 30],
        backgroundColor: [
          '#28A7A7',
          '#16009D',
          '#3EC15B',
          '#FFE600',
          '#F21212',

        ],
        hoverOffset: 4,
      }]
    };

    const counter2 = {
      id: 'counter2',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText('Total: 10000', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const configJPP = {
      type: 'doughnut',
      data: dataJPP,
      options: {
        plugins: {
          legend: {
            position: 'right',
            align: 'center',
            labels: {
              padding: 20
            }

          },
          counter2: {
            fontColor: '#333',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        },
      },
      plugins: [counter2]
    };

    const pieChart2 = new Chart(
      document.getElementById('pieChart2'),
      configJPP
    );

  }
}
</script>
<style lang="">
    
</style>