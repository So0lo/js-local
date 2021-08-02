function last(x){
  return x.split('')
  .reverse()
  .join('')
  .split(' ')
  .sort()
  .join(' ')
  .split('')
  .reverse()
  .join('')
  .split(' ');
}

console.log('man i need a taxi up to ubud'.split('').reverse().join('').split(' ').sort().join(' ').split('').reverse().join('').split(' ').reverse());

