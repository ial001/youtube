// ==========================================
// 1. ระบบตรวจสอบอินเทอร์เน็ต & Splash Screen
// ==========================================

function checkInternetConnection() {
    const splash = document.getElementById('splash-screen');
    const loader = document.getElementById('splash-loader');
    const statusText = document.getElementById('net-status-text');
    const retryBtn = document.getElementById('retry-net-btn');

    if (!splash) return;

    if (navigator.onLine) {
        if (loader) loader.style.display = 'block';
        if (retryBtn) retryBtn.style.display = 'none';
        if (statusText) {
            statusText.style.color = '#10b981';
            statusText.textContent = 'เชื่อมต่ออินเทอร์เน็ตสำเร็จ!';
        }

        setTimeout(() => {
            splash.classList.add('hide');
        }, 1200);

    } else {
        if (splash.classList.contains('hide')) {
            splash.classList.remove('hide');
        }
        if (loader) loader.style.display = 'block';
        if (retryBtn) retryBtn.style.display = 'none';
        if (statusText) {
            statusText.style.color = '#aaa';
            statusText.textContent = 'กำลังตรวจสอบการเชื่อมต่ออินเทอร์เน็ต...';
        }
    }
}

window.addEventListener('load', () => {
    checkInternetConnection();
    initApp();
});
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);


// ==========================================
// 2. ข้อมูลจำลอง (Mock Data)
// ==========================================

const SAMPLE_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const SAMPLE_SHORT_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

const storiesData = [
    { id: 1, name: 'TechDaily', avatar: 'https://picsum.photos/seed/user1/100', contentBg: '#1e3d59', text: '🚀 เปิดตัวเทคโนโลยีใหม่ล่าสุดประจำปี!' },
    { id: 2, name: 'TravelVibe', avatar: 'https://picsum.photos/seed/user2/100', contentBg: '#17b978', text: '🌴 บรรยากาศทะเลวันนี้สดใสมากกก' },
    { id: 3, name: 'ChefHome', avatar: 'https://picsum.photos/seed/user3/100', contentBg: '#ff6e40', text: '🍳 สอนทำเมนูลับฉบับคนงบน้อย' },
    { id: 4, name: 'GameMaster', avatar: 'https://picsum.photos/seed/user4/100', contentBg: '#7c3aed', text: '🎮 สตรีมเกมยาวไปคืนนี้ เจอกัน!' },
    { id: 5, name: 'MusicStation', avatar: 'https://picsum.photos/seed/user5/100', contentBg: '#db2777', text: '🎵 เพลงใหม่ปล่อยแล้ว ไปฟังกันเลย' }
];

let videosData = [
    { id: 1, title: 'สร้างเว็บด้วย HTML CSS แบบจัดเต็มใน 1 ชั่วโมง', channel: 'Dev Code', views: '1.2ล้าน ครั้ง', time: '2 วันที่แล้ว', thumb: 'https://picsum.photos/seed/vid1/400/225', videoUrl: SAMPLE_VIDEO_URL },
    { id: 2, title: 'ตะลุยสตรีทฟู้ดกรุงเทพ กินแหลก 10 ร้านดัง!', channel: 'Foodie Guide', views: '450K ครั้ง', time: '1 สัปดาห์ที่แล้ว', thumb: 'https://picsum.photos/seed/vid2/400/225', videoUrl: SAMPLE_VIDEO_URL },
    { id: 3, title: 'รีวิวห้องนอนมินิมอล งบหลักพัน แต่งออกมาสวยมาก', channel: 'Home Studio', views: '89K ครั้ง', time: '3 วันที่แล้ว', thumb: 'https://picsum.photos/seed/vid3/400/225', videoUrl: SAMPLE_VIDEO_URL },
    { id: 4, title: 'รวมเพลงฟังสบายๆ ตอนทำงาน โฟกัสยาวๆ', channel: 'Lofi Vibes', views: '3.4ล้าน ครั้ง', time: '1 เดือนที่แล้ว', thumb: 'https://picsum.photos/seed/vid4/400/225', videoUrl: SAMPLE_VIDEO_URL }
];

const shortsData = [
    { id: 101, title: 'เทคนิคเขียน CSS แบบโปร! 🔥', views: '50K', bg: 'https://picsum.photos/seed/short1/300/500', videoUrl: SAMPLE_SHORT_URL },
    { id: 102, title: 'พาสุนัขไปเที่ยวสวนสาธารณะ 🐶', views: '120K', bg: 'https://picsum.photos/seed/short2/300/500', videoUrl: SAMPLE_SHORT_URL },
    { id: 103, title: 'สูตรกาแฟทำง่ายที่บ้าน ☕', views: '85K', bg: 'https://picsum.photos/seed/short3/300/500', videoUrl: SAMPLE_SHORT_URL }
];

