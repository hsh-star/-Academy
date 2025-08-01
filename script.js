// سيتم إضافة الأكواد لاحقًا 

document.addEventListener('DOMContentLoaded', function() {
  const studentTab = document.getElementById('studentTab');
  const adminTab = document.getElementById('adminTab');
  const studentForm = document.getElementById('studentForm');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const langBtn = document.getElementById('langToggle');
  const mainForms = document.querySelector('.main-forms');

  studentTab.addEventListener('click', function() {
    studentTab.classList.add('active');
    adminTab.classList.remove('active');
    studentForm.style.display = '';
    adminLoginForm.style.display = 'none';
  });

  adminTab.addEventListener('click', function() {
    adminTab.classList.add('active');
    studentTab.classList.remove('active');
    adminLoginForm.style.display = '';
    studentForm.style.display = 'none';
  });

  // نصوص بالإنجليزية
  const texts = {
    ar: {
      academy: 'أكاديمية أفنان لتعليم القرآن وعلومه',
      manager: 'مديرة الأكاديمية: الشيخة نظيرة ودن',
      desc: 'نظام تسجيل حضور وانصراف حلقة الشيخة نظيرة ودن - حفظها الله - تجويد أفنان طالبات الدُفعة الأولى المستوى الثاني',
      studentTab: 'تسجيل الطالبة',
      adminTab: 'الإدارة',
      formTitle: 'تسجيل الحضور / الانصراف',
      nameLabel: 'اسم الطالبة:',
      namePlaceholder: 'ادخلي اسمك الكامل',
      checkIn: 'تسجيل الحضور',
      checkOut: 'تسجيل الانصراف',
      adminTitle: 'دخول الإدارة',
      adminUser: 'اسم المستخدم:',
      adminPass: 'كلمة المرور:',
      adminUserPlaceholder: 'اسم المستخدم',
      adminPassPlaceholder: 'كلمة المرور',
      langBtn: 'English',
      rights: 'جميع الحقوق محفوظة © أكاديمية أفنان لتعليم القرآن وعلومه - مديرة الأكاديمية: الأستاذة نظيرة ودن',
      loginError: 'اسم المستخدم أو كلمة المرور غير صحيحة',
      loginSuccess: 'تم تسجيل الدخول بنجاح!',
      manageAdmins: 'إدارة المشرفين',
      addAdmin: 'إضافة مشرف',
      save: 'حفظ',
      delete: 'حذف',
      username: 'اسم المستخدم',
      password: 'كلمة المرور',
      adminList: 'قائمة المشرفين',
      close: 'إغلاق'
    },
    en: {
      academy: 'Afnan Academy for Quranic Sciences',
      manager: 'Academy Director: Sheikha Nadhira Wadan',
      desc: 'Attendance & Departure System for Tajweed Class, First Batch, Level 2',
      studentTab: 'Student Attendance',
      adminTab: 'Admin',
      formTitle: 'Attendance / Departure Registration',
      nameLabel: 'Student Name:',
      namePlaceholder: 'Enter your full name',
      checkIn: 'Check In',
      checkOut: 'Check Out',
      adminTitle: 'Admin Login',
      adminUser: 'Username:',
      adminPass: 'Password:',
      adminUserPlaceholder: 'Username',
      adminPassPlaceholder: 'Password',
      langBtn: 'العربية',
      rights: 'All rights reserved © Afnan Academy for Quranic Sciences - Director: Ustatha Nadhira Wadan',
      loginError: 'Incorrect username or password',
      loginSuccess: 'Login successful!',
      manageAdmins: 'Manage Admins',
      addAdmin: 'Add Admin',
      save: 'Save',
      delete: 'Delete',
      username: 'Username',
      password: 'Password',
      adminList: 'Admins List',
      close: 'Close'
    }
  };

  let currentLang = 'ar';

  langBtn.addEventListener('click', function() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    // Header
    document.querySelector('.academy-title').textContent = texts[currentLang].academy;
    document.querySelector('.manager').textContent = texts[currentLang].manager;
    document.querySelector('.system-desc').textContent = texts[currentLang].desc;
    // Tabs
    studentTab.textContent = texts[currentLang].studentTab;
    adminTab.textContent = texts[currentLang].adminTab;
    // Student Form
    studentForm.querySelector('.form-title').textContent = texts[currentLang].formTitle;
    studentForm.querySelector('.form-label').textContent = texts[currentLang].nameLabel;
    studentForm.querySelector('.form-input').placeholder = texts[currentLang].namePlaceholder;
    studentForm.querySelector('#checkInBtn').textContent = texts[currentLang].checkIn;
    studentForm.querySelector('#checkOutBtn').textContent = texts[currentLang].checkOut;
    // Admin Form
    adminLoginForm.querySelector('.form-title').textContent = texts[currentLang].adminTitle;
    adminLoginForm.querySelectorAll('.form-label')[0].textContent = texts[currentLang].adminUser;
    adminLoginForm.querySelectorAll('.form-label')[1].textContent = texts[currentLang].adminPass;
    adminLoginForm.querySelectorAll('.form-input')[0].placeholder = texts[currentLang].adminUserPlaceholder;
    adminLoginForm.querySelectorAll('.form-input')[1].placeholder = texts[currentLang].adminPassPlaceholder;
    // Lang Button
    langBtn.textContent = texts[currentLang].langBtn;
    // Footer
    document.querySelector('footer').textContent = texts[currentLang].rights;
    // إدارة المشرفين
    if(document.getElementById('manageAdminsBtn')) document.getElementById('manageAdminsBtn').textContent = texts[currentLang].manageAdmins;
    if(document.getElementById('adminListTitle')) document.getElementById('adminListTitle').textContent = texts[currentLang].adminList;
    if(document.getElementById('addAdminBtn')) document.getElementById('addAdminBtn').textContent = texts[currentLang].addAdmin;
    if(document.getElementById('closeAdminsBtn')) document.getElementById('closeAdminsBtn').textContent = texts[currentLang].close;
    document.querySelectorAll('.admin-username-label').forEach(e=>e.textContent=texts[currentLang].username+':');
    document.querySelectorAll('.admin-password-label').forEach(e=>e.textContent=texts[currentLang].password+':');
    document.querySelectorAll('.admin-save-btn').forEach(e=>e.textContent=texts[currentLang].save);
    document.querySelectorAll('.admin-delete-btn').forEach(e=>e.textContent=texts[currentLang].delete);
  });

  // تحميل المشرفين من LocalStorage أو القيمة الافتراضية
  function loadAdmins() {
    let admins = localStorage.getItem('afnan_admins');
    if (admins) return JSON.parse(admins);
    return [ { username: 'Afnan Academy', password: 'Afnan Academy' } ];
  }
  function saveAdmins(admins) {
    localStorage.setItem('afnan_admins', JSON.stringify(admins));
  }
  let admins = loadAdmins();

  adminLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = adminLoginForm.querySelectorAll('.form-input')[0].value.trim();
    const pass = adminLoginForm.querySelectorAll('.form-input')[1].value.trim();
    const found = admins.some(a => a.username === user && a.password === pass);
    const msg = document.getElementById('adminMessage');
    if (found) {
      msg.style.color = '#217a2b';
      msg.textContent = texts[currentLang].loginSuccess;
      setTimeout(() => showAdminPanel(), 700);
    } else {
      msg.style.color = '#8b1c1c';
      msg.textContent = texts[currentLang].loginError;
    }
  });

  // لوحة تحكم الإدارة وإدارة المشرفين
  function showAdminPanel() {
    mainForms.innerHTML = `
      <div class="admin-panel-box">
        <button id="manageAdminsBtn" class="form-btn gold-btn" style="max-width:220px;margin:0 auto 1.5rem auto;display:block;">${texts[currentLang].manageAdmins}</button>
        <div id="adminsManager" style="display:none;"></div>
      </div>
    `;
    document.getElementById('manageAdminsBtn').onclick = showAdminsManager;
  }

  function showAdminsManager() {
    const adminsManager = document.getElementById('adminsManager');
    adminsManager.style.display = 'block';
    adminsManager.innerHTML = `
      <h3 id="adminListTitle" style="text-align:center;margin-bottom:1rem;">${texts[currentLang].adminList}</h3>
      <div id="adminsList"></div>
      <button id="addAdminBtn" class="form-btn green-btn" style="max-width:180px;margin:1rem auto 0 auto;display:block;">${texts[currentLang].addAdmin}</button>
      <button id="closeAdminsBtn" class="form-btn gold-btn" style="max-width:180px;margin:1rem auto 0 auto;display:block;">${texts[currentLang].close}</button>
    `;
    renderAdminsList();
    document.getElementById('addAdminBtn').onclick = addAdminRow;
    document.getElementById('closeAdminsBtn').onclick = function(){ adminsManager.style.display = 'none'; };
  }

  function renderAdminsList() {
    const list = document.getElementById('adminsList');
    list.innerHTML = '';
    admins.forEach((admin, idx) => {
      const row = document.createElement('div');
      row.style.display = 'flex';
      row.style.gap = '0.5rem';
      row.style.alignItems = 'center';
      row.style.marginBottom = '0.5rem';
      row.innerHTML = `
        <label class="admin-username-label" style="font-weight:bold;">${texts[currentLang].username}:</label>
        <input type="text" value="${admin.username}" style="padding:0.3rem 0.5rem;border:1px solid #e0c97c;border-radius:6px;width:120px;">
        <label class="admin-password-label" style="font-weight:bold;">${texts[currentLang].password}:</label>
        <input type="password" value="${admin.password}" style="padding:0.3rem 0.5rem;border:1px solid #e0c97c;border-radius:6px;width:120px;">
        <button class="admin-save-btn form-btn green-btn" style="max-width:70px;padding:0.3rem 0.5rem;font-size:0.9rem;">${texts[currentLang].save}</button>
        <button class="admin-delete-btn form-btn gold-btn" style="max-width:70px;padding:0.3rem 0.5rem;font-size:0.9rem;">${texts[currentLang].delete}</button>
      `;
      // حفظ التعديلات
      row.querySelector('.admin-save-btn').onclick = function() {
        const newUser = row.querySelectorAll('input')[0].value.trim();
        const newPass = row.querySelectorAll('input')[1].value.trim();
        if(newUser && newPass) {
          admins[idx] = { username: newUser, password: newPass };
          saveAdmins(admins);
          renderAdminsList();
        }
      };
      // حذف مشرف
      row.querySelector('.admin-delete-btn').onclick = function() {
        if(admins.length > 1) {
          admins.splice(idx,1);
          saveAdmins(admins);
          renderAdminsList();
        } else {
          alert('يجب أن يبقى مشرف واحد على الأقل!');
        }
      };
      list.appendChild(row);
    });
  }

  function addAdminRow() {
    admins.push({ username: '', password: '' });
    renderAdminsList();
  }

}); 