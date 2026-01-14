/*=================================================================*\
/* By: 			|	Nevera Development  							|
/* FiveM: 		|	https://forum.cfx.re/u/neveradevelopment		|
/* Discord: 	|	https://discord.gg/NeveraDev/tw28AqrgWU  		|
/*=================================================================*/
/* If you have any problems you can contact us via discord. <3     */


$(".center h1").html(name)
$(".center p").html(underName)
$(".center span").html(desc)
var serverInfo = null
function loading(num){
	let current = parseInt($(".loading-bar p").text(), 10) || 0;
	const step = 1;
	const delay = 700 / Math.abs(num - current);

	const interval = setInterval(function(){
		if (current < num) {
			current += step;
			if (current > num) current = num;
		} else if (current > num) {
			current -= step;
			if (current < num) current = num;
		} else {
			clearInterval(interval);
		}
		$(".loading-bar p").text(current + "%");
	}, delay);
	
	$(".loading-bar .line").width(num + "%");
}

if (showStaffTeam){
	$(".panel.staffteam").show()
	staff_team.forEach(function(user){
		$(".staff_team").append(`
			<div class="staff">
				<div class="info">
					<img src="${user.image}" class="pfp">
					<p>${user.name}</p>
				</div>
				<p class="status">${user.rank}</p>
			</div>
		`)
	})
}

if (showTipList){
	$(".panel.panelInfo").show()
}

window.addEventListener('message', function(e) {
    if(e.data.eventName === 'loadProgress') {
    	var num = (e.data.loadFraction * 100).toFixed(0)
        loading(num);
    }
});

const socials = { discord, instagram, youtube, twitter, tiktok, facebook, twitch, github };
const platforms = ["discord", "instagram", "youtube", "twitter", "tiktok", "facebook", "twitch", "github"];

platforms.forEach(platform => {
	if (socials[platform] != "") {
		$(`.${platform}`).show();
		$(`.${platform} a`).attr("href", socials[platform]);
	}
});

$("a").on("click",function(e){
	e.preventDefault()
	window.invokeNative('openUrl', e.target.href)
})

