// ==========================================
// 1. ข้อมูลจำลอง (Mock Data)
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
// 2. ฟังก์ชันเรนเดอร์เนื้อหาหลัก
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

    const myVideosGrid = document.getElementById('my-videos-grid');
    if (myVideosGrid) {
        const activeAccName = accounts[currentAccountIndex]?.name || 'ช่องของคุณ';
        const myVids = videosData.filter(v => v.channel === 'ช่องของคุณ' || v.channel === activeAccName);
        myVideosGrid.innerHTML = myVids.length ? myVids.map(createVideoHTML).join('') : '<p style="color:#666;">ยังไม่มีวิดีโอที่คุณอัปโหลด</p>';
    }
}

const mainSearchInput = document.getElementById('main-search-input') || document.querySelector('.nav-center input');
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
// 3. ระบบเปิด-ปิด / ย่อ-ขยาย Video Player & แชทสด
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

let isMiniMode = false;

function openVideoPlayer(title, channel, views, videoUrl) {
    if (!videoPlayerModal || !mainVideoPlayer) return;

    document.getElementById('player-video-title').textContent = title;
    document.getElementById('player-video-channel').textContent = channel;
    document.getElementById('player-video-views').textContent = views;

    mainVideoPlayer.src = videoUrl || SAMPLE_VIDEO_URL;
    videoPlayerModal.style.display = 'flex';
    mainVideoPlayer.play();
}

function closeVideoPlayer() {
    if (videoPlayerModal && mainVideoPlayer) {
        mainVideoPlayer.pause();
        mainVideoPlayer.src = '';
        videoPlayerModal.style.display = 'none';
    }
}

if (closeVideoPlayerBtn) closeVideoPlayerBtn.addEventListener('click', closeVideoPlayer);

window.addEventListener('click', (e) => {
    if (e.target === videoPlayerModal) {
        closeVideoPlayer();
    }
});

