import { Model } from 'radiks';

export default class FriendRequest extends Model {
    static className = 'FriendRequest';
    static schema = {
      sender: { type: String, decrypted : true, required : true }, 
      recipient: {type: String, decrypted : true,  required : true },
      userGroupId : {type: String, decrypted : true,  required : true }
    };
}
