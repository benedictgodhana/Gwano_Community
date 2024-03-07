<template>
    <v-container>


      <!-- Calendar -->
      <v-card height="100%" elevation="0" style="margin: 70px;">
        <v-card-title>            
          <h2 style="padding-left: 80px;">Jilore Book Club Upcoming Events</h2>
        </v-card-title>
        <VDatePicker v-model="date" style="margin-left: 129px;" width="500" />
      </v-card>
  
      <v-card elevation="0" height="100%" style="margin: 100px;">
      <v-list>
        <!-- Event Item -->
        <v-list-item v-for="event in events" :key="event.id">
          <!-- Avatar of the event -->
                <v-avatar size="60" height="100%">
        <v-img src="/heard-home-02.jpg"></v-img>
        </v-avatar>

          <!-- Event Details -->
          <v-list-item-content>
            <!-- Title of the event -->
            <v-list-item-title style="margin-top: -46px;padding-left: 80px;">{{ event.title }}</v-list-item-title>
            <!-- Time and Date of the event -->
            <v-list-item-subtitle style="padding-left: 80px;">{{ event.date }} | {{ event.time }}</v-list-item-subtitle>
          </v-list-item-content>
          <!-- RSVP Button -->
          <v-list-item-action style="margin: 8px;margin-top: -40px;margin-left: 800px;">
                <v-chip color="primary" @click="rsvp(event.id)">RSVP</v-chip>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        date: new Date(),
        events: [
          {
            id: 1,
            title: 'Book Club Meeting',
            date: 'March 10, 2024',
            time: '2:00 PM',
          },
          {
            id: 2,
            title: 'Author Talk: Paulo Coelho',
            date: 'March 15, 2024',
            time: '7:00 PM',
          },
          {
            id: 2,
            title: 'Author Talk: Paulo Coelho',
            date: 'March 15, 2024',
            time: '7:00 PM',
          },
          // Add more events as needed
        ],
      };
    },
    methods: {
      rsvp(eventId) {
        // Implement RSVP functionality
      },
    },
  };
  </script>
  
  <style>
  @media screen and (max-width: 600px) {
  .title {
    font-size: 18px;
    padding-left: 10px;
  }
  
  .date-picker {
    margin-left: 10px;
  }
}
</style>