if (toggleSizeBtn && videoPlayerBox) {
    toggleSizeBtn.addEventListener('click', () => {
        isMiniMode = !isMiniMode;
        if (isMiniMode) {
            videoPlayerBox.classList.add('mini-mode');
            sizeIcon.className = 'fa-solid fa-expand';
            toggleSizeBtn.title = 'ขยายหน้าจอ';
        } else {
            videoPlayerBox.classList.remove('mini-mode');
            sizeIcon.className = 'fa-solid fa-compress';
            toggleSizeBtn.title = 'ย่อหน้าจอ';
        }
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

        setTimeout(() => {
            const replies = [
                'สุดยอดเลยคลิปนี้! 🔥',
                'เห็นด้วยมากๆ ครับ',
                'น่าสนใจจัง!',
                '5555555555',
                'ขอบคุณสำหรับเทคนิคครับ'
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-item';
            botMsg.innerHTML = `<strong>Gamer_Viewer:</strong> ${randomReply}`;
            liveChatMessages.appendChild(botMsg);
            liveChatMessages.scrollTop = liveChatMessages.scrollHeight;
        }, 1200);
    });
}

// ==========================================
// 4. ระบบ Story & Upload Modal
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

// ==========================================
// 5. ระบบ Profile & Settings Modal
// ==========================================

let accounts = JSON.parse(localStorage.getItem('streamgram_accounts')) || [
    { id: 1, name: 'Dev Channel (หลัก)', avatar: 'https://picsum.photos/seed/acc1/100', bio: 'นักพัฒนาเว็บสายการสร้างโซเชียลมีเดีย' },
    { id: 2, name: 'Gamer Pro', avatar: 'https://picsum.photos/seed/acc2/100', bio: 'สตรีมเมอร์เกมเมอร์สายฮาร์ดคอร์' }
];

let currentAccountIndex = parseInt(localStorage.getItem('streamgram_current_acc')) || 0;

const VALID_SHARED_CODES = {
    "STREAM2026": "ยินดีด้วย! คุณได้รับสิทธิ์สมาชิก VIP ฟรี 30 วัน 🎉",
    "YOUTUBEINSTA": "ปลดล็อกฟีเจอร์พิเศษ: โค้ดนี้ใช้ร่วมกันได้ทุกบัญชีสำเร็จ! ✅",
    "VIPCODE": "โค้ดลับใช้งานสำเร็จ ได้รับแต้มพิเศษ 500 พอยท์ 🌟"
};

const profileModal = document.getElementById('profile-modal');
const currentUserAvatar = document.getElementById('current-user-avatar');
const closeProfile = document.getElementById('close-profile');

const settingsModal = document.getElementById('settings-modal');
const settingsTrigger = document.getElementById('settings-trigger');
const closeSettings = document.getElementById('close-settings');

const accountsList = document.getElementById('accounts-list');
const settingsUsername = document.getElementById('settings-username');
const settingsAvatar = document.getElementById('settings-avatar');
const addAccountBtn = document.getElementById('add-account-btn');
const newAccountNameInput = document.getElementById('new-account-name');

const editProfileForm = document.getElementById('edit-profile-form');
const editProfileName = document.getElementById('edit-profile-name');
const editProfileBio = document.getElementById('edit-profile-bio');
const editAvatarPreview = document.getElementById('edit-avatar-preview');
const profileUploadInput = document.getElementById('profile-upload-input');
const triggerAvatarUpload = document.getElementById('trigger-avatar-upload');

let tempSelectedAvatar = '';

if (currentUserAvatar) {
    currentUserAvatar.addEventListener('click', () => {
        updateProfileUI();
        if (profileModal) profileModal.style.display = 'flex';
    });
}
if (closeProfile) closeProfile.addEventListener('click', () => profileModal.style.display = 'none');

if (settingsTrigger) {
    settingsTrigger.addEventListener('click', () => {
        if (settingsModal) settingsModal.style.display = 'flex';
    });
}
if (closeSettings) closeSettings.addEventListener('click', () => settingsModal.style.display = 'none');

const openSupportFromSettings = document.getElementById('open-support-from-settings');
if (openSupportFromSettings) {
    openSupportFromSettings.addEventListener('click', () => {
        if (settingsModal) settingsModal.style.display = 'none';
        const activeAcc = accounts[currentAccountIndex] || accounts[0];
        if (supportUserDisplay) supportUserDisplay.value = activeAcc.name;
        renderSupportTickets();
        if (supportModal) supportModal.style.display = 'flex';
    });
}

function updateProfileUI() {
    const activeAcc = accounts[currentAccountIndex] || accounts[0];
    
    if (settingsUsername) settingsUsername.textContent = activeAcc.name;
    
    const channelNameDisp = document.getElementById('channel-page-name');
    if (channelNameDisp) channelNameDisp.textContent = activeAcc.name;

    if (currentUserAvatar) {
        currentUserAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
        currentUserAvatar.style.backgroundSize = 'cover';
    }
    if (settingsAvatar) {
        settingsAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
        settingsAvatar.style.backgroundSize = 'cover';
    }

    const channelHeaderAvatar = document.querySelector('#view-channel .channel-header-box .user-avatar');
    if (channelHeaderAvatar) {
        channelHeaderAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
        channelHeaderAvatar.style.backgroundSize = 'cover';
    }

    if (editProfileName) editProfileName.value = activeAcc.name;
    if (editProfileBio) editProfileBio.value = activeAcc.bio || '';
    tempSelectedAvatar = activeAcc.avatar;
    if (editAvatarPreview) {
        editAvatarPreview.style.backgroundImage = `url(${tempSelectedAvatar})`;
    }

    if (accountsList) {
        accountsList.innerHTML = accounts.map((acc, index) => `
            <div class="account-item ${index === currentAccountIndex ? 'active-account' : ''}">
                <span style="font-size: 0.9rem;">${acc.name} ${index === currentAccountIndex ? '(ใช้งานอยู่)' : ''}</span>
                ${index !== currentAccountIndex ? `<button class="switch-btn" onclick="switchAccount(${index})">สลับ</button>` : '<span style="color:#3ea6ff; font-size:0.8rem;">ใช้งานอยู่</span>'}
            </div>
        `).join('');
    }
}

window.selectPresetAvatar = function(srcUrl) {
    tempSelectedAvatar = srcUrl;
    if (editAvatarPreview) {
        editAvatarPreview.style.backgroundImage = `url(${tempSelectedAvatar})`;
    }
};

if (triggerAvatarUpload && profileUploadInput) {
    triggerAvatarUpload.addEventListener('click', () => profileUploadInput.click());

    profileUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                tempSelectedAvatar = evt.target.result;
                if (editAvatarPreview) {
                    editAvatarPreview.style.backgroundImage = `url(${tempSelectedAvatar})`;
                }
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
        accounts[currentAccountIndex].avatar = tempSelectedAvatar;

        localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
        updateProfileUI();
        renderVideos();

        if (profileModal) profileModal.style.display = 'none';
        alert('บันทึกการแก้ไขโปรไฟล์เรียบร้อยแล้ว!');
    });
}

