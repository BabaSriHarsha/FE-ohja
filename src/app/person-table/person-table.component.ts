import { DetailsSubmissionService } from '../shared/services/details-submission.service';
import { TabularDataService } from './../shared/services/tabular-data.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss'],
})
export class PersonTableComponent implements OnInit {
  @Input() personDetails: any = [];

  displayedColumns: string[] = [
    'name',
    'mobile',
    'address',
    'skills',
    'hobbies',
  ];

  constructor(private detailsService: DetailsSubmissionService) {}

  ngOnInit(): void {
    console.log(this.personDetails);
  }
}
