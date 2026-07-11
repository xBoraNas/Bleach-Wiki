
let currentLang = 'en'; 

const translations = {
    'en': {
        // Ortak ve Navigasyon
        'web-title': 'BLEACH WIKI',
        'nav-home': 'Home',
        'nav-human': 'Human World',
        'nav-society': 'Soul Society',
        'nav-hueco': 'Hueco Mundo',
        'nav-form': 'Form',
        'settings-text': 'Settings',
        'skip-text': 'Skip to Content',
        'explore-more': 'Explore More:',
        'modal-desc': 'This area shows the detailed view of the viewed world.',
        'val-ichigo-birthday': 'July 15',
        'val-aizen-birthday': 'May 29',
        'val-grimmjow-birthday': 'July 31',
                
        // Home Sayfası
        'home-title': 'Home Page',
        'home-intro': 'Welcome to the most comprehensive source of information on the Bleach universe! Here, you can explore everything from the ordinary streets of Karakura Town to the majestic palaces of the Soul Society and the endless white deserts of Hueco Mundo. Join the journey of Substitute Shinigami Ichigo Kurosaki and delve into the stories of the Captains who maintain the balance between worlds.',
        'fact-label': 'Fact:',
        'fact-content': 'Shinigami maintain the balance between the Human World and the Soul Society.',
        
        // Human World Sayfası
        'human-intro': 'The <strong>Human World</strong>, also known as the <strong>World of the Living</strong>, serves as the starting point for the entire Bleach saga. Primarily centered in <strong>Karakura Town</strong>, this realm appears ordinary on the surface but is actually a high-density spiritual zone. It is home to a unique group of humans who possess high spiritual awareness, allowing them to perceive the spirits that dwell among the living. Because this world is a prime target for Hollows—monstrous spirits seeking to devour souls—it serves as a constant battlefield. Under the watchful eye of the Substitute Shinigami and their allies, the balance between life and death is maintained here, protecting the peaceful lives of those unaware of the spiritual dangers lurking in their own streets.',
        'char-ichigo-desc': 'A high school student who can see ghosts. Lost his mother as a child to an attack by Hollows. Acquires Soul Reaper powers through an encounter with Rukia Kuchiki and becomes a Substitute Soul Reaper. Through the turmoil that embroiled the World of the Living, the Soul Society, and Hueco Mundo, he gains the trust of the other Soul Reapers and lives up to his position. Although he was forced to face his true heritage during the Wandenreich invasion, he still chose to pick up his sword again to protect everyone.',
        'profile-title': 'Profile Data',
        'label-birthday': 'Birthday',
        'label-zanpakuto': 'Zanpakuto',
        'label-height': 'Height',
        'label-affiliation': 'Affiliation',
        'val-affiliation': 'Substitute Shinigami',
        'voice-sample': 'Character Voice Sample:',
        'attacks-title': 'Special Attacks',
        'allies-title': 'Human Allies',
        'video-desc-title': 'Video Description',
        'video-desc-content': 'The scene begins with Ichigo Kurosaki gripping his black sword, Zangetsu, with both hands. He raises the blade high above his head while shouting "Getsuga Tensho". As he swings the sword down with immense force, a massive crescent-shaped wave of blue and white spiritual energy is unleashed. The energy blast tears through the rocky ground, creating a deep crater and sending dust clouds into the air as it travels directly toward the viewer.',
        'video-desc-content-2':'Ichigo wields his dual blades, crossing them in front of his chest in an X-shape. He shouts "Getsuga Jujisho" as intense golden energy gathers at the point where the blades meet. He thrusts forward, firing a massive cross-shaped blast that illuminates the area and creates a powerful shockwave.',
        'allies-summary': 'View Human Allies List',
        'allies-caption': 'Detailed list of Ichigo\'s allies and their abilities',
        'th-character': 'Character',
        'th-race': 'Race',
        'th-power': 'Special Power',
        'th-status': 'Combat Status',

        // Soul Society Sayfası
        'society-intro': 'The <strong>Soul Society</strong> is the spiritual realm where deceased souls are guided by Shinigami and where the protectors of the worlds reside. Architecturally resembling Feudal Japan, it is divided into two main sections: the sprawling Rukongai, where common souls live, and the Seireitei, the fortified center home to the nobility and the Gotei 13. As the headquarters of the Shinigami, the Soul Society governs the flow of souls between worlds, ensuring the cosmic balance is never disrupted. However, beneath its serene and ancient appearance lies a rigid hierarchy and a complex history of laws, traditions, and legendary battles that have shaped the fate of existence itself.',
        'char-aizen-desc': 'Once captain of Squad 5 of the Thirteen Court Guard Squads. Responsible for the turmoil involving the Soul Society and Hueco Mundo. Sealed following a battle with the Soul Reapers and Ichigo. Currently imprisoned in the Central Underground Great Prison Muken.',
        'label-shinigami': 'Shinigami',

        // Hueco Mundo Sayfası
        'hueco-intro': '<strong>Hueco Mundo</strong>, the world of the Hollows, is a hauntingly beautiful dimension of eternal night. Located between the Human World and the Soul Society, it is a vast, barren desert of endless white sand, dotted with quartz-like trees. This is a realm where only the strong survive, ruled by the Arrancars—Hollows who have torn off their masks to gain Shinigami-like powers. At the heart of this desolate landscape stands Las Noches, a massive fortress that serves as the base for Aizen’s army of Espada. In Hueco Mundo, the moon never sets, and the air is thick with spiritual pressure, creating a world of constant hunger and lethal elegance.',
        'char-grimmjow-desc': 'The 6th Espada in Sōsuke Aizen\'s army of Arrancars. Known for his violent, impulsive, and hot-headed personality, he is a warrior driven by a primal instinct to fight and prove his dominance.',
        'label-power': 'Power',
        
        // Form Sayfası
        'form-contact-us': 'Contact Us',
        'form-subtext': 'Send your message via your spiritual energy',
        'form-name': 'Name:',
        'form-question': 'WHICH WORLD ARE YOU FROM?',
        'form-message': 'Your Message:',
        'form-terms': 'I have read and accept the Soul Society terms.',
        'form-news': 'I\'d like to subscribe to newspaper.',
        'form-submit': 'SUBMIT',
        'form-reset': 'RESET'
    },
    'tr': {
        // Ortak ve Navigasyon
        'web-title': 'BLEACH VİKİ',
        'nav-home': 'Ana Sayfa',
        'nav-human': 'İnsan Dünyası',
        'nav-society': 'Ruh Cemiyeti',
        'nav-hueco': 'Hueco Mundo',
        'nav-form': 'Form',
        'settings-text': 'Ayarlar',
        'skip-text': 'İçeriğe Atla',
        'explore-more': 'Daha Fazlasını Keşfet:',
        'modal-desc': 'Bu alan, görüntülenen dünyanın detaylı görünümünü gösterir.',
        'val-ichigo-birthday': '15 Temmuz',
        'val-aizen-birthday': '29 Mayıs',
        'val-grimmjow-birthday': '31 Temmuz',
        
        // Home Sayfası
        'home-title': 'Ana Sayfa',
        'home-intro': 'Bleach evreni hakkındaki en kapsamlı bilgi kaynağına hoş geldiniz! Burada, Karakura Kasabası\'nın sıradan sokaklarından Ruh Cemiyeti\'nin görkemli saraylarına ve Hueco Mundo\'nun sonsuz beyaz çöllerine kadar her şeyi keşfedebilirsiniz. Yedek Şinigami Ichigo Kurosaki\'nin yolculuğuna katılın ve dünyalar arasındaki dengeyi koruyan Kaptanların hikayelerine dalın.',
        'fact-label': 'Bilgi:',
        'fact-content': 'Şinigamiler, İnsan Dünyası ile Ruh Cemiyeti arasındaki dengeyi korurlar.',
        
        // Human World Sayfası
        'human-intro': 'Yaşayanların Dünyası olarak da bilinen <strong>İnsan Dünyası</strong>, tüm Bleach efsanesinin başlangıç noktasıdır. Esas olarak <strong>Karakura Kasabası</strong> merkezli olan bu diyar, yüzeyde sıradan görünür ancak aslında yüksek yoğunluklu bir ruhsal bölgedir. Burası, yaşayanlar arasında yaşayan ruhları algılamalarını sağlayan yüksek ruhsal farkındalığa sahip benzersiz bir insan grubuna ev sahipliği yapar. Bu dünya, ruhları yutmaya çalışan canavarca ruhlar olan Hollowlar için birincil hedef olduğundan, sürekli bir savaş alanı görevi görür. Yedek Şinigami ve müttefiklerinin gözetimi altında, yaşam ve ölüm arasındaki denge burada korunur.',
        'char-ichigo-desc': 'Hayaletleri görebilen bir lise öğrencisi. Çocukken annesini bir Hollow saldırısında kaybetti. Rukia Kuchiki ile tanışarak Ölüm Meleği güçleri kazandı ve Yedek Ölüm Meleği oldu. Yaşayanlar Dünyası, Ruh Cemiyeti ve Hueco Mundo\'yu içine alan kargaşalar boyunca diğer Ölüm Meleklerinin güvenini kazandı ve konumunun hakkını verdi. Wandenreich istilası sırasında gerçek mirasıyla yüzleşmek zorunda kalsa da, herkesi korumak için kılıcını tekrar eline almayı seçti.',
        'profile-title': 'Profil Verileri',
        'label-birthday': 'Doğum Günü',
        'label-zanpakuto': 'Zanpaktou',
        'label-height': 'Boy',
        'label-affiliation': 'Bağlılık',
        'val-affiliation': 'Yedek Şinigami',
        'voice-sample': 'Karakter Ses Örneği:',
        'attacks-title': 'Özel Saldırılar',
        'allies-title': 'İnsan Müttefikler',
        'video-desc-title': 'Video Açıklaması',
        'video-desc-content': 'Sahne, Ichigo Kurosaki"nin siyah kılıcı Zangetsu"yu iki eliyle kavramasıyla başlar. Kılıcı başının üstüne kaldırırken "Getsuga Tensho" diye bağırır. Kılıcı muazzam bir güçle aşağı doğru savurduğunda, devasa bir hilal şeklinde mavi ve beyaz ruhsal enerji dalgası açığa çıkar. Enerji patlaması kayalık zemini parçalayarak derin bir krater oluşturur ve doğrudan izleyiciye doğru ilerlerken havaya toz bulutları savurur.',
        'video-desc-content-2':'Ichigo, çift kılıcını göğsünün önünde X şeklinde çaprazlayarak kullanır. Kılıçların birleştiği noktada yoğun altın rengi bir enerji toplanırken "Getsuga Jujisho" diye bağırır. İleri doğru hamle yaparak, bölgeyi aydınlatan ve güçlü bir şok dalgası yaratan devasa, haç şeklinde bir patlama ateşler.',
        'allies-summary': 'İnsan Müttefik Listesini gör',
        'allies-caption': 'Ichigo\'nun müttefiklerinin ve yeteneklerinin detaylı listesi',
        'th-character': 'Karakter',
        'th-race': 'Irk',
        'th-power': 'Özel Güç',
        'th-status': 'Savaş Durumu',

        // Soul Society Sayfası
        'society-intro': '<strong>Ruh Cemiyeti</strong>, ölen ruhların Şinigamiler tarafından yönlendirildiği ve dünyaların koruyucularının yaşadığı ruhsal alemdir. Mimari olarak Feodal Japonya\'ya benzeyen bölge iki ana kısma ayrılır: sıradan ruhların yaşadığı geniş Rukongai ve soylular ile Gotei 13\'e ev sahipliği yapan tahkim edilmiş merkez Seireitei. Şinigamilerin genel merkezi olarak Ruh Cemiyeti, dünyalar arasındaki ruh akışını yönetir ve kozmik dengenin asla bozulmamasını sağlar. Ancak sakin ve kadim görünümünün altında katı bir hiyerarşi ve varoluşun kaderini şekillendiren efsanevi savaşların tarihi yatar.',
        'char-aizen-desc': 'Bir zamanlar 13 Takım\'ın 5. Takım kaptanıydı. Ruh Cemiyeti ve Hueco Mundo\'yu kapsayan kargaşanın sorumlusudur. Şinigamiler ve Ichigo ile yapılan bir savaşın ardından mühürlendi. Şu anda Merkezi Yeraltı Büyük Hapishanesi Muken\'de tutukludur.',
        'label-shinigami': 'Şinigami',

        // Hueco Mundo Sayfası
        'hueco-intro': 'Hollowların dünyası olan <strong>Hueco Mundo</strong>, ebedi gecenin musallat olduğu güzel bir boyuttur. İnsan Dünyası ile Ruh Cemiyeti arasında yer alan bu diyar, kuvars benzeri ağaçlarla bezeli, uçsuz bucaksız beyaz kumlarla kaplı devasa ve çorak bir çöldür. Burası, sadece güçlülerin hayatta kaldığı, Şinigami benzeri güçler kazanmak için maskelerini yırtan Hollowlar olan Arrancarlar tarafından yönetilen bir alemdir. Bu ıssız manzaranın merkezinde, Aizen\'in Espada ordusu için üs görevi gören devasa bir kale olan Las Noches yükselir.',
        'char-grimmjow-desc': 'Sōsuke Aizen\'in Arrancar ordusundaki 6. Espada. Şiddetli, fevri ve sabırsız kişiliğiyle tanınan, savaşma ve üstünlüğünü kanıtlama içgüdüsüyle hareket eden bir savaşçıdır.',
        'label-power': 'Güç',
        
        // Form Sayfası
        'form-contact-us': 'Bize Ulaşın',
        'form-subtext': 'Mesajınızı ruhsal enerjinizle gönderin',
        'form-name': 'İsim:',
        'form-question': 'HANGİ DÜNYADANSINIZ?',
        'form-message': 'Mesajınız:',
        'form-terms': 'Ruh Cemiyeti şartlarını okudum ve kabul ediyorum.',
        'form-news': 'Gazeteye abone olmak istiyorum.',
        'form-submit': 'GÖNDER',
        'form-reset': 'SIFIRLA'
    }
};