window.switchAccount = function(index) {
    currentAccountIndex = index;
    localStorage.setItem('streamgram_current_acc', currentAccountIndex);
    updateProfileUI();
    renderVideos();
    alert(`สลับไปยังบัญชี "${accounts[currentAccountIndex].name}" เรียบร้อยแล้ว!`);
};

if (addAccountBtn) {
    addAccountBtn.addEventListener('click', () => {
        const name = newAccountNameInput.value.trim();
        if (!name) return alert('กรุณากรอกชื่อบัญชี');

        const newAcc = {
            id: accounts.length + 1,
            name: name,
            avatar: `https://picsum.photos/seed/${name}/100`,
            bio: 'ผู้ใช้งานใหม่'
        };

        accounts.push(newAcc);
        localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
        newAccountNameInput.value = '';
        updateProfileUI();
        alert('เพิ่มบัญชีใหม่สำเร็จ!');
    });
}

const sharedCodeInput = document.getElementById('shared-code-input');
const submitCodeBtn = document.getElementById('submit-code-btn');
const codeFeedback = document.getElementById('code-feedback');

if (submitCodeBtn) {
    submitCodeBtn.addEventListener('click', () => {
        const code = sharedCodeInput.value.trim().toUpperCase();
        if (!code) {
            codeFeedback.style.color = '#ff4e45';
            codeFeedback.textContent = 'กรุณากรอกโค้ดก่อนกดใช้งาน';
            return;
        }

        if (VALID_SHARED_CODES[code]) {
            codeFeedback.style.color = '#10b981';
            codeFeedback.textContent = VALID_SHARED_CODES[code];
        } else {
            codeFeedback.style.color = '#ff4e45';
            codeFeedback.textContent = '❌ โค้ดไม่ถูกต้องหรือหมดอายุแล้ว';
        }
    });
}

// ==========================================
// 6. ระบบติดต่อเจ้าหน้าที่
// ==========================================

let supportTickets = JSON.parse(localStorage.getItem('streamgram_tickets')) || [];
const supportModal = document.getElementById('support-modal');
const supportTrigger = document.getElementById('support-trigger');
const closeSupport = document.getElementById('close-support');
const supportForm = document.getElementById('support-form');
const supportUserDisplay = document.getElementById('support-user-display');
const ticketsList = document.getElementById('tickets-list');

if (supportTrigger) {
    supportTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        const activeAcc = accounts[currentAccountIndex] || accounts[0];
        if (supportUserDisplay) supportUserDisplay.value = activeAcc.name;
        renderSupportTickets();
        supportModal.style.display = 'flex';
    });
}

if (closeSupport) closeSupport.addEventListener('click', () => supportModal.style.display = 'none');

function renderSupportTickets() {
    if (!ticketsList) return;
    if (supportTickets.length === 0) {
        ticketsList.innerHTML = '<p style="color: #666;">ยังไม่มีประวัติการติดต่อ</p>';
        return;
    }

    ticketsList.innerHTML = supportTickets.map(ticket => `
        <div class="ticket-item">
            <strong>[${ticket.topic}] จาก: ${ticket.sender}</strong>
            <p>${ticket.message}</p>
            <span style="font-size:0.7rem; color:#666;">ส่งเมื่อ: ${ticket.time} | สถานะ: รอดำเนินการ</span>
        </div>
    `).join('');
}

if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const activeAcc = accounts[currentAccountIndex] || accounts[0];
        const topicSelect = document.getElementById('support-topic');
        const topicText = topicSelect.options[topicSelect.selectedIndex].text;
        const message = document.getElementById('support-message').value.trim();

        if (!message) return alert('กรุณากรอกรายละเอียดข้อความ');

        const newTicket = {
            id: Date.now(),
            sender: activeAcc.name,
            topic: topicText,
            message: message,
            time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
        };

        supportTickets.unshift(newTicket);
        localStorage.setItem('streamgram_tickets', JSON.stringify(supportTickets));

        renderSupportTickets();
        supportForm.reset();
        alert('ส่งข้อความถึงเจ้าหน้าที่เรียบร้อยแล้ว!');
    });
}

