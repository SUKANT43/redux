import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const user = await prisma.user.create({
        data: {
            name: "sukant c",
            email: "sukantz@gmail.com"
        }
    });
    console.log(user);
}
main().then(async () => {
    await prisma.$disconnect();
}).catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
});
