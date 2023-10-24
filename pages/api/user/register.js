import { register } from "../../../services/user";

export default function handler(req, res) {
  try {
    if (typeof req.body !== "string") {
      req.body = JSON.stringify(req.body);
    }
    const newUser = register(JSON.parse(req.body));
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
