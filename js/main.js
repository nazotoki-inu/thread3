document.querySelectorAll(".link-item a").forEach(link => {

    link.addEventListener("click", function(){

        this.classList.add("clicked");

    });

});