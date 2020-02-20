import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-horizontal-bar',
  templateUrl: './graphic-horizontal-bar.component.html',
  styleUrls: ['./graphic-horizontal-bar.component.css']
})
export class GraphicHorizontalBarComponent implements OnDestroy {

  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     'name': 'Game 1',
  //     'value': 20
  //   },
  //   {
  //     'name': 'Game 2',
  //     'value': 25
  //   },
  //   {
  //     'name': 'Game 3',
  //     'value': 15
  //   },
  //   {
  //     'name': 'Game 4',
  //     'value': 30
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  // interval;

  constructor() {

    // this.interval = setInterval( () => {

    //   const newResults = [...this.results];
    //   for ( let i in newResults ) {
    //     newResults[i].value = Math.round( Math.random() * 500 );
    //   }

    //   this.results = [...newResults];
    // }, 1500 );

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

}
