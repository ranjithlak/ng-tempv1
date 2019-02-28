import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashcardComponent } from './dashcard/dashcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { MatListModule } from '@angular/material/list';
import {CdkTableModule} from '@angular/cdk/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { Ng2OdometerModule } from 'ng2-odometer';
import { SharePriceComponent } from './share-price/share-price.component';
import { RoundProgressbarComponent } from './round-progressbar/round-progressbar.component'; 
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SalesListComponent } from './sales-list/sales-list.component';
import { D3UsaComponent } from './d3-usa/d3-usa.component';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    Ng2OdometerModule,
    RoundProgressModule,
    MatMenuModule,
    MatChipsModule,
    MatTableModule,
    MatProgressBarModule,
    FormsModule,
    CdkTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  declarations: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
     
      PricingPlanComponent,
     
      SharePriceComponent,
      RoundProgressbarComponent,
      SalesListComponent,
      D3UsaComponent,
      TableComponent,
     
    
      ],
  exports: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
     
      PricingPlanComponent,
     
      SharePriceComponent,
      RoundProgressbarComponent,
      SalesListComponent,
      D3UsaComponent,
     
  ]
})
export class DashboardWidgetModule { }
