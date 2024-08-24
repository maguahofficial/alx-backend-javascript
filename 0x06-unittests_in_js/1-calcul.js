function calculateNumber(type, a, b) {
    const anc = Math.round(a);
    const bnc = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = anc + bnc;
	break;
    case 'SUBTRACT':
	c = anc - bnc;
	break;
    case 'DIVIDE':
      if (bnc === 0) {
            c = "Error";
      } else {
            c = anc / bnc;
      }
      break;
    }
    return c;
}

