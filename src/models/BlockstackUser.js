import { User } from 'radiks';

// For example I want to add a public name on my user model
export default class BlockstackUser extends User {
  static schema = {
    ...User.schema,
    friends: {
      type: Array,
      // decrypted: true,
    },
  };
}