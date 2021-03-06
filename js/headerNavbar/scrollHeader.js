let scrollTop = 0;
const search_input = document.querySelector('#search_input');
const top_bar = document.querySelector('#top_bar');
const menubar_parent = document.querySelector(".menu_bar");
const input_box = document.querySelector('#input_box');
const user_profile = document.querySelector('.user_profile');
const header = document.querySelector('.header');
let shrink_items = document.querySelectorAll('header.header .top_bar .menu_bar .menu_bar_inner .shrink');
window.onscroll = () => {
    if (document.documentElement.scrollTop > scrollTop && document.documentElement.scrollTop > 120) {
        search_input.placeholder = "Tìm kiếm";
        top_bar.classList.add("top_bar_scroll");
        menubar_parent.classList.add('menubar_scroll');
        input_box.classList.add('input_scroll');
        if (shrink_items) {
            shrink_items.forEach((item, key) => {
                if (key === 0) {
                    item.style.transform = 'translateX(100%) scale(0)';
                } else {
                    item.style.transform = 'translateX(-100%) scale(0)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 100)
                }
            });
        }
        header.classList.add('header_scroll');
        user_profile.classList.add('scroll');
        scrollTop = document.documentElement.scrollTop;
    } else {
        search_input.placeholder = "Nhập tên bài hát, ca sĩ hoặc mv…";
        top_bar.classList.remove("top_bar_scroll");
        menubar_parent.classList.remove('menubar_scroll');
        input_box.classList.remove('input_scroll');
        if (shrink_items) {
            shrink_items.forEach(item => {
                item.style.transform = 'translateX(0) scale(1)';
                item.style.display = 'block';
            });
        }
        header.classList.remove('header_scroll');
        user_profile.classList.remove('scroll');
        scrollTop = document.documentElement.scrollTop;
    }
}