import db from '../../../db.json'


export default function handler(req, res) {
    if (req.method === 'GET') {
        let result = db
        res.status(200).send({ "data": result.Products[req.query.id] })
    }
}