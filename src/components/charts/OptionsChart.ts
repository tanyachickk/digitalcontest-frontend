import { Bar } from 'vue-chartjs';
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

@Component({
  extends: Bar,
})
export default class OptionsChart extends mixins(Bar) {
  @Prop({ default: () => ({}) }) public options!: any;

  get labels() {
    return this.options ? Object.keys(this.options) : [];
  }

  get values() {
    return this.options ? Object.values(this.options) : [];
  }

  public mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: 'rgba(25, 136, 255, 0.15)',
            borderColor: '#349cec',
            borderWidth: 2,
            data: this.values,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontFamily: 'Open Sans',
                fontSize: 14,
              },
              scaleLabel: {
                display: true,
                fontFamily: 'Open Sans',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontFamily: 'Open Sans',
                fontSize: 14,
                stepSize: 1,
                min: 0,
              },
              scaleLabel: {
                display: true,
                fontFamily: 'Open Sans',
                labelString: 'Количество проголосовавших',
              },
            },
          ],
        },
      },
    );
  }
}
