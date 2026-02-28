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
        const result = await response.json();
        const videos = result.videos || [];

        // Update counter
        document.getElementById('video-count').textContent = videos.length || '--';

        // Render videos
        const grid = document.getElementById('youtube-grid');
        if (videos.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">暂无视频数据</div>';
            return;
        }

        grid.innerHTML = videos.map(video => `
            <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover border border-gray-100">
                <div class="aspect-video bg-gradient-to-br from-red-500 to-pink-600 relative flex items-center justify-center">
                    <div class="text-white text-center p-4">
                        <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        <span class="text-sm opacity-90">${video.category || '视频'}</span>
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">${video.category || '视频'}</span>
                        ${video.featured ? '<span class="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">精选</span>' : ''}
                    </div>
                    <h3 class="font-bold text-lg text-gray-900 mb-2 line-clamp-2">${video.title}</h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-2">${video.description || '暂无描述'}</p>
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span class="flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                            ${video.channel || 'Unknown'}
                        </span>
                        <span class="flex items-center">
                            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            ${video.language || '未知'}
                        </span>
                    </div>
                    ${video.topics ? `
                        <div class="flex flex-wrap gap-1 mb-3">
                            ${video.topics.slice(0, 3).map(topic => `<span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">${topic}</span>`).join('')}
                        </div>
                    ` : ''}
                    <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(video.title)}" target="_blank"
                       class="block text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                        搜索观看
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
        const result = await response.json();
        const posts = result.posts || [];

        // Update counter
        document.getElementById('post-count').textContent = posts.length || '--';

        // Render posts
        const grid = document.getElementById('x-grid');
        if (posts.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">暂无帖子数据</div>';
            return;
        }

        grid.innerHTML = posts.map(post => `
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
                            ${post.author_title ? `<span class="text-gray-500 text-sm">· ${post.author_title}</span>` : ''}
                        </div>
                        <p class="text-gray-800 mb-4 whitespace-pre-line">${post.content_summary || ''}</p>
                        ${post.key_insights ? `
                            <div class="bg-gray-50 rounded-lg p-4 mb-4">
                                <h4 class="font-semibold text-gray-700 mb-2">核心观点：</h4>
                                <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                                    ${post.key_insights.map(insight => `<li>${insight}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        <div class="flex items-center justify-between">
                            ${post.tags ? `
                                <div class="flex flex-wrap gap-2">
                                    ${post.tags.slice(0, 3).map(tag => `<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">#${tag}</span>`).join('')}
                                </div>
                            ` : '<div></div>'}
                            <a href="${post.link || '#'}" target="_blank"
                               class="inline-flex items-center text-blue-500 hover:text-blue-700 transition">
                                <span>查看原文</span>
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        </div>
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
