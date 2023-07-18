// @ts-ignore
import {prisma} from "@/db";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return res.status(401).json({ message: 'Unauthorized.' });
    }
    return res.status(405).json({ message: 'Method not allowed.' });
}