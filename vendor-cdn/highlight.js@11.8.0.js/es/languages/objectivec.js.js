function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/objectivec" instead of "highlight.js/lib/languages/objectivec.js"'
      );
    }
  }
  emitWarning();
    import lang from './objectivec.js';
    export default lang;