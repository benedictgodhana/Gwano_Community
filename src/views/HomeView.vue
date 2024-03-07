<template>

  
  <v-carousel cycle>
    <v-carousel-item
      src="/TANA-RIVER.jpg"
      cover
    >
      <!-- Overlay text -->
      <div class="overlay">
        <span class="headline text-white" style="text-transform: capitalize;">Welcome to Gwano Welfare Society</span>
        <br>
        <p class="subtext text-white">Empowering lives, Building futures</p>
        <br>
        <v-btn color="primary" large to="/get-involved" style="margin:14px;border-radius: 20px;text-transform: lowercase;" elevation="4">Get Involved</v-btn>

      </div>
    </v-carousel-item>
    <v-carousel-item
      src="/TANA-RIVER.jpg"
      cover
    >
      <!-- Overlay text -->
      <div class="overlay">
        <span class="headline text-white" style="text-transform: capitalize;">Welcome to Gwano Welfare Society</span>

        <br>
        <p class="subtext text-white">Empowering lives, Building futures</p>
        <br>
        <v-btn color="primary" large to="/get-involved" style="margin:14px;border-radius: 20px;text-transform: lowercase;" elevation="4">Get Involved</v-btn>

      </div>
    </v-carousel-item>
    <v-carousel-item
      src="/TANA-RIVER.jpg"
      cover
    >
      <!-- Overlay text -->
      <div class="overlay">
        <span class="headline text-white" style="text-transform: capitalize;">Welcome to Gwano Welfare Society</span>
        <br>
        <p class="subtext text-white">Empowering lives, Building futures</p>
        <v-btn color="primary" large to="/get-involved" style="margin:14px;border-radius: 20px;text-transform: lowercase;" elevation="4;">Get Involved</v-btn>

      </div>
    </v-carousel-item>
  </v-carousel>

  <v-container>
    <!-- Upcoming Events Section -->
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">Upcoming Events</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="event in upcomingEvents" :key="event.id" cols="12" md="4">
        <v-card elevation="5" style="border-radius: 20px;">
          <v-card-title>{{ event.title }}</v-card-title>
          <v-card-text>{{ event.description }}</v-card-text>
          <v-card-actions>
            <v-btn text color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
     
  </v-container>

  <!-- Card with Constitution -->
  
</template>

<script>
export default {
  data() {
    return {
      upcomingEvents: [
        { id: 1, title: 'Community Cleanup Day', description: 'Join us for a day of cleaning up our neighborhood streets.' },
        { id: 2, title: 'Healthcare Awareness Workshop', description: 'Learn about the importance of healthcare and wellness in our community.' },
        { id: 3, title: 'Education Scholarship Program', description: 'Apply for scholarships to support your education journey.' }
        
      ]
    };
  }
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.overlay .headline {
  font-size: 24px;
}
.overlay .subtext {
  margin-top: 10px;
  font-size: 16px;
}
</style>