const notesData = [
    { id: 1, name: 'ของฉัน', avatar: 'https://picsum.photos/seed/user1/100', note: 'Hanging with friends!' },
    { id: 2, name: 'Lucas Kato', avatar: 'https://picsum.photos/seed/user2/100', note: 'Who is free today? 🔥' },
    { id: 3, name: 'Maya Ortiz', avatar: 'https://picsum.photos/seed/user3/100', note: 'Is this thing on?' },
    { id: 4, name: 'Miley Cyrus', avatar: 'https://picsum.photos/seed/user5/100', note: 'New Song! 🎵' }
];

const chatUsersData = [
    { id: 1, name: 'Lalisa Wongsuwan', lastMsg: 'lol not today • 2m', avatar: 'https://picsum.photos/seed/chat1/100' },
    { id: 2, name: 'Marissa Richmond', lastMsg: 'Did you leave yet? • 4m', avatar: 'https://picsum.photos/seed/chat2/100' },
    { id: 3, name: 'Arielle Shekel', lastMsg: 'Wait, is that real? • 30m', avatar: 'https://picsum.photos/seed/chat3/100' },
    { id: 4, name: 'Nikos De Jager', lastMsg: 'Sounds good! Let\'s do it • 45m', avatar: 'https://picsum.photos/seed/chat4/100' }
];

const gameActivityData = [
    { id: 1, game: 'VALORANT', playTime: '2 ชั่วโมง 45 นาที', date: '1 พฤศจิกายน 2026', icon: 'fa-crosshairs' },
    { id: 2, game: 'Genshin Impact', playTime: '1 ชั่วโมง 30 นาที', date: '31 ตุลาคม 2026', icon: 'fa-wand-magic-sparkles' },
    { id: 3, game: 'Grand Theft Auto V', playTime: '45 นาที', date: '28 ตุลาคม 2026', icon: 'fa-car' },
    { id: 4, game: 'Minecraft', playTime: '4 ชั่วโมง 10 นาที', date: '25 ตุลาคม 2026', icon: 'fa-cube' }
];


// ==========================================
// 3. ฟังก์ชันเรนเดอร์เนื้อหาหลัก
// ==========================================

function renderStories() {
    const storiesContainer = document.getElementById('stories-container');
    if (!storiesContainer) return;
    storiesContainer.innerHTML = storiesData.map(story => `
        <div class="story-card" onclick="openStory(${story.id})">
            <div class="story-ring">
                <img src="${story.avatar}" class="story-thumb" alt="${story.name}">
            </div>
            <span>${story.name}</span>
        </div>
    `).join('');
}

function createVideoHTML(video) {
    return `
        <div class="video-card" onclick="openVideoPlayer('${video.title}', '${video.channel}', '${video.views}', '${video.videoUrl}')" style="cursor: pointer;">
            <img src="${video.thumb}" class="video-thumbnail" alt="thumbnail">
            <div class="video-info-container">
                <div class="channel-icon"></div>
                <div class="video-details">
                    <h3>${video.title}</h3>
                    <p>${video.channel}</p>
                    <p>${video.views} • ${video.time}</p>
                </div>
            </div>
        </div>
    `;
}

function renderVideos(filterText = '') {
    const videoGrid = document.getElementById('video-grid');
    const filteredVideos = videosData.filter(v => 
        v.title.toLowerCase().includes(filterText.toLowerCase()) ||
        v.channel.toLowerCase().includes(filterText.toLowerCase())
    );

    if (videoGrid) {
        if (filteredVideos.length === 0) {
            videoGrid.innerHTML = '<p style="color:#aaa; grid-column: 1/-1; text-align:center; padding: 40px 0;">ไม่พบวิดีโอที่คุณค้นหา 🔍</p>';
        } else {
            videoGrid.innerHTML = filteredVideos.map(createVideoHTML).join('');
        }
    }

    const exploreGrid = document.getElementById('explore-grid');
    if (exploreGrid) exploreGrid.innerHTML = [...videosData].reverse().map(createVideoHTML).join('');

    const subGrid = document.getElementById('subscriptions-grid');
    if (subGrid) subGrid.innerHTML = videosData.slice(0, 2).map(createVideoHTML).join('');

    const historyGrid = document.getElementById('history-grid');
    if (historyGrid) historyGrid.innerHTML = videosData.map(createVideoHTML).join('');
}

const mainSearchInput = document.getElementById('main-search-input');
const searchBtn = document.querySelector('.search-btn');

