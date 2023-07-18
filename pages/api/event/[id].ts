// @ts-ignore
import {prisma} from "@/db";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { id } = req.query;
            if (id) {
                const event = await prisma.event.findUnique({
                    where: {
                        id: id
                    }
                })

                if(!event)
                    return res.status(404).json({ message: 'Event not found.' });

                return res.status(200).json(event);
            }
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error.' });
        }
    }
    return res.status(405).json({ message: 'Method not allowed.' });
}