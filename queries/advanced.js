// 1. Utilitza $and per cercar productes actius amb preu entre 20 € i 100 €
db.productes.find({
  $and: [
    { actiu: true },
    { preu: { $gte: 20 } },
    { preu: { $lte: 100 } }
  ]
});

// 2. Utilitza $or per cercar productes de categoria 'electrònica' o valoració >= 4.5
db.productes.find({
  $or: [
    { categoria: "electrònica" },
    { valoracio: { $gte: 4.5 } }
  ]
});

// 3. Utilitza $regex per cercar productes el nom dels quals contingui una paraula clau
db.productes.find({
  nom: {
    $regex: "LED", // Canviat a "LED" perquè tens el producte "Llum de peu LED"
    $options: "i"
  }
});

// 4
db.productes.find().sort({ preu: -1 }).limit(5);

// 5.
db.productes.aggregate([
  {
    $group: {
      _id: "$categoria",
      total_productes: { $sum: 1 }
    }
  }
]);

// 6.
db.productes.aggregate([
  {
    $group: {
      _id: "$categoria",
      preu_mitja: { $avg: "$preu" }
    }
  }
]);

// 7.
db.comandes.aggregate([
  {
    $group: {
      _id: "$client_id",
      total_gastat: { $sum: "$total" }
    }
  }
]);

//4.2
// 7.
db.productes.createIndex({ categoria: 1 });
// 8.
db.productes.createIndex({ categoria: 1, preu: 1 });
// 9.
db.productes.createIndex({ nom: "text" });
// 10
db.productes.find({ categoria: "llar" }).explain("executionStats");
// 11.
db.productes.getIndexes();
