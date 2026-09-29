const translations = {
  vi: {
    navAbout: 'Giới thiệu', navExpertise: 'Thế mạnh', navWork: 'Dự án', navJourney: 'Kinh nghiệm', navContact: 'Kết nối <span aria-hidden="true">↗</span>',
    heroEyebrow: 'HỆ THỐNG BACKEND / SẢN PHẨM FULL-STACK', heroHello: 'HELLO, WORLD. MÌNH LÀ', heroRole: 'Java & Full-Stack Developer',
    heroDescription: 'Mình xây dựng nền tảng thời gian thực, làm cho backend phức tạp vận hành tin cậy và biến ý tưởng thành sản phẩm hữu ích.',
    exploreWork: 'Xem dự án', metricYears: 'năm làm sản phẩm thật', metricQueries: 'truy vấn mỗi chu kỳ', metricSystems: 'tư duy thời gian thực', visualCaption: 'KỸ THUẬT CÓ CHỦ ĐÍCH', scrollExplore: 'CUỘN ĐỂ KHÁM PHÁ',
    aboutAside: 'CON NGƯỜI SAU DÒNG CODE', aboutTitle: 'Xây dựng cho <em>thế giới thật.</em>', aboutIntro: 'Một lập trình viên quan tâm đến điều xảy ra sau khi sản phẩm được đưa vào vận hành.',
    aboutP1: 'Mình là Java và full-stack developer với hơn bốn năm trực tiếp xây dựng, vận hành phần mềm production. Thế mạnh của mình nằm ở giao điểm giữa dữ liệu thời gian thực, tích hợp phức tạp và độ tin cậy.',
    aboutP2: 'Mình làm việc xuyên suốt từ thiết kế API, tối ưu cơ sở dữ liệu đến worker bất đồng bộ, luồng WebSocket, giao diện người dùng và xử lý sự cố. Mình thích tìm đúng điểm nghẽn, thay đổi có trọng tâm và chứng minh kết quả.',
    aboutSignature: 'Lập trình viên / người giải quyết vấn đề', principle1Title: 'Hiệu năng có số liệu', principle1Body: 'Đo trước, tối ưu đúng luồng xử lý và kiểm chứng kết quả.', principle2Title: 'Tư duy hệ thống', principle2Body: 'Hiểu cách API, messaging, dữ liệu và người dùng ảnh hưởng lẫn nhau.', principle3Title: 'Làm chủ production', principle3Body: 'Xây dựng, vận hành, gỡ lỗi và cải tiến hệ thống theo thời gian.',
    expertiseAside: 'GIÁ TRỊ MÌNH MANG LẠI', expertiseTitle: 'Đi sâu vào backend.<br /><em>Linh hoạt toàn stack.</em>', expertiseIntro: 'Từ dịch vụ phản hồi nhanh đến giao diện dễ dùng, mình kết nối các phần để sản phẩm vận hành trọn vẹn.',
    expertise1Title: 'Kiến trúc thời gian thực', expertise1Body: 'REST, RabbitMQ, WebSocket, background workers và tích hợp nhà cung cấp cho các quy trình hướng sự kiện.',
    expertise2Title: 'Kỹ thuật hiệu năng', expertise2Body: 'Tối ưu SQL, loại bỏ N+1 và dùng Java 21 Virtual Threads cho tác vụ I/O.',
    expertise3Title: 'Phát triển full-stack', expertise3Body: 'API rõ ràng cùng trải nghiệm React, Angular và Next.js phục vụ quy trình thực tế.',
    expertise4Title: 'Chịu trách nhiệm vận hành', expertise4Body: 'Gỡ lỗi xuyên tầng ứng dụng, messaging và dữ liệu, với kiểm thử hồi quy có trọng tâm.',
    impactEyebrow: 'MỘT KẾT QUẢ HIỆU NĂNG THỰC TẾ', impactTitle: 'Ít truy vấn hơn.<br /><em>Thông lượng tốt hơn.</em>', impactDescription: 'Mình tối ưu một luồng tổng hợp odds bị N+1 từ 201 truy vấn cơ sở dữ liệu xuống còn 1 truy vấn mỗi chu kỳ xử lý — giảm 99,5% số truy vấn.', impactFootnote: 'Một cải tiến có trọng tâm trong hệ thống production bảo mật thông tin khách hàng.', impactBefore: 'TRƯỚC', impactAfter: 'SAU', impactReduction: 'GIẢM SỐ TRUY VẤN',
    workAside: 'HỆ THỐNG, CÔNG CỤ & SẢN PHẨM', workTitle: 'Sản phẩm <em>đi vào vận hành.</em>', workIntro: 'Những hệ thống mình đã xây dựng, cải tiến và trực tiếp phụ trách.',
    project1Type: 'HỆ THỐNG PRODUCTION / BẢO MẬT', project1Title: 'Nền tảng cá cược thời gian thực', project1Body: 'Xây dựng và bảo trì các dịch vụ Java/Spring Boot cho luồng cá cược trực tiếp, tổng hợp odds, tích hợp nhà cung cấp, messaging và phân phối qua WebSocket.', project1Outcome: 'Tối ưu một luồng N+1 từ 201 xuống 1 truy vấn mỗi chu kỳ.',
    project2Type: 'PHỤ TRÁCH MODULE / NỘI BỘ', project2Title: 'Odds Monitor', project2Body: 'Phụ trách API, background workers, thu thập, chuẩn hóa, lưu trữ, phân tích dữ liệu và hỗ trợ vận hành cho module theo dõi odds.',
    project3Type: 'DỰ ÁN CÁ NHÂN / FULL-STACK', project3Body: 'Website song ngữ và nền tảng vận hành có phân quyền cho khách hàng, đơn hàng, danh sách chờ, phân tích và quản trị.', viewRepository: 'Xem repository',
    stackAside: 'CÔNG CỤ PHỤC VỤ CÔNG VIỆC', stackTitle: 'Công cụ là phương tiện.<br /><em>Kết quả mới quan trọng.</em>', stackIntro: 'Bộ công cụ thực tiễn trải rộng từ dịch vụ, dữ liệu đến giao diện và triển khai.',
    journeyAside: 'KINH NGHIỆM LÀM VIỆC', journeyTitle: 'Kinh nghiệm từ việc <em>xây dựng.</em>', present: 'HIỆN TẠI', experienceLabel: 'KINH NGHIỆM',
    palRole: 'Java Developer / Full-Stack Developer', palBody: 'Dịch vụ Java production, luồng dữ liệu thời gian thực, tích hợp nhà cung cấp, tối ưu SQL và xử lý sự cố xuyên tầng.', patRole: 'Front-End Developer', patBody: 'Giao diện React responsive, component tái sử dụng và các quy trình kết nối API.',
    contactTitle: 'Cùng xây dựng thứ gì đó <em>thật hiệu quả.</em>', contactBody: 'Quan tâm đến hệ thống tin cậy, một sản phẩm chỉn chu hoặc một cuộc trao đổi kỹ thuật? Hãy kết nối với mình trên GitHub.', visitGitHub: 'Ghé GitHub của mình', copyHandle: 'Sao chép @ltqhuy0112', contactBottom: 'XÂY DỰNG CÓ CHỦ ĐÍCH, MỖI NGÀY.', backTop: 'VỀ ĐẦU TRANG', copied: 'Đã sao chép @ltqhuy0112'
  },
  en: { copied: 'Copied @ltqhuy0112' }
};

