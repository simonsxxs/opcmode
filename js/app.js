// One Person Business Hub - Main Application

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Load YouTube tutorials
async function loadYouTubeTutorials() {
    try {
        const response = await fetch('data/youtube_tutorials.json');
        if (!response.ok) throw new Error('Failed to load YouTube data');
        const data = await response.json();

        // Update counter
        document.getElementById('video-count').textContent = data.length || '--';

        // Render videos
        const grid = document.getElementById('youtube-grid');
        if (data.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">暂无视频数据</div>';
            return;
        }

        grid.innerHTML = data.map(video => `
            <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-100">
                <div class="aspect-video bg-gray-200 relative">
                    <img src="${video.thumbnail || 'https://via.placeholder.com/480x270?text=No+Thumbnail'}"
                         alt="${video.title}"
                         class="w-full h-full object-cover"
                         onerror="this.src='https://via.placeholder.com/480x270?text=No+Thumbnail'">
                    <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-lg text-gray-900 mb-2 line-clamp-2">${video.title}</h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-2">${video.description || '暂无描述'}</p>
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <span>${video.channel || 'Unknown'}</span>
                        <span>${video.duration || ''}</span>
                    </div>
                    <a href="${video.url}" target="_blank"
                       class="mt-4 block text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                        观看视频
                    </a>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading YouTube tutorials:', error);
        document.getElementById('youtube-grid').innerHTML = `
            <div class="col-span-full text-center py-12 text-gray-500">
                <p>加载视频数据失败</p>
                <p class="text-sm mt-2">${error.message}</p>
            </div>
        `;
    }
}

// Load X content
async function loadXContent() {
    try {
        const response = await fetch('data/x_content.json');
        if (!response.ok) throw new Error('Failed to load X content');
        const data = await response.json();

        // Update counter
        document.getElementById('post-count').textContent = data.length || '--';

        // Render posts
        const grid = document.getElementById('x-grid');
        if (data.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">暂无帖子数据</div>';
            return;
        }

        grid.innerHTML = data.map(post => `
            <div class="bg-white rounded-xl shadow-md p-6 card-hover border border-gray-100">
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                        <div class="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-2">
                            <span class="font-bold text-gray-900">${post.author || 'Unknown'}</span>
                            <span class="text-gray-500 text-sm">@${post.handle || ''}</span>
                            <span class="text-gray-400 text-sm">· ${post.date || ''}</span>
                        </div>
                        <p class="text-gray-800 mb-4 whitespace-pre-line">${post.content || ''}</p>
                        ${post.tags ? `
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${post.tags.map(tag => `<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">#${tag}</span>`).join('')}
                            </div>
                        ` : ''}
                        <a href="${post.url}" target="_blank"
                           class="inline-flex items-center text-blue-500 hover:text-blue-700 transition">
                            <span>查看原文</span>
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading X content:', error);
        document.getElementById('x-grid').innerHTML = `
            <div class="col-span-full text-center py-12 text-gray-500">
                <p>加载 X 内容失败</p>
                <p class="text-sm mt-2">${error.message}</p>
            </div>
        `;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadYouTubeTutorials();
    loadXContent();
});
