<template>
  <div class="login-page">
    <!-- Stars background -->
    <Stars />

    <!-- Centered login card -->
    <div
      class="login-card"
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <h1 class="title">Login</h1>
      <p class="subtitle">Enter your credentials to continue</p>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input v-model="email" type="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="Password" required />
        </div>
        <div class="form-options">
          <label>
            <input type="checkbox" v-model="remember" />
            Remember me
          </label>
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import Stars from "../components/Stars.vue";

export default {
  name: "LoginPage",
  components: { Stars },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    handleLogin() {
      console.log("Logging in:", this.email, this.password, this.remember);
    },
    handleMouseMove(e) {
      const rect = this.$refs.cardRef.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      this.$refs.cardRef.style.setProperty(
        "--hover-x",
        `${this.mouseX}px`
      );
      this.$refs.cardRef.style.setProperty(
        "--hover-y",
        `${this.mouseY}px`
      );
    },
    handleMouseLeave() {
      this.$refs.cardRef.style.setProperty("--hover-x", `-100px`);
      this.$refs.cardRef.style.setProperty("--hover-y", `-100px`);
    },
  },
};
</script>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at top, #000022, #000b33, #001a66); /* space-like dark blue gradient */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Login Card */
.login-card {
  position: relative;
  width: 400px;
  padding: 2.5rem;
  border-radius: 1.2rem;
  border: 5px solid silver; /* thick silver border */
  background: rgba(0, 10, 40, 0.9); /* semi-transparent deep blue */
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
  color: #fff;
  z-index: 1;
  transition: transform 0.3s, box-shadow 0.3s;
}

/* Glow effect following mouse */
.login-card::after {
  content: "";
  position: absolute;
  left: var(--hover-x, -100px);
  top: var(--hover-y, -100px);
  width: 200px;
  height: 200px;
  background: rgba(0, 255, 255, 0.3);
  filter: blur(50px);
  border-radius: 50%;
  pointer-events: none;
  transition: left 0.1s, top 0.1s;
}

/* Card title */
.title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
}

/* Card subtitle */
.subtitle {
  font-size: 1rem;
  color: #aaa;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Form inputs */
.form-group {
  margin-bottom: 1rem;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.8rem;
  border: 1px solid #555;
  background: rgba(0, 0, 50, 0.7);
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: 0.2s;
}

input:focus {
  border-color: cyan;
  box-shadow: 0 0 8px cyan;
}

/* Checkbox */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.form-options label {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #ccc;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
  accent-color: cyan;
}

/* Login button */
.login-btn {
  width: 100%;
  padding: 0.75rem 0;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #00ffff, #00aaff);
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  background: linear-gradient(to right, #00ffff, #66ffff);
  box-shadow: 0 0 15px #00ffff;
  transform: scale(1.05);
}
</style>
