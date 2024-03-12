window.addEventListener('load', function(event) {
    var select = document.getElementById('renginiu-temu-sarasas');
    if (select) {
        var button = document.querySelector('.renginiu-temos button');
        button.addEventListener('click', function() {
            location.href = document.getElementById('renginiu-temu-sarasas').value;
        });
    }
});