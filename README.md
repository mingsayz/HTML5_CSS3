# HTML
HTML(Hypertext Markup Language)은 웹 페이지와 그 내용을 구조화하기 위해 사용하는 코드입니다. 

> HTML 은 프로그래밍 언어가 아닙니다. 컨텐츠의 구조를 정의하는 마크업 언어입니다. HTML은 컨텐츠의 서로 다른 부분들을 씌우거나(wrap) 감싸서(enclose) 다른 형식으로 보이게하거나 특정한 방식으로 동작하도록 하는 일련의 요소(elements)로 이루어져 있습니다. tags로 감싸는 것으로 단어나 이미지를 다른 어딘가로 하이퍼링크(hyperlink)하거나 단어들을 이탤릭체로 표시하고 글씨체를 크게 또는 작게 만드는 등의 일을 할 수 있습니다.

![tag](https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png)

1. **여는 태그(opening tag)**: 이것은 요소의 이름으로 구성되고 (여기에서는 p), 여닫는 꺾쇠괄호로 감싸집니다. 이것은 요소가 시작되는 곳, 또는 효과를 시작하는 곳임을 나타냅니다 — 이 예제에서는 문단이 시작되는 위치를 나타냅니다.
2. **닫는 태그(closing tag)**: 이것은 여는 태그와 같지만, 요소의 이름 앞에 전방향 슬래시가 포함된다는 점이 다릅니다. 이것은 요소의 끝을 나타냅니다 — 이 예제에서는 문단이 끝나는 위치를 나타냅니다. 초보자가 가장 흔히 범하는 오류 중 하나가 닫는 태그를 쓰지 않는 것으로 이상한 결과가 표시됩니다.
3. **컨텐츠(content)**: 이것은 요소의 내용(content)으로 이 예제에서는 그냥 텍스트입니다.
4. **요소(element)**: 요소는 여는 태그와 닫는 태그, 그리고 컨텐츠로 이루어집니다.


---
## HTML 문서 해부

* ```<!DOCTYPE html>```  아주 오래전 HTML 이 막 나왔을 때 (1991년 2월쯤), doctype은 (자동 오류 확인이나 다른 유용한 것을 의미하는) good HTML로 인정받기 위해 HTML 페이지가 따라야 할 일련의 규칙으로의 연결통로로써 작동하는 것을 의미하였습니다. 하지만, 최근에는 아무도 그런 것들에 대해 신경쓰지 않으며 그저 모든 것이 올바르게 동작하게 하기 위해 포함되어야 할 역사적인 유물일 뿐입니다. 지금은, 그게 알아야 할 전부 입니다.
* ```<html></html>```  이 요소는 페이지 전체의 컨텐츠를 감싸며, 루트(root) 요소라고도 합니다.
* ```<head></head>```  이 요소는 HTML 페이지에 포함되어 있는 모든 것들(여러분의 페이지를 조회하는 사람들에게 보여주지 않을 컨텐츠)의 컨테이너 역할을 합니다. 여기에는 keywords와 검색 결과에 표시되길 원하는 페이지 설명, 컨텐츠를 꾸미기 위한 CSS, 문자 집합 선언 등과 같은 것들이 포함됩니다.
* ```<body></body>``` 이것은 페이지에 방문한 모든 웹 사용자들에게 보여주길 원하는 모든 컨텐트를 담고 있으며, 그것이 텍스트일 수도, 이미지, 비디오, 게임, 플레이할 수 있는 오디오 트랙이나 다른 무엇이든 될 수 있습니다.
* ```<meta charset="utf-8">``` 이 요소는 문서가 사용해야 할 문자 집합을 utf-8으로 설정합니다(utf-8 문자 집합에는 인간의 방대한 주류 기록언어에 있는 대부분의 문자가 포함되어 있습니다). 본질적으로 여러분이 사용할 수 있는 어떠한 문자 컨텐트도 다룰 수 있습니다. 이 문자 집합을 설정하지 않을 이유가 없으며, 그렇게 설정하면 나중에 발생할 수 있는 일부 문제를 피할 수 있습니다.
* ```<title></title>``` 이 요소는 페이지의 제목을 설정하는 것으로 페이지가 로드되는 브라우저의 탭에 이 제목이 표시됩니다. 이 요소는 북마크나 즐겨찾기에서 페이지를 설명하는 것으로도 사용됩니다.


---
## HTTP 패킷

