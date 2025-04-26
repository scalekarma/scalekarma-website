import path from 'path';
import { fileURLToPath } from 'url';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItHeaderSections from 'markdown-it-header-sections';
import postcssPlugin from '@jgarber/eleventy-plugin-postcss';

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPlugin(postcssPlugin);

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

    lib.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx];
      if (
        token.tag === 'h2' &&
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