if (mainSearchInput) {
    mainSearchInput.addEventListener('input', (e) => {
        renderVideos(e.target.value.trim());
    });
}
if (searchBtn && mainSearchInput) {
    searchBtn.addEventListener('click', () => {
        renderVideos(mainSearchInput.value.trim());
    });
}

function renderShorts() {
    const shortsContainer = document.getElementById('shorts-container');
    if (!shortsContainer) return;
    shortsContainer.innerHTML = shortsData.map(s => `
        <div class="short-card" onclick="openVideoPlayer('${s.title}', 'Shorts', 'ยอดชม ${s.views} ครั้ง', '${s.videoUrl}')" style="background-image: url('${s.bg}'); cursor: pointer;">
            <div class="short-info">
                <h4>${s.title}</h4>
                <p style="font-size:0.8rem; color:#ccc;">ยอดชม ${s.views} ครั้ง</p>
            </div>
        </div>
    `).join('');
}


// ==========================================
// 4. Dynamic VIP Items Generator (120 Themes & 120 Frames)
// ==========================================

function generate120Themes() {
    const themes = [];
    for (let i = 0; i < 120; i++) {
        const hue1 = (i * 3) % 360;
        const hue2 = (hue1 + 45) % 360;
        themes.push({
            id: i + 1,
            color1: `hsl(${hue1}, 80%, 45%)`,
            color2: `hsl(${hue2}, 85%, 35%)`,
            gradient: `linear-gradient(135deg, hsl(${hue1}, 80%, 45%), hsl(${hue2}, 85%, 35%))`
        });
    }
    return themes;
}

function generate120Frames() {
    const frames = [];
    const effectTypes = ['glow', 'double', 'dashed', 'neon', 'shadow'];
    
    for (let i = 0; i < 120; i++) {
        const hue = (i * 3) % 360;
        const type = effectTypes[i % effectTypes.length];
        
        let cssStyle = '';
        if (type === 'glow') {
            cssStyle = `border: 4px solid hsl(${hue}, 90%, 50%); box-shadow: 0 0 12px hsl(${hue}, 90%, 50%);`;
        } else if (type === 'double') {
            cssStyle = `border: 4px double hsl(${hue}, 90%, 60%); box-shadow: 0 0 8px hsl(${hue}, 90%, 60%);`;
        } else if (type === 'dashed') {
            cssStyle = `border: 4px dashed hsl(${hue}, 100%, 50%);`;
        } else if (type === 'neon') {
            cssStyle = `border: 4px solid #fff; box-shadow: 0 0 10px hsl(${hue}, 100%, 50%), inset 0 0 10px hsl(${hue}, 100%, 50%);`;
        } else {
            cssStyle = `border: 4px solid hsl(${hue}, 80%, 50%); filter: drop-shadow(0 0 6px hsl(${hue}, 80%, 50%));`;
        }

        frames.push({
            id: i + 1,
            style: cssStyle,
            name: `Frame ${i + 1}`
        });
    }
    return frames;
}

const vipThemesList = generate120Themes();
const vipFramesList = generate120Frames();

function renderVipThemeSelector() {
    const container = document.getElementById('banner-theme-selector');
    if (!container) return;

    const currentThemeId = localStorage.getItem('streamgram_selected_theme_id') || 1;

    container.innerHTML = vipThemesList.map(t => `
        <div class="vip-theme-dot ${t.id == currentThemeId ? 'selected' : ''}" 
             style="background: ${t.gradient};" 
             title="ธีมแบบที่ ${t.id}"
             onclick="selectVipBannerTheme(${t.id})">
        </div>
    `).join('');
}

function renderVipFrameSelector() {
    const container = document.getElementById('avatar-frame-selector');
    if (!container) return;

    const currentFrameId = localStorage.getItem('streamgram_selected_frame_id') || 0;

    container.innerHTML = `
        <div class="vip-frame-option ${currentFrameId == 0 ? 'selected' : ''}" title="ไม่ใส่กรอบ" onclick="selectVipAvatarFrame(0)">
            <div class="vip-frame-preview-mini"></div>
        </div>
    ` + vipFramesList.map(f => `
        <div class="vip-frame-option ${f.id == currentFrameId ? 'selected' : ''}" 
             style="${f.style}" 
             title="${f.name}" 
             onclick="selectVipAvatarFrame(${f.id})">
            <div class="vip-frame-preview-mini"></div>
        </div>
    `).join('');
}

window.selectVipBannerTheme = function(themeId) {
    if (!isUserVIP) {
        alert('สิทธิ์ปรับแต่งธีมแบนเนอร์สำหรับสมาชิก VIP เท่านั้น!');
        return;
    }
    const theme = vipThemesList.find(t => t.id === themeId);
    if (!theme) return;

    const banner = document.getElementById('user-profile-banner');
    if (banner) banner.style.background = theme.gradient;

    localStorage.setItem('streamgram_selected_theme_id', themeId);
    localStorage.setItem('streamgram_profile_theme', JSON.stringify({ color1: theme.color1, color2: theme.color2 }));
    
    renderVipThemeSelector();
};

