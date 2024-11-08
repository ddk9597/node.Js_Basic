const express = require('express');
const app = express(); 


// 하나의 앱 인스턴스에 라우트에 관련된 기능들만 붙여주면 됨

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
});

app.get('/post', (req, res) => {
  res.send('<h1>Post Page</h1>')
});

app.get('/user', (req, res) => {
  res.send('<h1>User Page</h1>')
});

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
});

app.listen(3000, ()=>{

  console.log("서버가 실행되었습니다. localhost:3000");
});