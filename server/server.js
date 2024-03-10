import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`server is listen ${process.env.PORT}`);
});
