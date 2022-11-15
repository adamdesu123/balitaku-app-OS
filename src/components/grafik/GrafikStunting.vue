<template lang="">
    <div class="row i-grafik">
      <div class="s-grafik g-stunting-1">
        <h3>Grafik Anak terkena Stunting</h3>
        <div class="grafik">
          <canvas id="myChart" height="auto"></canvas>
        </div>
      </div>
      <div class="s-grafik g-stunting-2">
        <h3>Top 10 Daerah Terkena Stunting</h3>
        <div class="grafik">
          <canvas id="pieChart" height="auto"></canvas>
        </div>
      </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
  name: "grafikstunting",
  mounted() {
    // Grafik anak terkena stunting
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          data: [12, 19, 10, 5, 8, 9],
          backgroundColor: [
            'rgba(70, 205, 24)'
          ],
          borderWidth: 1,
          barPercentage: 0.5,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
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

    // Top 10 daerah terkena stunting
    const data = {
      labels: [
        'Gembira',
        'Soalagogo',
        'Anggrek',
        'Setia',
        'Melati',
        'Cemara',
        'Mawar',
        'Bahagia',
        'Bersih',
        'Tadika Mesra'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [102, 100, 102, 102, 102, 100, 50, 30, 50, 5],
        backgroundColor: [
          '#7C3B47',
          '#F8992B',
          '#3EC15B',
          '#FFE600',
          '#F21212',
          '#C13E9C',
          '#4B0404',
          '#28A7A7',
          '#16009D',
          '#FF1C52',

        ],
        hoverOffset: 4,
      }]
    };

    const counter = {
      id: 'counter',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText('Total: 10000', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        plugins: {
          legend: {
            position: 'right',
            align: 'center',
            labels: {
              padding: 20
            }

          },
          counter: {
            fontColor: '#111',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        },
      },
      plugins: [counter]
    };

    const pieChart = new Chart(
      document.getElementById('pieChart'),
      config
    );
  }
}
</script>
<style src="../../assets/css/DashStyle.css">

</style>