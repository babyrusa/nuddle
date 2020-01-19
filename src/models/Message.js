import { Model, UserGroup } from "radiks";

export default class Message extends Model {
  static className = "Message";
  static schema = {
    content: {
      type: String,
      required : true
    },
    type: {
      type: String, //text, 'image','video','expirable-image'
      required : true
    }
    duration : {
      type : Number //seconds
    }
    userGroupId: {
      type: String,
      decrypted: true,
      required : true
    }
  };

  static async sendTextMsg(txt , userGroupId){
    const msg = new Message({
      content : txt,
      type : 'text',
      userGroupId : userGroupId
    })
    await msg.save()
  }

  static async sendPhotoMsg(binary , userGroupId){
    const msg = new Message({
      content : binary,
      type : 'photo',
      userGroupId : userGroupId
    })
    await msg.save()
  }

  static async sendExpirablePhotoMsg(binary, duration, userGroupId){
    const msg = new Message({
      content : binary,
      type : 'expirable-photo',
      duration: duration
      userGroupId : userGroupId
    })
    await msg.save()
  }
}
export default class PrivateGroupMessage extends UserGroup {
  static schema = {
    ...UserGroup.schema,
    description: {
      type: String
    },
};
}