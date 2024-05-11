<template>
  <div>
    <div
      class="background-header-img d-flex justify-content-start align-items-center py-5 animate__animated animate__fadeIn"
      style="height: 100vh"
    >
      <div class="row">
        <div class="col-12">
          <div class="p-lg-5 p-md-5 text-black d-flex align-items-start">
            <div class="text-start text-white  py-4 px-2">
              <h1 class="display-6 fw-bold py-3 montserrat animate__animated animate__fadeInDownBig">Menara Laundry</h1>
              <p class="fs-3 work-sans animate__animated animate__fadeInDownBig">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <button class="bottom-button"><i class="bi bi-caret-down-fill fs-3"></i></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {};
</script>

<style scoped>

.bottom-button {
            position: absolute; /* Absolute positioning within the container */
            bottom: 30px; /* Positions the button 10px from the bottom */
            left: 50%; /* Centers the button horizontally */
            transform: translateX(-50%); /* Ensures the button is centered horizontally */
            background-color: #ffffff00; /* Button styling */
            color: rgb(255, 255, 255);
            padding: 2px 7px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
        }

        .bottom-button:hover {
            background-color: #ffffff00; /* Hover effect */
        }

</style>