// ==========================================
// 7. ระบบสลับหน้า Sidebar (SPA)
// ==========================================

const sidebarItems = document.querySelectorAll('.sidebar-item[data-page]');
const pageViews = document.querySelectorAll('.page-view');

sidebarItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = item.getAttribute('data-page');

        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        pageViews.forEach(view => {
            if (view.id === `view-${targetPage}`) {
                view.classList.add('active-view');
            } else {
                view.classList.remove('active-view');
            }
        });
    });
});

// ==========================================
// 8. ระบบแชท Direct Messages (เก็บบันทึกประวัติแยกคน) & Notes
// ==========================================

let activeChatUserId = null;
let chatHistories = JSON.parse(localStorage.getItem('streamgram_chat_histories')) || {};

const menuIcon = document.querySelector('.menu-icon');
const chatModal = document.getElementById('chat-modal');
const closeChat = document.getElementById('close-chat');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

function renderNotes() {
    const notesContainer = document.getElementById('ig-notes-container');
    if (!notesContainer) return;
    notesContainer.innerHTML = notesData.map(n => `
        <div class="note-card" onclick="openNoteViewer(${n.id})">
            <div class="note-bubble">${n.note}</div>
            <img src="${n.avatar}" class="note-avatar" alt="${n.name}">
            <span>${n.name}</span>
        </div>
    `).join('');
}

function renderChatList(filterText = '') {
    const chatList = document.getElementById('ig-chat-list');
    if (!chatList) return;

    const filteredUsers = chatUsersData.filter(user => 
        user.name.toLowerCase().includes(filterText.toLowerCase()) ||
        user.lastMsg.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredUsers.length === 0) {
        chatList.innerHTML = '<p style="color: #888; text-align: center; margin-top: 20px; font-size: 0.9rem;">ไม่พบชื่อเพื่อนที่ค้นหา</p>';
        return;
    }

    chatList.innerHTML = filteredUsers.map(u => `
        <div class="chat-user-item" onclick="openDirectChat(${u.id})">
            <img src="${u.avatar}" class="chat-user-avatar" alt="${u.name}">
            <div class="chat-user-details">
                <h4>${u.name}</h4>
                <p>${u.lastMsg}</p>
            </div>
            <i class="fa-regular fa-camera" style="color: #888;"></i>
        </div>
    `).join('');
}

const dmSearchInput = document.getElementById('dm-search-input');
if (dmSearchInput) {
    dmSearchInput.addEventListener('input', (e) => {
        renderChatList(e.target.value.trim());
    });
}

const activeChatWindow = document.getElementById('ig-active-chat');
const activeUserName = document.getElementById('active-user-name');
const activeUserAvatar = document.getElementById('active-user-avatar');
const backToListBtn = document.getElementById('back-to-list');
const clearChatBtn = document.getElementById('clear-chat-btn');

function openDirectChat(userId) {
    const user = chatUsersData.find(u => u.id === userId);
    if (!user || !activeChatWindow) return;

    activeChatUserId = userId;
    activeUserName.textContent = user.name;
    activeUserAvatar.style.backgroundImage = `url(${user.avatar})`;
    activeUserAvatar.style.backgroundSize = 'cover';
    activeUserAvatar.innerHTML = '';

    renderUserChatMessages(userId);
    activeChatWindow.style.display = 'flex';
}

