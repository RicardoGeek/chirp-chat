$(function() {
    var userName = getName()
    var host = 'localhost' //change for host (might be configurable)
    var port = 8080
    var mqtt = new Paho.MQTT.Client(host, port, userName)

    var onConnect = function() {
        mqtt.subscribe('chirp_chat')
        message = new Paho.MQTT.Message('<b>' + userName + '</b>' + ' se unio a la sala');
		message.destinationName = 'chirp_chat';
		mqtt.send(message);
    }

    var captureMessage = function() {
        var draftMessage = '<b>' + userName + ': </b>' + $('#txtMessage').val()
        var newMessage = new Paho.MQTT.Message(draftMessage);
		newMessage.destinationName = 'chirp_chat';
        mqtt.send(newMessage)
        $('#txtMessage').val('')
    }

    mqtt.connect({
        timeout: 3,
        onSuccess: onConnect,
    })

    mqtt.onMessageArrived = function(message) {
        $('#conversation').append(message.payloadString + '<br/>')
    }

    $('#sendMsgBtn').click(function() {
        captureMessage()
    })

    $('#txtMessage').keyup(function(e) {
        var code = e.key
        if(code === 'Enter') {
            captureMessage()
        }
    })
})
		