import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterceptorService } from '../interceptor.service';

@Component({
  selector: 'app-schema-details-properties',
  templateUrl: './schema-details-properties.component.html',
  styleUrls: ['./schema-details-properties.component.scss'],
})
export class SchemaDetailsPropertiesComponent implements OnInit {
  property_details: any;
  pr_name: '';
  theme: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InterceptorService
  ) {
    this.theme = localStorage.getItem('theme');
    this.property_details = {};
    this.pr_name = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.showPropertyDetail();
  }
  showPropertyDetail() {
    this.service.get_api_headersLD(this.pr_name).then(
      (data) => {
        let response = data['@graph'][0];
        this.property_details = {
          label: response['rdfs:label'],
          comment: response['rdfs:comment'],
          rdfs_type: response['@type'][0].split(':')[1],
          types: [],
          domains: [],
        };
        for (let range of localStorage.getItem('theme') === 'adex'
          ? response['adex:rangeIncludes']
          : response['iudx:rangeIncludes']) {
          this.property_details.types.push(range['@id'].split(':')[1]);
        }
        for (let domain of localStorage.getItem('theme') === 'adex'
          ? response['adex:domainIncludes']
          : response['iudx:domainIncludes']) {
          this.property_details.domains.push(domain['@id'].split(':')[1]);
        }
      },
      (error) => {
        if (error.status == 404) this.router.navigate(['/404/not-found']);
      }
    );
  }
}