function renderUserChatMessages(userId) {
    if (!chatMessages) return;

    if (!chatHistories[userId]) {
        chatHistories[userId] = [
            { sender: 'ระบบ', text: 'เริ่มต้นการพูดคุย!', type: 'bot' }
        ];
        localStorage.setItem('streamgram_chat_histories', JSON.stringify(chatHistories));
    }

    const history = chatHistories[userId];
    chatMessages.innerHTML = history.map(msg => `
        <div class="chat-message ${msg.type}">
            <strong>${msg.sender}:</strong> ${msg.text}
        </div>
    `).join('');
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (clearChatBtn) {
    clearChatBtn.addEventListener('click', () => {
        if (!activeChatUserId) return;
        if (confirm('คุณต้องการล้างประวัติการสนทนาของคนนี้ใช่หรือไม่?')) {
            chatHistories[activeChatUserId] = [
                { sender: 'ระบบ', text: 'เริ่มต้นการพูดคุย!', type: 'bot' }
            ];
            localStorage.setItem('streamgram_chat_histories', JSON.stringify(chatHistories));
            renderUserChatMessages(activeChatUserId);
        }
    });
}

if (backToListBtn) {
    backToListBtn.addEventListener('click', () => {
        activeChatWindow.style.display = 'none';
        activeChatUserId = null;
    });
}

if (menuIcon) {
    menuIcon.style.cursor = 'pointer';
    menuIcon.addEventListener('click', () => {
        renderNotes();
        renderChatList();
        if (dmSearchInput) dmSearchInput.value = '';
        if (activeChatWindow) activeChatWindow.style.display = 'none';
        chatModal.style.display = 'flex';
    });
}

if (closeChat) {
    closeChat.addEventListener('click', () => {
        chatModal.style.display = 'none';
    });
}

if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text || !activeChatUserId) return;

        const activeAcc = accounts[currentAccountIndex] || accounts[0];
        
        if (!chatHistories[activeChatUserId]) {
            chatHistories[activeChatUserId] = [{ sender: 'ระบบ', text: 'เริ่มต้นการพูดคุย!', type: 'bot' }];
        }

        const userMsgObj = { sender: activeAcc.name, text: text, type: 'user' };
        chatHistories[activeChatUserId].push(userMsgObj);
        localStorage.setItem('streamgram_chat_histories', JSON.stringify(chatHistories));
        
        renderUserChatMessages(activeChatUserId);
        chatInput.value = '';

        setTimeout(() => {
            const replies = [
                `ได้รับข้อความ "${text}" เรียบร้อยแล้วครับ!`,
                'รับทราบครับผม 👍',
                'ยินดีที่ได้คุยครับ 😊',
                'ไว้คุยกันใหม่นะ!'
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const botMsgObj = { sender: 'แอดมิน', text: randomReply, type: 'bot' };
            
            if (chatHistories[activeChatUserId]) {
                chatHistories[activeChatUserId].push(botMsgObj);
                localStorage.setItem('streamgram_chat_histories', JSON.stringify(chatHistories));
                if (activeChatWindow && activeChatWindow.style.display !== 'none') {
                    renderUserChatMessages(activeChatUserId);
                }
            }
        }, 1000);
    });
}

// ==========================================
// 9. ประวัติการเล่นเกม & แชทกลุ่มเกมเมอร์
// ==========================================

function renderGameActivity() {
    const activityContainer = document.getElementById('game-activity-list');
    if (!activityContainer) return;

    activityContainer.innerHTML = gameActivityData.map(item => `
        <div class="game-activity-card">
            <div class="game-info">
                <div class="game-icon">
                    <i class="fa-solid ${item.icon}"></i>
                </div>
                <div class="game-details">
                    <h4>${item.game}</h4>
                    <p><i class="fa-regular fa-calendar"></i> เล่นเมื่อ: ${item.date}</p>
                </div>
            </div>
            <div class="game-time-badge">
                <i class="fa-regular fa-clock"></i> ${item.playTime}
            </div>
        </div>
    `).join('');
}

document.addEventListener('click', (e) => {
    const gamerChatBtn = e.target.closest('#gamer-chat-trigger');
    if (gamerChatBtn) {
        if (chatModal && activeChatWindow) {
            activeChatUserId = 'gamer_hub';
            activeUserName.textContent = '🎮 ห้องแชทรวมเกมเมอร์ (Gamer Hub)';
            activeUserAvatar.style.backgroundImage = 'none';
            activeUserAvatar.style.backgroundColor = '#e1306c';
            activeUserAvatar.innerHTML = '<i class="fa-solid fa-gamepad" style="color:#fff; line-height:30px; text-align:center; display:block;"></i>';
            
            renderUserChatMessages('gamer_hub');
            chatModal.style.display = 'flex';
            activeChatWindow.style.display = 'flex';
        }
    }
});

// ==========================================
// 10. ระบบเปิดดู Note ขยายใหญ่
// ==========================================

const noteViewerModal = document.getElementById('note-viewer-modal');
const closeNoteViewer = document.getElementById('close-note-viewer');
const noteViewText = document.getElementById('note-view-text');
const noteViewAvatar = document.getElementById('note-view-avatar');
const noteViewUsername = document.getElementById('note-view-username');
const noteReplyForm = document.getElementById('note-reply-form');
const noteReplyInput = document.getElementById('note-reply-input');

