const T = require("node-telegram-bot-api");
const token = "5665239669:AAGlbcs_ayEvlKB-USQdzihXI_TY6tqRqE4";
const bot = new T(token, { polling: true });

//start에서 했던거기 때문에 넘어가도록 하겠다

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  //bot.sendMessage(chatId, 'Received your message');
  //위와같은 식으로 하면 문제가 있음
  //오는 모든 메시지에 반응해버리는거임
  //따라서 !test같은 말에만 반응하게 할 필요가 있음

  //밑과 같은 식으로 text에 일단 msg.text, 즉 온 메시지의 문자열을 저장해놔
  //이젠 바뀌지 않을거같으면 전부 const로 선언하셈.
  //const로 선언하면 일단 진한 파란색되서 보기가 좋고
  //바뀌지 않기 때문에 메모리를 아낄수 있음. 왜아끼는지는 너무들어가버렷
  const text = msg.text;

  //이제 if문을 적극적으로 활용해서 메시지를 거를거임

  //이런식으로 하면
  //1.소괄호 안의 수식이 true라면
  //2.중괄호로 넘어가서 식을 실행한다.
  //3.false라면 실행되지 않고
  if (text == "!test") {
    bot.sendMessage(chatId, "!test를 쓰셨습니당");
  }
  //4.여기서부터 실행하게 된다

  //밑처럼 else를 이용해서 사용할수도 있는데, 가독성을 위한거지 걍 else 빼도 되긴 함
  if (text == "외치기") {
    bot.sendMessage(chatId, "나는 자연인이다~");
  } else if (text == "때리기") {
    bot.sendMessage(chatId, "나도한대 때리고");
  }

  //string편에서 배웠던 startsWith를 배워볼거임

  //밑처럼 하면 !실험 으로 시작하는 말에 모두 반응하게됨

  if (text.startsWith("!실험")) {
    bot.sendMessage(chatId, "이 메시지는 실험으로 시작하는 말입니다");
  }

  // startsWith는 우리가 봇한테 다양한 명령을 내리게 할 수 있음
  // 지금부터 조금 복잡할거니까 잘 따라오세요
  if (text.startsWith("%실험")){
    //array라는 변수를 선언함
    //지금처럼 선언만 하고 아무것도 안넣어줘도 됨
    let array;

    //여기서 변수에 배열을 넣어줄거임
    //문자열들은 split이라는 메소드를 가지고 있음
    //split은 인자로 seperator(걍이름임)를 받아서 seperator로 문자열을 자르고, 잘라서 만들어진 배열을 반환함
    
    //여기서는 " ", 즉 띄어쓰기로 문자열을 자르는거지
    //만약 text가 "%실험 안녕"이었으면 ["%실험", "안녕"]라는 배열로 만들게 되는거임
    //그 결과값이 자리에 남고,  = 우변에 있으니까 array에 배열이 들어가는거지
    array = text.split(" ")

    //우리는 %실험을 버리고 두번째 인자를 추출하고 싶음
    //그러면, 두번째 인자만 분리시키면 됨

    //second라는 변수를 만들었고, array의 두번째 인자를 가져오기 위해 [1]문법을 사용함.
    //컴퓨터 언어는 0부터 시작해서 두번째가 1임

    let second = array[1]

    //이제 두번째 인자를 추출했어. 여기까지 따라오셨다면 당신은 아마천재 ㄷ
    //이제 추출한 second를 가지고 작업을 할거임

    //너무 멀리와서 까먹을지도 모르겠지만 여기는 if안임
    //if안에서도 if를 또 만들수있음 별거아닌거니까 받아들이면되고 해보자

    //이런식으로 계속 조건문을 쌓아나갈수있음.
    //레고맞추는거같아서 재밌지않냐? shift alt로 복사만 하면 되고
    if(second == "안녕"){
         bot.sendMessage(chatId, "두번째 인자는 안녕입니다");
    }
    if(second == "하이"){
         bot.sendMessage(chatId, "두번째 인자는 하이입니다");
    }

    //이제 if문을 빠져나가자. 빠져나갈땐 return안써도됨
    //return은 함수를 빠져나가게하는거지 if를 빠져나가게 하는게아님
    //만약 return이 여기 있으면 함수(그니까 여기선 콜백함수였지)가 끝나버리는거임
  }
  //수고하셨습니다~
});
