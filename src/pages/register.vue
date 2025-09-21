<template>
  <div class="register-page">
    <!-- Stars background -->
    <Stars />

    <!-- Centered register card -->
    <div
      class="register-card"
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <h1 class="title">Register</h1>
      <p class="subtitle">Create your account to explore the universe</p>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <input v-model="name" type="text" placeholder="Full Name" required />
        </div>
        <div class="form-group">
          <input v-model="email" type="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="Password" required />
        </div>
        <div class="form-group">
          <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required />
        </div>

        <p v-if="passwordError" class="text-error">{{ passwordError }}</p>

        <div class="form-options">
          <label>
            <input type="checkbox" v-model="remember" />
            Remember me
          </label>
        </div>

        <button type="submit" class="register-btn">Register</button>
      </form>

      <div class="redirect-text">
        <p>
          Already have an account? 
          <router-link to="/login" class="link">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "../components/Stars.vue";

export default {
  name: "RegisterPage",
  components: { Stars },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      remember: false,
      passwordError: "",
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.passwordError = "Passwords do not match!";
        return;
      }
      this.passwordError = "";
      console.log("Registering:", this.name, this.email, this.password);
      // Add your registration logic here
    },
    handleMouseMove(e) {
      const rect = this.$refs.cardRef.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      this.$refs.cardRef.style.setProperty("--hover-x", `${this.mouseX}px`);
      this.$refs.cardRef.style.setProperty("--hover-y", `${this.mouseY}px`);
    },
    handleMouseLeave() {
      this.$refs.cardRef.style.setProperty("--hover-x", `-100px`);
      this.$refs.cardRef.style.setProperty("--hover-y", `-100px`);
    },
  },
};
</script>

<style scoped>
.register-page {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at top, #000022, #000b33, #001a66); /* space-like dark blue gradient */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Register Card */
.register-card {
  position: relative;
  width: 450px;
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
.register-card::after {
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

input[type="text"],
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
  justify-content: flex-start;
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

/* Register button */
.register-btn {
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

.register-btn:hover {
  background: linear-gradient(to right, #00ffff, #66ffff);
  box-shadow: 0 0 15px #00ffff;
  transform: scale(1.05);
}

/* Error text */
.text-error {
  color: #ff5555;
  text-align: center;
  margin-bottom: 1rem;
}

/* Redirect text */
.redirect-text {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.redirect-text .link {
  color: #00ffff;
  text-decoration: underline;
}

.redirect-text .link:hover {
  color: #66ffff;
}
</style>
