let numbers = []; // Mảng chứa các số

// Thêm số vào mảng
function addNumber() {
    const input = document.querySelector('input[type="number"]').value;
    if (input === "") {
        alert("Vui lòng nhập số!");
        return;
    }
    numbers.push(Number(input));
    document.getElementById("result-ThemSo").innerText = `Mảng hiện tại: [${numbers}]`;
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

// Tìm số chẵn cuối cùng
function findLastEvenNumber() {
    const lastEven = numbers.slice().reverse().find((num) => num % 2 === 0);
    document.getElementById("result-TimSoChan").innerText = `Số chẵn cuối cùng: ${lastEven ?? -1}`;
}

// Đổi chỗ hai giá trị
function swapPositions() {
    const pos1 = Number(document.getElementById("ViTri1").value);
    const pos2 = Number(document.getElementById("ViTri2").value);
    if (pos1 < 0 || pos1 >= numbers.length || pos2 < 0 || pos2 >= numbers.length) {
        alert("Vị trí không hợp lệ!");
        return;
    }
    const temp = numbers[pos1];
    numbers[pos1] = numbers[pos2];
    numbers[pos2] = temp;
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
    const prime = numbers.find((num) => isPrime(num));
    document.getElementById("result-TimNT").innerText = `Số nguyên tố đầu tiên: ${prime ?? -1}`;
}

// Đếm số nguyên trong mảng số thực
function countIntegers() {
    const count = numbers.filter((num) => Number.isInteger(num)).length;
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