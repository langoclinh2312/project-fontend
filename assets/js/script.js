// header

// bắt sự kiện bấm onclok
language_btn.onclick = function() {
    language_list.classList.toggle('language-open');
}

var list = document.getElementsByClassName("option");

//  khởi tạo ra oncilck ẩn 
for (let i = 0; i < list.length; i++) {
    // gán oncilck bằng fuction
    list[i].onclick = function() {
        // lấy dữ liệu người dùng chọn gán lại lên dữ liệu cũ ()
        language_btn.innerHTML = this.textContent;
        // remove lại phần tử cũ
        for (let j = 0; j < list.length; j++) {
            // remove xóa calss 
            list[j].classList.remove('color');
        }
        // add thêm calss vào phần tử 
        this.classList.add('color');
        // toggle ko có thêm  class vào phần tử , có thì cắt 
        language_list.classList.toggle('language-open');

    }
}

// header
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('header-fixed');
        Headertop.style.display = "none";
    } else {
        Headertop.style.display = "block";
        header.classList.remove('header-fixed');
    }
}

// form
var form = document.forms['form_login'];
var error = document.getElementsByClassName("error");
var rog_name = /^[A-Z]{5,}$/;
var rog_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/;

form.name.onblur = function() {
    if (form.name.value == '') {
        errorname.innerHTML = 'vui lòng nhập họ tên';
        error.innerHTML = '';
    } else {
        errorname.innerHTML = '';
    }
}
form.email.onblur = function() {
    if (form.email.value == '') {
        erroremail.innerHTML = 'vui lòng nhập email';
        error.innerHTML = '';
    } else {
        erroremail.innerHTML = '';
    }
}

form.password.onblur = function() {
    if (form.password.value == '') {
        errorpassword.innerHTML = 'vui lòng nhập mật khẩu';
        error.innerHTML = '';
    } else {
        errorpassword.innerHTML = '';
    }
}

// quy định in hoa
form.onsubmit = function() {
    if (!rog_name.test(form.name.value)) {
        errorname.innerHTML = 'họ tên là chữ in hoa';
        error.innerHTML = '';
        return false;
    } else {
        errorname.innerHTML = '';
    }
    if (!rog_password.test(form.password.value)) {
        errorpassword.innerHTML = 'mật khẩu không đúng định dạng( gồm chữ hoa,thường,số và ký tự đặc biệt )';
        error.innerHTML = '';
        return false;
    } else {
        errorpassword.innerHTML = '';
    }
}