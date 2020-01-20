import { Model, User } from "radiks";

export default class Post extends Model {
  static className = "Post";
  static schema = {
    username : {
      type: String,
      required : true
    },
    caption: {
      type: String,
      decrypted : true,
      // required : true
    },
    byteArray: {
      type: ArrayBuffer,
      // decrypted : true
      // required : true
    },
    userGroupId: {
      type: String,
      decrypted: true,
      required : true
    }

  };
  static defaults = {
  }
  static async createPost(caption, byteArray){
    const post = new Post({
      username : User.currentUser()._id,
      caption : caption,
      byteArray : byteArray,
      // userGroupId : userGroupId
    })
    await post.save()
    return post;
  }
}