import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import markdownItAttrs from 'markdown-it-attrs';
import markdownItHeaderSections from 'markdown-it-header-sections';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function (eleventyConfig) {
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget('./src/styles/');

  // Process CSS before the build
  eleventyConfig.on('beforeBuild', async () => {
    const isProd = process.env.NODE_ENV === 'production';

    // Ensure the dist/styles directory exists
    const dir = path.join(__dirname, 'dist', 'styles');
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch (err) {
      if (err.code !== 'EEXIST') throw err;
    }

    // Read the CSS file
    const css = await fs.readFile('src/styles/default.css', 'utf8');

    // Process it with PostCSS
    const plugins = [
      postcssImport,
      autoprefixer,
      isProd && cssnano({ preset: 'default' }),
    ].filter(Boolean);

    const result = await postcss(plugins).process(css, {
      from: 'src/styles/default.css',
      to: 'dist/styles/default.css',
    });

    // Write the processed CSS
    await fs.writeFile('dist/styles/default.css', result.css);
  });

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
