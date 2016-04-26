import React from 'react';
import $ from 'jquery';

export default class Radar extends React.Component {
  // componentDidMount() {
  //   const rad = $('#rad');
  //   const obj = $('.obj');
  //
  //   let deg = 0;
  //   let rad = 160.5; //   = 321/2
  //
  //   obj.each(() => {
  //     var data = $(this).data(),
  //         pos = {X:data.x, Y:data.y},
  //         getAtan = Math.atan2(pos.X-rad, pos.Y-rad),
  //         getDeg = ~~(-getAtan/(Math.PI/180) + 180);
  //     $(this).css({left:pos.X, top:pos.Y}).attr('data-atDeg', getDeg);
  //   });
  //
  //     (function rotate() {
  //       $rad.css({transform: 'rotate('+ deg +'deg)'});
  //       $('[data-atDeg='+deg+']').stop().fadeTo(0,1).fadeTo(1700,0.2);
  //
  //         // LOOP
  //         setTimeout(function() {
  //             deg = ++deg%360;
  //             rotate();
  //         }, 25);
  //     })();
  // }

  render() {
    return (
      <div id="radar">
        <div id="rad"></div>
        <div className="obj" data-x="120" data-y="65"></div>
        <div className="obj" data-x="140" data-y="185"></div>
        <div className="obj" data-x="220" data-y="35"></div>
        <div className="obj" data-x="120" data-y="235"></div>
        <div id="background"></div>
      </div>
    );
  }
}
