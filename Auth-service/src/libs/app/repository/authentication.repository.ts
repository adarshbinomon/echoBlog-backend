import { schema } from "../database";
const { User, Admin } = schema;

export default {
  userEmailExist: async (email: string) => {
    try {
      let response = await User.findOne({ email: email });
      return response;
    } catch (error) {
      console.log("error in authentication.repository.userEmailExist", error);
    }
  },

  createUser: async (data: any) => {
    let userData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      profilePicture: data.profilePicture,
      uid: data.uid,
      isGoogle: data.isGoogle
    };

    let response = await User.create(userData);
    if (response) {
      return { status: true, message: "user created!", response };
    } else {
      return { status: false, message: "user creation failed!" };
    }
  },

  findUser: async (email: string) => {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return { status: true, user: user };
      } else {
        return { status: false };
      }
    } catch (error) {
      console.log(error, "error while finding user");
    }
  },

  findAdmin: async(email:string)=>{
    try {
      const admin = await Admin.findOne({email: email})
      if(admin){
        return { status: true, user: admin}
      }
    } catch (error) {
      console.log(error,'error while finding Admin');
      
    }
  }
};
