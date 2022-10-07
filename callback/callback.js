//callback함수를 다뤄볼겁니다
//callback함수란 함수를 1급 객체, 즉 문자열과 숫자들처럼 다루는 거임

//일단 함수를 하나 만들자

//이 함수는 txt를 출력하지
function say() {
  console.log("txt");
}

//이 함수는 func를 인자로 받아서 func를 사용함
//뭐 이해는 될거임 근데 써보는게 중요
function useFunc(func) {
  func();
}

//여기서 중요한건 say()가 아니라 say라는 거임 함수 자체를 넘겨준다는 거임
//say()를 해버리면 함수가 실행되서 함수는 return값을 반환하고 끝나버림
useFunc(say);

//그래도 함 해보자. say()를 하면 say는 void함수이므로 리턴값이 없음
//따라서 자리에 undefined가 남게되고 useFunc는 undefined를 실행하려함
//결국 undefined는 함수가 아니므로 프로그램이 터지게됨
// useFunc(say())

//이런식으로 익명 함수를 넘겨주는 것도 가능함
useFunc(() => {
  console.log("ㅎㅇ");
});
useFunc(function () {
  console.log("ㅎㅇ");
});

//난이도를 높여서 가자
//이번에는 인자를 받는 함수를 만들거임

//얘는 인자를 받기 때문에 useFunc를 쓰면 안됨
//만약 쓰게되면 say2에 아무 인자도 들어가지 않을거임
function say2(txt) {
  console.log(txt);
}


//그러면 인자를 넣는 useFuncWithArg를 만들어 보자!

function useFuncWithArg(func, arg) {
  func(arg);
}
//이제 이 useFuncWithArg는 받은 callback function에 인자를 넣어줄수가 있게 되는거임
useFuncWithArg(say2, "인자넣을거야!!");
useFuncWithArg((arg) => {
  console.log(arg);
});
useFuncWithArg(function (arg) {
  console.log(arg);
});

//이런식으로 함수를 인자로 받고, 함수를 실행하는 논리를 잘 이해했으면 함

//한단계 더 앞서가보자!
//이번엔 함수를 만드는 함수를 만들거임
//함수가 함수를 만든다니 참 웃긴이야기지만 함수가 1급시민인 세계에서는 당연한 이야기

function makeFunc() {
  return () => {
    console.log("ㅎㅇ");
  };
}

//실제로 찍어보면 함수가 나올거임
let func = makeFunc();
console.log(func);

//이걸 이용하면 함수를 만드는 함수와 함수를 쓰는 함수의 조화를 시킬 수 있는거지

//함수를 만드는 함수는 많진 않은데 함수를 쓰는 함수는 아주아주아주아주많이 나오니 기억해두는걸 요구
useFunc(makeFunc());

//한가지 더 짚고 가자면 console.log의 log도 함수잖음?
//따라서 얘를 useFunc로 써줄 수 있는거임. console.log는 인자를 받는 함수니까 useFuncWithArg를 쓰는거지

useFuncWithArg(console.log, "로그도 함수다!!");

/**
 * 1."인자를 두개 받는 함수"를 쓰는 함수를 만들어봐라, 3개도, 4개도!
 * 2.위의 useFunc와 makeFunc를 화살표 함수로 구현해봐라
 */