클라이언트가 서버로 요청을 했을때, 보내는 데이터를 HTTP 패킷이라 표현한다. 
HTTP 프로토콜을 쓰므로, 앞에 HTTP가 붙고 인터넷을 통해 보내는 데이터를 패킷이라 표현하므로,
HTTP패킷 이라 부른다. HTTP패킷의 구조는 크게 헤더 와 바디로 나뉘어진다.
헤더에는 7가지 HTTP 메서드 방식중 무엇을 썻는지, 클라이언트의 정보, 브라우저 정보,
접속할 URL 등등 과 같은 클라이언트 정보를 담는다. 
바디는 보통 비어있다. 하지만, 특정 데이터를 담아서 서버에게 요청을 보낼 수 있다.
이러한 웹 개념아래, 우리는 GET메서드와 POST메서드를 통해서 요청을 할 수 있다.

---
## GET vs POST
두 방식 모두, 서버에 요청을 하는 메서드이다.
클라이언트가 서버에 요청을 할때, 제공해야 하는 자원이 있다고 하자.
예를 들면, 어떤 홈페이지의 로그인 페이지에서 로그인을 하는 경우이다.
아이디 와 패스워드는 클라이언트가 작성한 후, 그 정보를 서버에 요청하여
클라이언트가 작성한 아이디와 패스워드가 올바른 것인지 검사를 해야한다.
위의 예시를 보듯, 요청에는 자원을 보내야 하는경우가 존재한다.

* GET방식으로 데이터를 보내기
    - 클라이언트의 데이터를 URL뒤에 붙여서 보낸다. 위에서 쓴 예시처럼 아이디 패스워드를 보낸다고 하면,
    - www.example.com?id=mommoo&pass=1234 (예시로 쓴 URL입니다. 존재하지 않습니다.)
    - 이런식으로 보낸다. URL 뒤에 "?" 마크를 통해 URL의 끝을 알리면서, 데이터 표현의 시작점을 알린다.
    - 데이터는 key 와 value 쌍으로 넣어야 한다 윗 예시에서의 key는 id 랑 pass고 value는 mommoo랑 1234가 되겠다.
    - 중간에 &마크는 구분자 이다. 2개이상의 key - value 쌍 데이터를 보낼때는 &마크로 구분해준다.
    - URL에 붙이므로, HTTP패킷의 해더에 포함되여 서버에 요청한다.
    - 따라서, GET 방식에서 BODY에 특별한 내용을 넣을 것이 없으므로 BODY가 빈상태로 보내진다.
    - 그러므로, 헤더의 내용중 BODY 데이터를 설명하는 Content-Type이라는 헤더필드는 들어가지 않는다.
    - URL형태로 표현되므로, 특정 페이지를 다른사람 에게 접속하게 할 수 있다. 
    - 또한 간단한 데이터를 넣도록 설계되어, 데이터를 보내는 양의 한계가 있다.



* POST방식으로 데이터를 보내기
    - POST 방식은 GET 방식과 달리, 데이터 전송을 기반으로 한 요청 메서드이다.
    - GET방식은 URL에 데이터를 붙여서 보내는 반면, POST방식은 URL에 붙여서 보내지 않고
    - BODY에다가 데이터를 넣어서 보낸다.  
    - 따라서, 헤더필드중 BODY의 데이터를 설명하는 Content-Type이라는 헤더 필드가
    - 들어가고 어떤 데이터 타입인지 명시한다.
    - 컨텐츠 타입으로는 여러가지가 있지만, 몇가지를 적자면,
        + 1. application/x-www-form-urlencoded
        + 2. text/plain
        + 3. multipart/form-data

    - 따라서 POST 방식으로 데이터를 보낼때는 위와 같이 컨텐츠 타입을 꼭 명시해줘야한다.
    - 보통 작성하지 않는 경우는 1번의 컨텐츠 타입으로 셋팅된다.
    - 1번의 컨텐츠 타입은, GET방식과 마찬가지로 BODY에 key 와 value 쌍으로 데이터를 넣는다. 똑같이 구분자 &를 쓴다.
    - 2번의 컨텐츠 타입은, BODY에 단순 txt를 넣는다.
    - 3번의 컨텐츠 타입은, 파일전송을 할때 많이 쓰는데 BODY의 데이터를 바이너리 데이터로 넣는다는걸 알려준다.
    - 자바와 같이 oop 프로그래밍에서는 BODY에 데이터를 InputStream/OutputStream 클래스를 통해서 읽고/쓰고 한다.


---
## CSS3
: CSS는 Cascading Style Sheet 의 약자로 HTML,XHTML,XML 같은 문서의 스타일을 꾸밀 때 사용되는 스타일 시트 언어이다.
> HTML로 문서의 뼈대를 만들면, CSS로 화장을 시키는 셈

