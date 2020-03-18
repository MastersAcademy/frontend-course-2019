function isCharacter(event: KeyboardEvent) {
  return event.key.length === 1;
}

function isSpace(event: KeyboardEvent) {
  return event.code === 'Space';
}

function not(fn) {
  return function(args) {
    return !fn(args);
  }
}

export { isCharacter, isSpace, not };