window.selectVipAvatarFrame = function(frameId) {
    if (!isUserVIP) {
        alert('สิทธิ์ปรับแต่งกรอบรูปเอฟเฟกต์สำหรับสมาชิก VIP เท่านั้น!');
        return;
    }

    const avatarBox = document.getElementById('avatar-click-zone');
    if (!avatarBox) return;

    if (frameId === 0) {
        avatarBox.style.cssText = '';
        localStorage.removeItem('streamgram_selected_frame_id');
    } else {
        const frame = vipFramesList.find(f => f.id === frameId);
        if (frame) {
            avatarBox.style.cssText = frame.style;
            localStorage.setItem('streamgram_selected_frame_id', frameId);
        }
    }
    renderVipFrameSelector();
};


// ==========================================
// 5. ระบบ Profile & Account Management
// ==========================================

let accounts = JSON.parse(localStorage.getItem('streamgram_accounts')) || [
    { id: 1, name: 'Dev Channel (หลัก)', avatar: 'https://picsum.photos/seed/acc1/100', bio: 'นักพัฒนาเว็บสายการสร้างโซเชียลมีเดีย' },
    { id: 2, name: 'Gamer Pro', avatar: 'https://picsum.photos/seed/acc2/100', bio: 'สตรีมเมอร์เกมเมอร์สายฮาร์ดคอร์' }
];

let currentAccountIndex = parseInt(localStorage.getItem('streamgram_current_acc')) || 0;
let isUserVIP = localStorage.getItem('streamgram_is_vip') === 'true';
let currentVipPrice = 99;

const VALID_SHARED_CODES = {
    "STREAM2026": "ยินดีด้วย! คุณได้รับสิทธิ์สมาชิก VIP ฟรี 30 วัน 🎉",
    "VIPFRIEND20": "ส่วนลด 20% จากเพื่อน VIP! 🎉"
};

const currentUserAvatar = document.getElementById('current-user-avatar');
const toggleEditModeBtn = document.getElementById('toggle-edit-mode-btn');
const profileEditBox = document.getElementById('profile-edit-box');
const editProfileForm = document.getElementById('edit-profile-form');
const editProfileName = document.getElementById('edit-profile-name');
const editProfileBio = document.getElementById('edit-profile-bio');

const avatarClickZone = document.getElementById('avatar-click-zone');
const profileAvatarFileInput = document.getElementById('profile-avatar-file-input');

const logoutBtn = document.getElementById('logout-btn');
const accountsList = document.getElementById('accounts-list');
const addAccountBtn = document.getElementById('add-account-btn');
const newAccountNameInput = document.getElementById('new-account-name');

const vipBuyModal = document.getElementById('vip-buy-modal');
const openVipModalBtn = document.getElementById('open-vip-modal-btn');
const closeVipModalBtn = document.getElementById('close-vip-modal');
const confirmPayVipBtn = document.getElementById('confirm-pay-vip-btn');
const generateCodeBtn = document.getElementById('generate-code-btn');
const generatedVipCodeInput = document.getElementById('generated-vip-code');
const applyDiscountBtn = document.getElementById('apply-discount-btn');
const vipDiscountInput = document.getElementById('vip-discount-input');
const discountMsg = document.getElementById('discount-msg');

let tempAvatarSrc = '';

function navigateToProfilePage() {
    sidebarItems.forEach(i => i.classList.remove('active'));
    const channelSidebarItem = document.querySelector('.sidebar-item[data-page="channel"]');
    if (channelSidebarItem) channelSidebarItem.classList.add('active');

    pageViews.forEach(view => {
        if (view.id === 'view-channel') {
            view.classList.add('active-view');
        } else {
            view.classList.remove('active-view');
        }
    });

    updateProfileUI();
}

if (currentUserAvatar) {
    currentUserAvatar.addEventListener('click', navigateToProfilePage);
}

