# vue-cli
vue cli 3.0.3 인스톨부터 내용이해를 하기위한 프로젝트

########## npm 모듈 인스톨은 README_1.md 참고해주세요 ##########

node.js 를 먼저 설치 하자

https://nodejs.org/ 여기로 이동 하여 

node.js 의 패키지 관리툴 -> NPM 을 설치 하여보자.

현재 기준 (2022.01.26)
Latest LTS Version: 16.13.2 (includes npm 8.1.2)

프로그램을 다운받아서 먼저 설치 한다.

설치후 PC를 리붓 하는것이 좋다.

설치가 끝났으면 cmd 창에서 

npm --version 명령어를 쳐서 버전을 확인해본다.

vue 를 설치해볼 차례이다

vue 는 npm을 통해서 설치 할수 있다.

npm install -g @vue/cli@3.0.1

cli 가 설치되고 나면 

유튜브 웹강의와 같은 환경을 맞춰어야 하기 때문에...

유튜브에서 맨땅개발 검색

재생목록에서 vue cli 3.0 시작하기를 선택하여 보기 시작한다.

별도의 커스텀 세팅을 해주어야 한다.

일단 프로젝트를 먼저 vue 로 생성해준다.

vue create new-cli-project 

명령을 내리고 나면 npm 이 알아서 설치를 해준다.

cd new-cli-project 로 폴더로 이동하고나서

vuetify 플러그인을 설치를 해주어야 한다.

영상에서는 vuetify@0.2.1 이 자동으로 세팅되었다.

그러므로..수동으로 플러그인을 미리 설치 한다음 

전체를 설치 해야 깨끗하게 설치된다.

vue add vue-cli-plugin-vuetify@0.2.1  명령을 먼저 입력한다.

플러그인이 먼저 설치 되고 나야만.. 

이전버전을 사용할수 있다는 것을 알게되었다.

이제 정상적인 명령어인

vue add vuetify  

이렇게 명령을 입력하고 나면 

강의에 맞는 세팅에 맞춰진다.

이제 강의에 집중에 앞서서.. 

깃허브 세팅을 하자...

이것을 하는 가장 중요한이유는 클라우드에 백업도 겸하면서, 

어떻게 사용했었는지를 히스토리를 남기기 위함이다.

vue 에서 공식적으로 제공하는 플러그인 검색

구글 검색창 -> @vue/cli-plugin 입력

npm 으로 배포되어있는 모듈 검색

구글 검색창 -> vue-cli-plugin- 입력


vuetify 플러그인 설치

프로젝트 폴더로 이동하여

터미널에서 명령어를 친다.

vue add vuetify

인스톨을 시작하는데 버전들도 보여주면서 
설치되는 과정이 보여진다.
선택사항들을 선택하라고 한다.

Use a pre-made template? Yes
Use custom theme? No
Use custom properties ? No
Select icon font
원하는 항목 선택
Use babel/polyfill? Yes
Select locale (사는곳 선택)
기본값인 English 선택한다.

빨간색 파일들이 나온것들은 새로 추가된 파일들이다.





