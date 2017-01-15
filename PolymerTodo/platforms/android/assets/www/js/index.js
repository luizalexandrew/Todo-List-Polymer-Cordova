

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        alert("BIRRR")
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },


};

app.initialize();