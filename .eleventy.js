import markdownItAttrs from 'markdown-it-attrs';
import markdownItHeaderSections from 'markdown-it-header-sections';
import markdownItShortcodeTag from 'markdown-it-shortcode-tag';
import postcssPlugin from '@jgarber/eleventy-plugin-postcss';
import fs from 'fs';
const markdownShortcodes = {
  ripples: {
    render: () => {
      return `<div class="ripples">
        <div class="ripples__item ripples__item_n_1"></div>
        <div class="ripples__item ripples__item_n_2"></div>
        <div class="ripples__item ripples__item_n_3"></div>
        <div class="ripples__item ripples__item_n_4"></div>
      </div>`;
    },
  },
  logo: {
    render: attrs => {
      let logoAttrs = { class: 'logo' };
      if (Object.keys(attrs).length > 0) {
        const { class: className } = attrs;
        if (className) {
          logoAttrs.class += ` ${className}`;
        }
      }
      const logo = fs.readFileSync('./src/images/scalekarma-logo.svg', 'utf8');
      return `<span ${Object.entries(logoAttrs)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ')}>${logo}</span>`;
    },
  },
};

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPlugin(postcssPlugin);
  eleventyConfig.addWatchTarget('./src/images/');

  // Add site-wide data
  eleventyConfig.addGlobalData('site', {
    url: 'https://scalekarma.com', // Replace with your actual website URL
  });

  // Copy static files directly to dist
  eleventyConfig.addPassthroughCopy({ 'src/static': '/' });

  // Add markdown-it plugins
  eleventyConfig.amendLibrary('md', lib => {
    lib.use(markdownItAttrs);
    lib.use(markdownItHeaderSections);
    lib.use(markdownItShortcodeTag, markdownShortcodes);
    lib.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      if (
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(token.tag) &&
        token.attrs &&
        token.attrs.find(attr => attr.includes('class'))
      ) {
        const classAttrIndex = token.attrs.findIndex(attr =>
          attr.includes('class'),
        );
        const updatedClassAttr = [
          'class',
          token.attrs[classAttrIndex][1]
            .split(' ')
            .map(cls => cls + '__heading')
            .join(' '),
        ];
        token.attrs[classAttrIndex] = updatedClassAttr;
      }
      return self.renderToken(tokens, idx, options, env, self);
    };
  });

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
      output: 'dist',
    },
  };
}
