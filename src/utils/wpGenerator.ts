/**
 * WordPress Gutenberg block HTML and template generator
 * Enables the user to export the agency website content directly to WordPress
 */

export interface WPBlockOptions {
  title: string;
  subtitle?: string;
  items?: { title: string; description: string; link?: string }[];
  ctaText?: string;
  ctaUrl?: string;
}

export function generateGutenbergHeroBlock(headline: string, subline: string, ctaText: string, ctaUrl: string): string {
  return `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"80px","bottom":"80px"}},"color":{"background":"#fafbfc"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#fafbfc;padding-top:80px;padding-bottom:80px">
  <!-- wp:heading {"level":1,"style":{"typography":{"fontSize":"3.5rem","lineHeight":"1.1"}}} -->
  <h1 class="wp-block-heading" style="font-size:3.5rem;line-height:1.1">${headline}</h1>
  <!-- /wp:heading -->

  <!-- wp:paragraph {"style":{"typography":{"fontSize":"1.25rem"},"color":{"text":"#64748b"}}} -->
  <p class="has-text-color" style="color:#64748b;font-size:1.25rem">${subline}</p>
  <!-- /wp:paragraph -->

  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button {"style":{"color":{"background":"#f26464","text":"#ffffff"},"border":{"radius":"9999px"}}} -->
    <div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="${ctaUrl}" style="border-radius:9999px;background-color:#f26464;color:#ffffff">${ctaText}</a></div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:group -->`;
}

export function generateGutenbergGridBlock(sectionTitle: string, items: { title: string; description: string }[]): string {
  const columns = items
    .map(
      (item) => `    <!-- wp:column {"style":{"spacing":{"padding":{"all":"24px"}},"border":{"radius":"16px","width":"1px","color":"#e2e8f0"}},"backgroundColor":"white"} -->
    <div class="wp-block-column has-white-background-color has-background" style="border-color:#e2e8f0;border-width:1px;border-radius:16px;padding:24px">
      <!-- wp:heading {"level":3,"style":{"typography":{"fontSize":"1.25rem"}}} -->
      <h3 class="wp-block-heading" style="font-size:1.25rem">${item.title}</h3>
      <!-- /wp:heading -->
      <!-- wp:paragraph {"style":{"color":{"text":"#64748b"}}} -->
      <p style="color:#64748b">${item.description}</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->`
    )
    .join('\n');

  return `<!-- wp:group {"align":"wide","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide">
  <!-- wp:heading {"level":2} -->
  <h2 class="wp-block-heading">${sectionTitle}</h2>
  <!-- /wp:heading -->

  <!-- wp:columns {"columns":3} -->
  <div class="wp-block-columns">
${columns}
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:group -->`;
}

export function generateWordPressPHPThemeSnippet(): string {
  return `<?php
/**
 * Smart Culture Digital Agency - WordPress Functions Setup
 * Add to your child theme's functions.php or custom plugin
 */

add_action('wp_enqueue_scripts', function() {
    // Google Fonts: Outfit & Plus Jakarta Sans
    wp_enqueue_style(
        'smart-culture-fonts',
        'https://fonts.googleapis.com/css2?family=Outfit:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap&subset=greek',
        array(),
        null
    );
});

// Custom Brand Colors for Gutenberg Palette
add_action('after_setup_theme', function() {
    add_theme_support('editor-color-palette', array(
        array('name' => 'Smart Coral', 'slug' => 'brand-coral', 'color' => '#f26464'),
        array('name' => 'Brand Charcoal', 'slug' => 'brand-dark', 'color' => '#0f172a'),
        array('name' => 'Brand Muted', 'slug' => 'brand-muted', 'color' => '#64748b'),
        array('name' => 'Brand Background', 'slug' => 'brand-bg', 'color' => '#fafbfc'),
    ));
});
`;
}
