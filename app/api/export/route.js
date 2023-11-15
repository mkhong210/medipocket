import { dbConnect } from "../route";
const collection = await dbConnect("member");

export async function GET(req, res) {
  let data = await collection.find({id: "hehe", password: "wow"}).toArray();
  
  console.log(data);
  return Response.json(data);
}
