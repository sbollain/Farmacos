var args = arguments[0] || {};
$.farmacoLabel.text = args.get('Farmaco') || '';

function cleanup() {
    $.destroy();
}