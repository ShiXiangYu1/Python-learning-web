/**
 * Python学习网站主JavaScript文件
 * 实现网站的交互效果和功能
 */

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 导航栏滚动效果
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // 向下滚动，隐藏导航栏
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.3s ease-in-out';
        } else {
            // 向上滚动，显示导航栏
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // 特性卡片动画
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // 课程卡片悬停效果
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease-out';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 移动端导航菜单
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const menu = document.querySelector('.nav__menu');
        
        // 创建汉堡菜单按钮
        const menuButton = document.createElement('button');
        menuButton.className = 'nav__menu-button';
        menuButton.innerHTML = `
            <span class="nav__menu-icon"></span>
        `;
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .nav__menu-button {
                display: none;
                background: none;
                border: none;
                cursor: pointer;
                padding: 10px;
            }

            .nav__menu-icon {
                display: block;
                width: 25px;
                height: 3px;
                background-color: var(--color-primary);
                position: relative;
                transition: background-color 0.3s;
            }

            .nav__menu-icon::before,
            .nav__menu-icon::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: var(--color-primary);
                transition: transform 0.3s;
            }

            .nav__menu-icon::before {
                transform: translateY(-8px);
            }

            .nav__menu-icon::after {
                transform: translateY(8px);
            }

            .nav--open .nav__menu-icon {
                background-color: transparent;
            }

            .nav--open .nav__menu-icon::before {
                transform: rotate(45deg);
            }

            .nav--open .nav__menu-icon::after {
                transform: rotate(-45deg);
            }

            @media (max-width: 768px) {
                .nav__menu-button {
                    display: block;
                }

                .nav__menu {
                    display: none;
                    width: 100%;
                }

                .nav--open .nav__menu {
                    display: flex;
                }
            }
        `;
        
        document.head.appendChild(style);
        nav.insertBefore(menuButton, menu);

        // 添加点击事件
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('nav--open');
        });

        // 点击菜单项时关闭菜单
        menu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav--open');
            });
        });
    };

    // 在移动端创建菜单
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }

    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && !document.querySelector('.nav__menu-button')) {
            createMobileMenu();
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 页面加载完成后的动画
    const fadeInElements = document.querySelectorAll('.hero__content, .feature-card, .course-card');
    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}); 