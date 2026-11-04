// 等待 HTML 文件完全載入後再執行腳本
document.addEventListener("DOMContentLoaded", function () {

    // 1. 處理導覽列平滑捲動與位移 (Offset)
    // 因為上方有一個固定的導覽列，如果只用 CSS 的 smooth scroll，標題可能會被導覽列擋住
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerHeight = document.querySelector('.navbar').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 防止預設的跳轉行為

            // 取得目標區塊的 id (例如 #about)
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // 計算目標區塊距離頂部的距離，並減去導覽列的高度
                const targetPosition = targetSection.offsetTop - headerHeight;

                // 使用 JavaScript 執行平滑捲動
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. 處理聯絡表單送出事件
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // 防止表單送出後重新整理頁面

            // 取得使用者輸入的姓名
            const userName = document.getElementById('name').value;

            // 彈出提示視窗 (Alert)
            alert(`謝謝您，${userName}！\n我們已收到您的留言，菠特傑團隊會盡快與您聯繫。`);

            // 清空表單內容
            contactForm.reset();
        });
    }
});