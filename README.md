# hexo-ruby-marks
A plugin for Hexo. A `ruby` tag allows users to quickly and easily insert `<ruby>` snippets into their posts.

## Install
via npm:

`$ npm i hexo-ruby-marks`

## Usage

**CONFLICT** with other hexo plugins that have registered `ruby` tag.
```ejs
{% ruby _**base**_|_**top text**_ %}
```

e.g.:
```ejs
{% ruby 初音未来|Hatsune Miku %}
```

↓ ↓ ↓

```html
<ruby><rb>初音未来</rb><rp>(</rp><rt>Hatsune Miku</rt><rp>)</rp></ruby>
```

## Changelog
see [changelog here](https://github.com/issiki/hexo-ruby-marks/blob/master/CHANGELOG.md).

## Issues
submit [issues or bugs here](https://github.com/issiki/hexo-ruby-marks/issues). Thank you!

## License
MIT ©[Futaba Isshiki](https://futaba.love)
