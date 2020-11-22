// Error correction #1 - Hamming Code
// https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e

function encode(text) {
    return text.split('').map(item=>{
        let a=item.charCodeAt(0).toString(2);
        return (new Array(9 - a.length).join('0') + a).split('').map(item=>{
            return item+item+item
        }).join('');
    }).join('');
  }

  function decode(bits) {
    const splitter = (str, n) => str ? [str.slice(0, n), ...splitter(str.slice(n), n)] : []
    bits = splitter(bits, 3)
    bits = bits.map(i => +i[0] + +i[1] + +i[2] > 1 ? '1' : '0')
    bits = splitter(bits.join(''), 8)
    let ascii = bits.map(i => String.fromCharCode('0b' + i))
    return ascii.join('');
  }