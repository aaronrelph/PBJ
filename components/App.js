import 'isomorphic-unfetch'

const api = 'https://rest.bandsintown.com/artists/';
const apiEvent = '/events?app_id=pbj';
let artist = 'kendrick lamar';
let endpoint = api + artist + apiEvent;
const tourDates = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => tourDates.push(...data))

export default () => (
  <div>
    <h2>This is the main area</h2>
    <ul>
      { tourDates.map(item => (
        <li key={item.id}>{ item.venue.city }</li>
      ))}
    </ul>
  </div>
)
