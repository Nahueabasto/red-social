import app from "./src/app.js";
import { connectDB } from "./src/db.js";

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`server on pory ${port}`);
});

/// esto de aca abajo estaba origimente: el archivo index.js pertenecia adentro de src y se modifico le archivo package.json la linea "dev": "nodemon src/index.js" por: "dev": "nodemon index.js"

// import app from "./app.js";
// import { connectDB } from "./db.js";

// connectDB();
// app.listen(3000)
// console.log("server on pory", 3000)


// "dev": "nodemon src/index.js"