$(document).ready(function() {
    var $element = $('#tagline');
    var phrases = [
        'Soul.',
        'Blues.',
        'Pop.',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});
