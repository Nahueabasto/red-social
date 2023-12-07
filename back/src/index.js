// import app from "./app.js";
// import { connectDB } from "./db.js";

// connectDB();
// app.listen(3000)
// console.log("server on pory", 3000)

////////////////////////////////////////////

import app from "./app.js";
import { connectDB } from "./db.js";

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`server on pory ${port}`);
});

