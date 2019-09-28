import { HorizontalBar } from 'vue-chartjs';
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

@Component({
  extends: HorizontalBar,
})
export default class RatingChart extends mixins(HorizontalBar) {
  @Prop({ default: () => ({}) }) public rating!: any;

  get labels() {
    return this.rating ? Object.keys(this.rating) : [];
  }

  get values() {
    return this.rating ? Object.values(this.rating) : [];
  }

  public mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: 'rgba(0, 136, 187, 0.15)',
            borderColor: '#0088bb',
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
          yAxes: [
            {
              ticks: {
                fontFamily: 'Open Sans',
                fontSize: 14,
              },
              scaleLabel: {
                display: true,
                fontFamily: 'Open Sans',
                labelString: 'Оценка',
              },
            },
          ],
          xAxes: [
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
    // console.log(this.$data._chart);
  }
}
