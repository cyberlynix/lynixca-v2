import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from "@/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const events = await prisma.event.findMany();
            return res.status(200).json(events);
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error.' });
        }
    }
    return res.status(405).json({ message: 'Method not allowed.' });
}