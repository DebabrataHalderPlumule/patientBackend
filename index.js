// import express from "express";
// import mysql from "mysql";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "sql12.freesqldatabase.com",
//   user: "sql12660125",
//   password: "znaFNX6exf",
//   database: "sql12660125",
// });

// app.get("/", (req, res) => {
//   res.json("hello");
// });

// // app.get("/patient", (req, res) => {
// //   const q = "SELECT * FROM patient";
// //   db.query(q, (err, data) => {
// //     if (err) {
// //       console.log(err);
// //       return res.json(err);
// //     }
// //     return res.json(data);
// //   });
// // });

// app.get("/patient/:id", (req, res) => {
//   const id = req.params.id; // Get the "id" parameter from the URL

//   // Create a SQL query to retrieve patient data by ID
//   const q = "SELECT * FROM patient WHERE id = ?";

//   db.query(q, [id], (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.json(err);
//     }

//     if (data.length === 0) {
//       // If no data is found, return a 404 status and a message
//       return res.status(404).json({ message: "Patient not found" });
//     }

//     // Return the data of the patient with the specified ID
//     return res.json(data[0]); // Assuming there's only one matching patient
//   });
// });



// // app.post("/patient", (req, res) => {
// //   const q = "INSERT INTO patient( `age`, `diagonosis`, `location`) VALUES ( ?, )";

// //   const values = [
// //     req.body.age,
// //     req.body.diagonosis,
// //     req.body.location,
// //   ];

// //   db.query(q, values, (err, data) => {
// //     if (err) return res.send(err);
// //     return res.json(data);
// //   });
// // });




// // app.post("/patient", (req, res) => {
// //   const q = "INSERT INTO patient( `id`,`age`, `diagonosis`, `location`) VALUES ( ?)";

// //   const values = [
// //     req.body.id,
// //     req.body.age,
// //     req.body.diagonosis,
// //     req.body.location,
// //   ];

// //   db.query(q, values, (err, data) => {
// //     if (err) return res.json(err);
// //     return res.json('book has been successbul');
// //   });
// // });







// app.delete("/patient/:id", (req, res) => {
//   const patientId = req.params.id;
//   const q = " DELETE FROM patient WHERE id = ? ";

//   db.query(q, [patientId], (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// });

// app.put("/books/:id", (req, res) => {
//   const bookId = req.params.id;
//   const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

//   const values = [
//     req.body.title,
//     req.body.desc,
//     req.body.price,
//     req.body.cover,
//   ];

//   db.query(q, [...values,bookId], (err, data) => {
//     if (err) return res.send(err);
//     return res.json(data);
//   });
// });

// app.listen(8800, () => {
//   console.log("Connected to backend.");
// });






















import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const port=process.env.PORT||8800
const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12660125",
  password: "znaFNX6exf",
  database: "sql12660125"
});

app.get("/", (req, res) => {
  res.json("hello");
});



app.get("/patient/:id", (req, res) => {
  const id = req.params.id; // Get the "id" parameter from the URL

  // Create a SQL query to retrieve consumer data by ID
  const q = "SELECT * FROM patient WHERE id = ?";

  db.query(q, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

    if (data.length === 0) {
      // If no data is found, return a 404 status and a message
      return res.status(404).json({ message: "patient not found" });
    }

    // Return the data of the consumer with the specified ID
    return res.json(data[0]); // Assuming there's only one matching consumer
  });
});



app.listen(port, () => {
  console.log("Connected to backend.");
});