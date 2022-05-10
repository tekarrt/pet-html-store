// Логика работы кнопки "добавить в избранное"

let items = document.getElementsByClassName('svg-like');

for (let x = 0; x < items.length; x++) {
    let item = items[x];
    item.addEventListener('click', function (fn) {
        fn.target.classList.toggle('svg-like-active');
    });
}

// Lozad

const lozad = window.lozad;
const observer = lozad('.lozad', {
    load: function (el) {
        // В логах можно посмотреть как прогружаються изображения
        console.log('loading element');
    }
    })
observer.observe();