* 글꼴이나, 배경색, 너비와 높이, 위치 등을 지정하거나 웹 브라우저,스크린 크기,장치에 따라서 화면이 다르게 표시될 수 있도록 지정할 수 있다.
* CSS는 1996년 12월 W3C(웹문서 표준 만드는 기관)가 도입했는데, 그 전엔 HTML 언어 하나로 뼈대도 만들고, 꾸밈을 같이 했었음. 그러다보니 HTML문서를 수정할 때 모든 문서를 수정해야하는 번거로움이 존재
* CSS는 문서의 내용(content)와 표현(presentation)을 분리하여 CSS파일 하나만 수정하면 스타일에 해당하는 HTML 문서가 한번에 수정되는 장점이 있음.
---
### 스타일을 꾸미는법
스타일을 꾸미는 방법에는 세가지가 있다.
- 속성처럼 style 적용
- style 태그를 사용
- css파일을 별도로 만들어 html에 연결

1. HTML 문서 안에 style 속성을 사용함
~~~.html
<h1 style="color:blue;text-align:center;">CSS</h1>
~~~

2. style 태그를 사용함(internal)
~~~.html
<style type="text/css">
    h1 {
        color:blue;
        text-align:center;
    }
</style>

...

<h1>CSS</h1>
~~~


3. css파일을 별도로 만들어, html문서에 연결시킴(External)
- 확장자 .css로 저장 (ex. test.css)
~~~.html
    h1 {
        color:blue;
        text-align:center;
    }
~~~
- 확장자 .htm으로 저장 (ex. main.htm)
~~~.html
<link rel="stylesheet" type="text/css" href="test.css">
~~~

---
### CSS 작성법
~~~.css
selector {property : value ;}
선택자 {속성 : 속성값;}

ex)
h1 {
        color:blue;
        text-align:center;
    }
~~~

* 선택자란 ? 특정 태그를 선택하여, 해당 태그의 속성을 변경 하는 목적으로 사용한다.
* tag 선택자 -> 특정 태그를 선택하여 CSS 속성을 적용할 수 있다.
* \* 선택자 -> 전체라는 의미의 \* 는 초기 세팅시 많이 사용된다. 
* 전체와 특정태그의 혼합 : 전체적으로 속성을 설정한 다음 특정 태그의 속성을 변경한다.
√
---
### CSS id(#)와 class(.)
: id값,class값을 주면 CSS 선택자로 사용가능.
> id, class는 똑같은 기능을 하나, 선택자로 지정할때 id는 (#)으로, class는 (.)으로 표현


---

## 웹 접근성

> 월드 와이드 웹 (World Wide Web)을 창시한 팀 버너스 리(Tim Berners-Lee)는 웹이란 '장애에 구애 없이 모든 사람이 손쉽게 정보를 공유할 수 있는 공간'이라고 정의하였으며, 웹 콘텐츠를 제작할 때에는 장애에 구애됨이 없이 누구나 접근할 수 있도록 제작하여야 한다고 하였다. 이는 모든 사용자가 신체적, 환경적 조건과 관계없이 웹에 접근하여 이용할 수 있도록 보장하는 것을 뜻한다. 여기서 신체적 조건이란 일반 사용자는 물론, 장애를 가진 사람, 고령자 등을 의미하고 환경적 조건이란 다양한 기기(PC, mobile, PDA 등), OS(운영체제), 웹 브라우저 (Internet Explorer, FireFox, Safari, Chrome, Opera 등)를 의미한다.

즉, 접근성이란 "보다 많은 사람이 이용할 수 있는 보편적 접근의 정도"를 의미 <br />
장애인뿐만 아니라 모든 사람이 정보통신 기기나 서비스를 손쉽게 활용할 수 있게 하는 것

> http://ui.daum.net (웹 접근성)
> http://www.wah.or.kr (웹 접근성 지침서)
> 네이버 널리


---

# 알아두면 유용한 사이트
- css 초기화 사이트 : 
  + Eric Meyer's Reset CSS : http://meyerweb.com/eric/tools/css/reset
  + HTML5 Doctor Reset stylesheet : http://html5doctor.com/html-5-reset-stylesheet/
- css 코드 정리 사이트 : https://codebeautify.org/css-beautify-minify
- 그레디언트 제작 사이트 : http://www.colorzilla.com/gradient-editor/
- 임시 이미지 호출 : http://placehold.it/500x500
- 사용하고자 하는 기능이 해당 브라우저들에서 동작하지않을때 : https://html5please.com
- CSS Sprites Generator : https://www.toptal.com/developers/css/sprite-generator/
    + Padding between elements(px): 0
    + Align elements: top
    + Generate 버튼 클릭
- 어도비 컬러 cc : http://color.adobe.com/

---

# 자주 사용
- 간단한 초기화:
~~~.css
* {margin:0; padding:0;}
body {font-family: 'Helvetica', sans-serif;}
li {list-style: none;}
a {text-decoration: none;}
~~~

- 생략 클래스 (Ellipsis):
~~~.css
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
~~~
