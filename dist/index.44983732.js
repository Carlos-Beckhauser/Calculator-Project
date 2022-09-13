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

//# sourceMappingURL=index.44983732.js.map
