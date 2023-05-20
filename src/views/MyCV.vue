<template>
    <div class="">
        <div class="min-h-screen bg-gradient-to-r from-cyan-950 via-sky-700 to-cyan-500 flex flex-col text-center backdrop-blur-lg">
            <div>
                <div class="grid grid-cols-6 gap-4 mt-10 mb-5">
                    <div class="col-start-2 col-span-4 text-white">
                        <h1 class="my-heading text-2xl tracking-widest">BERDIN</h1>
                    </div>
                </div>
                <ul class="flex justify-center gap-5 pb-5 sm:text-xs md:text-base">
                    <li>
                        <div class="col-start-1 col-end-3"><a href="#" @click="goHome" class="text-white text-sm hover:text-cyan-500">HOME</a></div>
                    </li>
                    <li>
                        <div class="col-center-1 col-span-2"><a href="#about" @click="goHome" class="text-white text-sm hover:text-cyan-500 ">ABOUT</a></div>
                    </li>
                    <li>
                        <div class="col-center-1 col-span-2"><a href="#projects" @click="myProjects" class="text-white text-sm hover:text-cyan-500">PROJECTS</a></div>
                    </li>
                    <li>
                        <div class="col-end-7 col-span-2"><a href="#certificates" @click="goHome" class="text-white text-sm hover:text-cyan-500">CERTIFICATES</a></div>
                    </li>
                    <li>
                        <div class="col-end-7 col-span-2"><a href="#contact" @click="contactMe" class="text-white text-sm hover:text-cyan-500">CONTACT</a></div>
                    </li>
                </ul>
            </div>
            <div id="contact">
                <h1 class="block text-left text-justify bg-gradient-to-r from-cyan-500 to-teal-400 text-transparent bg-clip-text ms-20 me-20 mt-10 my-heading text-4xl">
                    Want a copy of my CV?
                </h1>
                <p class="block text-left text-justify text-white ms-20 me-20 mt-4">
                    I invite you to reach out to me via email if you would like to receive a copy of my CV by filling up the form below. 
                    It would be my pleasure to <br>provide you with a comprehensive overview of my qualifications, skills, 
                    and experiences. Simply send me an email with your request, <br> and I will promptly respond with my CV attached. 
                    I appreciate your interest in exploring my professional background, and 
                    I'm excited <br>to share my credentials with you. Looking forward to hearing from you!
                </p>
            </div>
            <!-- Email -->
            <form class="ms-20 me-20 mt-10">
                <div class="mb-6">
                    <label for="text" class="block mb-2 text-base font-medium text-white my-heading text-start">YOUR NAME</label>
                    <input type="text" id="email" class="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Full Name" required v-model="sender_name">
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-base font-medium text-white my-heading text-start">YOUR EMAIL</label>
                    <input type="email" id="email" class="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required v-model="sender_email">
                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2 text-base font-medium text-white my-heading text-start">YOUR MESSAGE</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..." v-model="sender_message"></textarea>
                </div>
                <div class="flex justify-start ml-0">
                    <button type="submit" @click="sendEmail" class="text-white bg-gradient-to-r from-cyan-500 to-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">SUBMIT</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-cyan-950 via-sky-700 to-cyan-500">
        <div class="pt-10">
            <ul class="flex justify-center gap-5">
                <li class="text-indigo-950 hover:text-white">
                    <a href="https://www.linkedin.com/in/johnjustinberdin/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                </li>
                <li class="text-indigo-950">|</li>
                <li class="text-indigo-950 hover:text-white">
                    <a href="https://www.facebook.com/john.berdin.14">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                </li>
                <li class="text-indigo-950">|</li>
                <li class="text-indigo-950 hover:text-white">
                    <a href="https://www.instagram.com/tatinberds/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                    </a>
                </li>
                <li class="text-indigo-950">|</li>
                <li class="text-indigo-950 hover:text-white">
                    <a href="https://github.com/CodeGrinder123">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
        <div class="max-w-screen-xl mx-auto p-4 md:py-6">
            <hr class="my-6 border-gray-200 sm:mx-auto"/>
            <span class="block text-sm text-white sm:text-center">© 2023 <a class="hover:underline">Created by John Justin Berdin</a>. All Rights Reserved.</span>
        </div>
    </footer>
</template>
<script>
import emailjs from 'emailjs-com';

emailjs.init('iPBnwKRmuxkdaVhMy');
export default {
    data(){
        return{
            sender_name: '',
            sender_email: '',
            sender_message: '',
        }
    },
    methods: {
        sendEmail(){
            const templateParams = {
                to_name: 'John Justin Berdin',
                from_name: this.sender_name,
                from_email: this.sender_email,
                message: this.sender_message,
                reply_to: this.sender_email,
            };

            emailjs.send('service_3vt97i9', 'template_f47ovph', templateParams)
                .then((response) => {
                    console.log('Email sent successfully:', response.text);
                })
                .catch((error) => {
                    console.error('Email sending failed:', error);
            });
        },

        classroomifyPage(){
            this.$router.push({name: 'Classroomify'})
        },

        kaziPage(){
            this.$router.push({name: 'Kazi'})
        },

        paperclipPage(){
            this.$router.push({name: 'Paperclip'})
        },

        darylPage(){
            this.$router.push({name: 'Daryl'})
        },

        goHome(){
            this.$router.push({name: 'Home'})
        },

        myProjects(){
            this.$router.push({name: 'Home'})
        },

        contactMe(){
            this.$router.push({name: 'Contact'})
        },
    },
};
</script>