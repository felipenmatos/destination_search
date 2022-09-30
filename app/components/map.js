import Component from '@glimmer/component';
import ENV from 'destinations/config/environment';

export default class MapComponent extends Component {
  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
