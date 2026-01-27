<template>
  <footer id="footer" class="pt-16">
    <div class="bg-gray-950/5 py-16 text-gray-950">
      <Container class="flex flex-col gap-16">
        <!-- Top Section: Newsletter CTA + Links -->
        <div class="grid grid-cols-1 gap-x-6 gap-y-16 text-sm/7 lg:grid-cols-2">
          <!-- Newsletter Form -->
          <form class="flex max-w-sm flex-col gap-2">
            <p class="font-semibold">Lorem ipsum dolor</p>
            <div class="flex flex-col gap-4 text-gray-700">
              <p>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div class="flex items-center border-b border-gray-950/20 py-2">
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                class="flex-1 text-gray-950 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                class="relative inline-flex size-7 items-center justify-center rounded-full hover:bg-gray-950/10 transition-colors"
              >
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>

          <!-- Link Categories -->
          <nav class="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <h3 class="font-semibold mb-2">Lorem Ipsum</h3>
              <ul role="list" class="flex flex-col gap-2">
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Dolor sit</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Amet consectetur</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Adipiscing</button></li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Consectetur</h3>
              <ul role="list" class="flex flex-col gap-2">
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Adipiscing elit</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Sed do</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Eiusmod tempor</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Incididunt</button></li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Adipiscing</h3>
              <ul role="list" class="flex flex-col gap-2">
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Ut labore</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Et dolore</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Magna aliqua</button></li>
                <li><button type="button" class="text-gray-700 hover:text-cyan-600 transition-colors">Ut enim</button></li>
              </ul>
            </div>
          </nav>
        </div>

        <!-- Bottom Section: Copyright + Social Icons -->
        <div class="flex items-center justify-between gap-10 text-sm/7">
          <div class="text-gray-600">
            © 2025 Lorem Ipsum, Inc.
          </div>
          <div class="flex items-center gap-4 sm:gap-10">
            <button type="button" aria-label="X" class="text-gray-950 hover:text-cyan-600 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694L2.306 21.75H-1v-3.308l7.227-8.26L-1.586 2.25h6.514l5.106 6.694L21.75 2.25h3.494zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button type="button" aria-label="GitHub" class="text-gray-950 hover:text-cyan-600 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
            <button type="button" aria-label="YouTube" class="text-gray-950 hover:text-cyan-600 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  </footer>
</template>

<script setup>
import Container from '../Container.vue'
</script>
