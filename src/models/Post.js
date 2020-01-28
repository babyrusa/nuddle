import { Model, User } from "radiks";

export default class Post extends Model {
  static className = "Post";
  static schema = {
    // username : {
    //   type: String,
    //   decrypted : true,
    //   required : true
    // },
    caption: {
      type: String,
      decrypted : true,
      required : true
    },
    byteArray: {
      type: ArrayBuffer,
      // decrypted : true
      // required : true
    },
    base64: {
      type: String,
      decrypted : true,
      required : true
    },
    // address: {
    //   type: String, //Gaia address
    //   decrypted : true,
    //   required : true
    // }
    // userGroupId: {
    //   type: String,
    //   decrypted: true,
    //   required : true
    // }

  };
  static defaults = {
  }
  static async createPost(caption, base64){
    const post = new Post({
      // username : User.currentUser()._id,
      caption : caption,
      base64 : base64,
      // userGroupId : userGroupId
    })
    await post.save()
    return post;
  }
}