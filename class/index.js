//클래스에 대한 기본 문법을 알아보자!

//클래스는 키워드 class로 시작하고 함수와 달리 중괄호로 시작함
//첫글자는 대문자로 하는게 코딩러들 사이의 국룰!

class Champion {

    //class에는 constructor라는 함수를 무조건 하나만 만들어야함
    //이름 못정해줌
    //뒤에 보겠지만 이는 new 문법 실행시 이 constructor가 인스턴스를 만들어줌
    //인스턴스가 뭐냐? class는 빵굽는 틀이고 instance는 빵임
    //즉 Champion이라는 틀(class)에서 나온 pyke, zerath(instance)인거지




    constructor(name, hp, ad, ap){

        //뇌빼고 constructor가 함수라고 생각해보자
        //이함수는 인자를 4개 받고 있음. 쉽네

        //this.hp < 새로운 문법임.
        //만들어진 instance에 hp라는 변수를 선언하겠다는거임
        //즉 let hp = hp라고 봐도 무방한데, class에선 이렇게 나타내겠다는 말씀
        this.name = name
        this.hp = hp
        this.ad = ad
        this.ap = ap
        //constructor로 만들어지면 만들어진 챔피언은 이런 형태를 띨거임
        /**
         * {
         *  name: "파이크"
         *  hp : 600
         *  ad : 100
         *  ap : 0
         * 
         * }
         */
        //어? 중괄호안에 커플들이다!!
        //여기서 연결해서 생각하는거지. class는 instance를 만드는데, 그 instance 역시 객체구나!
        //이어서 생각하면 class는 객체를 만드는 틀이구나!
    }

    //사실 constructor로만 멤버(변수)를 만들 수 있는 건 아니고 그냥 우리가 이 안에 정의할 수 있음
    //다음에 함수 정의할때도 볼건데 class내부에 있는 것들 정의할땐 function, let, const안써줘도됨
    name = "no name"

    //얜 함수임. 근데 function을 안붙여줬네? class에선 원래 그럼
    //class내부에 있는 함수들을 method(메소드)라고 부름
    //이렇게 만들어진 함수를 어캐 쓰는지 instance를 만들고나서 볼거임

    /**
     * {
     *  name : "파이크"
     *  hp : 600
     *  ad : 100
     *  ap : 0
     *  attack : ()=>{console.log(this.name,"이 공격합니다!")}
     * }
     */
    attack(){
        //만들어진 인스턴스의 멤버(클래스 내부의 변수를 멤버라고함. 자주쓰니까 외우자)
        //를 부를떈 this.name이라고 함 this가 instance 그자체라고 보면 됨
        console.log(this.name,"이 공격합니다!")
    }

}

//실제로 만들어보자아~

//Champion은 초록색이지? class들은 초록색임.그런데 그 뒤에 소괄호가 붙었어
//이건 함수가 실행됐다는건데 대체 뭐지?
//이때 우리가 클래스 내부에 정의해둔 constructor가 실행되는거임
//즉 함수실행된거 맞아! 근데 constructor가 대신 실행됨
//new class() < constructor실행. new가 빠지면 안되용

//위에 보면 constructor에 인자 4개있었지? 똑같이 따라가는거임
let champion = new Champion("파이크",600,100,0)

console.log(champion.ad)
console.log(champion.name)
console.log(champion.ap)
console.log(champion.hp)

//이런식으로 new class() < 얘가 어캐 작동하는지만 알면 됨. 실제로 class를 만들일은 거의 없음
//그래도 니 성격 보니까 모르는거 대충넘어가는걸 싫어하는 것 같다.
//밑에 과제 내준다
//Warrior라는 이름의 class만들고 garen, jax라는 인스턴스 만들어봐

