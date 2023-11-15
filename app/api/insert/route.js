import { dbConnect } from "../route";
const collection = await dbConnect("member");

export async function GET(req, res) {
  let data = await collection.find().toArray();
  
  return Response.json(data);
}


export async function POST(req, res) {
  let qData = await req.json();
  console.log(qData)
  await collection.insertOne({id: qData.id, password: qData.password})
  
  return Response.json("뭔가쓰였지롱");
}
