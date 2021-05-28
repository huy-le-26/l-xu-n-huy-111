
// // bài2
// merge2String = (s1, s2) => {
//     var j = Math.min(s1.length, s2.length),
//         temp = '';

//     for (a = 0; a < j; a++) {
//         temp += s1[a] + s2[a];
//     }
//     return temp + s1.slice(a) + s2.slice(a);
// }

// console.log(merge2String('abc', '123'));
// console.log(merge2String('abc', '0123'));
// console.log(merge2String('abcd', '123'));

// bài 1
//   const findOppositeNumber = function(n, inputNumber) {
//     result = 0;
//     if (n % 2 > 0 && n % 2 < 0) {
//         alert(" số n không thỏa mãn điều kiện đề bài")
//     } else {
//         if (inputNumber < n / 2) {
//             result = inputNumber + n / 2;
//         } else if (inputNumber > n / 2) {
//             result = inputNumber - n / 2;
//         }
//     };
//     return result;
// }
// console.log(findOppositeNumber(10, 2));
// console.log(findOppositeNumber(10, 6))

// bài 3

let count = 0
luckyNumber = () => {
    kp = Math.round(10 * Math.random());
    count++

    number = document.getElementById("Lucky").value;
    console.log(number)

    if (count > 3) {
        alert(" chơi lại nhé :))")
        button.getAttribute("disable", true);
        document.getElementById("Lucky").disabled = true;

    } else {

        if (number > 10 || number < 1) {
            console.log(" bạn nhập  số không đủ điều kiện , vui lòng nhập lại")

        } else if (number !== kp) {
            alert(`bạn sai rồi , mời chơi lại  , kết quả đúng là ${kp}`)

        } else if (number == kp) {
            alert(`kết quả đúng rồi , chúc mừng bạn nhé`)
        }

    }

}


