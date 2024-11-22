function toggleAccordion(id) {
    const content = document.getElementById(id);
    const arrow = document.getElementById(`arrow-${id}`);
    const button = content.previousElementSibling.querySelector('span');

    // Ẩn/Hiện nội dung accordion
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        arrow.classList.add('rotate-180');
        button.classList.add('text-blue-700'); // Thay đổi màu chữ khi mở
        button.classList.remove('text-black');
    } else {
        content.classList.add('hidden');
        arrow.classList.remove('rotate-180');
        button.classList.remove('text-blue-700'); // Đặt lại màu đen khi đóng
        button.classList.add('text-black');
    }
}
