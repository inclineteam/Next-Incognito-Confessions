import { prisma } from "./prisma";

const getUser = async ( email : string ) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
        include: {
            confessions: true,
        },
    });
    return user

}

const getConfessions = async () => {
    const confessions = await prisma.confession.findMany();
    return confessions
}

const getReactions = async ( confessionId : number ) => {
    const reactions = await prisma.reactions.findMany({
        where: {
            confessionId: confessionId,
        },
    });
    return reactions
}

const createConfession = async ( title : string, content: string , userId : string ) => {
    const confession = await prisma.confession.create({
        data: {
            title: title,
            content: content,
            reacts: 0,
            author: {
                connect: {
                    id: userId,
                },
            }
        },
    });
    return confession
}

const deleteConfession = async ( confessionId : number ) => {
    const confession = await prisma.confession.delete({
        where: {
            id: confessionId,
        },
    });
    return confession
}

const editConfession = async ( confessionId : number, title : string, content: string ) => {
    const confession = await prisma.confession.update({
        where: {
            id: confessionId,
        },
        data: {
            title: title,
            content: content,
        },
    });
    return confession
}


const getHandler = () => {
    return {
        getUser,
        getConfessions,
        getReactions,
        createConfession,
        deleteConfession,
        editConfession,
    }
}

export default getHandler