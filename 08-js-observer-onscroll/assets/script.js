let observer = new IntersectionObserver(ent=>{
    ent.forEach(obj=>{

        if(obj.isIntersecting){
            obj.target.classList.add('show')
            // observer.unobserve(obj.target)
        }else{
            obj.target.classList.remove('show')

        }
        
    })
    
},)


document.querySelectorAll('.item').forEach(el=>{
    observer.observe(el)
})