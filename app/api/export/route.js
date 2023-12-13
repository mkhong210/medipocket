import { dbConnect } from "../route";
const collection = await dbConnect("prescription");

export async function GET(req, res) {
  let data = await collection.find().toArray();
  
  console.log(data);
  return Response.json(data);
}
