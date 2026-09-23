<script setup lang="ts">
const props = 
  defineProps<{
    info?: any
  }>()
</script>
<template>
  <BaseSection aria-labelledby="mission-heading">
    <BaseHeading id="mission-heading">
      Миссия
    </BaseHeading>

    <article class="md:p-10 p-6 grid xmd:grid-cols-[0.59fr_1fr] grid-cols-1 gap-x-6 grid-rows-[auto_auto] border-3 border-primary rounded-base gap-y-4.5">
      <div class="relative bg-primary md:size-74 size-51 [clip-path:circle()] overflow-hidden pointer-events-none place-self-center not-xmd:order-1">
        <NuxtImg 
          src="/About/Mission/maleev.webp"
          loading="lazy"
          alt="Алексей Викторович Малеев"
          class="absolute bottom-0 md:w-100 w-70 object-[0_10px] max-w-max left-1/2 -translate-x-1/2 z-10"
        />

        <svg
          aria-hidden="true"
          class="absolute inset-0"
          viewBox="0 0 296 296"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-276.886 39.2078C-276.771 39.5252 -276.655 39.8427 -276.54 40.1601C-273.636 47.0322 -265.772 44.0969 -259.69 41.1571C-223.406 23.7862 -185.903 26.9252 -153.735 42.9135C-121.566 58.9018 -94.204 86.9202 -69.8203 118.584C-55.2202 137.53 -41.3509 158.065 -23.9433 172.108C-6.64717 186.034 13.5269 193.168 31.24 206.158C54.1208 222.999 72.9139 249.68 98.7552 258.442C114.859 263.857 133.713 261.561 150.012 248.047C197.191 208.944 200.375 103.474 247.593 64.51C272.257 44.1722 299.931 50.1477 324.712 56.8158C333.302 59.1552 342.222 61.6448 348.382 69.5787C355.14 78.3367 357.495 92.1891 359.405 105.574C363.942 137.217 366.687 173.652 352.303 204.283C335.513 239.946 301.104 254.77 286.083 291.601C279.402 307.944 277.631 326.2 276.1 343.726C275.627 349.019 275.156 354.411 274.938 359.776C274.146 376.115 290.575 376.082 294.094 359.757C298.777 338.18 301.917 315.767 310.416 295.936C326.477 258.43 358.53 236.817 373.892 198.871C390.777 157.225 381.651 112.723 370.048 78.5719C354.072 31.4947 319.075 24.7053 282.449 21.7996C272.875 21.0763 263.009 20.342 253.244 24.5208C233.931 32.8116 218.715 58.3516 208.226 83.9441C194.621 117.159 185.951 153.491 170.169 185.109C154.386 216.726 127.722 244.09 104.188 237.945C79.1923 231.444 68.9617 191.571 46.5677 177.203C37.6914 171.521 27.339 170.08 17.5709 166.995C-55.2642 144.254 -91.3583 34.1763 -161.982 4.04209C-192.71 -9.0616 -228.66 -5.56715 -262.213 13.7851C-270.044 18.3247 -279.837 30.0295 -276.886 39.2078Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="text-primary-paragraph-r not-md:min-[350px]:px-6 px-2 max-w-[647px] place-self-center not-xmd:order-3" v-html="props.info.text">
      </div>
      <div class="space-y-2 text-center not-xmd:order-2">
        <h3 class="font-bold text-primary-paragraph" v-text="props.info.fio">
        </h3>
        <p class="text-primary-paragraph-r" v-text="props.info.level"></p>
      </div>
    </article>
  </BaseSection>
</template>
