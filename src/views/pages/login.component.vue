<script>
import {SupplierProfileApiService} from '@/suppliers/user-management/profile/services/supplier-profile-api.service';
import {SupplierProfile} from '@/suppliers/user-management/profile/model/supplier-profile.entity';
import ToolbarLogin from '@/views/pages/toolbar-login.component.vue';
export default {
    name: "login",
    components: {ToolbarLogin},
    data() {
        return {
            email: "",
            password: "",
            loggedIn: false,
            user: []
        };
    },

    methods: {
        login() {
            const user = this.user.find(user =>
                user.email === this.email && user.password === this.password
            );
            if (user) {
                this.loggedIn = true;
            } else {
                alert("Invalid email or password");
            }
        }
    },
    async mounted() {
        const apiUserService = new SupplierProfileApiService();
        try {
            const response = await apiUserService.getAll();
            this.user = response.data.map(userData => SupplierProfile.fromApiResponse(userData));
            console.log(this.user);
        } catch {
            console.error('Error');
        }
    }
}
</script>

<template>
    <toolbar-login></toolbar-login>
    <div class="background-container">
        <div class="login-container">
            <div v-if="!loggedIn">
                <div class="login-header">
                    <h1>Log In</h1>
                </div>
                <div class="login-field">
                    <input class="textbox" type="text" v-model="email" placeholder="Email Address" />
                </div>
                <div class="login-field">
                    <input class="textbox" type="password" v-model="password" placeholder="Password" />
                </div>
                <div class="remember-forgot">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Remember me</label>
                    <a href="#" class="forgot-link">Forgot Password?</a>
                </div>
                <button class="buttonLogin" @click="login">SIGN UP</button>
                <div class="signup-link">
                    <span>New to Re-grill? <router-link to="/register" class="register">Create an account</router-link></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background-container {
    background-image: url('@/assets/45.jpg');
    background-size: cover;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight: bolder;
}

.login-container {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

.login-header {
    text-align: left;
    font-size: 24px;
    font-weight: bolder;
    color: #004080;
}

.login-field {
    margin-bottom: 20px;
}

.textbox {
    width: 92%;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.remember-forgot {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.forgot-link {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
    margin-left: 35%;
}

.forgot-link:hover {
    text-decoration: underline;
}

.buttonLogin {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #0056b3;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.buttonLogin:hover {
    background-color: #004494;
}

.signup-link {
    text-align: center;
    margin-top: 20px;
}

.signup-link a {
    color: #007bff;
    text-decoration: none;
}

.signup-link a:hover {
    text-decoration: underline;
}
</style>
