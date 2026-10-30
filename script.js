// ข้อมูลจำลอง (Mock Data) สำหรับสตอรี่
const storiesData = [
    { id: 1, name: 'TechDaily', avatar: 'https://picsum.photos/seed/user1/100', contentBg: '#1e3d59', text: '🚀 เปิดตัวเทคโนโลยีใหม่ล่าสุดประจำปี!' },
    { id: 2, name: 'TravelVibe', avatar: 'https://picsum.photos/seed/user2/100', contentBg: '#17b978', text: '🌴 บรรยากาศทะเลวันนี้สดใสมากกก' },
    { id: 3, name: 'ChefHome', avatar: 'https://picsum.photos/seed/user3/100', contentBg: '#ff6e40', text: '🍳 สอนทำเมนูลับฉบับคนงบน้อย' },
    { id: 4, name: 'GameMaster', avatar: 'https://picsum.photos/seed/user4/100', contentBg: '#7c3aed', text: '🎮 สตรีมเกมยาวไปคืนนี้ เจอกัน!' },
    { id: 5, name: 'MusicStation', avatar: 'https://picsum.photos/seed/user5/100', contentBg: '#db2777', text: '🎵 เพลงใหม่ปล่อยแล้ว ไปฟังกันเลย' }
];

// ข้อมูลจำลองสำหรับวิดีโอ
let videosData = [
    { id: 1, title: 'สร้างเว็บด้วย HTML CSS แบบจัดเต็มใน 1 ชั่วโมง', channel: 'Dev Code', views: '1.2ล้าน ครั้ง', time: '2 วันที่แล้ว', thumb: 'https://picsum.photos/seed/vid1/400/225' },
    { id: 2, title: 'ตะลุยสตรีทฟู้ดกรุงเทพ กินแหลก 10 ร้านดัง!', channel: 'Foodie Guide', views: '450K ครั้ง', time: '1 สัปดาห์ที่แล้ว', thumb: 'https://picsum.photos/seed/vid2/400/225' },
    { id: 3, title: 'รีวิวห้องนอนมินิมอล งบหลักพัน แต่งออกมาสวยมาก', channel: 'Home Studio', views: '89K ครั้ง', time: '3 วันที่แล้ว', thumb: 'https://picsum.photos/seed/vid3/400/225' },
    { id: 4, title: 'รวมเพลงฟังสบายๆ ตอนทำงาน โฟกัสยาวๆ', channel: 'Lofi Vibes', views: '3.4ล้าน ครั้ง', time: '1 เดือนที่แล้ว', thumb: 'https://picsum.photos/seed/vid4/400/225' }
];

// เรนเดอร์สตอรี่
const storiesContainer = document.getElementById('stories-container');
function renderStories() {
    storiesContainer.innerHTML = storiesData.map(story => `
        <div class="story-card" onclick="openStory(${story.id})">
            <div class="story-ring">
                <img src="${story.avatar}" class="story-thumb" alt="${story.name}">
            </div>
            <span>${story.name}</span>
        </div>
    `).join('');
}

// เรนเดอร์วิดีโอ
const videoGrid = document.getElementById('video-grid');
function renderVideos() {
    videoGrid.innerHTML = videosData.map(video => `
        <div class="video-card">
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
    `).join('');
}

// ระบบเปิดดูสตอรี่ (Instagram Story Viewer)
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
    
    // แอนิเมชันหลอดเวลาสตอรี่ (5 วินาที)
    progress.style.transition = 'none';
    progress.style.width = '0%';
    setTimeout(() => {
        progress.style.transition = 'width 5s linear';
        progress.style.width = '100%';
    }, 50);

    clearTimeout(storyTimer);
    storyTimer = setTimeout(() => {
        closeStoryViewer();
    }, 5000);
}

function closeStoryViewer() {
    storyViewer.style.display = 'none';
    clearTimeout(storyTimer);
}

document.getElementById('close-story').addEventListener('click', closeStoryViewer);

// ระบบ Modal อัพโหลดวิดีโอ (YouTube Upload Feature)
const uploadModal = document.getElementById('upload-modal');
const uploadTrigger = document.getElementById('upload-trigger');
const closeModal = document.getElementById('close-modal');
const uploadForm = document.getElementById('upload-form');
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('video-file-input');

uploadTrigger.addEventListener('click', () => uploadModal.style.display = 'flex');
closeModal.addEventListener('click', () => uploadModal.style.display = 'none');
dropzone.addEventListener('click', () => fileInput.click());

// จำลองการอัพโหลดวิดีโอใหม่เข้าสู่ระบบ
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('video-title').value;
    const desc = document.getElementById('video-desc').value;

    if (!title) return alert('กรุณากรอกชื่อวิดีโอ');

    // สร้างข้อมูลวิดีโอใหม่จำลอง
    const newVideo = {
        id: videosData.length + 1,
        title: title,
        channel: 'ช่องของคุณ',
        views: '0 ครั้ง',
        time: 'เมื่อสักครู่นี้',
        thumb: 'https://picsum.photos/seed/' + Math.random() + '/400/225'
    };

    videosData.unshift(newVideo); // เพิ่มไว้บนสุด
    renderVideos();

    // Reset ฟอร์มและปิด Modal
    uploadForm.reset();
    uploadModal.style.display = 'none';
    alert('อัพโหลดวิดีโอสำเร็จ!');
});

// โหลดข้อมูลเริ่มต้นเมื่อเปิดเว็บ
window.addEventListener('DOMContentLoaded', () => {
    renderStories();
    renderVideos();
});
// --- ระบบจัดการบัญชีและการตั้งค่า (Multi-Account & Shared Code) ---

