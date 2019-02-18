'use strict';

/**
 * Hexo Ruby Character Ex
 * 
 * Syntax:
 *   {% ruby base|text %}
 * 
 *   e.g.:
 *     {% ruby Base|top %}
 *     {% ruby 初音未来|Hatsune Miku %}
 */
hexo.extend.tag.register('ruby', function (args) {
  const splited = args.join(' ').split('|');
  const ruby_base = splited[0].trim();
  const ruby_text = splited[1].trim();

  return "<ruby><rb>" + ruby_base + "</rb><rp>(</rp><rt>" + ruby_text + "</rt><rp>)</rp></ruby>";
});
