import Model, { attr, hasMany } from '@ember-data/model';

export default class WishlistModel extends Model {
  @hasMany('item') items;
  @attr db_id;
  @attr title;
  @attr created_at;
  @attr updated_at;
  @attr shared_id;
}