const changeLanguage = (lang) => {
    currentLang = lang;
    
   
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    
    const btnTr = document.getElementById('btn-tr');
    const btnEn = document.getElementById('btn-en');

    if (lang === 'tr') {
        btnTr?.classList.add('active-lang');
        btnEn?.classList.remove('active-lang');
    } else {
        btnEn?.classList.add('active-lang');
        btnTr?.classList.remove('active-lang');
    }

   
    const activeLink = document.querySelector('#main-navigation a.active');
    if (activeLink) {
        const pageKey = activeLink.getAttribute('data-key');
        document.title = (translations[lang][pageKey] || 'Bleach Wiki') + ' - Bleach Wiki';
    }

   
    const settingsSpan = document.querySelector('#utility-toggle .text');
    if (settingsSpan) {
        settingsSpan.textContent = translations[lang]['settings-text'];
    }
};


document.getElementById('btn-tr')?.addEventListener('click', () => changeLanguage('tr'));
document.getElementById('btn-en')?.addEventListener('click', () => changeLanguage('en'));


const utilityContainer = document.getElementById('utility-container');
const utilityToggle = document.getElementById('utility-toggle');

if (utilityToggle && utilityContainer) {
    utilityToggle.addEventListener('click', function(e) {
        e.preventDefault();
        utilityContainer.classList.toggle('expanded');
        utilityContainer.classList.toggle('collapsed');
    });
}

