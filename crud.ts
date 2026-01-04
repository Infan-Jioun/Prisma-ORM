import { prisma } from "./lib/prisma";

async function run() {
    const createUser = await prisma.user.create({
        data: {
            name: "Jioun Rahman",
            email: "jiounrahman@gmail.com",

        }
    })
    console.log("Create User", createUser);
}
run();