// Mobile submenu toggle para pantallas pequeñas 
    document.addEventListener('DOMContentLoaded', function() {
        if(window.innerWidth <= 850) {
            document.querySelectorAll('.dropdown > a').forEach(function(el) {
                el.addEventListener('click', function(e) {
                    e.preventDefault();
                    var parent = this.parentElement;
                    parent.classList.toggle('active');
                });
            });
        }
    });