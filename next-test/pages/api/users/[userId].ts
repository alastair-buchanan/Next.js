
import {NextApiRequest, NextApiResponse} from "next";
import {Data} from "../../../components/UserTable";
import {userData} from "../../../utils/userData";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { userId } = req.query
    let user = userData.filter(user => user.id.toString() == userId)
    res.status(200).json({users: user})
}