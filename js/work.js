let workBtn = document.querySelectorAll('.work__btn');


workBtn.forEach(item => item.addEventListener('click', () => {
    workBtn.forEach(el=>{ el.classList.remove('active'); });

    item.classList.add('active')
}))

