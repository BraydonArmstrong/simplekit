import { SKElement, SKElementProps } from "./element";

type SKImageProps = SKElementProps & {
  path?: string;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
};

export class SKImage extends SKElement {
  constructor({
    path = "?",
    x = 0,
    y = 0,
    scale = 0,
    rotate = 0,
    ...elementProps
  }: SKImageProps = {}) {
    super(elementProps);

    this.path = path;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.rotate = rotate;
  }

  x = 0;
  y = 0;
  scale = 1;
  rotate = 0;

  path = "";

  draw(gc: CanvasRenderingContext2D) {
    gc.save();
    gc.imageSmoothingEnabled = false
    // draw image to screen
    let img = new Image()
    //img.src = "/assets/itemback.png"
    img.src = this.path
    let x = this.x;
    let y = this.y;
    let r = this.rotate;
    let s = this.scale

    gc.translate(x,y)
    gc.scale(s,s)
    gc.rotate(Math.PI/2 * r/90)
   
    gc.drawImage(img,0,0);
    gc.restore();
    // element draws debug viz if flag is set
    //super.draw(gc);
  }

}
