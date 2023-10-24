import { login } from "../../../services/user";

export default function handler(req, res) {
  try {
    if (typeof req.body !== "string") {
      req.body = JSON.stringify(req.body);
    }

    const user = login(JSON.parse(req.body));
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
