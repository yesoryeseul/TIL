// 문제11 : for를 이용한 기본 활용
// 1부터 100까지 모두 더하는 Code 작성, for를 사용해야합니다

let s = 0;

// -- 코드 작성
for (let i = 1; i <= 100; i++) {
  s += i;
}
// 코드 작성 --

console.log(s);

// 문제12 : 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.

// class 작성 start
class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
}

// class 작성

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); // 파이어볼이 출력되는 메서드

// 출력
// 545 210 10
// 파이어볼

// 문제13 : 몇 번째 행성인가요?
// 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고싶습니다.

// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해주세요

// 예를 들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

// 입력 : 1
// 출력 : 수성

let universe = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

let n = prompt("입력 : ");

console.log(universe[n - 1]);

// 문제 14 : 3의 배수 인가요?
// 영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다

// 입력으로 랜덤한 숫자 n이 주어집니다

// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요

// 입출력
// 입력 : 3
// 출력 : 짝

// 입력 : 2
// 출력 : 2

let nRandom = prompt("랜덤 수를 입력하세요");

if (nRandom % 3 === 0) {
  console.log("짝");
} else console.log(nRandom);

// 문제15 :  자기소개
// 신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다

// 만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다." 라고 출력하게 해주세요

// 입출력
// 입력 : 김다정
// 출력 : 안녕하세요. 저는 김다정입니다.

let name = prompt("이름을 입력하세요.");

console.log(`안녕하세요. 저는 ${name}입니다.`);

// *문제 16: 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다

// 입출력
// 입력 : 거꾸로
// 출력 : 로꾸거

let reverse = prompt("문장을 입력하세요.");

for (let i = reverse.length; i >= 0; i--) {
  console.log(reverse[i]);
}

// 거꾸로 입력시

// 문제 17 : 놀이기구 키 제한
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

let heightBar = Number(prompt("당신의 키를 알려주세요"));

if (heightBar >= 150) {
  console.log("YES");
} else {
  console.log("NO");
}

// 문제 18 : 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력
// 입력 : 20 30 40
// 출력 : 30

// 생각할 조건, 공백 구분하여 자르기
// 평균 점수, 총점 변수를 만들어 3으로 나누기
// 소숫점 자리 모두 버리기, Math.floor

let eachScore = prompt("국어, 수학, 영어 점수를 공백으로 입력하세요");

let score = eachScore.split(" ");

let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += Number(score[i]);
}
console.log(Math.floor(Number(sum / 3)));

// 문제 19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요

let num = "2 3";

let num2 = num.split(" ");

console.log(Math.pow(num2[0], num2[1]));

// 문제 20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요

let numberIn = "2 5";

let resQuotient = numberIn.split(" ");

let quotient = Math.floor(resQuotient[1] / resQuotient[0]); // 몫

let remainder = resQuotient[1] % resQuotient[0]; // 나머지

console.log(`${quotient} ${remainder}`);
