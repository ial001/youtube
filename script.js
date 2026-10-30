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
