import React from "react";
import sample from './sample.jpg'

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "20px Courier";
      ctx.fillText(this.props.text.name, 90, 127);   // name
      ctx.fillText("Argentina", 90, 161);       // origin
      ctx.fillText("21-DIC-2021", 340, 161);    // date from
      ctx.fillText("India", 90, 193);           // destiny
      ctx.fillText(this.props.text.category, 340, 193);    // category
      ctx.fillText("1", 60, 280);       // gate = 1
      ctx.fillText("777", 180, 280);    // fligh = 777
      ctx.fillText("20:00", 320, 280);    // boardingtime = 15:12
      ctx.fillText("1A", 430, 280);    // seat...
      /// mini pass
      ctx.fillText(this.props.text.name, 620, 128);   // name
      ctx.fillText("Argentina", 620, 160);       // origin
      ctx.fillText("India", 620, 192);           // destiny
      ctx.fillText("21DIC21", 565, 250);    // date from
      ctx.fillText("20:00", 655, 250);    // time
      //ctx.fillText("20:00", 655, 250);    // Class
      ctx.fillText("1", 585, 290);    // gate
      ctx.fillText("777", 655, 290);    // flight
      ctx.fillText("1A", 730, 290);    // seat
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