<template>
    <div>
        <div class="grid grid-cols-6 gap-4 mt-10 mb-5">
            <div class="col-start-2 col-span-4 text-black">
                <h1 class="my-heading text-2xl tracking-widest text-center">BERDIN</h1>
            </div>
        </div>
        <ul class="flex justify-center gap-5 pb-5 sm:text-xs md:text-base">
            <li>
                <div class="col-start-1 col-end-3"><a href="#" @click="goHome" class="text-black text-sm hover:text-cyan-500">HOME</a></div>
            </li>
            <li>
                <div class="col-center-1 col-span-2"><a href="#about" @click="goHome" class="text-black text-sm hover:text-cyan-500 ">ABOUT</a></div>
            </li>
            <li>
                <div class="col-center-1 col-span-2"><a href="#projects" @click="goBack" class="text-black text-sm hover:text-cyan-500">PROJECTS</a></div>
            </li>
            <li>
                <div class="col-end-7 col-span-2"><a href="#certificates" @click="goHome" class="text-black text-sm hover:text-cyan-500">CERTIFICATES</a></div>
            </li>
            <li>
                <div class="col-end-7 col-span-2"><a href="#contact" @click="contactMe" class="text-black text-sm hover:text-cyan-500">CONTACT</a></div>
            </li>
        </ul>
    </div>
    <div class="h-screen">
        <div class="bg-fixed bg-cover h-80 w-38 my-bg-daryl"></div>
        <div class="mt-20 ms-20 me-20 mb-10">
            <div class="grid grid-cols-1 md:grid-cols-1 md:grid-flow-col gap-4">
                <div class="mb-5">
                    <h1 class="my-heading text-left text-4xl font-bold">Daryl Cafe:</h1>
                    <h1 class="my-heading text-3xl font-bold text-black">Point Of Sale Management System</h1>
                    <p class="block text-justify text-black mt-5 mb-8">
                        Daryl Cafe's Point of Sale (POS) Management System is a personalized web-based solution 
                        designed exclusively for staff members. This comprehensive system not only facilitates 
                        order processing, inventory management, and customer transactions but also offers a 
                        powerful statistical feature. With this feature, the business can accurately measure and 
                        analyze sales performance on a weekly, monthly, and annual basis. Gain valuable insights 
                        into your coffee shop's expected sales, track trends, and make data-driven decisions to 
                        optimize your business strategy.
                    </p>

                    <div class="text-center">
                        <p class="text-black text-left text-medium font-bold mb-5">TOOLS USED:</p>
                        <ul class="grid grid-cols-3 md:grid-cols-10 md:grid-flow-col gap-4 place-content-center">
                            <li>
                                <div class="flex flex-col items-center">
                                    <img width="25" height="25" src="https://img.icons8.com/ios/50/html-5--v2.png" alt="html-5--v2"/>
                                </div>
                                <span class="mt-2 text-sm">HTML</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                        <path fill-rule="evenodd" d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">CSS</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
                                        <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"/>
                                        <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"/>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">Bootstrap</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                        <path d="M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z"></path>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">Javascript</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <img width="25" height="25" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Cib-django_%28CoreUI_Icons_v1.0.0%29.svg" alt="Django">
                                </div>
                                <span class="mt-2 text-sm">Django</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                        <path d="M 25 2 C 20.941406 2 18.1875 2.96875 16.4375 4.375 C 14.6875 5.78125 14 7.589844 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 7.265625 15 5.410156 15.792969 4.09375 17.46875 C 2.777344 19.144531 2 21.644531 2 25 C 2 28.355469 2.777344 30.855469 4.09375 32.53125 C 5.410156 34.207031 7.265625 35 9.09375 35 L 14 35 L 14 40.90625 C 14 42.410156 14.6875 44.21875 16.4375 45.625 C 18.1875 47.03125 20.941406 48 25 48 C 29.058594 48 31.8125 47.03125 33.5625 45.625 C 35.3125 44.21875 36 42.410156 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 42.734375 35 44.589844 34.207031 45.90625 32.53125 C 47.222656 30.855469 48 28.355469 48 25 C 48 21.644531 47.222656 19.144531 45.90625 17.46875 C 44.589844 15.792969 42.734375 15 40.90625 15 L 36 15 L 36 9.09375 C 36 7.550781 35.316406 5.738281 33.5625 4.34375 C 31.808594 2.949219 29.054688 2 25 2 Z M 25 4 C 28.746094 4 31.015625 4.875 32.3125 5.90625 C 33.609375 6.9375 34 8.136719 34 9.09375 L 34 21 C 34 22.65625 32.65625 24 31 24 L 19 24 C 16.941406 24 15.167969 25.269531 14.40625 27.0625 C 14.277344 27.359375 14.160156 27.675781 14.09375 28 C 14.027344 28.324219 14 28.65625 14 29 L 14 33 L 9.09375 33 C 7.824219 33 6.648438 32.503906 5.6875 31.28125 C 4.726563 30.058594 4 28.042969 4 25 C 4 21.957031 4.726563 19.941406 5.6875 18.71875 C 6.648438 17.496094 7.824219 17 9.09375 17 L 26 17 L 26 12 L 16 12 L 16 9.09375 C 16 8.199219 16.386719 6.980469 17.6875 5.9375 C 18.988281 4.894531 21.257813 4 25 4 Z M 20 7 C 18.898438 7 18 7.898438 18 9 C 18 10.101563 18.898438 11 20 11 C 21.101563 11 22 10.101563 22 9 C 22 7.898438 21.101563 7 20 7 Z M 36 17 L 40.90625 17 C 42.175781 17 43.351563 17.496094 44.3125 18.71875 C 45.273438 19.941406 46 21.957031 46 25 C 46 28.042969 45.273438 30.058594 44.3125 31.28125 C 43.351563 32.503906 42.175781 33 40.90625 33 L 24 33 L 24 38 L 34 38 L 34 40.90625 C 34 41.800781 33.613281 43.019531 32.3125 44.0625 C 31.011719 45.105469 28.742188 46 25 46 C 21.257813 46 18.988281 45.105469 17.6875 44.0625 C 16.386719 43.019531 16 41.800781 16 40.90625 L 16 29 C 16 28.792969 16.023438 28.601563 16.0625 28.40625 C 16.34375 27.039063 17.550781 26 19 26 L 31 26 C 33.746094 26 36 23.746094 36 21 Z M 30 39 C 28.898438 39 28 39.898438 28 41 C 28 42.101563 28.898438 43 30 43 C 31.101563 43 32 42.101563 32 41 C 32 39.898438 31.101563 39 30 39 Z"></path>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">Python</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                        <path d="M 3.3378906 1.0058594 C 2.5348906 0.95985937 1.7166875 1.34025 1.3046875 2.03125 C 1.1056875 2.36825 1.0039531 2.7370469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6019375 4.8107187 1.9609375 5.2617188 C 2.0239375 5.3417188 2.081625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4647344 5.9219375 2.646125 6.1592969 2.703125 6.2792969 C 2.723125 6.3352969 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332188 8.16975 3.6992188 8.96875 C 3.8862188 9.29175 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332188 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 9.6274687 17.935156 11.230469 18.910156 C 11.309469 18.962156 11.399 19 11.5 19 C 11.776 19 12 18.776 12 18.5 C 12 18.333 11.912156 18.192563 11.785156 18.101562 C 10.415156 16.780562 8.605 14.567719 7.875 12.761719 C 7.724 12.386719 7.2268125 12.329922 7.0078125 12.669922 C 6.7798125 13.024922 6.513625 13.504375 6.265625 14.109375 C 6.084625 13.651375 6 13.135 6 12.5 C 6 12.034 6.2634375 10.638172 6.3984375 9.9511719 C 6.4484375 9.6981719 6.3969531 9.4444688 6.2519531 9.2304688 C 6.0059531 8.8674688 5.6197344 8.2918906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6469375 5.7855781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1219531 4.1165781 4.7881406 3.8925781 4.4941406 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.132625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017187 3.3580313 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5633906 5.3300781 3.7753906 C 5.4550781 3.8443906 5.5486563 3.8920625 5.5976562 3.9140625 L 5.7714844 3.9902344 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189062 4.0437344 8.8789062 4.4277344 C 10.629906 5.1277344 11.598031 5.830375 12.582031 7.109375 C 13.903031 8.826375 14.750328 10.830047 15.236328 12.248047 C 15.462328 12.906047 15.659344 13.656625 15.777344 14.140625 C 15.854344 14.457625 16.082719 14.709172 16.386719 14.826172 C 16.825719 14.995172 17.480953 15.271703 18.001953 15.595703 C 18.444953 15.870703 18.939875 16.227687 19.421875 16.679688 C 18.326875 16.950688 17.666359 17.382734 17.318359 17.677734 C 17.112359 17.852734 17.094531 18.159234 17.269531 18.365234 C 17.607531 18.763234 18.355953 19.423047 19.751953 20.373047 C 20.800953 21.087047 21.909141 22.4945 22.119141 22.8125 C 22.210141 22.9255 22.344 23 22.5 23 C 22.776 23 23 22.776 23 22.5 C 23 22.396 22.968062 22.300703 22.914062 22.220703 C 22.896062 22.194703 22.764891 21.974812 22.712891 21.882812 C 22.212891 20.999813 21.267688 19.728813 20.304688 18.507812 C 20.960687 18.297812 21.697469 18.143875 22.230469 18.046875 C 22.585469 17.981875 22.757734 17.572391 22.552734 17.275391 C 22.278734 16.880391 21.878 16.350359 21.375 15.818359 C 19.964 14.326359 18.413656 13.479859 17.597656 13.130859 C 17.264656 11.863859 16.262969 8.613625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.7187187 1.7078594 4.5478906 1.0748594 3.3378906 1.0058594 z M 7.140625 5 C 7.125625 5 6.7779531 5.0015625 6.3769531 5.1015625 C 6.2959531 5.1225625 6.2301719 5.1817656 6.2011719 5.2597656 C 6.1731719 5.3377656 6.185375 5.4241875 6.234375 5.4921875 L 7.2675781 6.8984375 C 7.3145781 6.9624375 7.37175 7.025 7.46875 7 C 7.54775 7 7.6219219 6.9633906 7.6699219 6.9003906 C 7.9969219 6.4643906 8 5.9585 8 5.9375 C 8 5.9075 7.995375 5.8776094 7.984375 5.8496094 C 7.975375 5.8256094 7.7532344 5.2494844 7.2402344 5.0214844 C 7.2082344 5.0074844 7.174625 5 7.140625 5 z"></path>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">MySQL</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <img width="25" height="25" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Cib-adobe-xd_%28CoreUI_Icons_v1.0.0%29.svg" alt="Adobe XD">
                                </div>
                                <span class="mt-2 text-sm">Adobe Xd</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul class="md:pt-10 pb-5">
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">CLIENT:</p>
                            <span>DARYL CAFE</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">PROJECT TYPE:</p>
                            <span>PERSONAL PROJECT</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">YEAR:</p>
                            <span>2021</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">APPLICATION TYPE:</p>
                            <span>WEB SYSTEM</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">ROLES:</p>
                            <span>SYSTEM DESIGNER</span><br>
                            <span>DEVELOPER</span> <br>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer class="bg-gradient-to-r from-cyan-950 via-sky-700 to-cyan-500">
            <div class="max-w-screen-xl mx-auto pb-2 ps-2">
                <span class="block text-xs text-white sm:text-center pb-3 pt-5">© 2023 <a class="hover:underline">Created by John Justin Berdin</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
</template>
<script>
export default{
    methods:{
        goHome(){
            this.$router.push({name: 'Home'});
        },

        goBack(){
            this.$router.go(-1);
        },

        contactMe(){
            this.$router.push({name: 'Contact'})
        }
    }
}
</script>
<style>
.my-bg-daryl{
    background-image: url('../assets/images/jpg/DARYL_page.jpg');
    background-position: bottom;
    width: 100%;
    height: auto;
}
</style>