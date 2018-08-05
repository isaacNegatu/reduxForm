let router = require("express").Router();
let pool = require("../modules/pool");

router.get("/", (req, res) => {
  pool
    .query('SELECT * FROM "feedback" ORDER BY "id" DESC')
    .then(response => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  pool
    .query(
      `INSERT INTO "feedback" ("feeling", "understanding" , "support", "comments") VALUES ($1, $2, $3, $4)`,
      [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
      ]
    )
    .then(response => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
    console.log('got to put');
    
    pool.query(`UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE id= $1`, [req.params.id])
        .then(()=> res.sendStatus(201))
        .catch(err => console.log(err))
});

router.delete("/:id", (req, res) => {
  pool
    .query(`DELETE FROM "feedback" WHERE "id" = $1`, [req.params.id])
    .then(response => {
      console.log(response);
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