function updateProfileUI() {
    if (currentAccountIndex >= accounts.length) currentAccountIndex = 0;
    const activeAcc = accounts[currentAccountIndex] || accounts[0];
    
    const nameEl = document.getElementById('user-profile-name');
    const tagEl = document.getElementById('user-profile-tag');
    const bioEl = document.getElementById('user-profile-bio');

    if (nameEl) nameEl.textContent = activeAcc.name;
    if (tagEl) tagEl.textContent = `@${activeAcc.name.toLowerCase().replace(/\s+/g, '_')}`;
    if (bioEl) bioEl.textContent = activeAcc.bio || 'ไม่มีคำอธิบาย';

    if (editProfileName) editProfileName.value = activeAcc.name;
    if (editProfileBio) editProfileBio.value = activeAcc.bio || '';
    tempAvatarSrc = activeAcc.avatar;

    const mainAvatarEl = document.getElementById('user-profile-avatar');
    if (mainAvatarEl) mainAvatarEl.style.backgroundImage = `url(${activeAcc.avatar})`;

    if (currentUserAvatar) {
        currentUserAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
        currentUserAvatar.style.backgroundSize = 'cover';
    }

    if (accountsList) {
        accountsList.innerHTML = accounts.map((acc, index) => `
            <div class="account-item-card ${index === currentAccountIndex ? 'active' : ''}">
                <div class="acc-info-mini">
                    <img src="${acc.avatar}" class="acc-avatar-mini" alt="${acc.name}">
                    <div>
                        <strong style="font-size: 0.85rem; color: #fff; display: block;">${acc.name}</strong>
                        <span style="font-size: 0.75rem; color: ${index === currentAccountIndex ? '#3ea6ff' : '#888'};">
                            ${index === currentAccountIndex ? '● ใช้งานอยู่' : 'สลับบัญชี'}
                        </span>
                    </div>
                </div>
                ${index !== currentAccountIndex ? `
                    <button class="primary-btn" onclick="switchAccount(${index})" style="padding: 4px 10px; font-size: 0.75rem; background: #282828; border: 1px solid #444;">
                        สลับ
                    </button>
                ` : '<span style="color:#3ea6ff; font-size:0.75rem;"><i class="fa-solid fa-check"></i> ใช้งานอยู่</span>'}
            </div>
        `).join('');
    }

    const activeAccCountEl = document.getElementById('active-acc-count');
    if (activeAccCountEl) activeAccCountEl.textContent = `${accounts.length} บัญชีในระบบ`;

    const vipBadge = document.getElementById('vip-status-badge');
    const vipBox = document.getElementById('vip-exclusive-box');
    
    if (isUserVIP) {
        if (vipBadge) vipBadge.style.display = 'inline-block';
        if (vipBox) vipBox.style.display = 'block';
        if (openVipModalBtn) openVipModalBtn.querySelector('span').textContent = '🌟 VIP แล้ว';

        renderVipThemeSelector();
        renderVipFrameSelector();

        const savedThemeId = localStorage.getItem('streamgram_selected_theme_id');
        if (savedThemeId) {
            const theme = vipThemesList.find(t => t.id == savedThemeId);
            const banner = document.getElementById('user-profile-banner');
            if (theme && banner) banner.style.background = theme.gradient;
        }

        const savedFrameId = localStorage.getItem('streamgram_selected_frame_id');
        if (savedFrameId && savedFrameId != 0) {
            const frame = vipFramesList.find(f => f.id == savedFrameId);
            const avatarBox = document.getElementById('avatar-click-zone');
            if (frame && avatarBox) avatarBox.style.cssText = frame.style;
        }

    } else {
        if (vipBadge) vipBadge.style.display = 'none';
        if (vipBox) vipBox.style.display = 'none';
        if (openVipModalBtn) openVipModalBtn.querySelector('span').textContent = 'สมัคร VIP';
    }

    const userVidsEl = document.getElementById('profile-user-videos');
    if (userVidsEl) {
        const myVids = videosData.filter(v => v.channel === activeAcc.name || v.channel === 'Dev Code');
        userVidsEl.innerHTML = myVids.length ? myVids.map(createVideoHTML).join('') : '<p style="color:#666; grid-column: 1/-1; text-align:center;">ยังไม่มีวิดีโอ</p>';
    }
}

if (toggleEditModeBtn && profileEditBox) {
    toggleEditModeBtn.addEventListener('click', () => {
        profileEditBox.style.display = (profileEditBox.style.display === 'none' || profileEditBox.style.display === '') ? 'block' : 'none';
    });
}

window.selectPresetAvatar = function(srcUrl) {
    tempAvatarSrc = srcUrl;
    accounts[currentAccountIndex].avatar = tempAvatarSrc;
    localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
    updateProfileUI();
};

if (avatarClickZone && profileAvatarFileInput) {
    avatarClickZone.addEventListener('click', () => profileAvatarFileInput.click());
    
    profileAvatarFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                tempAvatarSrc = evt.target.result;
                accounts[currentAccountIndex].avatar = tempAvatarSrc;
                localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
                updateProfileUI();
            };
            reader.readAsDataURL(file);
        }
    });
}

