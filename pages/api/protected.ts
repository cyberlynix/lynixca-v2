import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next"
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    /* Check if the method is valid */
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed.'});
    }

    /* Check if user is authenticated */
    const session = await getServerSession(req, res, authOptions)

    if(!session) {
        return res.status(405).json({message: 'Unauthorized.'});
    }

    return res.status(200).json({message: "This API route is protected. Hello from LynixAPI!"})
}

export default handler;