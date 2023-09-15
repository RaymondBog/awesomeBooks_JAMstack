const MongoClient = require('mongodb').MongoClient;

async function main(args) {
    const uri = process.env['DATABASE_URL'];
    let client = new MongoClient(uri);

    let newTitle = args.title;
    let newAuthor = args.author;
    try {
        await client.connect();
        await client.db("booksDb").collection("book_collection").insertOne({title: newTitle,author:newAuthor});
        console.log(`added ${newTitle} by ${newAuthor} to database.`);
        return { ok: true };
    } catch (e) {
        console.error(e);
        return {
            "body": { "error": "There was a problem adding the book to the database." },
            "statusCode": 400
        };
    } finally {
        await client.close();
    }
}

module.exports.main = main;