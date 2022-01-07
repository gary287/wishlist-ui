import Model, { attr, belongsTo } from '@ember-data/model';

export default class ItemModel extends Model {
  @belongsTo('wishlist');
  @attr db_id;
  @attr title;
  @attr url;
  @attr wish_list_id;
  @attr created_at;
  @attr updated_at;
}
