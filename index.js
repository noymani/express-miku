const express = require("express");
const app = express();
// const PrismaClient = require('./src/generated/prisma')
// const prisma = new PrismaClient()

const prisma = require("./lib/db");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const {page}=req.query;
  let pages=page;

  if(page==undefined){
    pages=1
  }
  
  const pageSize = 10;
  const skip = (pages - 1) * pageSize;
  const [mangas, totalCount] = await Promise.all([
    prisma.mangas.findMany({
      skip: skip,
      take: pageSize,
      orderBy: { create_at: "desc" },
    }),
    prisma.mangas.count(),
  ]);
  const totalPages = Math.ceil(totalCount / pageSize);

  res.render("index", { mangas ,totalPages,pages});
});
app.get('/:mangaId',async(req,res)=>{
  const {mangaId} = req.params;
  const mangas = await prisma.mangas.findUnique({
    where: {
      mangaId: mangaId,
    },
    include: {
      mangaCh: {
        include: {
          mangaChImg: true,
        },
      },
      types: {
        include: {
          Type: true,
        },
      },
    },
  });

  if (!mangas) return res.status(404).send("Not found");
  res.render('mangaCh/index',{mangas})
})
app.get('/:mangaId/:ep',async(req,res)=>{
  const { mangaId, ep } = req.params;
  const mangaCh = await prisma.mangaCh.findFirst({
    where: {
      mangaChId: ep,
      mangas: {
        mangaId: mangaId,
      },
    },
    include: {
      mangaChImg: true,
    },
  });
  if (!mangaCh) return res.status(404).send("Not found");
  mangaCh.mangaChImg.sort(
    (a, b) => Number(a.mangaChImgId) - Number(b.mangaChImgId)
  );
  const findMangaCh = await prisma.mangaCh.findMany({
    where: {
      mangas: {
        mangaId: mangaId,
      },
    },
  });
  res.render('mangaChImg/index',{mangaCh,mangaId,findMangaCh})
})



app.get("/api/image/:id", async (req, res) => {
  const {id} = req.params
  const image = await prisma.mangas.findUnique({
    where: { id: id },
  });
  if (!image) return res.status(404).send("Not found");

  res.set("Content-Type", "image/jpeg"); // หรือ image/png ตามภาพ
  res.send(image.mangaImgData);
});

app.get("/api/mangaChImg/:id", async (req, res) => {
  const {id} = req.params

  const image = await prisma.mangaChImg.findUnique({
    where: { id: id },
  });
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