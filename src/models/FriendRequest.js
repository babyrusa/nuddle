import { UserGroup } from 'radiks';

export default class FriendRequest extends UserGroup {
    static className = 'FriendRequest';
    static schema = {
      ...UserGroup.schema,
      sender: { type: String, required : true }, 
      // recipient: {type: String,  required : true },
    };
    static defaults = {
    };
}
