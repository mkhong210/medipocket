export async function dbConnect(str) {
  const { MongoClient } = require('mongodb');
  const client = await MongoClient.connect('mongodb+srv://ghdalsrud210:WqaLX8CCjiSHHtqF@cluster0.hlmhed7.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db("medipocket");
  const collection = db.collection(str);
  console.log("우왕 연결됐당")
  return collection;
}

//데이터 가져오기


// export async function GET(req, res) {
//   let qData = Object.fromEntries(req.nextURL.searchParams);
// }

//get, delete body 값을 받을수가 없어용
