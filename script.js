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

    const myVideosGrid = document.getElementById('my-videos-grid');
    if (myVideosGrid) {
        const activeAccName = accounts[currentAccountIndex]?.name || 'ช่องของคุณ';
        const myVids = videosData.filter(v => v.channel === 'ช่องของคุณ' || v.channel === activeAccName || v.channel === 'Dev Code');
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
// 4. ระบบ Video Player & ไลก์/ดิสไลก์/ติดตาม/แยกจอ
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
        if (isSubscribed) {
            subscribeBtn.textContent = 'ติดตามแล้ว';
            subscribeBtn.classList.add('subscribed');
        } else {
            subscribeBtn.textContent = 'ติดตาม';
            subscribeBtn.classList.remove('subscribed');
        }
    });
}

if (pipBtn && mainVideoPlayer) {
    pipBtn.addEventListener('click', async () => {
        if (!document.pictureInPictureEnabled && !mainVideoPlayer.webkitSupportsPresentationMode) {
            alert('เบราว์เซอร์ของคุณไม่รองรับฟีเจอร์แยกจอ (Picture-in-Picture)');
            return;
        }

        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
                return;
            }

            if (mainVideoPlayer.readyState < 2) {
                await new Promise((resolve) => {
                    mainVideoPlayer.addEventListener('loadeddata', resolve, { once: true });
                });
            }

            await mainVideoPlayer.requestPictureInPicture();
        } catch (error) {
            console.error('PiP Error:', error);
            if (mainVideoPlayer.webkitSetPresentationMode) {
                mainVideoPlayer.webkitSetPresentationMode('picture-in-picture');
            } else {
                alert('กรุณารอให้วิดีโอเริ่มเล่นก่อนกดแยกจอ หรือตรวจสอบว่าเล่นบน Local Server/HTTPS');
            }
        }
    });
}

