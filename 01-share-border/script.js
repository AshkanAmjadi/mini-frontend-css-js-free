document.querySelectorAll('.wraper > *').forEach((el, idx) => {
  el.style.animationDelay = (idx * 0.08) + 's'; // ۰.۱۲ ثانیه به ازای هر آیتم
});