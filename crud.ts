import { title } from "node:process";
import { prisma } from "./lib/prisma.js";

async function run() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "jihat",
  //       email: "jihat@gmail.com",
  //     },
  //   });

  //   console.log("created user", createUser);

  // create post

  //   const cratePost = await prisma.post.create({
  //     data: {
  //       title: "this a title ",
  //       content: "this as a big conterne",
  //       authorId: 1,
  //     },
  //   });
  //   console.log(cratePost)

  // profile create

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "web dev at PH",
  //       userId: 2,
  //     },
  //   });
  //   console.log(createProfile);

  // user data

  // const user = await prisma.user.findMany();
  // console.log(user)

//   const updateUser = await prisma.profile.update({
//     where: {
//       userId: 1,
//     },
//     data: {
//       bio: "helo your ss",
//     },
//   });
//   console.log(updateUser);

// user deleted 

const userDeleted = await prisma.user.delete({
  where: {
    email: "jihat@gmail.com",
  },
});
console.log(userDeleted)
}

run();
