import  Express  from "express";
const app = Express();

import authRoutes from "./routes/auth.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"

app.use("/backend/users", userRoutes)
app.use("/backend/posts", postRoutes)
app.use("/backend/comments", commentRoutes)
app.use("/backend/likes", likeRoutes)
app.use("/backend/auth", authRoutes)

app.listen(8800, () => 
    console.log("api Working")
)