if (editProfileForm) {
    editProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = editProfileName.value.trim();
        const newBio = editProfileBio.value.trim();

        if (!newName) return alert('กรุณากรอกชื่อโปรไฟล์');

        accounts[currentAccountIndex].name = newName;
        accounts[currentAccountIndex].bio = newBio;
        
        localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
        updateProfileUI();
        if (profileEditBox) profileEditBox.style.display = 'none';
        alert('บันทึกข้อมูลโปรไฟล์เรียบร้อยแล้ว!');
    });
}

window.switchAccount = function(index) {
    currentAccountIndex = index;
    localStorage.setItem('streamgram_current_acc', currentAccountIndex);
    updateProfileUI();
    renderVideos();
    alert(`สลับไปยังบัญชี "${accounts[currentAccountIndex].name}" เรียบร้อยแล้ว!`);
};

if (addAccountBtn && newAccountNameInput) {
    addAccountBtn.addEventListener('click', () => {
        const name = newAccountNameInput.value.trim();
        if (!name) return alert('กรุณากรอกชื่อบัญชีใหม่');

        const newAcc = {
            id: Date.now(),
            name: name,
            avatar: `https://picsum.photos/seed/${encodeURIComponent(name)}/100`,
            bio: 'ผู้ใช้งานใหม่ StreamGram'
        };

        accounts.push(newAcc);
        currentAccountIndex = accounts.length - 1;
        localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
        localStorage.setItem('streamgram_current_acc', currentAccountIndex);

        newAccountNameInput.value = '';
        updateProfileUI();
        alert(`เพิ่มและสลับไปยังบัญชี "${name}" สำเร็จ!`);
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (accounts.length <= 1) {
            if (confirm('คุณต้องการรีเซ็ตข้อมูลระบบและกลับไปเริ่มต้นใหม่ใช่หรือไม่?')) {
                localStorage.clear();
                location.reload();
            }
        } else {
            if (confirm(`คุณต้องการออกจากบัญชี "${accounts[currentAccountIndex].name}" ใช่หรือไม่?`)) {
                accounts.splice(currentAccountIndex, 1);
                currentAccountIndex = 0;
                localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
                localStorage.setItem('streamgram_current_acc', currentAccountIndex);
                updateProfileUI();
                alert('ออกจากบัญชีเรียบร้อยแล้ว');
            }
        }
    });
}

if (generateCodeBtn) {
    generateCodeBtn.addEventListener('click', () => {
        const randomCode = 'VIPGIFT' + Math.floor(1000 + Math.random() * 9000);
        generatedVipCodeInput.value = randomCode;
        VALID_SHARED_CODES[randomCode] = "ส่วนลด 20% จากเพื่อน VIP! 🎉";
        alert(`สร้างโค้ดส่วนลด "${randomCode}" สำเร็จ! คัดลอกไปแจกเพื่อนได้เลย`);
    });
}

if (applyDiscountBtn) {
    applyDiscountBtn.addEventListener('click', () => {
        const code = vipDiscountInput.value.trim().toUpperCase();
        if (VALID_SHARED_CODES[code]) {
            currentVipPrice = 79;
            discountMsg.style.color = '#10b981';
            discountMsg.textContent = '✅ ใช้โค้ดสำเร็จ! ได้รับส่วนลด 20% (เหลือ 79 บาท)';
            confirmPayVipBtn.textContent = '💳 ชำระเงิน 79 บาท (เปิดใช้งาน VIP ทันที)';
        } else {
            discountMsg.style.color = '#ff4e45';
            discountMsg.textContent = '❌ โค้ดส่วนลดไม่ถูกต้อง';
        }
    });
}

if (confirmPayVipBtn) {
    confirmPayVipBtn.addEventListener('click', () => {
        if (confirm(`ยืนยันการชำระเงินจำนวน ${currentVipPrice} บาท เพื่อสมัคร VIP หรือไม่?`)) {
            isUserVIP = true;
            localStorage.setItem('streamgram_is_vip', 'true');
            updateProfileUI();
            if (vipBuyModal) vipBuyModal.style.display = 'none';
            alert('🎉 สมัครสมาชิก VIP สำเร็จแล้ว!');
        }
    });
}

if (openVipModalBtn) {
    openVipModalBtn.addEventListener('click', () => {
        if (isUserVIP) {
            alert('คุณเป็นสมาชิก VIP อยู่แล้ว!');
            return;
        }
        if (vipBuyModal) vipBuyModal.style.display = 'flex';
    });
}

if (closeVipModalBtn) closeVipModalBtn.addEventListener('click', () => vipBuyModal.style.display = 'none');

const profileTabBtns = document.querySelectorAll('.profile-tab-btn');
profileTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        profileTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tabTarget = btn.getAttribute('data-tab');
        document.querySelectorAll('.profile-tab-content').forEach(content => {
            content.classList.remove('active-tab-content');
        });
        const activeContent = document.getElementById(tabTarget);
        if (activeContent) activeContent.classList.add('active-tab-content');
    });
});


