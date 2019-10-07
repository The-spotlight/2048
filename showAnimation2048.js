
function showNumberWithAnimation (i, j, randNumber){//实现随机数字的样式变动
  var numberCell = $('#number-cell-' + i + '-' + j);
  numberCell.css('background-color', getNumberBackgroundColor(randNumber));
  numberCell.css('color', gerNumberColor(randNumber));
  numberCell.text(randNumber);

  numberCell.animate({
    width: "100px",
    height: "100px",
    top: getPosTop(i, j),
    left: getPosLeft(i, j)
  }, 50);

}

function showMoveAnimation(fromX, fromY, toX, toY){//实现移动格子的样式变动
  var numberCell = $('#number-cell-' + fromX + '-' + fromY);
  numberCell.animate({top:getPosTop(toX, toY),
  left:getPosLeft(toX, toY)}, 200);
}