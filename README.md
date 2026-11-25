# 직장인을 위한 AI 협업

AI 활용이 막막한 직장인을 위한 개인 브랜딩 랜딩 페이지입니다. HTML, CSS, JavaScript만 사용하며, 모바일 화면을 기준으로 만들었습니다.

## 페이지 구성

1. **히어로** — 역할과 한 줄 제안, 커피챗 신청 버튼
2. **하는 일** — 실무에 바로 적용할 수 있는 AI 협업을 소개하는 문장
3. **함께하는 주제**
   - AI 워크 스마트: 실전 AI 활용법 & 성공 사례
   - AI 동료 만들기: No-code/Low-code 업무 자동화
   - AI로 데이터 인사이트 발견: 데이터 분석 & 시각화
4. **커피챗** — 같은 신청 버튼

이름과 사진은 넣지 않았습니다.

## 실행

`index.html`을 브라우저에서 열면 됩니다.

로컬 서버로 보려면 프로젝트 폴더에서 아래를 실행한 뒤 http://127.0.0.1:5500/ 을 엽니다.

```bash
node -e "const http=require('http');const fs=require('fs');const path=require('path');const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]);if(p==='/')p='/index.html';const file=path.join(process.cwd(),p);fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data);});}).listen(5500,'127.0.0.1');"
```

## 커피챗 주소 바꾸기

히어로와 하단 버튼은 같은 주소를 사용합니다. [`js/main.js`](js/main.js) 상단의 `COFFEE_CHAT_URL`만 수정하면 됩니다. 비어 있으면 버튼은 페이지 안에 머뭅니다. 주소가 있으면 새 탭에서 열립니다.

## 파일

| 파일 | 역할 |
| --- | --- |
| `index.html` | 페이지 구조와 문구 |
| `css/style.css` | 밝은 톤, 모바일 우선 스타일 |
| `js/main.js` | 커피챗 주소 연결, 스크롤 시 카드 등장 |