if (theme == "orange"){
	$("body").append(`<style>:root{--main:255, 150, 0;}</style>`)
	$("body").css("background-image","url('assets/img/orange.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(255 150 0 / 10%) 0%, rgba(255, 150, 0, 0.0) 100%)")
}
if (theme == "red"){
	$("body").append(`<style>:root{--main:255,0,0;}</style>`)
	$("body").css("background-image","url('assets/img/red.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(255 0 0 / 10%) 0%, rgba(255, 0, 0, 0.0) 100%)")
}
if (theme == "blue"){
	$("body").append(`<style>:root{--main:0, 163, 255;}</style>`)
	$("body").css("background-image","url('assets/img/blue.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(0 163 255 / 10%) 0%, rgba(0, 163, 255, 0.0) 100%)")
}
if (theme == "green"){
	$("body").append(`<style>:root{--main:65, 255, 0;}</style>`)
	$("body").css("background-image","url('assets/img/green.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(65 255 0 / 10%) 0%, rgba(65, 255, 0, 0.0) 100%)")
}
if (theme == "pink"){
	$("body").append(`<style>:root{--main:255, 122, 237;}</style>`)
	$("body").css("background-image","url('assets/img/pink.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(255 122 237 / 10%) 0%, rgba(255, 122, 237, 0.0) 100%)")
}
if (theme == "purple"){
	$("body").append(`<style>:root{--main:193, 67, 255;}</style>`)
	$("body").css("background-image","url('assets/img/purple.jpg')")
	$(".winter").css("background","linear-gradient(0deg, rgb(193 67 255 / 10%) 0%, rgba(193, 67, 255, 0.0) 100%)")
}
// Winter update
if (enableWinterUpdate){
	particlesJS("particles-js", { "particles": { "number": { "value": 160, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1.5, "direction": "bottom", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": true, "rotateX": 100, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 223.7762237762238, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
	$("body").css("background-image","url('assets/img/winter.jpg')")
	$(".winter").css("display","flex")
	$("#particles-js").css("opacity",1)
}

let a, vl, yt, isMute = false, isPaused = false;

if (youtubeVideo.startsWith("https://www.youtube.com")) {
	if (!enableLocalVideo){
		let videoId = youtubeVideo.split('/').pop().split('=')[1];
		if (!showYoutubeVideo){
			videoOpacity = 0

		}
		$("iframe").attr("src", `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&enablejsapi=1&disablekb=1`)
				   .css({ filter: `blur(${videoBlur}px)`, opacity: videoOpacity });
		if (showYoutubeVideo) $("body").css("background", "#000");
		if (enableLocalVideo){
			$("iframe").attr("src","")
		}
	}
}
if (localAudio) {
	$('body').append('<audio id="audioPlayer" src="audio.mp3" loop></audio>');
	$('#audioPlayer')[0].play();
	a = $('#audioPlayer');
}

if (enableLocalVideo) {
	$('body').append('<video id="videoPlayer" autoplay loop><source src="video.webm" type="video/webm"></video>');
	$('#videoPlayer')[0].play();
	vl = $('#videoPlayer');
	if (localAudio){
		vl[0].muted = true
	}
	$("body").css("background", "#000");
}

function onYouTubeIframeAPIReady() {
	yt = new YT.Player('youtube-video', { 
		events: { 'onReady': onPlayerReady }
	});
}

function onPlayerReady() {
	if (localAudio) { yt.mute(); }
}

function toggleMute(self) {
	$(self).toggleClass("act");
	isMute = !isMute;
	if (yt && typeof yt.mute === "function") {
		localAudio ? yt.mute() : (isMute ? yt.mute() : yt.unMute());
	}
	if (a && a[0]) { a[0].muted = isMute; }
	if (vl && vl[0]) { if (localAudio){vl[0].muted = true}; vl[0].muted = localAudio || isMute; }
}

function togglePause(self) {
	$(self).toggleClass("act");
	isPaused = !isPaused;
	if (yt && typeof yt.pauseVideo === "function" && typeof yt.playVideo === "function") {
		isPaused ? yt.pauseVideo() : yt.playVideo();
	}
	if (a && a[0]) { isPaused ? a[0].pause() : a[0].play(); }
	if (vl && vl[0]) { isPaused ? vl[0].pause() : vl[0].play()}
}


function setVolume(volume) {
	if (a && a[0]) { a[0].volume = volume / 100; }
	if (vl && vl[0]) { vl[0].volume = volume / 100; }
	if (yt && typeof yt.setVolume === "function" && yt.videoTitle !== "" && !localAudio) {
		yt.setVolume(volume);
	}

	$(".inpt span").text(volume + "%");
	$(".volume-slider").css({
		background: `rgba(var(--main), ${(volume / 100) + 0.2})`
	});
}

let currentTipIndex = 0;
let progressStartTime = 0;
let progressTimeout;
let paused = false;
let remaining = 0;

function load_tips(config) {
    const container = document.getElementById('tipsContainer');
    const dotsContainer = document.getElementById('dotsContainer');
    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    config.forEach((tip, i) => {
        const panelItem = document.createElement('div');
        panelItem.classList.add('panelItem');
        panelItem.style.opacity = 0;
        var img = ""
        if (tip.img && tip.img != ""){img = `<img src="${tip.img}">`}
        if (tip.img == ""){img = `<img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=">`}
        if (tip.img && tip.img.startsWith("/tips")){
        	img = `<img src="assets/img${tip.img}">`
        }
        var pClass = ''
        if (img == ''){
        	pClass = 'long'
        }
        panelItem.innerHTML = `
            ${img}
            <div class="bg">
	            <div class="content">
	                <h2>${tip.title}</h2>
	                <p class='${pClass}'>${tip.text}</p>
	            </div>
        	</div>
        `;
        container.appendChild(panelItem);

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showTip(i));
        panelItem.addEventListener('mouseenter', pauseProgress);
        panelItem.addEventListener('mouseleave', resumeProgress);
        dotsContainer.appendChild(dot);
    });

    showTip(0);
}

function showTip(index) {
    const items = document.querySelectorAll('.panelItem');
    const dots = document.querySelectorAll('.dot');

    items.forEach((item, i) => {
        if (i === index) {
            fadeIn(item, 100);
            item.classList.add('active');
        } else {
            fadeOut(item, 100);
            item.classList.remove('active');
        }
    });

    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));

    currentTipIndex = index;
    remaining = tipsConfig[index].timeout * 1000;
    startProgress();
}

function fadeIn(element, duration) {
    element.style.display = '';
    element.style.opacity = 0;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        } else {
            element.style.opacity = 1;
        }
    };
    tick();
}

function fadeOut(element, duration) {
    element.style.opacity = 1;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
        last = +new Date();

        if (+element.style.opacity > 0) {
            requestAnimationFrame(tick);
        } else {
            element.style.opacity = 0;
            element.style.display = 'none';
        }
    };
    tick();
}

function startProgress() {
    const bar = document.getElementById('progressBar');
    const tip = tipsConfig[currentTipIndex];
    const total = remaining;

    clearTimeout(progressTimeout);
    bar.style.transition = 'none';
    bar.style.width = `${ ((tip.timeout*1000 - remaining)/(tip.timeout*1000)) * 100 }%`;

    progressStartTime = Date.now();

    setTimeout(() => {
        if (!paused) {
            bar.style.transition = `width ${total/1000}s linear`;
            bar.style.width = '100%';
        }
    }, 20);

    progressTimeout = setTimeout(nextTip, total);
}

function nextTip() {
    remaining = 0;
    showTip((currentTipIndex + 1) % tipsConfig.length);
}

function pauseProgress() {
    if (paused) return;
    paused = true;

    const bar = document.getElementById('progressBar');
    const tip = tipsConfig[currentTipIndex];
    const elapsed = Date.now() - progressStartTime;
    remaining = Math.max(remaining - elapsed, 0);

    const computedWidth = ((tip.timeout*1000 - remaining) / (tip.timeout*1000)) * 100;
    bar.style.transition = 'none';
    bar.style.width = `${computedWidth}%`;

    clearTimeout(progressTimeout);
}

function resumeProgress() {
    if (!paused) return;
    paused = false;
    startProgress();
}

load_tips(tipsConfig);
