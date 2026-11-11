import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateGutenbergHeroBlock,
  generateGutenbergGridBlock,
  generateWordPressPHPThemeSnippet,
} from './wpGenerator';

test('generateGutenbergHeroBlock outputs valid Gutenberg comment markers and styles', () => {
  const output = generateGutenbergHeroBlock('Smart Culture', 'Digital Agency', 'Contact', '/contact');
  assert.ok(output.includes('<!-- wp:group'));
  assert.ok(output.includes('<!-- /wp:group -->'));
  assert.ok(output.includes('Smart Culture'));
  assert.ok(output.includes('Digital Agency'));
  assert.ok(output.includes('#f26464'));
});

test('generateGutenbergGridBlock creates columns for items', () => {
  const items = [
    { title: 'Meta Ads', description: 'Facebook & Instagram ads' },
    { title: 'Google Ads', description: 'Search & PMax' },
  ];
  const output = generateGutenbergGridBlock('Υπηρεσίες', items);
  assert.ok(output.includes('<!-- wp:columns'));
  assert.ok(output.includes('Meta Ads'));
  assert.ok(output.includes('Google Ads'));
});

test('generateWordPressPHPThemeSnippet includes font and palette functions', () => {
  const snippet = generateWordPressPHPThemeSnippet();
  assert.ok(snippet.includes('wp_enqueue_scripts'));
  assert.ok(snippet.includes('editor-color-palette'));
  assert.ok(snippet.includes('#f26464'));
});
