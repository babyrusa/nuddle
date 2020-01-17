import { UserGroup } from 'radiks';

export default class FriendRequest extends UserGroup {
    static className = 'FriendRequest';
    static schema = {
      ...UserGroup.schema,
      sender: { type: String, required : true }, 
      recipient: {type: String, decrypted : true,  required : true },
    };
    static defaults = {
    };
}
