var server = require('./server');
var router = require('./router');

global.problemText = [
    [
        'function check(input) {',
        '    eval(input);',
        '}',
    ].join('\n'),
    [
        'function check(input) {',
        '    input = input.replace(/alert/, \'\');',
        '    console.log(\'Filtered input: \' + input);',
        '    eval(input);',
        '}',
    ].join('\n'),
];

global.flag = [
    'nuaactf{this_is_flag_1}',
    'nuaactf{this_is_flag_2}',
];

server.start(router.route);
