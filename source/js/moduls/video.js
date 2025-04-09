const videoContainer = document.querySelector('.video__container');
const videoPlayer = document.querySelector('.video__button-player');
const iframe = document.createElement('iframe');
const videoSrc = videoPlayer.dataset.video;

function iframeCreate() {
  iframe.setAttribute('src', `${videoSrc}?autoplay=1`);
  iframe.setAttribute(
    'allow',
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; c; web-share; picture-in-picture'
  );
  iframe.setAttribute('encrypted-media', '');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframe.setAttribute('loading', 'lazy');
  iframe.classList.add('video__iframe');
  videoContainer.innerHTML = '';
  videoContainer.appendChild(iframe);
}

videoPlayer.addEventListener('click', () => {
  iframeCreate();
});