function openNoteViewer(noteId) {
    const note = notesData.find(n => n.id === noteId);
    if (!note || !noteViewerModal) return;

    noteViewText.textContent = note.note;
    noteViewAvatar.src = note.avatar;
    noteViewUsername.textContent = note.name;
    noteViewerModal.style.display = 'flex';
}

if (closeNoteViewer) closeNoteViewer.addEventListener('click', () => noteViewerModal.style.display = 'none');

if (noteReplyForm) {
    noteReplyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const reply = noteReplyInput.value.trim();
        if (!reply) return;

        alert(`ส่งข้อความตอบกลับ "${reply}" ไปยัง ${noteViewUsername.textContent} เรียบร้อยแล้ว!`);
        noteReplyInput.value = '';
        noteViewerModal.style.display = 'none';
    });
}

// ==========================================
// 11. ระบบกดค้างแสดงแถบเลือกธีมสี
// ==========================================

const themeEmojiBarHTML = `
    <div id="theme-emoji-bar" class="theme-emoji-bar">
        <span class="theme-emoji-item" onclick="changeChatTheme('default')" title="มืดคลาสสิก">⬛</span>
        <span class="theme-emoji-item" onclick="changeChatTheme('rainbow')" title="สายรุ้ง">🌈</span>
        <span class="theme-emoji-item" onclick="changeChatTheme('instagram')" title="อินสตาแกรม">🟣</span>
        <span class="theme-emoji-item" onclick="changeChatTheme('cyberpunk')" title="ไซเบอร์พังก์">🌸</span>
        <span class="theme-emoji-item" onclick="changeChatTheme('emerald')" title="เอเมอรัลด์">🟢</span>
        <span class="theme-emoji-item" onclick="changeChatTheme('sunset')" title="ซันเซ็ต">🟠</span>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', themeEmojiBarHTML);

const themeEmojiBar = document.getElementById('theme-emoji-bar');
const closeThemeModalBtn = document.getElementById('close-theme-modal');
const themeModal = document.getElementById('chat-theme-modal');

let longPressTimer;
const LONG_PRESS_DURATION = 400;

if (chatMessages) {
    function showEmojiThemeBar(x, y) {
        themeEmojiBar.style.left = `${x}px`;
        themeEmojiBar.style.top = `${y - 50}px`;
        themeEmojiBar.classList.add('show');
    }

    document.addEventListener('click', (e) => {
        if (themeEmojiBar && !themeEmojiBar.contains(e.target)) {
            themeEmojiBar.classList.remove('show');
        }
    });

    chatMessages.addEventListener('mousedown', (e) => {
        longPressTimer = setTimeout(() => showEmojiThemeBar(e.clientX, e.clientY), LONG_PRESS_DURATION);
    });

    chatMessages.addEventListener('mouseup', () => clearTimeout(longPressTimer));
    chatMessages.addEventListener('mouseleave', () => clearTimeout(longPressTimer));
}

if (closeThemeModalBtn && themeModal) {
    closeThemeModalBtn.addEventListener('click', () => themeModal.style.display = 'none');
}

window.changeChatTheme = function(themeName) {
    if (!chatMessages) return;
    chatMessages.className = 'chat-messages';
    
    if (themeName !== 'default') {
        chatMessages.classList.add(`theme-${themeName}`);
    }

    localStorage.setItem('streamgram_chat_theme', themeName);
    if (themeEmojiBar) themeEmojiBar.classList.remove('show');
    if (themeModal) themeModal.style.display = 'none';
};

// ==========================================
// 12. โหลดข้อมูลเริ่มต้น
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
    renderStories();
    renderVideos();
    renderShorts();
    renderGameActivity();
    updateProfileUI();

    const savedTheme = localStorage.getItem('streamgram_chat_theme');
    if (savedTheme && chatMessages) {
        changeChatTheme(savedTheme);
    }
});
// ==========================================
// ระบบปิด Splash Screen เมื่อโหลดเว็บเสร็จ
// ==========================================
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        // หน่วงเวลาไว้ 1.5 วินาที เพื่อให้เห็นหน้าเปิดแอป
        setTimeout(() => {
            splash.classList.add('hide');
        }, 1500);
    }
});
