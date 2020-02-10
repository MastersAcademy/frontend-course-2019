/* eslint-disable no-undef */
const { fromEvent } = rxjs;
const { buffer, filter, map } = rxjs.operators;

function getTriggerKeys(e) {
    return e.keyCode === 32 || e.keyCode === 13;
}

const keyStrokes$ = fromEvent(window, 'keyup');
const triggerKeys$ = keyStrokes$.pipe(filter(getTriggerKeys));

const buffered = keyStrokes$.pipe(
    filter((keyEvent) => !getTriggerKeys(keyEvent)),
    map((keyEvent) => keyEvent.key),
    buffer(triggerKeys$),
    map((letters) => letters.join('')),
);

buffered.subscribe((text) => {
    const div = document.createElement('div');
    div.innerText = text;
    document.body.appendChild(div);
});
