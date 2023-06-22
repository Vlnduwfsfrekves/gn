function loadImage(entry){
    const img=entry.target
    img.src=img.getAttribute('data-src')
    observer.unobserve(img)
}
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            loadImage(entry)
        }
    })
})
const images=document.querySelectorAll('img[data-src]')
images.forEach((img)=>{
    observer.observe(img)
})