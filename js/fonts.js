$(document).ready(()=>{
    $(".fonts").click(applyFontsTransformations)
})

const applyFontsTransformations = () =>{
    $("main p").attr('style','font-family:none !important')
}