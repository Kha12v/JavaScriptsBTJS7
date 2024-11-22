let numbers = []; // Mảng chứa các số
let newNumbers = [];  // Mảng chứa các số cho bài 9

// Thêm số vào mảng
function addNumber() {
    const input = document.querySelector('input[type="number"]').value;
    if (input === "") {
        alert("Vui lòng nhập số!");
        return;
    }
    const num = Number(input);
    if (!Number.isInteger(num)) {  // Kiểm tra nếu số không phải số nguyên
        alert("Vui lòng nhập số nguyên!");
        return;  // Dừng hàm nếu không phải số nguyên
    }
    numbers.push(num); // Thêm số nguyên vào mảng
    document.getElementById("result-ThemSo").innerText = `Mảng hiện tại: [${numbers}]`;
    document.getElementById("result-ThemDeDemSo").innerText = `Mảng hiện tại: [${newNumbers}]`;
    document.querySelector('input[type="number"]').value = "";
}

// Tính tổng các số dương
function calculatePositiveSum() {
    const sum = numbers.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
    document.getElementById("result-TongSoDuong").innerText = `Tổng số dương: ${sum}`;
}

// Đếm số dương
function countPositiveNumbers() {
    const count = numbers.filter((num) => num > 0).length;
    document.getElementById("result-DemSoDuong").innerText = `Số lượng số dương: ${count}`;
}

// Tìm số nhỏ nhất
function findSmallestNumber() {
    if (numbers.length === 0) {
        document.getElementById("result-TimSoNhoNhat").innerText = "Mảng trống!";
        return;
    }
    const min = Math.min(...numbers);
    document.getElementById("result-TimSoNhoNhat").innerText = `Số nhỏ nhất: ${min}`;
}

// Tìm số dương nhỏ nhất
function findSmallestPositiveNumber() {
    const positiveNumbers = numbers.filter((num) => num > 0);
    if (positiveNumbers.length === 0) {
        document.getElementById("result-TimSoDNhoNhat").innerText = "Không có số dương!";
        return;
    }
    const minPositive = Math.min(...positiveNumbers);
    document.getElementById("result-TimSoDNhoNhat").innerText = `Số dương nhỏ nhất: ${minPositive}`;
}

// Tìm số chẵn cuối cùng bằng vòng lặp
function findLastEvenNumber() {
    let lastEven = 0; // Khởi tạo biến chứa số chẵn cuối cùng, mặc định là -1

    // Duyệt mảng từ cuối đến đầu
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            lastEven = numbers[i]; // Gán số chẵn cuối cùng
            break; // Thoát khỏi vòng lặp sau khi tìm thấy số chẵn đầu tiên (cuối cùng trong mảng)
        }
    }

    // Hiển thị kết quả
    document.getElementById("result-TimSoChan").innerText = `Số chẵn cuối cùng: ${lastEven}`;
}

// Đổi chỗ hai giá trị
function swapPositions() {
    const pos1 = Number(document.getElementById("ViTri1").value); // Lấy vị trí 1
    const pos2 = Number(document.getElementById("ViTri2").value); // Lấy vị trí 2

    // Kiểm tra tính hợp lệ của vị trí
    if (isNaN(pos1) || isNaN(pos2) || pos1 < 0 || pos1 >= numbers.length || pos2 < 0 || pos2 >= numbers.length) {
        alert("Vị trí không hợp lệ! Vui lòng nhập vị trí là chỉ số trong mảng.");
        return;
    }

    // Hoán đổi vị trí bằng cách sử dụng biến tạm
    const temp = numbers[pos1]; // Lưu giá trị của phần tử ở vị trí 1 vào biến tạm
    numbers[pos1] = numbers[pos2]; // Gán giá trị của phần tử ở vị trí 2 vào vị trí 1
    numbers[pos2] = temp; // Gán giá trị biến tạm vào vị trí 2

    // Hiển thị kết quả
    document.getElementById("result-DoiCho").innerText = `Mảng sau khi đổi chỗ: [${numbers}]`;
}


// Sắp xếp tăng dần
function sortArray() {
    numbers.sort((a, b) => a - b);
    document.getElementById("result-SapXep").innerText = `Mảng đã sắp xếp: [${numbers}]`;
}

// Tìm số nguyên tố đầu tiên
function findFirstPrime() {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let prime = -1; // Mặc định là -1 nếu không tìm thấy
    for (let num of numbers) {
        if (isPrime(num)) {
            prime = num; // Gán số nguyên tố đầu tiên
            break;       // Dừng vòng lặp ngay khi tìm thấy
        }
    }

    // Hiển thị kết quả
    if (prime === -1) {
        document.getElementById("result-TimNT").innerText = "Không tìm thấy số nguyên tố trong mảng.";
    } else {
        document.getElementById("result-TimNT").innerText = `Số nguyên tố đầu tiên: ${prime}`;
    }
}

// Tính số lượng số nguyên
function countIntegers() {
    const count = newNumbers.filter(num => Number.isInteger(num)).length;
    document.getElementById("result-DemSo").innerText = `Số lượng số nguyên: ${count}`;
}

// So sánh số lượng số dương và số âm
function comparePositiveNegative() {
    const positives = numbers.filter((num) => num > 0).length;
    const negatives = numbers.filter((num) => num < 0).length;
    let result = "Số dương bằng số âm!";
    if (positives > negatives) result = "Số dương nhiều hơn số âm!";
    else if (positives < negatives) result = "Số âm nhiều hơn số dương!";
    document.getElementById("result-SoSanh").innerText = result;
}