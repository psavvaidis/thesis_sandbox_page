$(document).ready(()=>{
    $(".colors").click(applyColorsTransformations)
})

const applyColorsTransformations = () =>{
    $("main").css({'transition':'300ms','color':'#FFF','background-color':'#000'})
}