// ==========================================
// 6. Video Player & Chat Features
// ==========================================

const videoPlayerModal = document.getElementById('video-player-modal');
const videoPlayerBox = document.getElementById('video-player-box');
const mainVideoPlayer = document.getElementById('main-video-player');
const closeVideoPlayerBtn = document.getElementById('close-video-player');
const toggleSizeBtn = document.getElementById('toggle-size-btn');
const sizeIcon = document.getElementById('size-icon');

const liveChatForm = document.getElementById('live-chat-form');
const liveChatInput = document.getElementById('live-chat-input');
const liveChatMessages = document.getElementById('live-chat-messages');

const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const likeCountSpan = document.getElementById('like-count');
const subscribeBtn = document.getElementById('subscribe-btn');
const pipBtn = document.getElementById('pip-btn');

let isLiked = false;
let isDisliked = false;
let isSubscribed = false;
let currentLikes = 1240;
let isMiniMode = false;

if (likeBtn) {
    likeBtn.addEventListener('click', () => {
        const icon = likeBtn.querySelector('i');
        if (!isLiked) {
            isLiked = true;
            likeBtn.classList.add('active-like');
            icon.className = 'fa-solid fa-thumbs-up';
            currentLikes++;
            
            if (isDisliked) {
                isDisliked = false;
                dislikeBtn.classList.remove('active-dislike');
                dislikeBtn.querySelector('i').className = 'fa-regular fa-thumbs-down';
            }
        } else {
            isLiked = false;
            likeBtn.classList.remove('active-like');
            icon.className = 'fa-regular fa-thumbs-up';
            currentLikes--;
        }
        if (likeCountSpan) likeCountSpan.textContent = currentLikes.toLocaleString();
    });
}

if (dislikeBtn) {
    dislikeBtn.addEventListener('click', () => {
        const icon = dislikeBtn.querySelector('i');
        if (!isDisliked) {
            isDisliked = true;
            dislikeBtn.classList.add('active-dislike');
            icon.className = 'fa-solid fa-thumbs-down';

            if (isLiked) {
                isLiked = false;
                likeBtn.classList.remove('active-like');
                likeBtn.querySelector('i').className = 'fa-regular fa-thumbs-up';
                currentLikes--;
                if (likeCountSpan) likeCountSpan.textContent = currentLikes.toLocaleString();
            }
        } else {
            isDisliked = false;
            dislikeBtn.classList.remove('active-dislike');
            icon.className = 'fa-regular fa-thumbs-down';
        }
    });
}

if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        isSubscribed = !isSubscribed;
        subscribeBtn.textContent = isSubscribed ? 'ติดตามแล้ว' : 'ติดตาม';
        subscribeBtn.classList.toggle('subscribed', isSubscribed);
    });
}

if (pipBtn && mainVideoPlayer) {
    pipBtn.addEventListener('click', async () => {
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else {
                await mainVideoPlayer.requestPictureInPicture();
            }
        } catch (error) {
            alert('กรุณารอให้วิดีโอเริ่มเล่นก่อนกดแยกจอ');
        }
    });
}

function openVideoPlayer(title, channel, views, videoUrl) {
    if (!videoPlayerModal || !mainVideoPlayer) return;

    document.getElementById('player-video-title').textContent = title;
    document.getElementById('player-video-channel').textContent = channel;
    document.getElementById('player-video-views').textContent = views;

    mainVideoPlayer.src = videoUrl || SAMPLE_VIDEO_URL;
    videoPlayerModal.style.display = 'flex';
    mainVideoPlayer.play().catch(e => console.log('Autoplay blocked:', e));
}

function closeVideoPlayer() {
    if (videoPlayerModal && mainVideoPlayer) {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture().catch(() => {});
        }
        mainVideoPlayer.pause();
        mainVideoPlayer.src = '';
        videoPlayerModal.style.display = 'none';
    }
}

if (closeVideoPlayerBtn) closeVideoPlayerBtn.addEventListener('click', closeVideoPlayer);

window.addEventListener('click', (e) => {
    if (e.target === videoPlayerModal) closeVideoPlayer();
});

if (toggleSizeBtn && videoPlayerBox) {
    toggleSizeBtn.addEventListener('click', () => {
        isMiniMode = !isMiniMode;
        videoPlayerBox.classList.toggle('mini-mode', isMiniMode);
        sizeIcon.className = isMiniMode ? 'fa-solid fa-expand' : 'fa-solid fa-compress';
    });
}

