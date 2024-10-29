let balls = [];
let slices = 6;
let angleOffset;

function setup() {
  createCanvas(400, 400);
  angleOffset = TWO_PI / slices; // 각 조각의 각도 계산
}

function draw() {
  background(0);
  let centerX = width / 2;
  let centerY = height / 2;

  for (let i = 0; i < slices; i++) {
    push(); // 상태 저장
    translate(centerX, centerY); // 캔버스 중심으로 이동
    rotate(i * angleOffset); // 각 조각에 맞게 회전

    for (let b of balls) {
      // 키 입력에 따라 각기 다른 행동
      if (keyIsPressed) {
        if (key == "1") {
          b.move();
        } else if (key == "2") {
          b.moveToStart();
        } else if (key == "3") {
          b.move2();
        } else if (key == "4") {
          b.move3();
        }
      }
      
      b.show(); // 별 그리기
    }
    
    pop(); // 상태 복원
  }
}

// 마우스를 놓았을 때 별 생성
function mouseReleased() {
  // 별의 개수가 10개 이하일 때만 추가
  if (balls.length < 20) {
    let centerX = width / 2;
    let centerY = height / 2;
    let b = new Walker(mouseX - centerX, mouseY - centerY);
    
    // 크기를 10 또는 40으로 설정
    b.w = [20, 40, 100][floor(random(3))];
    
    balls.push(b);
  }
}