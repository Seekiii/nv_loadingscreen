/*=================================================================*\
/* By: 			|	Nevera Development  							|
/* FiveM: 		|	https://forum.cfx.re/u/neveradevelopment		|
/* Discord: 	|	https://discord.gg/NeveraDev/tw28AqrgWU  		|
/*=================================================================*/
/* If you have any problems you can contact us via discord. <3     */

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

if (showPlayersList){
	$(".panel.playerlist").show()
	players()
}

function players(){
	$.get("https://servers-frontend.fivem.net/api/servers/single/"+serverCode,function(data){
		serverInfo = data.Data
		serverInfo.players.forEach(function(player){
			$(".player_list").append(`
				<div class="staff">
					<div class="info">
						<img src="${playerProfileImage}" class="pfp">
						<p>${player.name}</p>
					</div>
					<p class="status">${player.id}</p>
				</div>
			`)
		})
	})
}

window.addEventListener('message', function(e) {
    if(e.data.eventName === 'loadProgress') {
    	var num = (e.data.loadFraction * 100).toFixed(0)
        loading(num);
    }
});

if (discord != ""){
	$(".discord").show()
	$(".discord a").attr("href",discord)
}
if (instagram != ""){
	$(".instagram").show()
	$(".instagram a").attr("href",instagram)
}
if (youtube != ""){
	$(".youtube").show()
	$(".youtube a").attr("href",youtube)
}
if (twitter != ""){
	$(".twitter").show()
	$(".twitter a").attr("href",twitter)
}

$("a").on("click",function(e){
	e.preventDefault()
	window.invokeNative('openUrl', e.target.href)
})

if (theme == "orange"){
	$("body").append(`<style>:root{--main:255, 150, 0;}</style>`)
	$("body").css("background-image","url('assets/img/orange.jpg')")
}
if (theme == "red"){
	$("body").append(`<style>:root{--main:255,0,0;}</style>`)
	$("body").css("background-image","url('assets/img/red.jpg')")
}
if (theme == "blue"){
	$("body").append(`<style>:root{--main:0, 163, 255;}</style>`)
	$("body").css("background-image","url('assets/img/blue.jpg')")
}
if (theme == "green"){
	$("body").append(`<style>:root{--main:65, 255, 0;}</style>`)
	$("body").css("background-image","url('assets/img/green.jpg')")
}
if (theme == "pink"){
	$("body").append(`<style>:root{--main:255, 122, 237;}</style>`)
	$("body").css("background-image","url('assets/img/pink.jpg')")
}
if (theme == "purple"){
	$("body").append(`<style>:root{--main:193, 67, 255;}</style>`)
	$("body").css("background-image","url('assets/img/purple.jpg')")
}

function toggleMute() {
	var iframe = $("iframe");
	var src = iframe.attr("src");
	if (src.includes("mute=1")) {
		src = src.replace("&mute=1", "");
		src = src.replace("?mute=1", "?");
	} else {
		src += (src.includes("?") ? "&" : "?") + "mute=1";
	}
	iframe.attr("src", src);
}

if (backgroundVideo){
	$("iframe").attr("src","https://www.youtube.com/embed/"+backgroundVideo+"?autoplay=1&controls=0&enablejsapi=1&controls=0&disablekb=1")
	$("iframe").css("filter",`blur(${backgroundVideoBlur}px)`)
	$("iframe").css("opacity",`0`)
	$(".mini-buttons").show(0,function(){$(this).css("display","flex")})
	if (showYTVideo){
		$("body").css("background","#000")
		$("iframe").css("opacity",`${backgroundVideoOpacity}`)
	}
}
else{}

var video;
function onYouTubeIframeAPIReady() {
	video = new YT.Player('youtube-video', {events: {'onReady': onPlayerReady}});
}
function onPlayerReady(){

}
var isMute = false;
function toggleMute(self) {
	$(self).toggleClass("act")
	if (isMute){
		isMute = false;
		video.unMute();
	}
	else{
		isMute = true;
		video.mute();
	}
}

var isPaused = false;
function togglePause(self) {
	$(self).toggleClass("act")
	if (isPaused) {
		video.playVideo();
		isPaused = false;
	} else {
		video.pauseVideo();
		isPaused = true;
	}
}
