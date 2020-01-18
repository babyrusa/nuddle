import { Model, UserGroup } from "radiks";

export default class Message extends Model {
  static className = "Message";
  static schema = {
    content: {
      type: String
    },
    type: {
      type: String //text, 'image','video','expirable-image'
    }
    duration : {
      type : Number //seconds
    }
    userGroupId: {
      type: String,
      decrypted: true
    }
  };
}
export default class PrivateGroupMessage extends UserGroup {
  static schema = {
    ...UserGroup.schema,
    description: {
      type: String
    },
};
}