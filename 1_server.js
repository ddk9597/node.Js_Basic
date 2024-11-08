
// nodeJs의 http모듈을 불러온다.
// 이 모듈은 서버를 생성하고 요청과 응답을 처리하는데 사용됨.
// require('http')는 nodeJs의 commonJs방식으로 모듈을 가져오는 문법.
// EsMmoduel 은 import http from 'http'; 으로 실행함.
const htttp = require('http');

// url : nodeJs패키지
const url = require('url');

// 서버가 실행될 호스트 이름을 지정함.
const host = 'localhost'; // 127.0.0.1

// 서버가 실행될 포트번호를 지정함.
const port = 3000;

// http 서버를 생성한다.
// 콜백함수(req, res)는 요청과 응답 객체를 인자로 받는 함수.
const server = htttp.createServer((req, res)=>{

  // 요청이 보내진 URL을 추출.
  const path = url.parse(req.url).pathname;

  if(path === '/'){
    
    res.writeHead(200,{'content-type' : 'text/html'});
    res.end('<h1>HomePage!!</h1>');

  } else if(path === '/post'){
    
    res.writeHead(200,{'content-type' : 'text/html'});
    res.end('<h1>PostPage!!</h1>');

  } else if(path === '/user'){
    
    res.writeHead(200,{'content-type' : 'text/html'});
    res.end('<h1>UserPage!!</h1>');

  } else {
    
    res.writeHead(404,{'content-type' : 'text/html'});
    res.end('<h1>404 Not Found!!</h1>');

  }

  // 200번상태코드(요청OK)의 경우
  // wirteHead : 요청 URL의 응답 헤더를 지정함. 여기서는 응답 데이터 형식이 html임.
  res.writeHead(200, {'Content-Type' : 'text/html'});

  // 응답을 종료하고 클라에게 데이터를 보냄.
  // 여기서는 h1태그로 싸인 html코드를 보낸다.
  res.end('<h1>helloWorld</h1>');
 
});

// 서버를 지정된 포트와 호스트에서 실행한다.
// 서버가 실행되면 콜백함수가 호출되어 메세지를 콘솔에 출력한다.
server.listen(port, host, ()=>{
  // 서버가 실행되면 콘솔에 아래 메세지가 출력됨
  console.log('server running on http://localhost:3000');
  // server running on http://localhost:3000
});


// 이렇게 만들어진 서버의 특징
/*
  비동기로 실행된다.
  요청이 들어올 때마다 지정된 콜백 함수가 실행된다.
  실제 서비스에서는 추가적인 라우팅 및 보안 설정이 필요하다.
*/