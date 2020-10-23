import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TripService } from './services/trip.service';
import { RestApi } from './models/rest-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uniexample';
  tourPreview:any;
  api =  new RestApi();

  constructor(
    private route: ActivatedRoute,
    private metaTagService: Meta,
    public tripService:TripService
  ) { }

  ngOnInit() {
    let tourId = this.route.snapshot.queryParams['tourId'];
    if(tourId == null && tourId == undefined){
      tourId = 1606;
    }
    /** Getting TOUR details */
    this.getTourDetails(tourId);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Yogesh Lokare' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'article' },
      { charset: 'UTF-8' }
    ]);
  }

  /** Method TOUR details */
  getTourDetails(tourId: number) {
    this.tripService.getTourByTourId(tourId).subscribe(data => {
      if (data && data.status == "SUCCESS") {
        this.tourPreview = data.returnObject;
        let photo = "https://www.experienceamerica.com/wp-content/uploads/2020/08/Rectangle-2491.jpg";
        if (this.tourPreview.bannerImage != null && this.tourPreview.bannerImage != '') {
          photo = `${this.api.TOUR_PROFILE_PIC}${this.tourPreview.bannerImage}`;
        }
        this.metaTagService.addTags([
          { property: 'og:title', content: this.tourPreview.name },
          { property: 'og:url', content: `${this.api.LANDING_PAGE}?tourId=${tourId}`},
          { property: 'og:image', content: photo},
          { property: 'fb:app_id', content: this.api.FACEBOOK_ID },
        ]);
      }else{

      }
    });
  }

}
