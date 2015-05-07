var gameid = $('#GameID').text()
$('#GameID').qrcode(window.location.href.split('/')[2]+"/player/"+gameid)

socket = IO()


