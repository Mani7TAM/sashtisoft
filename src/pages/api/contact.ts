import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Inquiry = {
  name: string;
  email: string;
  message: string;
  timestamp: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, message } = req.body as Partial<Inquiry>;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const entry: Inquiry = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  const filePath = path.join(process.cwd(), "inquiries.json");
  let data: Inquiry[] = [];
  try {
    if (fs.existsSync(filePath)) {
      const file = fs.readFileSync(filePath, "utf8");
      data = JSON.parse(file);
      if (!Array.isArray(data)) data = [];
    }
  } catch (err) {
    console.error(err);
  }

  data.push(entry);

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to store inquiry" });
  }

  return res.status(200).json({ message: "Inquiry received" });
}
