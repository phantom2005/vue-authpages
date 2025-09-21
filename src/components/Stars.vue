<template>
  <div class="stars-container">
    <div
      v-for="star in stars"
      :key="star.id"
      class="star"
      :style="{
        top: star.top + '%',
        left: star.left + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        animationDuration: star.duration + 's',
        animationDelay: star.delay + 's',
        opacity: star.opacity
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FallingStars", // multi-word name to fix ESLint
  data() {
    return {
      stars: [],
      starCount: 120,
    };
  },
  created() {
    this.generateStars();
  },
  methods: {
    generateStars() {
      const starsArray = [];
      for (let i = 0; i < this.starCount; i++) {
        starsArray.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      this.stars = starsArray;
    },
  },
};
</script>

<style scoped>
.stars-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  filter: drop-shadow(0 0 2px white);
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-10px) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) translateX(20px);
    opacity: 0;
  }
}
</style>
