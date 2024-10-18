 let arr = new Uint8Array([0,255,132,47]); // only we can store 1byte nummber from 0 to 255
 
 console.log(arr);
 console.log(arr[1]);

 arr[2] =2000; // this will exceed the limit of unit8 so it calculated by modulo operation and store as 208
 console.log(arr);
 