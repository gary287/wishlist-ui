import Model, { attr } from '@ember-data/model';

export default class WishlistModel extends Model {
  @attr db_id;
  @attr title;
  @attr created_at;
  @attr updated_at;
  @attr shared_id;
}