function openVideoPlayer(title, channel, views, videoUrl) {
    if (!videoPlayerModal || !mainVideoPlayer) return;

    document.getElementById('player-video-title').textContent = title;
    document.getElementById('player-video-channel').textContent = channel;
    document.getElementById('player-video-views').textContent = views;

    isLiked = false;
    isDisliked = false;
    currentLikes = Math.floor(Math.random() * 5000) + 100;
    if (likeCountSpan) likeCountSpan.textContent = currentLikes.toLocaleString();
    if (likeBtn) {
        likeBtn.classList.remove('active-like');
        likeBtn.querySelector('i').className = 'fa-regular fa-thumbs-up';
    }
    if (dislikeBtn) {
        dislikeBtn.classList.remove('active-dislike');
        dislikeBtn.querySelector('i').className = 'fa-regular fa-thumbs-down';
    }

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
// 5. ระบบ Story & Upload Modal
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
// 6. ระบบ Profile & VIP Management System
// ==========================================

let accounts = JSON.parse(localStorage.getItem('streamgram_accounts')) || [
    { id: 1, name: 'Dev Channel (หลัก)', avatar: 'https://picsum.photos/seed/acc1/100', bio: 'นักพัฒนาเว็บสายการสร้างโซเชียลมีเดีย' }
];

let currentAccountIndex = 0;
let isUserVIP = localStorage.getItem('streamgram_is_vip') === 'true';
let currentVipPrice = 99;

const VALID_SHARED_CODES = {
    "STREAM2026": "ยินดีด้วย! คุณได้รับสิทธิ์สมาชิก VIP ฟรี 30 วัน 🎉",
    "VIPFRIEND20": "ส่วนลด 20% จากเพื่อน VIP! 🎉"
};

const profileModal = document.getElementById('profile-modal');
const closeProfileBtn = document.getElementById('close-profile');
const currentUserAvatar = document.getElementById('current-user-avatar');
const editProfileBtn = document.getElementById('edit-profile-btn');
const profileAvatarFileInput = document.getElementById('profile-avatar-file-input');

const vipBuyModal = document.getElementById('vip-buy-modal');
const openVipModalBtn = document.getElementById('open-vip-modal-btn');
const closeVipModalBtn = document.getElementById('close-vip-modal');
const confirmPayVipBtn = document.getElementById('confirm-pay-vip-btn');
const generateCodeBtn = document.getElementById('generate-code-btn');
const generatedVipCodeInput = document.getElementById('generated-vip-code');
const applyDiscountBtn = document.getElementById('apply-discount-btn');
const vipDiscountInput = document.getElementById('vip-discount-input');
const discountMsg = document.getElementById('discount-msg');

function updateProfileUI() {
    const activeAcc = accounts[currentAccountIndex] || accounts[0];
    
    document.getElementById('user-profile-name').textContent = activeAcc.name;
    document.getElementById('user-profile-tag').textContent = `@${activeAcc.name.toLowerCase().replace(/\s+/g, '_')}`;
    document.getElementById('user-profile-bio').textContent = activeAcc.bio || 'นักพัฒนาเว็บสายการสร้างโซเชียลมีเดีย';

    const avatarEl = document.getElementById('user-profile-avatar');
    if (avatarEl) avatarEl.style.backgroundImage = `url(${activeAcc.avatar})`;

    if (currentUserAvatar) {
        currentUserAvatar.style.backgroundImage = `url(${activeAcc.avatar})`;
        currentUserAvatar.style.backgroundSize = 'cover';
    }

    const channelNameDisp = document.getElementById('channel-page-name');
    if (channelNameDisp) channelNameDisp.textContent = activeAcc.name;

    const vipBadge = document.getElementById('vip-status-badge');
    const vipBox = document.getElementById('vip-exclusive-box');
    
    if (isUserVIP) {
        if (vipBadge) vipBadge.style.display = 'inline-block';
        if (vipBox) vipBox.style.display = 'block';
        if (openVipModalBtn) openVipModalBtn.textContent = '🌟 คุณคือ VIP';
    } else {
        if (vipBadge) vipBadge.style.display = 'none';
        if (vipBox) vipBox.style.display = 'none';
        if (openVipModalBtn) openVipModalBtn.innerHTML = '<i class="fa-solid fa-crown"></i> ซื้อ VIP';
    }

    const savedTheme = JSON.parse(localStorage.getItem('streamgram_profile_theme'));
    if (savedTheme && isUserVIP) {
        const banner = document.getElementById('user-profile-banner');
        if (banner) banner.style.background = `linear-gradient(135deg, ${savedTheme.color1}, ${savedTheme.color2})`;
    }

    const userVidsEl = document.getElementById('profile-user-videos');
    if (userVidsEl) {
        const myVids = videosData.filter(v => v.channel === activeAcc.name || v.channel === 'Dev Code');
        userVidsEl.innerHTML = myVids.length ? myVids.map(createVideoHTML).join('') : '<p style="color:#666; grid-column: 1/-1; text-align:center;">ยังไม่มีวิดีโอ</p>';
    }
}

// 1. เปลี่ยนสีธีม Banner โปรไฟล์ (สำหรับ VIP)
window.changeProfileTheme = function(color1, color2) {
    if (!isUserVIP) {
        alert('ฟีเจอร์นี้สำหรับสมาชิก VIP เท่านั้น!');
        return;
    }
    const banner = document.getElementById('user-profile-banner');
    if (banner) {
        banner.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        localStorage.setItem('streamgram_profile_theme', JSON.stringify({ color1, color2 }));
    }
};

// 2. เปลี่ยนรูปโปรไฟล์โดยตรง
const profileAvatarWrapper = document.querySelector('.profile-avatar-wrapper');
if (profileAvatarWrapper && profileAvatarFileInput) {
    profileAvatarWrapper.addEventListener('click', () => profileAvatarFileInput.click());
    profileAvatarFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                accounts[currentAccountIndex].avatar = evt.target.result;
                localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
                updateProfileUI();
                renderVideos();
            };
            reader.readAsDataURL(file);
        }
    });
}

