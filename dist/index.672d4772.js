$(document).ready(()=>{
    const startButton = ()=>{
        const el = $("#start-btn");
        el.on("click", ()=>{
            $(".start-message").slideUp();
            $(el).slideUp();
            $(".calculator").slideDown(start);
        });
    };
    startButton();
});

//# sourceMappingURL=index.672d4772.js.map
