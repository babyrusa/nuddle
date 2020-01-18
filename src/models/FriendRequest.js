import { UserGroup, Model } from 'radiks';

export default class FriendRequest extends Model {
    static className = 'FriendRequest';
    static schema = {
      // ...UserGroup.schema,
      sender: { type: String, required : true }, 
      recipient: {type: String, decrypted : true,  required : true },
      userGroupId : {type: String, decrypted : true,  required : true }
    };
}
