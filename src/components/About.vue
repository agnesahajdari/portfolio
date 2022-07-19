<template>
  <div class="tokyo_tm_about">
    <div class="description">
      <h3 class="name">Agnesa Hajdari &amp; Front end Developer</h3>
      <div class="description_inner">
        <div class="left">
          <p>
            Hi! My name is Agnesa Hajdari and I am a Front end Developer, currently I living in Kosovo, Mitrovice. I
            have more than 6 months working in web projects as developer. I'm studying Computer Science, and my primary focus and inspiration for my studies is Web Development. I am very
            passionate about Web Development.
          </p>
          <div class="tokyo_tm_button">
            <button class="ib-button" @click="showModal">Lexo më shumë</button>
          </div>
        </div>

        <div class="right">
          <ul>
            <li>
              <p><span>Datëlindja:</span>26.02.2000</p>
            </li>
            <li>
              <p><span>Mosha:</span>22</p>
            </li>
            <li>
              <p><span>Adresa:</span>Mitrovicë, Kosovë</p>
            </li>
            <li>
              <p>
                <span>Email:</span
                ><a href="mailto:agnesa.hajdari02@gmail.com">agnesa.hajdari02@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                <span>Tel:</span
                ><a href="tel:+38349670143">+383670143</a>
              </p>
            </li>
            <li>
              <p><span>Studimi:</span>Informatikë Inxhinierike</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        :class="{ 'modal-mask': isActive }"
        id="modal"
        @click="closeModal"
        v-if="isVisible"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
          @click.stop
        >
          <div class="modal-content">
            <div class="tokyo_tm_modalbox_about">
              <div class="close" @click="closeModal">
                <img
                  class="svg"
                  src="../assets/img/svg/cancel.svg"
                  alt="cancel-img"
                />
              </div>
              <div class="my_box">
                <div class="left">
                  <div class="about_title">
                    <h3>Photography Skills</h3>
                  </div>
                  <div class="tokyo_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">Wedding Photography</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:95%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Lifestyle Photography</span
                        ><span class="number">80%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:80%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Family Photography</span
                        ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:90%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  <div class="tokyo_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">English</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:95%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Albanian</span
                        ><span class="number">100%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:100%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Italian</span
                        ><span class="number">85%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:85%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="counter">
                <div class="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div class="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="partners">
                <div class="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Brand from "./Brand";
export default {
  components: {
    Brand,
  },
  data() {
    return {
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>
