fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'Nevera Development'
description '[FREE] Loading Screen'
version '1.2'

loadscreen_manual_shutdown "yes"
loadscreen 'html/index.html'
loadscreen_cursor "yes"

client_script "client.lua"

files {
    'html/audio.mp3',
    'html/index.html',
    'html/config.js',
    'html/assets/js/**',
    'html/assets/css/**',
    'html/assets/img/**'
}