module.exports = {
    app: {
        px: 'XXX',
        token: 'ODk4NDU3MjI1NjIwNzU4NTQw.YWkffw.HX-TGqwse9_VvPngmIcVWzhX73k',
        playing: 'by YTGGaming ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
