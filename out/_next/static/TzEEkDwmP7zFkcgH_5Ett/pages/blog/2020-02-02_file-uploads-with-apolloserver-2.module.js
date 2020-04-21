(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"8JlA":function(e,t,n){n.r(t),n.d(t,"default",(function(){return m}));var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),l=n.n(o),s=n("7ljp"),i=n("BIUn"),p=(n("NO8M"),n("hZ7m")),b=(l.a.createElement,{title:"Handling File Uploads with Apollo Server 2.0.",__filename:"2020-02-02_file-uploads-with-apolloserver-2.md",__url:"pages/blog/2020-02-02_file-uploads-with-apolloserver-2.md",date:"2020-02-02",layout:"bloglayout",description:"A comprehensive guide on how to upload files with Apollo-server 2.0 and Mongodb..",imageUrl:"/images/blog/file-uploads-with-apolloserver-2/thumbnail.png",tags:["graphql","nodejs","upload"]}),c={},u=e=>{var{children:t}=e;return Object(i.a)(Object.assign({},b,{children:t}))};function m(e){var{components:t}=e,n=Object(r.a)(e,["components"]);return Object(s.b)(u,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/file-uploads-with-apolloserver-2/thumbnail.png",alt:"Handling file uploads with apollo server 2.0"}))),Object(s.b)("h2",null,"A comprehensive guide on how to upload files with Apollo-server 2.0 and Mongodb."),Object(s.b)("h3",null,"Prerequisites"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://altair.sirmuel.design/"}),"Altair")," (Recommended alternative to the default graphql playground)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"You must have ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org"}),"nodejs")," installed on your machine.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Basic knowledge of ",Object(s.b)("strong",{parentName:"p"},"nodejs")))),Object(s.b)("p",null,"File Uploads have an interesting history in the Apollo ecosystem."),Object(s.b)("br",null),Object(s.b)("p",null,"With Apollo Server 2.0, you can perform file uploads right out of the box. Apollo Server ships with the ability to handle multipart requests that contain file data. This means you can send a mutation to Apollo Server containing a file, pipe it to the filesystem, or pipe it to a cloud storage provider instead."),Object(s.b)("br",null),Object(s.b)("p",null,"Depending on your problem domain and your use case, the way you set up file uploads may differ. Handling Multipart upload request in graphql can be a pain in the ass especially when your are coming from a ",Object(s.b)("strong",{parentName:"p"},"Rest")," background like me. However, I'm going to show you how to upload files with ",Object(s.b)("strong",{parentName:"p"},"apollo-server 2.0 ")),Object(s.b)("br",null),Object(s.b)("p",null,"One of the simplest ways of achieving file uploads in a single request is to base64-encode a file and send as a string variable in a mutation."),Object(s.b)("h2",null,"How it works"),Object(s.b)("p",null,"The upload functionality follows the GraphQL multipart form requests specification. Two parts are needed to make the upload work correctly. The server and the client:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"The Client:")," On the client, file objects are mapped into a mutation and sent to the server in a multipart request.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"The Server:")," The multipart request is received. The server processes it and provides an upload argument to a resolver. In the resolver function, the upload promise resolves an object."))),Object(s.b)("h2",null,"Our project structure"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 images\n\u2502   \u2514\u2500\u2500 9A1ufNLv-bg-works.jpg\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 db.js\n    \u251c\u2500\u2500 fileModel.js\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 resolvers.js\n    \u2514\u2500\u2500 typeDefs.js\n")),Object(s.b)("br",null),Object(s.b)("h2",null,"Lets Begin \u{1f680}"),Object(s.b)("p",null,"We will start off by initializing our project with npm, install the necessary packages and configure our server."),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"$~ bash",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm init -y\n\nyarn add esm apollo-server graphql mongoose shortid\n\nyarn add -D nodemon\n")),Object(s.b)("br",null),Object(s.b)("p",null,"I'm going to explain what each package will handle shortly."),Object(s.b)("p",null,"The next step is to setup our server with apollo and mongoose.\nCreate a ",Object(s.b)("strong",{parentName:"p"},"db.js")," file in your ",Object(s.b)("strong",{parentName:"p"},"/src")," directory and add the following configuration code to connect to your\n",Object(s.b)("strong",{parentName:"p"},"mongodb")," database:"),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"src/db.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import mongoose from "mongoose";\nconst MONGO_CONNECTION = "mongodb://localhost:27017/fileUploads";\n\nexport default (async function connect() {\n  try {\n    await mongoose.connect(MONGO_CONNECTION, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n    });\n  } catch (err) {\n    console.error(err);\n  }\n})();\n')),Object(s.b)("br",null),Object(s.b)("p",null,"Now create an ",Object(s.b)("strong",{parentName:"p"},"index.js")," file in your ",Object(s.b)("strong",{parentName:"p"},"/src")," directory and paste the following code start off your server on ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:4000"}),"http://localhost:4000"),":"),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"src/index.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { ApolloServer } from "apollo-server";\nimport typeDefs from "./typeDefs";\nimport resolvers from "./resolvers";\n\n// Import your database configuration\nimport connect from "./db";\n\nexport default (async function () {\n  try {\n    await connect.then(() => {\n      console.log("Connected \u{1f680} To MongoDB Successfully");\n    });\n\n    const server = new ApolloServer({\n      typeDefs,\n      resolvers,\n    });\n\n    server.listen(4000, () => {\n      console.log(`\u{1f680} server running @ http://localhost:4000`);\n    });\n  } catch (err) {\n    console.error(err);\n  }\n})();\n')),Object(s.b)("br",null),Object(s.b)("p",null,"Next we'll create our ",Object(s.b)("strong",{parentName:"p"},"resolvers")," and ",Object(s.b)("strong",{parentName:"p"},"typeDefs")," and put it in a separate file:"),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"src/typeDefs.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { gql } from "apollo-server";\n\nexport default gql`\n  type Query {\n    hello: String\n  }\n`;\n')),Object(s.b)(p.a,{lang:"/src/resolvers.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'export default {\n  Query: {\n    hello: () => "Hello world",\n  },\n};\n')),Object(s.b)("p",null,"Lol \u{1f605} thats just a simple ",Object(s.b)("strong",{parentName:"p"},"Hello world")," Query."),Object(s.b)("br",null),Object(s.b)("p",null,"Now add a ",Object(s.b)("strong",{parentName:"p"},"dev")," script to your ",Object(s.b)("strong",{parentName:"p"},"package.json")," file to enable us start up our server."),Object(s.b)("p",null,"You may be wondering why we've been using ",Object(s.b)("strong",{parentName:"p"},"ES6")," syntax without configuring babel and thats because of the ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"strong"},{href:"https://www.npmjs.com/package/esm"}),"esm module"))," we installed earlier."),Object(s.b)("br",null),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},Object(s.b)("strong",{parentName:"p"},"esm")," is the world\u2019s most advanced ECMAScript module loader. This fast, production ready, zero dependency loader is all you need to support ECMAScript modules in Node 6+.")),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"package.json",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "apollo-upload",\n  "main": "src/index.js",\n  "scripts": {\n    "dev": "nodemon -r esm src/index.js" /* we are requiring the esm module \n    with [-r] flag to transpile our es6 code */\n  },\n  "dependencies": {\n    "apollo-server": "^2.11.0",\n    "graphql": "^14.6.0",\n    "mongoose": "^5.9.4",\n    "esm": "^3.2.25",\n    "shortid": "^2.2.15"\n  },\n  "devDependencies": {\n    "nodemon": "^2.0.2"\n  }\n}\n')),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"bash",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn dev\n")),Object(s.b)("br",null),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/file-uploads-with-apolloserver-2/start-server.png",alt:"yarn start"}))),Object(s.b)("br",null),Object(s.b)("p",null,"We can see that out server is running on ",Object(s.b)("strong",{parentName:"p"},"localhost:4000"),". Let's test our ",Object(s.b)("strong",{parentName:"p"},"Hello world")," query in out graphql playground."),Object(s.b)("br",null),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/file-uploads-with-apolloserver-2/hello.png",alt:"Hello query"}))),Object(s.b)("br",null),Object(s.b)("p",null,"For server integrations that support file uploads (e.g. Express, hapi, Koa), Apollo Server enables file uploads by default. To enable file uploads reference the ",Object(s.b)("strong",{parentName:"p"},"Upload")," type in the schema passed to the Apollo Server construction."),Object(s.b)("br",null),Object(s.b)("p",null,"Now your ",Object(s.b)("strong",{parentName:"p"},"typeDefs")," file should look exactly like this:"),Object(s.b)(p.a,{lang:"src/typeDefs.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { gql } from "apollo-server";\n\nexport default gql`\n  type File {\n    id: ID!\n    filename: String!\n    mimetype: String!\n    path: String!\n  }\n\n  type Query {\n    hello: String\n    files: [File!]\n  }\n\n  type Mutation {\n    uploadFile(file: Upload!): File\n  }\n`;\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: When using typeDefs, Apollo Server adds scalar Upload to your schema, so any existing declaration of scalar Upload in the type definitions should be removed. If you create your schema with makeExecutableSchema and pass it to ApolloServer constructor using the schema param, make sure to include scalar Upload.")),Object(s.b)("br",null),Object(s.b)("p",null,"The server is going to return a rpomise that resolves an object. The object contains the following:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"createReadStream:")," The upload stram manages straming the file(s) to a filesystemor any storage location of your choice.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"filename:")," The original name of the uploaded file(s)")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"mimetype:")," The MIME type of the file(s) such as ",Object(s.b)("em",{parentName:"p"},"image/jpg"),", ",Object(s.b)("em",{parentName:"p"},"application/json"),", etc.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"encoding:")," The file encoding i.e ",Object(s.b)("em",{parentName:"p"},"UTF-8")))),Object(s.b)("br",null),Object(s.b)("p",null,"Now we are going to create a function that will process our file and pipe it into a directory."),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"src/resolvers.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import shortid from "shortid";\nimport { createWriteStream, mkdir } from "fs";\n\nimport File from "./fileModel";\n\nconst storeUpload = async ({ stream, filename, mimetype }) => {\n  const id = shortid.generate();\n  const path = `images/${id}-${filename}`;\n\n  // (createWriteStream) writes our file to the images directory\n  return new Promise((resolve, reject) =>\n    stream\n      .pipe(createWriteStream(path))\n      .on("finish", () => resolve({ id, path, filename, mimetype }))\n      .on("error", reject)\n  );\n};\n\nconst processUpload = async (upload) => {\n  const { createReadStream, filename, mimetype } = await upload;\n  const stream = createReadStream();\n  const file = await storeUpload({ stream, filename, mimetype });\n  return file;\n};\n\nexport default {\n  Query: {\n    hello: () => "Hello world",\n  },\n  Mutation: {\n    uploadFile: async (_, { file }) => {\n      // Creates an images folder in the root directory\n      mkdir("images", { recursive: true }, (err) => {\n        if (err) throw err;\n      });\n      // Process upload\n      const upload = await processUpload(file);\n      return upload;\n    },\n  },\n};\n')),Object(s.b)("br",null),Object(s.b)("p",null,"For the demo below i'm going to use ",Object(s.b)("strong",{parentName:"p"},"Altair")," which is a graphql playground and it's very efficient for file uploads."),Object(s.b)("br",null),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"/images/blog/file-uploads-with-apolloserver-2/upload.gif",alt:"file upload demo"}))),Object(s.b)("br",null),Object(s.b)("h2",null,"Saving to database(mongodb)"),Object(s.b)("p",null,"We used ",Object(s.b)("strong",{parentName:"p"},"file system")," to handle our file uploads because of the following reasons:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Performance can be better than when you do it in a database"),". To justify this, if you store large files in DB, then it may slow down the performance because a simple query to retrieve the list of files or filename will also load the file data if you used Select ","*"," in your query. In a file system, accessing a file is quite simple and light weight.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Saving the files and downloading them in the file system is much simpler"),' than it is in a database since a simple "Save As" function will help you out. Downloading can be done by addressing a URL with the location of the saved file.')),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Migrating the data is an easy process"),". You can just copy and paste the folder to your desired destination while ensuring that write permissions are provided to your destination.\n... ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://dzone.com/articles/which-is-better-saving-files-in-database-or-in-fil"}),"Read more")))),Object(s.b)("p",null,"In the future i'm going to show you how to query the files from our ",Object(s.b)("strong",{parentName:"p"},"images")," directory through the file path specified in the database."),Object(s.b)("br",null),Object(s.b)("p",null,"We are going to create our database ",Object(s.b)("strong",{parentName:"p"},"schema")," and save it in a ",Object(s.b)("strong",{parentName:"p"},"src/fileModel.js")," file."),Object(s.b)("p",null,"Your code should look like:"),Object(s.b)("br",null),Object(s.b)(p.a,{lang:"src/fileModel.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { Schema, model } from "mongoose";\n\nconst fileSchema = new Schema({\n  filename: String,\n  mimetype: String,\n  path: String,\n});\n\nexport default model("File", fileSchema);\n')),Object(s.b)("br",null),Object(s.b)("p",null,"Next step is to make use our ",Object(s.b)("strong",{parentName:"p"},"file schema"),"."),Object(s.b)("p",null,"Your ",Object(s.b)("strong",{parentName:"p"},"src/resolvers.js")," code should look like this:"),Object(s.b)(p.a,{lang:"src/resolvers.js",mdxType:"CodeWrapper"}),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import shortid from "shortid";\nimport { createWriteStream, mkdir } from "fs";\n\n// import our model\nimport File from "./fileModel";\n\nconst storeUpload = async ({ stream, filename, mimetype }) => {\n  const id = shortid.generate();\n  const path = `images/${id}-${filename}`;\n\n  return new Promise((resolve, reject) =>\n    stream\n      .pipe(createWriteStream(path))\n      .on("finish", () => resolve({ id, path, filename, mimetype }))\n      .on("error", reject)\n  );\n};\n\nconst processUpload = async (upload) => {\n  const { createReadStream, filename, mimetype } = await upload;\n  const stream = createReadStream();\n  const file = await storeUpload({ stream, filename, mimetype });\n  return file;\n};\n\nexport default {\n  Query: {\n    hello: () => "Hello world",\n  },\n  Mutation: {\n    uploadFile: async (_, { file }) => {\n      mkdir("images", { recursive: true }, (err) => {\n        if (err) throw err;\n      });\n\n      const upload = await processUpload(file);\n      // save our file to the mongodb\n      await File.create(upload);\n      return upload;\n    },\n  },\n};\n')),Object(s.b)("br",null),Object(s.b)("p",null,"Complete code ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/DNature/apollo-upload"}),"https://github.com/DNature/apollo-upload")),Object(s.b)("br",null),Object(s.b)("hr",null),Object(s.b)("br",null),Object(s.b)("p",null,"Now you now understand how file uploads work in ",Object(s.b)("strong",{parentName:"p"},"Apollo server 2.0.")," I hope to see you next time \u{1f600}"),Object(s.b)("br",null),Object(s.b)("h3",null,"Happy Codding \u{1f913}"))}m.isMDXComponent=!0},"g+C6":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2020-02-02_file-uploads-with-apolloserver-2",function(){return n("8JlA")}])}},[["g+C6",0,2,1,3,4,5]]]);