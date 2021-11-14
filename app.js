// I already selected these elements and signed them as variables so we can save up some time.
// You can pause and do the same...
const img_container = document.querySelector('.preview');
const img = document.querySelector('.preview img');
const input = document.querySelector('input');
const file_name = document.querySelector('.file_name');

input.addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        img_container.style.display = 'block';

        const reader = new FileReader()
        reader.onload = function () {
            const result = reader.result;
            img.src = result;

            file_name.innerText = file.name;
        }
        reader.readAsDataURL(file);
    }
})