import React from "react";
import ReactDOM from "react-dom";
import sample from './sample.jpg'

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "20px Courier";
      ctx.fillText(this.props.text, 90, 127);   // name
      ctx.fillText("Buenos Aires", 90, 161);    // origin
      ctx.fillText("21-DIC-2021", 330, 161);    // date from
      ctx.fillText("India", 90, 191);           // destiny
    };
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={840} height={425} />
        <img
          ref="image"
          alt=""
          src={sample}
          className="hide"
        />
      </div>
    );
  }
}
export default Canvas;