const translatable = [...document.querySelectorAll('[data-i18n]')];
const original = Object.fromEntries(translatable.map(el => [el.dataset.i18n, el.innerHTML]));
const languageButton = document.querySelector('.language-toggle');
let lang = 'en';
try { if (localStorage.getItem('adam-le-language') === 'vi') lang = 'vi'; } catch (_) {}

function setLanguage(next) {
  lang = next;
  document.documentElement.lang = next;
  translatable.forEach(el => { el.innerHTML = (translations[next] && translations[next][el.dataset.i18n]) || original[el.dataset.i18n]; });
  languageButton.innerHTML = next === 'en'
    ? '<span class="lang-active">EN</span><span class="lang-divider">/</span><span class="lang-inactive">VI</span>'
    : '<span class="lang-inactive">EN</span><span class="lang-divider">/</span><span class="lang-active">VI</span>';
  languageButton.setAttribute('aria-label', next === 'en' ? 'Switch language to Vietnamese' : 'Chuyển sang tiếng Anh');
  document.title = next === 'en' ? 'Adam Le — Java & Full-Stack Developer' : 'Adam Le — Lập trình viên Java & Full-Stack';
  try { localStorage.setItem('adam-le-language', next); } catch (_) {}
}
languageButton.addEventListener('click', () => setLanguage(lang === 'en' ? 'vi' : 'en'));
setLanguage(lang);

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navLinks.classList.toggle('open', !expanded);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  navLinks.classList.remove('open');
}));

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08, rootMargin: '0px 0px -30px 0px' });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('in-view'));

const progress = document.querySelector('.scroll-progress');
const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...navLinks.querySelectorAll('a[href^="#"]')];
let scrollScheduled = false;
function updateScroll() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = (scrollable > 0 ? scrollY / scrollable * 100 : 0) + '%';
  let current = '';
  sections.forEach(section => { if (section.getBoundingClientRect().top < 180) current = section.id; });
  navAnchors.forEach(anchor => anchor.classList.toggle('active', anchor.getAttribute('href') === '#' + current));
  scrollScheduled = false;
}
addEventListener('scroll', () => { if (!scrollScheduled) { requestAnimationFrame(updateScroll); scrollScheduled = true; } }, { passive: true });
addEventListener('resize', updateScroll, { passive: true });
updateScroll();

const copyButton = document.querySelector('.copy-handle');
const toast = document.querySelector('.toast');
let toastTimer;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
  } catch (_) {
    const field = document.createElement('textarea');
    field.value = copyButton.dataset.copy;
    field.style.position = 'fixed'; field.style.opacity = '0';
    document.body.append(field); field.select(); document.execCommand('copy'); field.remove();
  }
  toast.textContent = translations[lang].copied;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
});

document.getElementById('year').textContent = String(new Date().getFullYear());
