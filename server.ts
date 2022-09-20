import { PrismaClient } from "@prisma/client";

const getUser = (email?: string) => {
    const prisma = new PrismaClient();
    prisma.user.findUnique({
        where: {
            email,
        },
        include: {
            confessions: true,
            replies: true,

        },
    });

}

export default getUser;