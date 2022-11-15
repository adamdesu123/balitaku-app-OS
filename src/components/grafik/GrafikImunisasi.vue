<template lang="">
    <div class="row i-grafik g-5 mt-0">
        <div class="s-grafik g-persentasi">
        <h3>Persentasi Imunisasi Wajib 2022</h3>
        <div class="row justify-content-center align-items-center gap-1">
          <div class="col-1 l-Chart">
            <div class="col-12 text-center mb-3">Hepatitis B</div>
            <canvas id="myChart0"></canvas>
          </div>
          <div class="garis"></div>
          <div class=" col-1 l-Chart">
            <div class="col-12 text-center mb-3">Polio</div>
            <canvas id="myChart1"></canvas>
          </div>
          <div class="garis"></div>
          <div class="col-1 l-Chart">
            <div class="col-12 text-center mb-3">BCG</div>
            <canvas id="myChart2"></canvas>
          </div>
          <div class="garis"></div>
          <div class="col-1 l-Chart">
            <div class="col-12 text-center mt-mns">Campak Rubella</div>
            <canvas id="myChart3"></canvas>
          </div>
          <div class="garis"></div>
          <div class="col-1 l-Chart">
            <div class="col-12 text-center mb-3">DPT-HB-HiB</div>
            <canvas id="myChart4"></canvas>
          </div>
          <div class="garis"></div>
          <div class="col-1 l-Chart">
            <div class="col-12 text-center mb-3">Campak</div>
            <canvas id="myChart5"></canvas>
          </div>
          <div class="garis hdn"></div>
        </div>
      </div>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';

export default {
    name: "grafikimunisasi",
    mounted() {
            // Persentase Imun Wajib
    // DataP0
    const dataP0 = {
      labels: [
        'Stanting',
        'NULL'
      ],
      datasets: [{
        label: 'Data Stanting',
        data: [25, 75],
        backgroundColor: [
          '#F84949',
          '#C4C4C4'
        ],
        hoverOffset: 4,
        cutout: '85%',
        borderRadius: 20,
        offset: -5,
      }]
    };

    const counterP0 = {
      id: 'counterP0',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText(25 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const configP0 = {
      type: 'doughnut',
      data: dataP0,
      options: {
        plugins: {
          legend: {
            display: false

          },
          counterP0: {
            fontColor: '#28BEC5',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        }
      },
      plugins: [counterP0]
    };

    const myChart0 = new Chart(
      document.getElementById('myChart0'),
      configP0
    );


    // Data 1
    const dataP1 = {
      labels: [
        'Stanting',
        'NULL'
      ],
      datasets: [{
        label: 'Data Stanting',
        data: [50, 50],
        backgroundColor: [
          '#F8992B',
          '#C4C4C4'
        ],
        hoverOffset: 4,
        cutout: '85%',
        borderRadius: 20,
        offset: -5,
      }]
    };

    const counterP1 = {
      id: 'counterP1',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText(50 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const configP1 = {
      type: 'doughnut',
      data: dataP1,
      options: {
        plugins: {
          legend: {
            display: false

          },
          counterP1: {
            fontColor: '#28BEC5',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        }
      },
      plugins: [counterP1]
    };

    const myChart1 = new Chart(
      document.getElementById('myChart1'),
      configP1
    );

    // Data 2
    const dataP2 = {
      labels: [
        'Stanting',
        'NULL'
      ],
      datasets: [{
        label: 'Data Stanting',
        data: [35, 65],
        backgroundColor: [
          '#F8992B',
          '#C4C4C4'
        ],
        hoverOffset: 4,
        cutout: '85%',
        borderRadius: 20,
        offset: -5,
      }]
    };

    const counterP2 = {
      id: 'counterP2',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText(35 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const configP2 = {
      type: 'doughnut',
      data: dataP2,
      options: {
        plugins: {
          legend: {
            display: false

          },
          counterP2: {
            fontColor: '#28BEC5',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        }
      },
      plugins: [counterP2]
    };

    const myChart2 = new Chart(
      document.getElementById('myChart2'),
      configP2
    );

    // Data 3
    const dataP3 = {
      labels: [
        'Stanting',
        'NULL'
      ],
      datasets: [{
        label: 'Data Stanting',
        data: [70, 30],
        backgroundColor: [
          '#28C55D',
          '#C4C4C4'
        ],
        hoverOffset: 4,
        cutout: '85%',
        borderRadius: 20,
        offset: -5,
      }]
    };

    const counterP3 = {
      id: 'counterP3',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText(30 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const configP3 = {
      type: 'doughnut',
      data: dataP3,
      options: {
        plugins: {
          legend: {
            display: false

          },
          counterP3: {
            fontColor: '#28BEC5',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        }
      },
      plugins: [counterP3]
    };

    const myChart3 = new Chart(
      document.getElementById('myChart3'),
      configP3
    );

    // Data 4
    const dataP4 = {
      labels: [
        'Stanting',
        'NULL'
      ],
      datasets: [{
        label: 'Data Stanting',
        data: [90, 10],
        backgroundColor: [
          '#28C55D',
          '#C4C4C4'
        ],
        hoverOffset: 4,
        cutout: '85%',
        borderRadius: 20,
        offset: -5,
      }]
    };

    const counterP4 = {
      id: 'counterP4',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText(90 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const configP4 = {
      type: 'doughnut',
      data: dataP4,
      options: {
        plugins: {
          legend: {
            display: false

          },
          counterP4: {
            fontColor: '#28BEC5',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        }
      },
      plugins: [counterP4]
    };

    const myChart4 = new Chart(
      document.getElementById('myChart4'),
      configP4
    );

    // Data 5
    const dataP5 = {
      labels: [
        'Stanting',
        'NULL'
      ],
      datasets: [{
        label: 'Data Stanting',
        data: [90, 10],
        backgroundColor: [
          '#28C55D',
          '#C4C4C4'
        ],
        hoverOffset: 4,
        cutout: '85%',
        borderRadius: 20,
        offset: -5,
      }]
    };

    const counterP5 = {
      id: 'counterP5',
      beforeDraw(chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = options.fontSize + 'em ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText(90 + '%', width / 2, (height / 2) + (options.fontSize * 0.34));
      }
    };

    const configP5 = {
      type: 'doughnut',
      data: dataP5,
      options: {
        plugins: {
          legend: {
            display: false

          },
          counterP5: {
            fontColor: '#28BEC5',
            fontSize: 1,
            fontFamily: 'sans-serif'
          }
        }
      },
      plugins: [counterP5]
    };

    const myChart5 = new Chart(
      document.getElementById('myChart5'),
      configP5
    );
    }
}
</script>
<style>
.persentase-box {
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  flex-wrap: wrap;
}

.l-Chart {
  /* background: red; */
  min-width: 150px;

}

.mt-mns{
  margin-top: -15%;
}

.garis {
  flex: .1;
  background-color: #BB7EF9;
  height: 2px;
  border-radius: 4px;
}

.garis.hdn{
    background: #fff;
}
</style>