// ข้อมูลจำลองระบบบัญชี (เก็บใน LocalStorage จำลองเพื่อให้จำค่าได้)
let accounts = JSON.parse(localStorage.getItem('streamgram_accounts')) || [
    { id: 1, name: 'Dev Channel (หลัก)', avatar: 'https://picsum.photos/seed/acc1/100' },
    { id: 2, name: 'Gamer Pro', avatar: 'https://picsum.photos/seed/acc2/100' }
];

let currentAccountIndex = parseInt(localStorage.getItem('streamgram_current_acc')) || 0;

// โค้ดกลางที่ใช้ร่วมกันได้ทุกบัญชี (กำหนดไว้ล่วงหน้า)
const VALID_SHARED_CODES = {
    "STREAM2026": "ยินดีด้วย! คุณได้รับสิทธิ์สมาชิก VIP ฟรี 30 วัน 🎉",
    "YOUTUBEINSTA": "ปลดล็อกฟีเจอร์พิเศษ: โค้ดนี้ใช้ร่วมกันได้ทุกบัญชีสำเร็จ! ✅",
    "VIPCODE": "โค้ดลับใช้งานสำเร็จ ได้รับแต้มพิเศษ 500 พอยท์ 🌟"
};

// Element Selectors
const settingsModal = document.getElementById('settings-modal');
const settingsTrigger = document.getElementById('settings-trigger');
const closeSettings = document.getElementById('close-settings');
const accountsList = document.getElementById('accounts-list');
const settingsUsername = document.getElementById('settings-username');
const currentUserAvatar = document.getElementById('current-user-avatar');
const settingsAvatar = document.getElementById('settings-avatar');
const addAccountBtn = document.getElementById('add-account-btn');
const newAccountNameInput = document.getElementById('new-account-name');

// เปิด-ปิด Modal ตั้งค่า
settingsTrigger.addEventListener('click', () => {
    updateSettingsUI();
    settingsModal.style.display = 'flex';
});
closeSettings.addEventListener('click', () => settingsModal.style.display = 'none');

// อัปเดต UI หน้าตั้งค่าและบัญชีปัจจุบัน
function updateSettingsUI() {
    const activeAcc = accounts[currentAccountIndex] || accounts[0];
    settingsUsername.textContent = activeAcc.name;
    currentUserAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
    currentUserAvatar.style.backgroundSize = 'cover';
    settingsAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
    settingsAvatar.style.backgroundSize = 'cover';

    // เรนเดอร์รายชื่อบัญชีทั้งหมด
    accountsList.innerHTML = accounts.map((acc, index) => `
        <div class="account-item ${index === currentAccountIndex ? 'active-account' : ''}">
            <span style="font-size: 0.9rem;">${acc.name} ${index === currentAccountIndex ? '(ใช้งานอยู่)' : ''}</span>
            ${index !== currentAccountIndex ? `<button class="switch-btn" onclick="switchAccount(${index})">สลับ</button>` : '<span style="color:#3ea6ff; font-size:0.8rem;">ใช้งานอยู่</span>'}
        </div>
    `).join('');
}

// ฟังก์ชันสลับบัญชี
window.switchAccount = function(index) {
    currentAccountIndex = index;
    localStorage.setItem('streamgram_current_acc', currentAccountIndex);
    updateSettingsUI();
    alert(`สลับไปยังบัญชี "${accounts[currentAccountIndex].name}" เรียบร้อยแล้ว!`);
};

// ฟังก์ชันเพิ่มบัญชีใหม่
addAccountBtn.addEventListener('click', () => {
    const name = newAccountNameInput.value.trim();
    if (!name) return alert('กรุณากรอกชื่อบัญชี');

    const newAcc = {
        id: accounts.length + 1,
        name: name,
        avatar: `https://picsum.photos/seed/${name}/100`
    };

    accounts.push(newAcc);
    localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
    newAccountNameInput.value = '';
    updateSettingsUI();
    alert('เพิ่มบัญชีใหม่สำเร็จ!');
});

// ระบบใส่โค้ดเดียวกัน (Shared Code System)
const sharedCodeInput = document.getElementById('shared-code-input');
const submitCodeBtn = document.getElementById('submit-code-btn');
const codeFeedback = document.getElementById('code-feedback');

submitCodeBtn.addEventListener('click', () => {
    const code = sharedCodeInput.value.trim().toUpperCase();
    if (!code) {
        codeFeedback.style.color = '#ff4e45';
        codeFeedback.textContent = 'กรุณากรอกโค้ดก่อนกดใช้งาน';
        return;
    }

    // ตรวจสอบว่าโค้ดถูกต้องหรือไม่ (โค้ดชุดเดียวกัน ไม่ว่าจะบัญชีไหนกรอกก็ใช้ได้เหมือนกัน)
    if (VALID_SHARED_CODES[code]) {
        codeFeedback.style.color = '#10b981'; // สีเขียว
        codeFeedback.textContent = VALID_SHARED_CODES[code];
        
        // บันทึกสถานะว่าบัญชีนี้ใช้โค้ดนี้แล้ว (หรือจะให้ใช้ซ้ำได้อิสระ)
        console.log(`บัญชี ${accounts[currentAccountIndex].name} ใช้โค้ด: ${code} สำเร็จ`);
    } else {
        codeFeedback.style.color = '#ff4e45'; // สีแดง
        codeFeedback.textContent = '❌ โค้ดไม่ถูกต้องหรือหมดอายุแล้ว';
    }
});

// โหลดการตั้งค่าบัญชีตั้งแต่เริ่มต้นเปิดเว็บ
window.addEventListener('DOMContentLoaded', () => {
    const activeAcc = accounts[currentAccountIndex] || accounts[0];
    if(currentUserAvatar) {
        currentUserAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
        currentUserAvatar.style.backgroundSize = 'cover';
    }
});
