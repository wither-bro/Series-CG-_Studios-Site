const output = document.getElementById('output');
const text = "Инициализация Series(CG) Studios... \nДоступ разрешен. \nВведите команду для начала работы...";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        output.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Скорость печати
    }
}

// Запускаем при загрузке страницы
window.onload = typeWriter;
