<template>
  <div class="">
    <ul v-if="whichdropdown == 1" class="dropdown">
      <li v-for="item in values" :key="item.id" class="dropdown__element">
        <div
          class="dropdown__header flex flex--xs content-between"
          @click="toggleShow"
        >
          <p class="dropdown__title uppercase inline-block">{{ item.title }}</p>
          <span class="dropdown__icon inline-block" :class="{open:isOpen}">
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
        <div
          class="dropdown__header flex flex--xs content-between"
          @click="toggleShow"
        >
          <p class="dropdown__title inline-block">Suivi de commande</p>
          <span class="dropdown__icon inline-block" :class="{open:isOpen}">
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
              <li
                class="dropdown__tracking__status"
                v-for="idx in 4"
                :key="idx"
              >
                <img :src="imgList[idx]" alt="Tediber" />

                <label :for="`custom-checkbox${idx}`" class="custom-checkbox">
                  <input type="checkbox" :checked="isChecked(idx)" :id="`custom-checkbox${idx}`" />
                  <span></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </li>

      <li class="dropdown__element">
        <div
          class="dropdown__header flex flex--xs content-between"
          @click="toggleShow"
        >
          <p class="dropdown__title inline-block">
            Informations sur les retours
          </p>
          <span class="dropdown__icon inline-block" :class="{open:isOpen}">
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
      imgList: {
        1: '/img/Group.svg',
        2: '/img/Group 2.svg',
        3: '/img/Group 3.svg',
        4: '/img/Group 4.svg',
      },
    }
  },
  computed: {},
  methods: {
    toggleShow() {
      
      this.isOpen = !this.isOpen
    },
    isChecked(idx) {
      return idx <= this.statusdelivery ? "checked" : ""
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars/variables';

.dropdown {
  $c: &;

  .open {
    svg {
      transform: rotate(180deg);
    }
  }

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

.custom-checkbox {
  position: relative;

  input {
    transform: translateX(-9999px);
  }

  input + span {
    width: 15px;
    height: 15px;
    background-color: transparent;
    display: inline-block;
    border-radius: 3px;
    position: relative;
    border: 1px solid #aaa;
    transition: 10ms;
  }

  input + span:hover {
    cursor: pointer;
  }

  input:checked + span {
    background-color: transparent;
    border-color: $green;
  }

  input:checked + span:before {
    content: '✓';
    font-size: 12px;
    color: #01dc82;
    top: -1px;
    left: 2px;
    position: absolute;
  }
}
</style>
