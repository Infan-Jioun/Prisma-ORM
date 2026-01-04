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
    const createPost = await prisma.post.create({
        data: {

            title: "This title ",
            content: "This Content",
            isPublished: true,
            authorId: 1

        }
    })
    console.log("Create Post" , createPost);
}
run();