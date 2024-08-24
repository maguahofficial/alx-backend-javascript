function calculateNumber(type, a, b) {
    const anx = Math.round(a);
    const bnx = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = anx + bnx;
	break;
    case 'SUBTRACT':
	c = anx - bnx;
	break;
    case 'DIVIDE':
      if (bnx === 0) {
            c = "Error";
      } else {
            c = anx / bnx;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