// 3. ปุ่มแก้ไขชื่อโปรไฟล์ & Bio
if (editProfileBtn) {
    editProfileBtn.addEventListener('click', () => {
        const activeAcc = accounts[currentAccountIndex];
        const newName = prompt('แก้ไขชื่อโปรไฟล์:', activeAcc.name);
        if (newName && newName.trim()) {
            const newBio = prompt('แก้ไขคำอธิบาย (Bio):', activeAcc.bio || '');
            activeAcc.name = newName.trim();
            activeAcc.bio = newBio ? newBio.trim() : '';
            localStorage.setItem('streamgram_accounts', JSON.stringify(accounts));
            updateProfileUI();
            renderVideos();
        }
    });
}

// 4. ระบบสร้างโค้ดส่วนลดแบ่งปันให้เพื่อน
if (generateCodeBtn) {
    generateCodeBtn.addEventListener('click', () => {
        const randomCode = 'VIPGIFT' + Math.floor(1000 + Math.random() * 9000);
        generatedVipCodeInput.value = randomCode;
        VALID_SHARED_CODES[randomCode] = "ส่วนลด 20% จากเพื่อน VIP! 🎉";
        alert(`สร้างโค้ดส่วนลด "${randomCode}" สำเร็จ! คัดลอกไปแจกเพื่อนได้เลย`);
    });
}

// 5. ระบบใช้โค้ดส่วนลดตอนซื้อ VIP
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

