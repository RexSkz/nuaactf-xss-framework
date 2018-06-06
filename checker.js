const puppeteer = require('puppeteer');

function script(problem, input) {
    let outputObj = '';
    const output = obj => outputObj = obj;
    window.onerror = a => output({ error: a.toString() });
    window.alert = a => {
        if (a === 1) output({ success: 1 });
        else if (a == 1) output({ error: 'You should alert *NUMBER* 1.' });
        else output({ error: 'Server check failed, you need to alert 1.' });
    };
    // now we have a `check` function
    eval(problem);
    try {
        check(input);
    } catch (e) {
        output({ error: e.toString().split('\\n')[0] });
    } finally {
        return outputObj;
    }
}

let browser = null;

async function check(input, id, res) {
    if (!browser) {
        browser = await puppeteer.launch();
    }
    const page = await browser.newPage();
    const index = (id | 0) - 1;
    const problem = global.problemText[index];
    const racedPromise = Promise.race([
        new Promise(resolve => setTimeout(() => resolve(false), 5000)),
        page.evaluate(script, problem, input)
    ]);
    try {
        const output = await racedPromise;
        if (!output) {
            await browser.close();
            browser = null;
            res.write('Timeout');
        } else {
            const result = output;
            if (result.success) {
                res.write('Check passed, flag: ' + global.flag[index]);
            } else {
                res.write(result.error);
            }
        }
    } catch (e) {
        console.log(e); // eslint-disable-line no-console
        res.write('Puppeteer error');
    }
    res.end();
}

exports.check = check;
