# Accessibility & Dyslexia-Friendly Design

## Overview

The blog is designed to be accessible and particularly friendly for readers with dyslexia and other reading differences. This document outlines all the accessibility features implemented.

## Dyslexia-Friendly Features

### Typography

✅ **Sans-serif font family**
- Primary: Source Sans 3 (highly readable, neutral sans-serif)
- Fallbacks: Inter, system-ui, -apple-system
- Headers: IBM Plex Mono (clear, monospace for scanning)

✅ **Font sizing**
- Body text: 1-1.1rem (responsive scaling)
- Clear hierarchy with adequate size differences
- Minimum 16px base size for readability

✅ **Line height**
- Body text: 1.8 (generous spacing between lines)
- General: 1.75
- Helps prevent lines from blending together

✅ **Line length**
- Maximum 65 characters per line
- Optimal reading width prevents eye strain and losing place

✅ **Letter and word spacing**
- Letter spacing: 0.02em (subtle increase for character distinction)
- Word spacing: 0.12em (clearer word boundaries)
- Helps dyslexic readers distinguish individual words

### Color and Contrast

✅ **Soft contrast (not pure black/white)**
- Background: #0B1012 (very dark gray, not pure black)
- Text: #E6E7EB (off-white, not pure white)
- Reduces eye strain and glare

✅ **WCAG AA compliance**
- 4.5:1 contrast ratio for normal text
- 3:1 for large text
- Secondary text improved to #B4BCC5 for better contrast

✅ **Distinct link colors**
- Links use accent colors (blues, greens)
- Underlined by default
- Thicker underline on hover
- Never rely on color alone

### Layout and Structure

✅ **Clear paragraph separation**
- 1.25em margin between paragraphs
- Visual breathing room

✅ **Heading hierarchy**
- Clear size differences
- Adequate spacing above/below
- Not overly bold (600 weight)

✅ **Left-aligned text**
- Never justified (which creates uneven spacing)
- Consistent left edge for eye tracking

✅ **Reduced use of italics**
- Italics are harder for dyslexic readers
- When used, made more distinct with color and weight
- Consider alternatives like bold or color

### Navigation and Interaction

✅ **Large, clear click targets**
- Minimum 44x44px on mobile (WCAG AAA)
- Generous spacing between interactive elements

✅ **Clear focus states**
- 2px solid outline with offset
- Visible keyboard navigation
- Accent color highlight

✅ **Skip to content link**
- First focusable element
- Allows keyboard users to skip navigation

## Additional Accessibility Features

### Motion and Animation

✅ **Respects prefers-reduced-motion**
- Users can disable animations in system settings
- Smooth scroll and transitions removed when requested
- Progress bar animations disabled

### Reading Experience

✅ **Reading progress bar**
- Shows scroll position
- Helps readers track progress in long articles

✅ **Target highlight**
- When jumping to a section via anchor link
- Highlighted with background color and left border
- Helps orient reader to new position

### Semantic HTML

✅ **Proper heading structure**
- Single h1 per page
- Logical nesting (h2, h3, h4)
- Screen reader friendly

✅ **Lists use proper markup**
- ul/ol for lists
- Generous spacing between items
- Clear visual bullets/numbers

### Links and Navigation

✅ **Descriptive link text**
- Never "click here"
- Context provided in link text itself

✅ **External link indication**
- target="_blank" with rel="noopener"
- Could add visual indicator if desired

## Future Enhancements to Consider

### Optional Features

**Dyslexia-friendly font toggle**
```css
/* Uncomment in accessibility.css */
body.dyslexia-font {
  --font-body: "OpenDyslexic", "Comic Sans MS", var(--font-body);
}
```

**Font size controls**
- Add buttons to increase/decrease text size
- Stored in localStorage

**Reading ruler/mask**
- Overlay that highlights current line
- Helps readers maintain position

**Color scheme toggle**
- High contrast mode
- Sepia mode
- Custom color options

**Text-to-speech integration**
- Native browser support via Web Speech API
- Or integrate third-party service

## Testing Recommendations

### Manual Testing

- [ ] Navigate entire site with keyboard only
- [ ] Test with screen reader (VoiceOver, NVDA, JAWS)
- [ ] Verify all images have alt text
- [ ] Test color contrast with tools
- [ ] Verify at 200% zoom (WCAG AAA)

### Automated Testing

- [ ] Run Lighthouse accessibility audit
- [ ] Use axe DevTools browser extension
- [ ] Check with WAVE tool
- [ ] Validate HTML structure

### User Testing

- [ ] Test with dyslexic readers
- [ ] Gather feedback on readability
- [ ] Iterate based on real usage

## Resources

### Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

### Guidelines
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [British Dyslexia Association Style Guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

## Current Status

✅ Strong foundation for accessibility
✅ Optimized for dyslexic readers
✅ WCAG AA compliant for contrast
✅ Keyboard navigable
✅ Screen reader friendly structure
✅ Responsive and mobile-friendly

The blog prioritizes clarity and readability above aesthetic flourish, making it accessible to the widest possible audience.