let currentFS = 1.2; 
const updateFS = (step) => {
    currentFS = Math.min(Math.max(currentFS + step, 0.9), 1.8);
    const selectors = [
        '.content-text', '#info-sidebar p', '#info-sidebar strong', 
        '.world-card p', '.world-card h3', '#main-navigation a', 
        '#webpage-title', '#main-title', '#main-footer p', 
        '#external-title', '#external-link-p a', '.char-description', 
        '.profile-table td', '.cv-text', '.section-title', 
        '.attacks-title', '.video-caption', '.video-description p',
        '.video-description summary', '.allies-title', '#table-caption',
        '.form-header h4',        // "Contact Us" başlığı
        '.form-header-p',        // "Send your message..." alt metni
        '.label-style',          // "WHICH WORLD ARE YOU FROM?" sorusu
        '.form-group label',     // "Name" ve "Your Message" etiketleri
        '.checkbox-group span',  // "I have read..." onay kutusu yazıları
        '.footer-copy',          // Footer telif yazısı
        '.footer-legal'
    ].join(', ');
    
    document.querySelectorAll(selectors).forEach(el => {
        el.style.fontSize = currentFS + 'rem';
    });
};

document.getElementById('font-up')?.addEventListener('click', () => updateFS(0.1));
document.getElementById('font-down')?.addEventListener('click', () => updateFS(-0.1));


function expandImage(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    if (modal) {
        modal.style.display = "block";
        modalImg.src = imgElement.src;
        captionText.innerHTML = `<strong>${imgElement.alt}</strong><br><small>${translations[currentLang]['modal-desc']}</small>`;
    }
}
document.querySelector(".close")?.addEventListener('click', () => {
    document.getElementById("imageModal").style.display = "none";
});

const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    darkModeBtn.textContent = '☀️'; 
}

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        darkModeBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeBtn.textContent = '🌙';
    }
});