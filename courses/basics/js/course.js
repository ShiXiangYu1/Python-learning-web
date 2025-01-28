/**
 * Python基础课程JavaScript文件
 * 实现课程页面的交互效果
 */

document.addEventListener('DOMContentLoaded', () => {
    // 为侧边栏导航项添加动画延迟
    const navItems = document.querySelectorAll('.course-nav__item');
    navItems.forEach((item, index) => {
        item.style.setProperty('--item-index', index);
    });

    // 高亮当前页面的导航项
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.course-nav__link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('course-nav__link--active');
        }
    });

    // 模块卡片悬停效果
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease-out';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 课程进度追踪
    const trackProgress = () => {
        const progressKey = 'python_basics_progress';
        let progress = JSON.parse(localStorage.getItem(progressKey) || '{}');

        // 标记已访问的页面
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage && currentPage !== 'index.html') {
            progress[currentPage] = true;
            localStorage.setItem(progressKey, JSON.stringify(progress));
        }

        // 更新导航项的状态
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (progress[href]) {
                const icon = document.createElement('i');
                icon.className = 'fas fa-check';
                icon.style.marginLeft = 'var(--spacing-sm)';
                icon.style.color = '#4CAF50';
                if (!link.querySelector('.fas.fa-check')) {
                    link.appendChild(icon);
                }
            }
        });
    };

    trackProgress();

    // 页面滚动进度指示器
    const createScrollIndicator = () => {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 3px;
            background-color: var(--color-primary);
            z-index: 1001;
            transition: width 0.2s ease-out;
        `;
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            indicator.style.width = scrolled + '%';
        });
    };

    createScrollIndicator();

    // 代码块复制功能
    const addCodeCopyButtons = () => {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const copyButton = document.createElement('button');
            copyButton.className = 'code-copy-button';
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            copyButton.style.cssText = `
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                padding: 0.5rem;
                background: rgba(255, 255, 255, 0.1);
                border: none;
                border-radius: var(--border-radius);
                color: white;
                cursor: pointer;
                transition: background-color 0.3s ease;
            `;

            const pre = block.parentElement;
            pre.style.position = 'relative';
            pre.appendChild(copyButton);

            copyButton.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(block.textContent);
                    copyButton.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                }
            });

            copyButton.addEventListener('mouseenter', () => {
                copyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            });

            copyButton.addEventListener('mouseleave', () => {
                copyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            });
        });
    };

    addCodeCopyButtons();

    // 页面加载动画
    const fadeInContent = () => {
        const content = document.querySelector('.course-content');
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 100);
    };

    fadeInContent();
}); 