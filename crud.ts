import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Jioun Rahman",
    //         email: "jiounrahman@gmail.com",

    //     }
    // })
    // // console.log("Create User", createUser);

    // post 
    // const createPost = await prisma.post.create({
    //     data: {

    //         title: "This title ",
    //         content: "This Content",
    //         isPublished: true,
    //         authorId: 1

    //     }
    // })
    // console.log("Create Post" , createPost);
    // Profile 

    // const createProfile = await prisma.profile.create({
    //     data : {
    //       userId : 1,
    //       bio : "Next Level",
    //       dob : "2003"
    //     }
    // })
    // console.log("CreateProfile" , createProfile);
   //  retrive All user 
    const users = await prisma.user.findMany({
        // include: {
        //     posts: true,
        //     profile: true
        // }
        select : {
            posts : true,
            profile : true
        }
    })
     console.log(users);
    // console.dir(users, { depth: Infinity })

    // update 
    // const updateUser = await prisma.user.update({
    //      where : {
    //          id : 1
    //      },
    //      data : {
    //         name : "Rahman Infan"
    //      }
    // })
    // console.log(updateUser);
//       const deleteUser = await prisma.user.update({
//          where : {
//              email : "jiounrahman@gmail.com"
//          },
//   data  : {

//   }
//     })
//     console.log(deleteUser);
const upsertUser = await prisma.user.upsert({
  where: {
    email: 'infanjiounrahmangmail.com',
  },
  update: {
    name: 'Viola the Magnificent2',
  },
  create: {
    email: 'infanjiounrahmangmail.com',
    name: 'Viola the Magnificent',
  },
})
console.log(upsertUser);
}


run();