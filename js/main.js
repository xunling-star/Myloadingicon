"use sttrict";
// 即時関数を使う 立即执行
(() => {
  class IconDrawer {
    constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
      this.r = 60;
    }

    drow(angle) {
      // 領域を半透明の白で塗りつぶすテクニック重要だから、暗記必要
      this.ctx.fillStyle = "rgba(255,255,255,0.3)";
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.save();
      this.ctx.translate(this.width / 2, this.height / 2);
      this.ctx.rotate((Math.PI / 180) * angle);

      this.ctx.beginPath();

      this.ctx.moveTo(0, -this.r - 5);
      this.ctx.lineTo(0, -this.r + 5);
      this.ctx.strokeStyle = "orange";
      this.ctx.lineWidth = 6;
      this.ctx.stroke();

      this.ctx.restore();
    }
  }

  class Icon {//描画関連の処理を分離下から
    constructor(drawer) {
      this.drawer = drawer;
      this.angle = 0;
      // 角度回転
    }

    drow() {
      this.drawer.drow(this.angle);
    }

    update() {
      this.angle += 12;
    }

    run() {
      this.update();
      this.drow();
      setTimeout(() => {
        this.run();
      }, 100);
    }
  }

  const canvas = document.querySelector("canvas");
  if (typeof canvas.getContext === "undefined") {
    return;
  }

  const icon = new Icon(new IconDrawer(canvas));
  icon.run();
})();
// this.ctx.beginPath();
// // this.ctx.arc(this.width / 2, this.height / 2, this.r, 0, 2 * Math.PI);
// // this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
// this.ctx.stroke();
// this.ctx.moveTo(this.width / 2, this.height / 2 - this.r - 5);
// this.ctx.lineTo(this.width / 2, this.height / 2 - this.