// 6. ระบบซื้อ VIP ชำระเงิน
if (confirmPayVipBtn) {
    confirmPayVipBtn.addEventListener('click', () => {
        if (confirm(`ยืนยันการชำระเงินจำนวน ${currentVipPrice} บาท เพื่อสมัคร VIP หรือไม่?`)) {
            isUserVIP = true;
            localStorage.setItem('streamgram_is_vip', 'true');
            updateProfileUI();
            if (vipBuyModal) vipBuyModal.style.display = 'none';
            alert('🎉 สมัครสมาชิก VIP สำเร็จแล้ว! ปลดล็อกการเปลี่ยนสีธีมและแจกโค้ดให้เพื่อนได้เลย');
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
if (closeProfileBtn) closeProfileBtn.addEventListener('click', () => profileModal.style.display = 'none');

if (currentUserAvatar) {
    currentUserAvatar.addEventListener('click', () => {
        updateProfileUI();
        if (profileModal) profileModal.style.display = 'flex';
    });
}

// ระบบสลับแท็บผลงานในหน้าโปรไฟล์
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
// 7. ระบบตั้งค่า & ติดต่อเจ้าหน้าที่
// ==========================================

const settingsModal = document.getElementById('settings-modal');
const settingsTrigger = document.getElementById('settings-trigger');
const closeSettings = document.getElementById('close-settings');
const sharedCodeInput = document.getElementById('shared-code-input');
const submitCodeBtn = document.getElementById('submit-code-btn');
const codeFeedback = document.getElementById('code-feedback');

if (settingsTrigger) settingsTrigger.addEventListener('click', () => settingsModal.style.display = 'flex');
if (closeSettings) closeSettings.addEventListener('click', () => settingsModal.style.display = 'none');

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
// 8. ระบบสลับหน้า Sidebar (SPA)
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
// 9. ระบบแชท Direct Messages & Notes
// ==========================================

let activeChatUserId = null;
let chatHistories = JSON.parse(localStorage.getItem('streamgram_chat_histories')) || {};

const menuIcon = document.querySelector('.menu-icon');
const chatModal = document.getElementById('chat-modal');
const closeChat = document.getElementById('close-chat');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

const noteViewerModal = document.getElementById('note-viewer-modal');
const closeNoteViewerBtn = document.getElementById('close-note-viewer');
const noteViewText = document.getElementById('note-view-text');
const noteViewAvatar = document.getElementById('note-view-avatar');
const noteViewUsername = document.getElementById('note-view-username');
const noteReplyForm = document.getElementById('note-reply-form');

window.openNoteViewer = function(noteId) {
    const noteData = notesData.find(n => n.id === noteId);
    if (!noteData || !noteViewerModal) return;

    if (noteViewText) noteViewText.textContent = noteData.note;
    if (noteViewAvatar) noteViewAvatar.src = noteData.avatar;
    if (noteViewUsername) noteViewUsername.textContent = noteData.name;

    noteViewerModal.style.display = 'flex';
};

if (closeNoteViewerBtn) closeNoteViewerBtn.addEventListener('click', () => noteViewerModal.style.display = 'none');

if (noteReplyForm) {
    noteReplyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const replyInput = document.getElementById('note-reply-input');
        if (replyInput && replyInput.value.trim()) {
            alert(`ส่งข้อความตอบกลับ "${replyInput.value.trim()}" เรียบร้อยแล้ว!`);
            replyInput.value = '';
            if (noteViewerModal) noteViewerModal.style.display = 'none';
        }
    });
}

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
        chatHistories[userId] = [{ sender: 'ระบบ', text: 'เริ่มต้นการพูดคุย!', type: 'bot' }];
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
            chatHistories[activeChatUserId] = [{ sender: 'ระบบ', text: 'เริ่มต้นการพูดคุย!', type: 'bot' }];
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

if (closeChat) closeChat.addEventListener('click', () => chatModal.style.display = 'none');

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
            const replies = [`ได้รับข้อความ "${text}" เรียบร้อยแล้วครับ!`, 'รับทราบครับผม 👍', 'ยินดีที่ได้คุยครับ 😊', 'ไว้คุยกันใหม่นะ!'];
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
// 10. ระบบกดค้าง แล้วลากเลือกธีมสี (Drag Theme Selector)
// ==========================================

const themePickerBar = document.getElementById('theme-picker-bar');
const themeOptions = document.querySelectorAll('.theme-option');
let longPressTimer = null;
let isDraggingTheme = false;
let currentHoveredTheme = null;

function applyChatTheme(themeName) {
    const chatMessagesEl = document.getElementById('chat-messages');
    if (!chatMessagesEl) return;

    chatMessagesEl.className = 'chat-messages';
    chatMessagesEl.classList.add(`theme-${themeName}`);
    localStorage.setItem('streamgram_chat_theme', themeName);
}

function handlePressStart(e) {
    longPressTimer = setTimeout(() => {
        isDraggingTheme = true;
        if (themePickerBar) {
            themePickerBar.style.display = 'flex';
            setTimeout(() => themePickerBar.classList.add('show'), 10);
        }
        if (navigator.vibrate) navigator.vibrate(50);
    }, 400);
}

function handleMove(e) {
    if (!isDraggingTheme) {
        clearTimeout(longPressTimer);
        return;
    }

    if (e.cancelable) e.preventDefault();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const elementUnder = document.elementFromPoint(clientX, clientY);
    const hoveredOption = elementUnder ? elementUnder.closest('.theme-option') : null;

    themeOptions.forEach(opt => opt.classList.remove('hovered'));

    if (hoveredOption) {
        hoveredOption.classList.add('hovered');
        currentHoveredTheme = hoveredOption.getAttribute('data-theme');
    } else {
        currentHoveredTheme = null;
    }
}

function handlePressEnd() {
    clearTimeout(longPressTimer);

    if (isDraggingTheme) {
        isDraggingTheme = false;
        
        if (currentHoveredTheme) {
            applyChatTheme(currentHoveredTheme);
        }

        if (themePickerBar) {
            themePickerBar.classList.remove('show');
            setTimeout(() => {
                themePickerBar.style.display = 'none';
            }, 150);
        }

        themeOptions.forEach(opt => opt.classList.remove('hovered'));
        currentHoveredTheme = null;
    }
}

const chatHeader = document.querySelector('.ig-active-header');
if (chatHeader) {
    chatHeader.addEventListener('mousedown', handlePressStart);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handlePressEnd);

    chatHeader.addEventListener('touchstart', handlePressStart, { passive: false });
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handlePressEnd);
}


// ==========================================
// 11. ประวัติการเล่นเกม
// ==========================================

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
// 12. ระบบระบุพิกัดตำแหน่งปัจจุบัน (Geolocation)
// ==========================================

