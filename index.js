import express from "express";
import Database from "better-sqlite3";
const app = express();
// const PrismaClient = require('./src/generated/prisma')
// const prisma = new PrismaClient()

const db = new Database("../next/prisma/dev.db");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const { page } = req.query;
  let pages = page;

  if (page == undefined) {
    pages = 1;
  }
  const pageSize = 10; // จำนวนต่อหน้า
  const offset = (pages - 1) * pageSize;
  const [mangas, totalCount] = await Promise.all([
    db
      .prepare(
        `SELECT "_rowid_",id,mangaId,mangaTitle,mangaImg,create_at FROM "main"."Mangas" ORDER BY create_at DESC LIMIT ? OFFSET ?`
      )
      .all(pageSize, offset),
    db.prepare(`SELECT COUNT(*) as count FROM "main"."Mangas"`).get().count,
  ]);
  const totalPages = Math.ceil(totalCount / pageSize);
  res.render("index", { mangas, totalPages, pages });
});

app.get("/:mangaId", async (req, res) => {
  const { mangaId } = req.params;

  // const mangas = db.prepare(`SELECT mangas.id,mangas.mangaId,mangas.mangaTitle,mangaCh.mangaChId FROM "main"."Mangas"
  //   JOIN "main"."MangaCh" ON "main"."Mangas".id="main"."MangaCh".mangaId
  //  JOIN "main"."MangaChImg" ON "main"."MangaCh".id="main"."MangaChImg".mangaChId
  // WHERE "main"."Mangas".mangaId = ?`).all(mangaId)
  const mangas=db.prepare(`SELECT id,mangaId,url,mangaTitle,storyName,category,subject,painter,language,charecter,updateAt,create_at FROM "Mangas" WHERE mangaId = ?`).get(mangaId)
  if (!mangas) return res.status(404).send("Not found");

  mangas.mangaCh = db.prepare(`SELECT id,mangaChId,mangaChName,mangaChUrl FROM "MangaCh" WHERE mangaId = ?`).all(mangas.id).map((mangaCh)=>{
    return{
      ...mangaCh,
      mangaChImg: db.prepare(`SELECT id FROM "MangaChImg" WHERE mangaChId = ?`).all(mangaCh.id)
    }
  })
  
  
  // res.json(...mangas );
  
  res.render('mangaCh/index',{mangas})
});
app.get('/:mangaId/:ep',async(req,res)=>{
  const { mangaId, ep } = req.params;
  const mangasId = db.prepare(`SELECT id FROM "Mangas" WHERE mangaId = ?`).get(mangaId)
  if (!mangasId) return res.status(404).send("Not found");

  const mangaCh = db.prepare(`SELECT id,mangaChId,mangaId,mangaChName,mangaChUrl,updateAt,create_at FROM "MangaCh" WHERE mangaId = ? AND mangaChId = ?`).get(mangasId.id,ep);
  if (!mangaCh) return res.status(404).send("Not found");

  mangaCh.mangaChImg = db.prepare(`SELECT id FROM "MangaChImg" WHERE mangaChId = ?`).all(mangaCh.id)


  const findMangaCh = db.prepare(`SELECT mangaId,mangaChId FROM "MangaCh" WHERE mangaId = ?`).all(mangasId.id)
  // res.json(mangaCh)
  res.render('mangaChImg/index',{mangaCh,mangaId,findMangaCh})
})

app.get("/api/image/:id", async (req, res) => {
  const {id} = req.params
  // const image = await prisma.mangas.findUnique({
  //   where: { id: id },
  // });
  const image = db.prepare(`SELECT * FROM "main"."Mangas" WHERE id = ?`).get(id);
  if (!image) return res.status(404).send("Not found");

  res.set("Content-Type", "image/jpeg"); // หรือ image/png ตามภาพ
  res.send(image.mangaImgData);
});

app.get("/api/mangaChImg/:id", async (req, res) => {
  const {id} = req.params

  // const image = await prisma.mangaChImg.findUnique({
  //   where: { id: id },
  // });
  const image = db.prepare(`SELECT * FROM "main"."MangaChImg" WHERE id = ?`).get(id);
  if (!image) return res.status(404).send("Not found");

  res.set("Content-Type", "image/jpeg"); // หรือ image/png ตามภาพ
  res.send(image.data);
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

// const express = require('express');
// const app = express();
// const path = require('path');

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.render('index');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
