//여기까지 왔다면 당신은 어느정도 실력을 쌓은 것입니다.
//어렵지는 않으니 편안하게 보시기 바랍니다

//class는 extends,즉 상속이라는 개념이 있음
//class는 다른 class를 상속받아 그 안에있는 멤버들, 메소드들을 가져올수있음
//그냥 extends만 쓰면 장땡은 아니고 super라는 것도 써줘야함
//let's go!!

//전 강좌에서 만든 class랑 똑같음
class Plant {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  //한개 알아둘거 : sayname은 sayName처럼 단어 첫머리는 소문자, 그다음 단어들 머리는 대문자로 함. 코딩러들 사이의 규칙!
  sayName() {
    console.log("저는 " + this.name + "이고 키는 " + this.height + "입니다");
  }
}

//근데 이 식물을 상속받는 corn(옥수수)라는 class를 만들어볼거임

class Corn extends Plant {
  branch = [];
  constructor(name, height, leaf) {
    //여기서부터 달라짐
    //name이랑 height는 조상의 constructor에 있잖아?
    //따라서 조상의 constructor도 써줘야함
    //constructor(name, height)를 다시 써줄 수 있겠지만
    //자바스크립트에서는 조상을 다룰 때 super를 사용하게함
    //따라서 이렇게 써주면됨
    super(name, height);
    this.branch.push(leaf);
  }

  //어? 이미 sayName이라는 함수가 조상에 있었는데 또써준거지?
  //이를 override, 오버라이드라고함.
  //이렇게 정의하면 조상의 sayName은 씹히고 이 sayName이 실행됨
  //그래도 super.sayName을 사용해주면 조상걸 사용은 할 수 있지
  sayName() {
    super.sayName();
    console.log("참고로 제 이파리 개수는" + this.branch.length);
  }

  addLeaf(leaf) {
    this.branch.push(leaf);
  }
}

const 옥수수 = new Corn("옥수수1호", 10, "잎");
console.log(옥수수.branch, 옥수수.height, 옥수수.name);
옥수수.sayName();
옥수수.addLeaf("잎2");
옥수수.sayName();

//과제내드리겠습니당~
/**
 * Plant를 물려받는 식물 하나를 더 만들어봐라
 * 
 */