const geoLocationBtn = document.getElementById('geo-location-btn');
const locationModal = document.getElementById('location-modal');
const closeLocationBtn = document.getElementById('close-location');
const refreshGeoBtn = document.getElementById('refresh-geo-btn');

const countryVal = document.getElementById('country-val');
const provinceVal = document.getElementById('province-val');
const subdistrictVal = document.getElementById('subdistrict-val');
const latVal = document.getElementById('lat-val');
const lngVal = document.getElementById('lng-val');
const accVal = document.getElementById('acc-val');

function getCurrentCoordinates() {
    if (countryVal) countryVal.textContent = 'กำลังค้นหา...';
    if (provinceVal) provinceVal.textContent = 'กำลังค้นหา...';
    if (subdistrictVal) subdistrictVal.textContent = 'กำลังค้นหา...';
    if (latVal) latVal.textContent = '-';
    if (lngVal) lngVal.textContent = '-';
    if (accVal) accVal.textContent = '-';

    if (!navigator.geolocation) {
        useFallbackCoordinates();
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy.toFixed(1);

            if (latVal) latVal.textContent = latitude.toFixed(6);
            if (lngVal) lngVal.textContent = longitude.toFixed(6);
            if (accVal) accVal.textContent = accuracy;

            await fetchAddressFromCoords(latitude, longitude);
        },
        (error) => {
            console.warn('Geolocation Error, using fallback:', error);
            useFallbackCoordinates();
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
}

async function fetchAddressFromCoords(lat, lng) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=th`);
        const data = await response.json();

        if (data && data.address) {
            const addr = data.address;
            const country = addr.country || 'ประเทศไทย';
            const province = addr.state || addr.province || addr.city || 'กรุงเทพมหานคร';
            const subdistrict = addr.suburb || addr.subdistrict || addr.quarter || addr.neighbourhood || addr.town || addr.city_district || 'ไม่ระบุตำบล/แขวง';

            if (countryVal) countryVal.textContent = country;
            if (provinceVal) provinceVal.textContent = province;
            if (subdistrictVal) subdistrictVal.textContent = subdistrict;
        } else {
            useFallbackAddress();
        }
    } catch (err) {
        console.error('Reverse Geocoding error:', err);
        useFallbackAddress();
    }
}

function useFallbackCoordinates() {
    const mockLat = 13.756331;
    const mockLng = 100.501762;

    if (latVal) latVal.textContent = `${mockLat} (จำลอง)`;
    if (lngVal) lngVal.textContent = `${mockLng} (จำลอง)`;
    if (accVal) accVal.textContent = '15.0';

    if (countryVal) countryVal.textContent = 'ประเทศไทย (จำลอง)';
    if (provinceVal) provinceVal.textContent = 'กรุงเทพมหานคร (จำลอง)';
    if (subdistrictVal) subdistrictVal.textContent = 'แขวงพระบรมมหาราชวัง (จำลอง)';
}

function useFallbackAddress() {
    if (countryVal && countryVal.textContent === 'กำลังค้นหา...') countryVal.textContent = 'ประเทศไทย';
    if (provinceVal && provinceVal.textContent === 'กำลังค้นหา...') provinceVal.textContent = 'กรุงเทพมหานคร';
    if (subdistrictVal && subdistrictVal.textContent === 'กำลังค้นหา...') subdistrictVal.textContent = 'เขตพระนคร';
}

if (geoLocationBtn) {
    geoLocationBtn.addEventListener('click', () => {
        if (locationModal) locationModal.style.display = 'flex';
        getCurrentCoordinates();
    });
}

if (closeLocationBtn) closeLocationBtn.addEventListener('click', () => locationModal.style.display = 'none');
if (refreshGeoBtn) refreshGeoBtn.addEventListener('click', getCurrentCoordinates);


// ==========================================
// 13. เริ่มต้นการทำงานของแอปพลิเคชัน (Init App)
// ==========================================

function initApp() {
    updateProfileUI();
    renderStories();
    renderVideos();
    renderShorts();
    renderGameActivity();
    
    const savedTheme = localStorage.getItem('streamgram_chat_theme') || 'default';
    applyChatTheme(savedTheme);
}
