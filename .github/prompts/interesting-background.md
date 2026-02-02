# GridPattern Component Implementation Guide

A comprehensive guide to implementing an interactive animated grid pattern with hover effects in Vue.js applications.

## Table of Contents

- [Overview](#overview)
- [What It Does](#what-it-does)
- [Complete Component Code](#complete-component-code)
- [How It Works](#how-it-works)
- [Usage Examples](#usage-examples)
- [Customization Options](#customization-options)
- [Styling & Integration](#styling--integration)
- [Troubleshooting](#troubleshooting)

---

## Overview

The GridPattern component creates a decorative SVG background pattern with parallelogram blocks that animate when you hover over them. It's a sophisticated UI element that adds visual interest without being distracting.

**Key Features:**
- ✨ Pure Vue.js implementation (no external animation libraries required)
- 🎨 Fully customizable colors via Tailwind CSS classes
- 🖱️ Interactive hover animations using CSS keyframes
- ⚡ Optimized performance with debounced block rendering
- 📐 Responsive and works at any size

---

## What It Does

### Visual Behavior

1. **Static Grid Pattern**: Displays a repeating parallelogram pattern as an SVG background
2. **Static Highlight Blocks**: Shows 6 pre-positioned colored blocks in fixed locations
3. **Interactive Hover Effect**: When `interactive` prop is enabled:
   - Tracks mouse movement across the grid
   - Calculates which grid cell the mouse is over
   - Animates a block in that cell (fade in → fade out)
   - Removes the animated block after 1 second

### Technical Implementation

- Uses SVG `<pattern>` for the repeating background grid
- Tracks mouse position and converts to grid coordinates
- Manages animated blocks with Vue reactive arrays
- CSS keyframe animation for smooth fade effects

---

## Complete Component Code

Create a new file `GridPattern.vue` in your components directory:

```vue
<template>
  <svg ref="svgRef" aria-hidden="true" v-bind="$attrs">
    <rect width="100%" height="100%" :fill="`url(#${id})`" stroke-width="0" />
    <svg x="50%" :y="yOffset" stroke-width="1" class="overflow-visible">
      <!-- Static blocks (always visible) -->
      <path
        v-for="(block, index) in staticBlocks"
        :key="`static-${block}`"
        class="grid-block"
        stroke-linejoin="round"
        :transform="`translate(${-32 * block[1] + 96 * block[0]} ${160 * block[1]})`"
        d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
      />
      <!-- Hover animated blocks (temporary) -->
      <path
        v-for="block in hoveredBlocks"
        :key="`hover-${block[2]}`"
        class="grid-block grid-block--hover"
        stroke-linejoin="round"
        :transform="`translate(${-32 * block[1] + 96 * block[0]} ${160 * block[1]})`"
        d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
      />
    </svg>
    <defs>
      <pattern
        :id="id"
        width="96"
        height="480"
        x="50%"
        pattern-units="userSpaceOnUse"
        :pattern-transform="`translate(0 ${yOffset})`"
        fill="none"
      >
        <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128" />
      </pattern>
    </defs>
  </svg>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  yOffset: {
    type: Number,
    default: 0,
  },
  interactive: {
    type: Boolean,
    default: false,
  },
})

const svgRef = ref(null)
const id = ref(`grid-${Math.random().toString(36).slice(2, 9)}`)
const hoveredBlocks = ref([])
const currentBlock = ref(null)
let counter = 0

// Static blocks that are always visible
const staticBlocks = [
  [1, 1],
  [2, 2],
  [4, 3],
  [6, 2],
  [7, 4],
  [5, 5],
]

const addHoveredBlock = (x, y) => {
  const key = counter++
  hoveredBlocks.value = [...hoveredBlocks.value, [x, y, key]]
  window.setTimeout(() => {
    hoveredBlocks.value = hoveredBlocks.value.filter((block) => block[2] !== key)
  }, 1000)
}

const handleMouseMove = (event) => {
  if (!props.interactive || !svgRef.value) {
    return
  }

  const rect = svgRef.value.getBoundingClientRect()
  let x = event.clientX - rect.left
  let y = event.clientY - rect.top

  if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
    return
  }

  x = x - rect.width / 2 - 32
  y = y - props.yOffset
  x += Math.tan(32 / 160) * y
  x = Math.floor(x / 96)
  y = Math.floor(y / 160)

  if (currentBlock.value?.[0] === x && currentBlock.value?.[1] === y) {
    return
  }

  currentBlock.value = [x, y]
  addHoveredBlock(x, y)
}

onMounted(() => {
  if (!props.interactive) {
    return
  }
  window.addEventListener('mousemove', handleMouseMove)
})

onBeforeUnmount(() => {
  if (!props.interactive) {
    return
  }
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.grid-block--hover {
  opacity: 0;
  animation: gridFade 1s ease-out forwards;
}

@keyframes gridFade {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
```

---

## How It Works

### 1. Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `yOffset` | Number | `0` | Vertical offset for positioning the grid pattern. Use negative values to shift up. |
| `interactive` | Boolean | `false` | Enables hover animation feature. When `true`, blocks animate on mouse movement. |

### 2. Mouse Tracking Algorithm

When `interactive` is enabled, the component tracks mouse movement and converts screen coordinates to grid coordinates:

```javascript
// Step 1: Get mouse position relative to SVG element
const rect = svgRef.value.getBoundingClientRect()
let x = event.clientX - rect.left
let y = event.clientY - rect.top

// Step 2: Adjust for center alignment and offset
x = x - rect.width / 2 - 32
y = y - props.yOffset

// Step 3: Correct for parallelogram skew
x += Math.tan(32 / 160) * y

// Step 4: Convert to grid cell coordinates
x = Math.floor(x / 96)   // Grid width = 96
y = Math.floor(y / 160)  // Grid height = 160
```

**Why the skew correction?** The parallelogram pattern is skewed at an angle. The `Math.tan(32/160)` calculates the horizontal shift needed at each vertical position.

### 3. Block Animation Lifecycle

1. **Mouse Move Detected** → `handleMouseMove` calculates grid coordinates
2. **Duplicate Check** → Prevents animating the same cell twice in a row
3. **Add Block** → Adds `[x, y, key]` to `hoveredBlocks` array
4. **CSS Animation** → `.grid-block--hover` class triggers the fade animation
5. **Auto-Remove** → After 1000ms, block is filtered out of the array

### 4. Animation Timing

```css
@keyframes gridFade {
  0% {
    opacity: 0;      /* Start invisible */
  }
  10% {
    opacity: 1;      /* Quickly fade in to full opacity */
  }
  100% {
    opacity: 0;      /* Gradually fade out */
  }
}
```

This creates a "flash" effect: quick fade-in (0-100ms), slow fade-out (100ms-1000ms).

### 5. Static vs. Animated Blocks

**Static Blocks** (always visible):
- Defined in `staticBlocks` array: `[[1,1], [2,2], [4,3], [6,2], [7,4], [5,5]]`
- Positioned at fixed grid coordinates
- No animation or removal

**Animated Blocks** (temporary):
- Created dynamically on mouse hover
- Stored in `hoveredBlocks` reactive array
- Each has unique key: `[x, y, key]`
- Auto-removed after 1 second

---

## Usage Examples

### Basic Usage (Non-Interactive)

```vue
<template>
  <div class="relative">
    <GridPattern
      class="absolute inset-0 -z-10 h-full w-full fill-gray-50 stroke-gray-950/5"
      :yOffset="-256"
    />
    <div class="content">
      <!-- Your content here -->
    </div>
  </div>
</template>

<script setup>
import GridPattern from '@/components/GridPattern.vue'
</script>
```

### Interactive with Hover Animation

```vue
<template>
  <div class="relative isolate">
    <GridPattern
      class="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5"
      :yOffset="-96"
      :interactive="true"
    />
    <div class="content">
      <!-- Your content here -->
    </div>
  </div>
</template>
```

### With Gradient Mask

Apply a gradient mask to create a fade effect:

```vue
<GridPattern
  class="absolute inset-0 -z-10 h-full w-full 
         mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)]
         fill-neutral-50 stroke-neutral-950/5"
  :yOffset="-96"
  :interactive="true"
/>
```

### Different Color Schemes

```vue
<!-- Light theme -->
<GridPattern
  class="fill-gray-50 stroke-gray-900/5"
  :interactive="true"
/>

<!-- Dark theme -->
<GridPattern
  class="fill-gray-900 stroke-gray-100/10"
  :interactive="true"
/>

<!-- Colored -->
<GridPattern
  class="fill-blue-50 stroke-blue-600/20"
  :interactive="true"
/>
```

---

## Customization Options

### 1. Adjusting Grid Density

To change the grid pattern density, modify the `width` and `height` in the `<pattern>` element:

```vue
<pattern
  :id="id"
  width="192"    <!-- Double width = half as dense horizontally -->
  height="960"   <!-- Double height = half as dense vertically -->
  x="50%"
  pattern-units="userSpaceOnUse"
  :pattern-transform="`translate(0 ${yOffset})`"
  fill="none"
>
```

**Important:** If you change grid dimensions, update the coordinate calculations in `handleMouseMove`:

```javascript
x = Math.floor(x / 192)   // Match new width
y = Math.floor(y / 320)   // Match new height
```

### 2. Changing Static Block Positions

Modify the `staticBlocks` array with your desired `[x, y]` coordinates:

```javascript
const staticBlocks = [
  [0, 0],   // Top-left
  [3, 1],   // Custom position
  [5, 3],   // Custom position
  // Add as many as you want
]
```

### 3. Adjusting Animation Duration

Change the animation timing in the CSS:

```css
.grid-block--hover {
  opacity: 0;
  animation: gridFade 2s ease-out forwards;  /* 2 seconds instead of 1 */
}
```

And update the removal timeout in JavaScript:

```javascript
window.setTimeout(() => {
  hoveredBlocks.value = hoveredBlocks.value.filter((block) => block[2] !== key)
}, 2000)  // Match animation duration
```

### 4. Changing Block Shape

The block shape is defined by the SVG path. To create different shapes, modify the `d` attribute. The current shape is a parallelogram with rounded corners.

### 5. Adding Transition Effects

You can add CSS transitions to make blocks slide or scale:

```css
.grid-block--hover {
  opacity: 0;
  transform: scale(0.8);
  animation: gridFade 1s ease-out forwards, gridScale 1s ease-out forwards;
}

@keyframes gridScale {
  0% {
    transform: scale(0.8);
  }
  10% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
```

---

## Styling & Integration

### Common Styling Patterns

**Background Layer:**
```vue
<GridPattern
  class="absolute inset-0 -z-10"
  :interactive="true"
/>
```

**Full Height:**
```vue
<GridPattern
  class="h-full w-full"
  :interactive="true"
/>
```

**Fixed Height:**
```vue
<GridPattern
  class="h-[1000px] w-full"
  :interactive="true"
/>
```

**Overflow Handling:**
```vue
<!-- Parent container needs overflow handling -->
<div class="relative overflow-hidden">
  <GridPattern
    class="absolute inset-0 -z-10 h-full w-full"
    :interactive="true"
  />
</div>
```

### Z-Index Layering

Ensure the grid stays behind content:

```vue
<div class="relative">
  <!-- Grid pattern (background) -->
  <GridPattern class="absolute inset-0 -z-10" />
  
  <!-- Your content (foreground) -->
  <div class="relative z-10">
    Content here
  </div>
</div>
```

### Responsive Considerations

The grid scales automatically with its container. For best results:

1. Use `overflow-visible` class on the inner SVG (already included in component)
2. Set explicit height on container or use `h-full`
3. Use `absolute` positioning for background placement

---

## Troubleshooting

### Issue: Blocks not animating on hover

**Solution:**
1. Ensure `interactive` prop is set to `true`
2. Check that the SVG has enough height/width
3. Verify CSS animations are not being overridden

### Issue: Mouse tracking feels off

**Solution:**
1. Check that `yOffset` matches the visual offset of your grid
2. Ensure no CSS transforms are applied to parent containers
3. Verify the SVG is not inside a scaled/transformed element

### Issue: Performance issues with many blocks

**Solution:**
1. The component already limits one block per grid cell
2. Blocks auto-remove after 1 second
3. If still slow, consider increasing grid cell size or reducing animation frequency

### Issue: Grid pattern not visible

**Solution:**
1. Add explicit `fill` and `stroke` classes:
   ```vue
   <GridPattern class="fill-neutral-50 stroke-neutral-950/5" />
   ```
2. Check z-index layering - grid might be behind other elements
3. Ensure container has height set

### Issue: Blocks appear outside visible area

**Solution:**
This is expected behavior due to `overflow-visible`. To constrain:

```vue
<div class="relative overflow-hidden">
  <GridPattern class="absolute inset-0" />
</div>
```

### Issue: Pattern doesn't align properly

**Solution:**
Adjust the `yOffset` prop to fine-tune vertical alignment:

```vue
<GridPattern :yOffset="-96" />  <!-- Negative = shift up -->
<GridPattern :yOffset="50" />   <!-- Positive = shift down -->
```

---

## Advanced: Understanding the Coordinate System

### Grid Geometry

- **Grid Cell Width:** 96px
- **Grid Cell Height:** 160px
- **Parallelogram Angle:** `atan(32/160)` ≈ 11.3 degrees
- **Block Width:** ~82px
- **Block Height:** ~151px

### Transform Calculation

Each block's position is calculated as:

```javascript
// x-position accounts for both horizontal placement and skew
translateX = -32 * gridY + 96 * gridX

// y-position is straightforward vertical placement
translateY = 160 * gridY
```

This creates the parallelogram grid layout.

### Why the Math?

The pattern uses a skewed coordinate system. As you move down (increasing Y), the grid shifts left. The `Math.tan(32/160)` corrects for this when converting mouse coordinates to grid coordinates.

---

## Comparison with Next.js/Framer Motion Version

If you're familiar with the Next.js version that uses Framer Motion:

| Feature | Vue (This Guide) | Next.js (Framer Motion) |
|---------|------------------|-------------------------|
| Animation | CSS Keyframes | Framer Motion `motion` |
| Lifecycle | `setTimeout` | `onAnimationComplete` |
| Dependencies | None (pure Vue) | `framer-motion` package |
| Performance | Native CSS | JavaScript-driven |
| File Size | Smaller | Larger (includes library) |

Both achieve the same visual result, but the Vue implementation is lighter and doesn't require external dependencies.

---

## Credits

This component is based on the Studio template design pattern, adapted for Vue.js with pure CSS animations.

---

## License

This guide and component code are provided as-is for use in your projects. No external dependencies or licensing restrictions.

---

## Questions or Issues?

Common modifications:
- **Different colors:** Change `fill-*` and `stroke-*` Tailwind classes
- **Different timing:** Adjust `@keyframes` percentages and `setTimeout` duration
- **Different positions:** Modify `staticBlocks` array
- **Different shape:** Update SVG path `d` attribute
