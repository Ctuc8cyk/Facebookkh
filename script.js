// زر البدء
document.getElementById('start-button').addEventListener('click', function() {
  document.querySelector('body > div').style.display = 'none';
  document.getElementById('registration-page').style.display = 'block';
});

// زر K
document.getElementById('k-button').addEventListener('click', function() {
  document.querySelector('body > div').style.display = 'none';
  document.getElementById('password-page').style.display = 'block';
});

// تخزين بيانات المستخدم بعد التسجيل
document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const userInfo = {
    fullName: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    profileLink: document.getElementById('profileLink').value,
    password: document.getElementById('password').value
  };
  
  // تخزين بيانات المستخدم في localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(userInfo);
  localStorage.setItem('users', JSON.stringify(users));
  
  document.getElementById('registration-page').style.display = 'none';
  document.getElementById('confirmation-page').style.display = 'block';
});

// التحقق من كلمة المرور وعرض جميع المعلومات
document.getElementById('password-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const adminPassword = document.getElementById('adminPassword').value;
  if (adminPassword === "4109") {
    document.getElementById('password-page').style.display = 'none';
    document.getElementById('user-info-page').style.display = 'block';

    // عرض جميع معلومات المستخدمين
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userInfoList = document.getElementById('user-info-list');
    userInfoList.innerHTML = '';

    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `
        <p>الاسم الكامل: ${user.fullName}</p>
        <p>البريد الإلكتروني: ${user.email}</p>
        <p>رقم الهاتف: ${user.phone}</p>
        <p>رابط الملف الشخصي: <a href="${user.profileLink}" target="_blank">${user.profileLink}</a></p>
        <hr>
      `;
      userInfoList.appendChild(userDiv);
    });
  } else {
    alert("كلمة المرور غير صحيحة!");
  }
});
