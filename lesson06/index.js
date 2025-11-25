const {MongoClient} = require('mongodb');

const url = "mongodb+srv://seifelboghdady_db_user:ArtRrWJnXOloeP1a@cluster0.747mnte.mongodb.net/?appName=Cluster0";

const client = new MongoClient(url);

async function main(){
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db('Seif')
    const collection = db.collection('course')

    await collection.insertOne({
        title : "new course",
        price : 2000
    })

    const data = await collection.find().toArray();
    console.log("data:", data)
}

main();