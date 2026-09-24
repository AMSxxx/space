// 1. قاعدة بيانات الأحداث التاريخية المحدثة بالتنسيق الجديد
const spaceData = {
    earth: {
        title: "Earth - Space Milestones",
        history: `<ul>
                    <li><b>1957:</b> Sputnik 1, the first artificial satellite, was launched into orbit from Earth.</li>
                    <li><b>1961:</b> Yuri Gagarin became the first human in space, orbiting Earth for 108 minutes.</li>
                    <li><b>1990:</b> The Hubble Space Telescope was launched from Earth to capture deep space images.</li>
                  </ul>`
    },
    moon: {
        title: "The Moon - Lunar Conquest",
        history: `<ul>
                    <li><b>1959:</b> Luna 2 became the first human-made object to reach the surface of the Moon.</li>
                    <li><b>1969:</b> Apollo 11 successfully landed. Neil Armstrong became the first human to walk on the Moon.</li>
                    <li><b>2024:</b> NASA's Artemis program accelerates plans to return humans to the Moon.</li>
                  </ul>`
    },
    mars: {
        title: "Mars - The Robotic Era",
        history: `<ul>
                    <li><b>1971:</b> Mariner 9 became the first spacecraft to orbit another planet (Mars).</li>
                    <li><b>1997:</b> Sojourner, the first successful Mars rover, began exploring the red planet's surface.</li>
                    <li><b>2021:</b> Perseverance rover landed in Jezero Crater, searching for signs of ancient life.</li>
                  </ul>`
    }
};

// 2. تحديد عناصر واجهة المستخدم (DOM Elements)
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');
const exploreButtons = document.querySelectorAll('.explore-btn');

// 3. ربط أزرار الاستكشاف بالتفاعل مع الأنيميشن اللذيذ
exploreButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const planets = ['earth', 'moon', 'mars'];
        const currentPlanet = planets[index];
        
        modalTitle.innerHTML = spaceData[currentPlanet].title;
        modalBody.innerHTML = spaceData[currentPlanet].history;
        
        // نجهز الكرت وهو مصغر ومخفي أولاً
        modal.classList.add('fade-out');
        modal.classList.remove('hidden');
        
        // نخليه يكبر ويظهر بنعومة ل تلاحظ الحركة
        setTimeout(() => {
            modal.classList.remove('fade-out');
        }, 10);
    });
});

// وظيفة الإغلاق بنعومة (Fade out)
function closeModal() {
    modal.classList.add('fade-out');
    // ننتظر 400 ملي ثانية (نفس وقت أنيميشن الـ CSS) ثم نخفيه تماماً
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 400);
}

// 4. إغلاق الصندوق عند الضغط على زر X الدائري
closeBtn.addEventListener('click', closeModal);

// 5. إغلاق الصندوق عند الضغط بالخارج في أي مكان فاضي
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


// 6. جعل سهم الهيدر ينزل بالمستخدم بسلاسة لأول كوكب
const scrollIndicator = document.querySelector('.scroll-indicator');
const firstPlanetSection = document.querySelector('.timeline-item');

scrollIndicator.addEventListener('click', () => {
    firstPlanetSection.scrollIntoView({ behavior: 'smooth' });
});

// 3. ربط أزرار الاستكشاف بالتفاعل مع الأنيميشن وتشغيل الصوت
exploreButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const planets = ['earth', 'moon', 'mars'];
        const currentPlanet = planets[index];
        
        modalTitle.innerHTML = spaceData[currentPlanet].title;
        modalBody.innerHTML = spaceData[currentPlanet].history;
        
        // تشغيل الصوت الفضائي المدمج بدون مكتبات الخارجية
        // يمكنك استبدال الرابط بمسار ملفك المحلي مثل: 'audio/open.mp3'
        const clickSound = new Audio('./audio/open.mp3'); 
        clickSound.volume = 0.4; // خفض الصوت قليلاً ليكون ناعماً (من 0 إلى 1)
        clickSound.play();
        
        // نجهز الكرت وهو مصغر ومخفي أولاً
        modal.classList.add('fade-out');
        modal.classList.remove('hidden');
        
        // نخليه يكبر ويظهر بنعومة لتلاحظ الحركة
        setTimeout(() => {
            modal.classList.remove('fade-out');
        }, 10);
    });
});
