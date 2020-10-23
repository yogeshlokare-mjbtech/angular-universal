import { environment } from 'src/environments/environment';

export class RestApi{

    public readonly API_URL = `${environment.baseUrl}`;
    public readonly FACEBOOK_ID = "204342980668263";

    public readonly AUTH_URL = `${this.API_URL}/api/auth`;
    public readonly PREVIEW_TOUR_API = `${this.AUTH_URL}/trip/tour`;
    public readonly TOUR_PROFILE_PIC = `${this.API_URL}/api/auth/tourpicture?filename=`;
    public readonly LANDING_PAGE = `${environment.CMS_APP_URL}/#/trippublish/preview-publish`;

}