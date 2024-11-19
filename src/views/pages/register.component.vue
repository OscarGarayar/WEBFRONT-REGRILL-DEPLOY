<script>
import {SupplierProfileApiService} from '@/suppliers/user-management/profile/services/supplier-profile-api.service';
import ToolbarLogin from '@/views/pages/toolbar-login.component.vue';
export default {
    name: "register",
    components: {ToolbarLogin},
    data() {
        return{
            name: "",
            lastname: "",
            email: "",
            password: "",
        };
    },
    methods: {
        async register() {
            if (this.name && this.lastname && this.email && this.password) {
                const newUser = {
                    name: this.name,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                };
                const apiUserService = new SupplierProfileApiService();
                try {
                    const response = await apiUserService.create(newUser);
                    if (response.status === 201) {
                        this.$router.push('/login')
                    } else {
                        alert("Failed user registration");
                    }
                } catch (error) {
                    console.error("Error registering user:", error);
                    alert("Error registering user");
                }
            } else {
                alert("Please fill all the fields");
            }
        }
    }
}
</script>

<template>
    <toolbar-login></toolbar-login>
    <div class="background-container">
        <div class="register-container">
            <div class="register-header">
                <h1>Register</h1>
            </div>
            <div class="register-field">
                <input class="textbox" type="text" v-model="name" placeholder="First Name" />
            </div>
            <div class="register-field">
                <input class="textbox" type="text" v-model="lastname" placeholder="Last Name" />
            </div>
            <div class="register-field">
                <input class="textbox" type="email" v-model="email" placeholder="Email Address" />
            </div>
            <div class="register-field">
                <input class="textbox" type="password" v-model="password" placeholder="Password" />
            </div>
            <div class="register-field">
                <label>Choose Role:</label>
                <div>
                    <input type="radio" id="administrator" value="Administrator" v-model="role">
                    <label for="administrator">Administrator</label>
                </div>
                <div>
                    <input type="radio" id="supplier" value="Supplier" v-model="role">
                    <label for="supplier">Supplier</label>
                </div>
            </div>
            <div class="terms-condition">
                <input type="checkbox" id="terms" />
                <label for="terms">I agree to the</label>
                <span class="spacer"></span>
                <a href="#" class="condition">terms & condition</a>
            </div>
            <button class="buttonRegister" @click="register">CREATE AN ACCOUNT</button>
            <div class="have-account">
                <label for="question">Already have an account?</label>
                <span class="spacer"></span>
                <router-link to="/login" class="logIn">Log In</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background-container {
    background-image: url('@/assets/45.jpg');
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
    font-weight: bolder;
}

.register-container {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
}

.register-header {
    text-align: left;
    font-size: 24px;
    font-weight: bolder;
    color: #004080;
}

.register-field {
    margin-bottom: 20px;
}

.role-options {
    display: flex;
    flex-direction: column;
}

.radio-group {
    display: flex;
    align-items: center;
}

.radio-group > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.terms-condition {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.have-account {
    display: flex;
    align-items: center;
    justify-content: center;
}

.have-account a {
    color: #007bff;
    text-decoration: none;
}

.have-account a:hover {
    text-decoration: underline;
}

.textbox {
    width: 92%;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.spacer {
    margin: 0 3px;
}

.buttonRegister {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 8px;
    background-color: #0056b3;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.buttonRegister:hover {
    background-color: #004494;
}
</style>
