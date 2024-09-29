export const unit8 = () => {
  // const b1 = document.querySelector('.b-1');
  // const out1 = document.querySelector('.out-1');

  // function t1() {
  //   let a = 1;
  //   let sum = '';
  //   while (a <= 50) {
  //     sum += a + ' ';
  //     ++a;
  //   }
  //   return sum;
  // }

  // b1.addEventListener('click', () => {
  //   out1.innerHTML = t1();
  // });

  // const out2 = document.querySelector('.out-2');
  // const b2 = document.querySelector('.b-2');

  // function t2() {
  //   let a = 2;
  //   let sum = '';

  //   while (a <= 122) {
  //     sum += a + ' ';
  //     a = a + 2;
  //   }
  //   return sum;
  // }

  // b2.onclick = () => {
  //   out2.innerHTML = t2();
  // };

  // const out3 = document.querySelector('.out-3');
  // const b3 = document.querySelector('.b-3');

  // function t3() {
  //   let a = 25;
  //   let sum = '';
  //   while (a > 6) {
  //     sum += a + ' ';
  //     a--;
  //   }
  //   return sum;
  // }

  // b3.onclick = () => {
  //   out3.innerHTML = t3();
  // };

  // const out4 = document.querySelector('.out-4');
  // const b4 = document.querySelector('.b-4');

  // function t4() {
  //   let a = 77;
  //   let sum = '';
  //   while (a > 24) {
  //     sum += a + '_';
  //     a--;
  //   }
  //   return sum;
  // }

  // b4.onclick = () => {
  //   out4.innerHTML = t4();
  // };

  // const out5 = document.querySelector('.out-5');
  // const b5 = document.querySelector('.b-5');

  // function t5() {
  //   let a = 1;
  //   let sum = '';
  //   while (a <= 17) {
  //     a % 2 == 0 ? (sum += a + '_**') : (sum += a + '_*');
  //     a++;
  //   }
  //   return sum;
  // }

  // b5.onclick = () => {
  //   out5.innerHTML = t5();
  // };

  // const out6 = document.querySelector('.out-6');
  // const b6 = document.querySelector('.b-6');

  // function t6() {
  //   let a = 0;
  //   let z = '';
  //   while (a < 3) {
  //     let i = 0;
  //     while (i < 6) {
  //       z += '*';
  //       i++;
  //     }
  //     z += '<br>';
  //     a++;
  //   }
  //   return z;
  // }

  // b6.onclick = () => {
  //   out6.innerHTML = t6();
  // };

  // const out7 = document.querySelector('.out-7');
  // const b7 = document.querySelector('.b-7');
  // const i7 = document.querySelector('#i-7');

  // function t7() {
  //   let sum = '';
  //   if (+i7.value <= 0) {
  //     return 'Напиши цисло больше нуля';
  //   }
  //   while (+i7.value >= 0) {
  //     sum += +i7.value + ' ';
  //     +i7.value--;
  //   }
  //   return sum;
  // }

  // b7.onclick = () => {
  //   out7.innerHTML = t7();
  // };

  // const out8 = document.querySelector('.out-8');
  // const i81 = document.querySelector('#i-81');
  // const i82 = document.querySelector('#i-82');
  // const b8 = document.querySelector('.b-8');

  // function t8() {
  //   let sum = '';
  //   if (+i81.value > +i82.value) {
  //     while (+i82.value <= +i81.value) {
  //       sum += +i81.value + ' ';
  //       +i81.value--;
  //     }
  //     return sum;
  //   } else {
  //     while (+i81.value <= +i82.value) {
  //       sum += +i82.value + ' ';
  //       +i82.value--;
  //     }
  //     return sum;
  //   }
  // }

  // b8.onclick = () => {
  //   out8.innerHTML = t8();
  // };

  // const out10 = document.querySelector('.out-10');
  // const b10 = document.querySelector('#b-10');

  // function t10(a) {
  //   let sum = '';
  //   while (a <= 2000) {
  //     sum += a + ' ';
  //     a = a + 2;
  //   }
  //   return sum;
  // }

  // b10.onclick = () => {
  //   out10.innerHTML = t10(1950);
  // };

  // const div11 = document.querySelectorAll('.div-11');
  // const b11 = document.querySelector('#b-11');
  // const out11 = document.querySelector('.out-11');

  // function t11() {
  //   let sum = '';
  //   let a = 0;
  //   while (a < div11.length) {
  //     sum += div11[a].innerHTML + ' ';
  //     a++;
  //   }
  //   return sum;
  // }

  // b11.onclick = () => {
  //   out11.innerHTML = t11();
  // };

  // const div12 = document.querySelectorAll('.div-12');
  // const b12 = document.querySelector('#b-12');

  // function t12() {
  //   let i = 0;
  //   while (i < div12.length) {
  //     div12[i].style.background = 'orange';
  //     i++;
  //   }
  // }

  // b12.onclick = () => {
  //   t12();
  // };

  // const b13 = document.querySelector('#b-13');
  // const i13 = document.querySelectorAll('#i-13');

  // function t13() {
  //   let i = 0;
  //   while (i < i13.length) {
  //     i13[i].value = i + 1;
  //     i++;
  //   }
  // }

  // b13.onclick = t13;

  // const b14 = document.querySelector('#b-14');
  // const i14 = document.querySelectorAll('#i-14');
  // const out14 = document.querySelector('.out-14');

  // function t14() {
  //   let i = 0;
  //   let sum = '';
  //   while (i < i14.length) {
  //     if (i14[i].checked) {
  //       sum += i14[i].value;
  //     }
  //     i++;
  //   }
  //   return sum;
  // }

  // b14.onclick = () => {
  //   out14.innerHTML = t14();
  // };

  // const b15 = document.querySelector('#b-15');
  // const out15 = document.querySelector('.out-15');

  // function t15() {
  //   let i = 0;
  //   let sum = '';
  //   while (i <= 10){
  //     sum += `${10 - i} ${i} `
  //     i++
  //   }
  //   return sum
  // }

  // b15.onclick = () => {
  //   out15.innerHTML = t15()
  // }
};
