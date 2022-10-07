const T = require("node-telegram-bot-api");
const token = "5665239669:AAGlbcs_ayEvlKB-USQdzihXI_TY6tqRqE4";
const bot = new T(token, { polling: true });

//start에서 했던거기 때문에 넘어가도록 하겠다

//여기서부터는 변수와 배열을 적극적으로 활용할거임.
//이것만 할줄알면 봇 절반은 다 알았다고 보면 됨

//문자열 변수와 배열을 하나씩 선언하자

//얘네를 밖에선언한 이유는 조금 생각해봐야함
//chatId와 text는 메시지가 올때마다 선언이 다시됨
//즉 얘네가 chatId들이랑 같이있게되면 얘네도 message가 올때마다 재선언이 되버림
//그렇기 때문에 얘네를 밖에 빼줘서 재선언이 안되게 하는거임
//궁금하다면 넣어보면됨(결과부터 말하자면 제대로 작동 x)

//const로 선언하지 않은 이유는 얘네는 바뀔거기 때문
let str = "";
let arr = [];



bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  //이제 조건문을 만들거임
  //str를 뽑는 조건문이랑 arr를 뽑는 조건문을 만들거임

  //얘네는 확인용으로 만들어놓은거임.
  //밑에서 arr와 str를 조작할때마다 얘네를 호출하면 확인할 수 있는거
  if (text == "str") {
    console.log(str);
  }
  if (text == "arr") {
    console.log(arr);
  }

  //str을 수정하는 조건문을 만들거임
  //이용자로부터 값을 받아야하기때문에 startsWith를 사용했당
  if (text.startsWith("str수정 ")) {
    //조금 줄여서 나타냈는데 text.split(" ")을 쓰게되면 그 자리에 배열이 남게되고, [1]문법을 사용해서 두번째 값을 가져온거임
    let second = text.split(" ")[1];

    //str에 second라는 값을 넣는다. 그이상 그이하도아님
    str = second;
  }
  //이제 위에서 만든 str 명령을 사용하면 진짜 바꼈는지 확인 가능하겠지?

  //이번엔 arr에 값을 삽입하는 조건문을 만들거임
  if (text.startsWith("arr삽입 ")) {
    //뭐 똑같죠잉 두번째값 가져옵니다
    let second = text.split(" ")[1];

    //여기서부터 str수정과 달라짐. 배열에 값을 넣으려면 배열이라는 객체 안에있는 push라는 메소드를 사용해야함
    arr.push(second);

  }
  //이제 위에서 만든 arr 명령을 사용하면 진짜 바꼈는지 확인 가능하겠지?

  //여기까지 이해가 간다면 당신은 좀 치는겁니다
  //이제 과제를 내주겠습니당
  /**
   * 1. second가 아닌 third도 만들어서 받아보자
   * 2. arr에는 pop이라는 메소드가 있다. 조건문을 연게해서 이 메소드를 써보자
   * 3. str도 사실 문자 하나하나의 배열이다. str += second를 이용하면 str에 문자를 붙일수 있다. 써보자!
   * 4. str내부에 있는 trim이라는 메소드가 있다. trim을 사용해서 공백을 모두 지우게 해보자!
   */
});
