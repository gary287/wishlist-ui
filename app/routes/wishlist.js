import Route from '@ember/routing/route';

export default class WishlistRoute extends Route {
  model(params) {
    let url = `https://pacific-earth-94052.herokuapp.com/wish_lists/${params.id}`;
    return fetch(url).then((response) => response.json());
  }
}
