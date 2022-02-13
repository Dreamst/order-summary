<template>
  <div class="">
    <ul v-if="whichdropdown == 1" class="dropdown">
      <li
        v-for="item in values"
        :key="item.id"
        class="dropdown__element"
      >
        <div class="dropdown__header flex flex--xs content-between" @click="toggleShow">
          <p class="dropdown__title uppercase inline-block">{{ item.title }}</p>
          <span class="dropdown__icon inline-block">
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

        <div v-if="isOpen" class="dropdown__body pt-15">
          <p class="dropdown__text">
            {{ item.text }}
          </p>
        </div>
      </li>
    </ul>

    <ul v-else class="dropdown">
      <li class="dropdown__element">
        <div class="dropdown__header flex flex--xs content-between" @click="toggleShow">
          <p class="dropdown__title inline-block">Suivi de commande</p>
          <span class="dropdown__icon inline-block">
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

        <div v-if="isOpen" class="dropdown__body pt-15">
          <div class="dropdown__tracking" :class="`tracking-${statusdelivery}`">
            <ul>
              <li class="dropdown__tracking__status">
                <img src="/img/Group.svg" alt="Tediber" />
                <div>
                  <input type="checkbox" />
                </div>
              </li>
              <li class="dropdown__tracking__status">
                <img src="/img/Group 2.svg" alt="Tediber" />
                <div>
                  <input type="checkbox" />
                </div>
              </li>
              <li class="dropdown__tracking__status">
                <img src="/img/Group 3.svg" alt="Tediber" />
                <div>
                  <input type="checkbox" />
                </div>
              </li>
              <li class="dropdown__tracking__status">
                <img src="/img/Group 4.svg" alt="Tediber" />
                <div>
                  <input type="checkbox" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li class="dropdown__element">
        <div class="dropdown__header flex flex--xs content-between" @click="toggleShow">
          <p class="dropdown__title inline-block">
            Informations sur les retours
          </p>
          <span class="dropdown__icon inline-block">
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

        <div v-if="isOpen" class="dropdown__body pt-15">
          <p class="dropdown__text">Lorem</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    values: {
      type: Array,
      default: () => {},
    },
    whichdropdown: {
      type: Number,
      default: 0,
    },
    statusdelivery: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {},
  methods: {
    toggleShow() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars/variables';

.dropdown {
  $c: &;

  &__element {
    border-top: 1px solid $blue;
    border-bottom: 1px solid $blue;
    padding: 10px 0;

    &:hover {
      cursor: pointer;
    }
  }

  &__element + &__element {
    border-top: 0;
  }

  &__icon {
    vertical-align: middle;
    width: 20px;
  }

  &__tracking {

    ul {
      display: flex;
      text-align: center;
    }

    &__status {
      width: 25%;
      display: inline-block;

      img {
        width: 100%;
        height: 63px;
      }

    }
  }

}
</style>
