// express modülünü dahil ediyoruz
const express = require('express');
const app = express();
const PORT = 3000;

// JSON verilerini işlemesi için Express'e built-in middleware ekliyoruz
app.use(express.json());

// Basit bir GET endpointi (route) oluşturuyoruz
app.get('/', (req, res) => {
  res.send('Merhaba, bu basit bir Web API!');
});

// Bir dizi (array) kullanarak basit bir veri modeli oluşturuyoruz
let users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Ayşe' },
  { id: 3, name: 'Mehmet' }
];

// Kullanıcıları listelemek için GET endpointi
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Yeni bir kullanıcı eklemek için POST endpointi
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Sunucuyu başlatıyoruz
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
