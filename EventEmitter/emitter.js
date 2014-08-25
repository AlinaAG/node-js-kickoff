var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();

event.on("customEvent", function(message, count) {
    console.log(count + " custom: ", message);
});

(function() {

    var count = 0;

    process.stdin.on('data', function(data) {

        var input = data.toString().toLowerCase().trim();

        if (input === 'exit') {
            process.exit();
        }

        event.emit("customEvent", input, ++count);

    });

    process.on('exit', function() {

        console.log('leaving after ' + count + ' events were emitted');

    });

})();

