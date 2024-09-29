export const unit11 = () => {
  // const d1 = [33, 'best', 66, 'best'];
  // const b1 = document.getElementById('b-1');

  // function showArr(array, domElem) {
  //   let out = '';
  //   for (let i = 0; i < array.length; i++) {
  //     out += array[i] + ' ';
  //   }
  //   document.querySelector(domElem).innerHTML = out;
  // }

  // function f1() {
  //   const i1 = document.getElementById('i-1').value;
  //   d1.push(i1);
  //   showArr(d1, '.out-1');
  // }

  // b1.onclick = f1;

  // const b2 = document.getElementById('b-2');

  // function f2() {
  //   d1.pop();
  //   showArr(d1, '.out-2');
  // }

  // b2.onclick = f2;

  // const b3 = document.getElementById('b-3');

  // function f3() {
  //   d1.shift();

  //   showArr(d1, '.out-3');
  // }

  // b3.onclick = f3;

  // const b4 = document.getElementById('b-4');

  // function f4() {
  //   const i4 = document.getElementById('i-4').value;
  //   d1.push(i4);
  //   showArr(d1, '.out-4');
  // }

  // b4.onclick = f4;

  // const b5 = document.getElementById('b-5');

  // function f5() {
  //   const i51 = document.getElementById('i-51').value;
  //   const i52 = document.getElementById('i-52').value;
  //   d1.unshift(i51, i52);
  //   showArr(d1, '.out-5');
  // }

  // b5.onclick = f5;

  // const d6 = ['test', 5, 12];
  // const b6 = document.getElementById('b-6');

  // function f6() {
  //   const i6 = document.getElementById('i-6').value;
  //   let out = '';
  //   d6[d6.length] = i6;

  //   for (let i = 0; i < d6.length; i++) {
  //     out += d6[i] + ' ';
  //   }
  //   document.querySelector('.out-6').innerHTML = out;
  // }

  // b6.onclick = f6;

  // const d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
  // const b7 = document.getElementById('b-7');

  // function f7() {
  //   d7.length--;
  //   showArr(d7, '.out-7');
  // }

  // b7.onclick = f7;

  // const d8 = [2, '4', 12, 67, 'hello'];
  // const b8 = document.getElementById('b-8');

  // function f8() {
  //   const i8 = document.getElementById('i-8');

  //   const vrem = ['', ...d8];

  //   for (let i = 0; i < vrem.length; i++) {
  //     d8[i] = vrem[i];
  //   }
  //   d8[0] = i8.value;

  //   showArr(d8, '.out-8');
  // }

  // b8.onclick = f8;

  // const d9 = [100, 200, 300, 400, 700, 121];
  // const b9 = document.getElementById('b-9');

  // function f9() {
  //   let vrem = [];
  //   for (let i = 0; i < d9.length; i++) {
  //     if (i < 5) {
  //       vrem[i] = d9[i + 1];
  //     }
  //   }
  //   for (let i = 0; i < vrem.length; i++) {
  //     d9[i] = vrem[i];
  //   }
  //   d9.length--;
  //   console.log(vrem);
  //   console.log(d9);

  //   showArr(d9, '.out-9');
  // }

  // b9.onclick = f9;

  // const d10 = [3, 14, 15, 92, 6];
  // const b10 = document.getElementById('b-10');

  // function f10() {
  //   d10.reverse();
  //   showArr(d10, '.out-10');
  // }

  // b10.onclick = f10;

  // const d11 = [2, 3, 4, 5, 6, 7];
  // const b11 = document.getElementById('b-11');

  // function f11() {
  //   const i11 = document.getElementById('i-11');
  //   document.querySelector('.out-11').innerHTML = d11.indexOf(+i11.value);
  // }

  // b11.onclick = f11;

  // const d12 = [6, 62, 60, 70, 1, 5];
  // const b12 = document.getElementById('b-12');

  // function f12() {
  //   const i12 = document.getElementById('i-12');

  //   console.log(+i12.value === d12[0]);

  //   for (let i = 0; i < d12.length; i++) {
  //     if (+i12.value === d12[i]) {
  //       document.querySelector('.out-12').innerHTML = i;
  //       break;
  //     } else {
  //       document.querySelector('.out-12').innerHTML = '-1';
  //     }
  //   }
  // }

  // b12.onclick = f12;

  // const d13 = [6, 0, 22, 1, 4, 76];
  // const b13 = document.getElementById('b-13');

  // function f13() {
  //   let vrem1 = d13[0];
  //   d13[0] = d13[5];
  //   d13[5] = vrem1;
  //   let vrem2 = d13[1];
  //   d13[1] = d13[4];
  //   d13[4] = vrem2;
  //   let vrem3 = d13[2];
  //   d13[2] = d13[3];
  //   d13[3] = vrem3;
  //   showArr(d13, '.out-13');
  // }

  // b13.onclick = f13;

  // const b14 = document.getElementById('b-14');

  // function f14() {
  //   const d14 = [];
  //   const i14 = document.getElementById('i-14');
  //   for (let i = 0; i < +i14.value; i++) {
  //     d14.push(1);
  //   }

  //   showArr(d14, '.out-14');
  // }

  // b14.onclick = f14;

  // const d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
  // const b15 = document.getElementById('b-15');

  // function f15() {
  //   const i15 = document.getElementById('i-15');

  //   if (d15.indexOf(+i15.value) == -1) {
  //     d15.push(+i15.value);
  //   }

  //   // for(let i = 0; i < d15.length; i++){

  //   // }
  //   showArr(d15, '.out-15');
  // }

  // b15.onclick = f15;

  // let d161 = [5, 6, 7, 8, 9];
  // let d162 = [23, 24, 56, 87];
  // const b16 = document.getElementById('b-16');

  // function f16() {
  //   let d16 = d161.concat(d162);
  //   showArr(d16, '.out-16');
  // }

  // b16.onclick = f16;

  // const b17 = document.getElementById('b-17');
  // let d17 = [];
  // let d171 = ['a', 'b', 'c', 'd'];
  // let d172 = [1, 2, 3, 4, 5];

  // function f17() {
  //   for(let i = 0; i < d171.length; i++){
  //     d17[i] = d171[i]
  //   }
  //   for(let i = 0; i < d172.length; i++){
  //     d17[4+i] = d172[i]
  //   }
  //   showArr(d17, '.out-17');
  // }

  // b17.onclick = f17;

  // const d18 = ['b', 'c', '45', 'e', 'z', 'y'];
  // const b18 = document.getElementById("b-18");

  // function f18(){
  //   const i18 = document.getElementById("i-18")
  //   document.querySelector(".out-18").innerHTML = d18.includes(i18.value)
  // }

  // b18.onclick = f18

  // const d19 = ['Your','payment','method','will','automatically','be','charged','in','advance','automaticallyssss','every' ];
  // const b19 = document.getElementById("b-19")

  // function f19(){
  //   let maxString = " ";
  //   for(let i = 0; i < d19.length; i++){
  //     if(maxString.length < d19[i].length){
  //       maxString = d19[i]
  //     }
  //   }
  //   document.querySelector(".out-19").innerHTML = maxString
  // }

  // b19.onclick = f19

  // const d20 = [4,5,6,7,8,9,10]
  // const b20 = document.getElementById("b-20")

  // function f20(){
  //   document.querySelector(".out-20").innerHTML = d20.join('')
  // }

  // b20.onclick = f20
};
