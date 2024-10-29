class Walker {
  constructor(sx, sy) {
    this.sPos = createVector(sx, sy);
    this.pos = createVector(sx, sy);
    this.vel = p5.Vector.random2D(); // 초기 속도 설정
    this.c = color(random(255), random(255), random(255));
    this.e = random(2, 7);
  }

  move() {
    this.pos.add(this.vel); // 속도에 따라 위치 업데이트
    this.checkEdges(); // 벽에서 튕기는 체크
  }

  checkEdges() {
    // 벽에서 튕겨나오게
    if (this.pos.x > width) {
      this.vel.x *= -1; // X 방향 반전
      this.pos.x = width; // 위치 조정
    } else if (this.pos.x < 0) {
      this.vel.x *= -1; // X 방향 반전
      this.pos.x = 0; // 위치 조정
    }
    if (this.pos.y > height) {
      this.vel.y *= -1; // Y 방향 반전
      this.pos.y = height; // 위치 조정
    } else if (this.pos.y < 0) {
      this.vel.y *= -1; // Y 방향 반전
      this.pos.y = 0; // 위치 조정
    }
  }

  moveToStart() {
    let newV = p5.Vector.sub(this.sPos, this.pos);
    newV.mult(0.1);
    this.pos.add(newV);
  }

  move2() {
    let newV = p5.Vector.sub(this.sPos, this.pos);
    newV.mult(0.2);
    this.vel.add(newV);
    this.pos.add(this.vel);
    this.checkEdges(); // 벽에서 튕기는 체크
  }

  move3() {
    this.vel = this.vel.add(p5.Vector.random2D());
    this.vel.limit(4);
    this.pos.add(this.vel);
    this.checkEdges(); // 벽에서 튕기는 체크
  }

  show() {
    noStroke();
    fill(this.c);
    this.drawStar(this.pos.x, this.pos.y, this.w / 2, this.w / 4, 5); // 별 그리기
  }

  drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius1;
      let sy = y + sin(a) * radius1;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius2;
      sy = y + sin(a + halfAngle) * radius2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
