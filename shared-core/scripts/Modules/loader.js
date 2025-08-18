export function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.insertBefore(script, document.querySelector('#mainjs'))
        script.onload = () => resolve(script); // با موفقیت بارگذاری شد
        script.onerror = () => reject(new Error(`اسکریپت در آدرس ${src} بارگذاری نشد`));
        



        

    });
}
