import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;
  data1: any;
  value:number=34
  value1:number=45
  selectedDate: Date = new Date();
  

    options1: any;


    options: any;
    myForm!: FormGroup;
    myForm1!:FormGroup;
    myForm2!:FormGroup;
    myForm3!:FormGroup;
    myForm4!:FormGroup;
    myForm5!:FormGroup;
    myForm6!:FormGroup;
    


    
    

  
    ngOnInit() {
      this.polarchart()
      this.forms()
      this.linechart()
       

}



polarchart(){
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
  
  this.data = {
      datasets: [
          {
              data: [11, 16, 7, 3, 14],
              backgroundColor: [
                  documentStyle.getPropertyValue('--red-500'),
                  documentStyle.getPropertyValue('--green-500'),
                  documentStyle.getPropertyValue('--yellow-500'),
                  documentStyle.getPropertyValue('--bluegray-500'),
                  documentStyle.getPropertyValue('--blue-500'),
              ],
              label: 'My dataset'
          }
      ],
      labels: ['Jan', 'Feb', 'March', 'April', 'June']
  };
  
  this.options = {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          r: {
              grid: {
                  color: surfaceBorder
              }
          }
      }
  };
}

forms(){
    this.myForm = new FormGroup({
        checked: new FormControl<boolean | null>(null)
    });
    this.myForm1 = new FormGroup({
        checked: new FormControl<boolean | null>(null)
    });
    this.myForm2 = new FormGroup({
        checked: new FormControl<boolean | null>(null)
    });
    this.myForm3= new FormGroup({
        checked: new FormControl<boolean | null>(null)
    });
    this.myForm4= new FormGroup({
        checked: new FormControl<boolean | null>(null)
    });
    this.myForm5= new FormGroup({
        checked: new FormControl<boolean | null>(null)
    });
    this.myForm6= new FormGroup({
        checked: new FormControl<boolean | null>(null)
    });
    
    
}
linechart(){
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: '2021',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [65, 59, 80, 81, 56, 55, 10]
                },
                {
                    label: '2022',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        
        this.options1 = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };
    }



}



