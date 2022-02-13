<template>
  <div class="">
    <ul v-for="assistance in assistances" :key="assistance.id" class="dropdown">
      <li class="dropdown__element">
        <div class="dropdown__header">
          <p class="dropdown__title">{{ assistance.title }}</p>
          <span class="dropdown__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        <div class="dropdown__body hidden">
          <p class="dropdown__text">
            {{ assistance.text }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    values: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {

      &__element {
          
      }

      &__header {
          
      }

      &__title {
          
      }

      &__icon {
          
      }

      &__body {
          
      }

      &__text {
          
      }
  }
</style>