<template>
      <v-app-bar app color="primary" >
        <v-toolbar-title class="text-uppercase">GWANO Community Welfare</v-toolbar-title>
  
        <v-spacer></v-spacer>

        <v-toolbar-items>
  
        <v-btn  text to="/" style="text-transform: lowercase;">
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn  text to="/about" style="text-transform: lowercase;">
          <v-icon>mdi-information</v-icon>
          About Us
        </v-btn>
        <v-btn  text to="/events" style="text-transform: lowercase;">
          <v-icon>mdi-calendar</v-icon>
          Upcoming Events
        </v-btn>
        
        <v-btn  text to="/reviews" style="text-transform: lowercase;">
          <v-icon>mdi-account-multiple</v-icon>
          Member Reviews
        </v-btn>
        <v-btn  @click="showSignInModal" color="white" style="text-transform: lowercase;" >
          <v-icon>mdi-account</v-icon>
          Sign In
        </v-btn>
        <v-btn  @click="showSignUpModal" color="white" style="text-transform: lowercase;" >
          <v-icon>mdi-account-plus</v-icon>
          Sign Up
        </v-btn>

      </v-toolbar-items>
      </v-app-bar>
  
     
  
      <!-- Sign In Modal -->
      <v-dialog v-model="signInModal" max-width="600px">
    <v-card style="border-radius: 20px;" elevation="4">
      <v-card-title class="text-center" style="background-color:green;color:white;font-weight: 800;">Sign In</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="signIn">
          <v-text-field v-model="signInData.email" label="Email" required variant="outlined"></v-text-field>
          <v-text-field v-model="signInData.password" label="Password" type="password" required variant="outlined"></v-text-field>
          <v-btn type="submit" color="success" style="border-radius: 10px; width: 100%; text-transform: lowercase;border-radius: 30px;">
    <v-icon left style="margin: 3px;">mdi-login</v-icon>
    Sign In
  </v-btn>
        </v-form>
        <p class="text-center" style="padding-top: 12px;font-weight: 600;">Or</p>
        <!-- Sign in with Google button -->
        <v-btn color="primary" @click="signInWithGoogle" style="border-radius: 10px; margin-top: 10px;width:100%;text-transform: lowercase;border-radius: 30px;">
    <v-icon left style="margin:3px" color="yellow">mdi-google</v-icon> Sign In with Google
  
  </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
  
  
      <!-- Sign Up Modal -->
      <v-dialog v-model="signUpModal" max-width="700px" >
    <v-card style="border-radius: 20px;" elevation="4" height="100%">
      <v-card-title class="text-center" style="background-color:green;color:white;font-weight: 800;" >Sign Up</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="signUp">
          <v-text-field v-model="signUpData.firstName" label="First Name" required variant="outlined"></v-text-field>
          <v-text-field v-model="signUpData.lastName" label="Last Name" required variant="outlined"></v-text-field>
          <v-text-field v-model="signUpData.email" label="Email" required variant="outlined"></v-text-field>
          <v-text-field v-model="signUpData.password" label="Password" type="password" required variant="outlined"></v-text-field>
          <v-btn type="submit" color="success" style="border-radius: 10px;border-radius: 30px;width:100%">
    <v-icon>mdi-account-plus</v-icon> Sign Up
  </v-btn>
        </v-form>
        <p class="text-center" style="padding-top: 12px;font-weight: 700;">Or</p>
        <!-- Sign in with Google button -->
        <v-btn color="primary" @click="signInWithGoogle" style="border-radius: 10px; margin-top: 10px;width:100%;text-transform: lowercase;border-radius: 30px;">
    <v-icon left style="margin:3px" color="yellow">mdi-google</v-icon> Sign Up with Google
  
  </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
  </template>
  
  <script>
  import axiosInstance from '../service/api';
  
  export default {
    name: 'App',
    data() {
      return {
        isAuthenticated: false,
        signInModal: false,
        signUpModal: false,
        signUpData: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        },
        signInData: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      showSignInModal() {
        this.signInModal = true;
      },
      showSignUpModal() {
        this.signUpModal = true;
      },
  
      signInWithGoogle() {
      // Load Google API library
      gapi.load('auth2', () => {
        // Initialize GoogleAuth object
        const auth2 = gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          scope: 'profile email'
        });
  
        // Sign in the user with Google
        auth2.signIn().then(googleUser => {
          // Retrieve user details
          const profile = googleUser.getBasicProfile();
          const email = profile.getEmail();
          // Now you can handle the sign-in with Google user data as you like
          // For example, you can send the email to your backend for authentication
          this.signInData.email = email;
          // Optionally, close the sign-in dialog
          this.signInModal = false;
        }).catch(error => {
          console.error('Google sign-in error:', error);
        });
      });
    },
    signIn() {
    // Send signInData to your backend for authentication using axiosInstance
    axiosInstance.post('/login', this.signInData)
      .then(response => {
        // Store the token in local storage
        const token = response.data.token;
        localStorage.setItem('token', token);
  
        // Retrieve the user's role from the response data
        const role = response.data.role;
  
        // Redirect based on user's role
        if (role === 'admin') {
          this.$router.push('/admin');
        } else if (role === 'member') {
          this.$router.push('/welcomepage');
        }
  
        // Set the token in the Axios instance headers for subsequent requests
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
        // Handle successful authentication
        console.log('Successfully authenticated:', response.data);
        // Close the modal
        this.signInModal = false;
        // You might want to do something with the response, like store the token
      })
      .catch(error => {
        // Handle authentication errors
        console.error('Authentication failed:', error.response.data.error);
        // Optionally, you can display an error message to the user
      });
  },
  
      signUp() {
        console.log('Signing up with:', this.signUpData);
        // After successful sign-up, you might want to close the modal
        this.signUpModal = false;
        // You can also send this.signUpData to your backend for registration
      }
    },
    watch: {
      // Watch for changes in the router's current route
      '$route'(to, from) {
        // Hide modals when the route changes
        this.signInModal = false;
        this.signUpModal = false;
      }
    }
  
    
  };
  </script>
  
  <style>
  .logo-title-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 50px; /* Adjust the height as needed */
    margin-right: 10px; /* Add some margin between logo and title */
  }
  .lowercase {
    text-transform: lowercase;
  }
  </style>
  