if (liveChatForm && liveChatMessages) {
    liveChatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = liveChatInput.value.trim();
        if (!text) return;

        const activeAcc = accounts[currentAccountIndex]?.name || 'ผู้ใช้งาน';

        const userMsg = document.createElement('div');
        userMsg.className = 'chat-item';
        userMsg.innerHTML = `<strong>${activeAcc}:</strong> ${text}`;
        liveChatMessages.appendChild(userMsg);

        liveChatInput.value = '';
        liveChatMessages.scrollTop = liveChatMessages.scrollHeight;
    });
}


// ==========================================
// 7. Modals อื่นๆ (Story, Upload, Support, Settings, DM Chat)
// ==========================================

const storyViewer = document.getElementById('story-viewer');
const storyDisplay = document.getElementById('story-display');
const storyUsername = document.getElementById('story-username');
const progress = document.getElementById('progress');
let storyTimer;

function openStory(id) {
    const story = storiesData.find(s => s.id === id);
    if (!story) return;

    storyUsername.textContent = story.name;
    storyDisplay.style.backgroundColor = story.contentBg;
    storyDisplay.innerHTML = `<h2>${story.text}</h2>`;
    storyViewer.style.display = 'flex';

    progress.style.transition = 'none';
    progress.style.width = '0%';
    setTimeout(() => {
        progress.style.transition = 'width 5s linear';
        progress.style.width = '100%';
    }, 50);

    clearTimeout(storyTimer);
    storyTimer = setTimeout(closeStoryViewer, 5000);
}

function closeStoryViewer() {
    if (storyViewer) storyViewer.style.display = 'none';
    clearTimeout(storyTimer);
}

const closeStoryBtn = document.getElementById('close-story');
if (closeStoryBtn) closeStoryBtn.addEventListener('click', closeStoryViewer);

const uploadModal = document.getElementById('upload-modal');
const uploadTrigger = document.getElementById('upload-trigger');
const closeModal = document.getElementById('close-modal');
const uploadForm = document.getElementById('upload-form');
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('video-file-input');

if (uploadTrigger) uploadTrigger.addEventListener('click', () => uploadModal.style.display = 'flex');
if (closeModal) closeModal.addEventListener('click', () => uploadModal.style.display = 'none');
if (dropzone) dropzone.addEventListener('click', () => fileInput.click());

if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('video-title').value;
        if (!title) return alert('กรุณากรอกชื่อวิดีโอ');

        const activeAcc = accounts[currentAccountIndex] || accounts[0];
        const newVideo = {
            id: videosData.length + 1,
            title: title,
            channel: activeAcc.name,
            views: '0 ครั้ง',
            time: 'เมื่อสักครู่นี้',
            thumb: 'https://picsum.photos/seed/' + Math.random() + '/400/225',
            videoUrl: SAMPLE_VIDEO_URL
        };

        videosData.unshift(newVideo);
        renderVideos();
        uploadForm.reset();
        uploadModal.style.display = 'none';
        alert('อัปโหลดวิดีโอสำเร็จ!');
    });
}

const sidebarItems = document.querySelectorAll('.sidebar-item[data-page]');
const pageViews = document.querySelectorAll('.page-view');

sidebarItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = item.getAttribute('data-page');

        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        pageViews.forEach(view => {
            view.classList.toggle('active-view', view.id === `view-${targetPage}`);
        });
    });
});

function renderGameActivity() {
    const activityContainer = document.getElementById('game-activity-list');
    if (!activityContainer) return;

    activityContainer.innerHTML = gameActivityData.map(item => `
        <div class="game-activity-card" style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #181818; border-radius: 8px; margin-bottom: 8px;">
            <div class="game-info" style="display: flex; align-items: center; gap: 12px;">
                <div class="game-icon" style="width: 36px; height: 36px; border-radius: 8px; background: #252525; display: flex; align-items: center; justify-content: center; color: #3ea6ff;">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <div class="game-details">
                    <h4 style="margin: 0; font-size: 0.95rem;">${item.game}</h4>
                    <p style="margin: 2px 0 0; font-size: 0.8rem; color: #888;">เล่นล่าสุดเมื่อ: ${item.date}</p>
                </div>
            </div>
            <div class="game-time-badge" style="font-size: 0.85rem; color: #aaa; background: #222; padding: 4px 10px; border-radius: 12px;">
                <i class="fa-solid fa-stopwatch" style="color: #3ea6ff;"></i> ${item.playTime}
            </div>
        </div>
    `).join('');
}


// ==========================================
// 8. เริ่มต้นแอปพลิเคชัน (Init App)
// ==========================================

function initApp() {
    updateProfileUI();
    renderStories();
    renderVideos();
    renderShorts();
    renderGameActivity();
}
