<template>
    <div>
        <div class="grid grid-cols-6 gap-4 mt-10 mb-5">
            <div class="col-start-2 col-span-4 text-black">
                <h1 class="my-heading text-2xl tracking-widest text-center">BERDIN</h1>
            </div>
        </div>
        <ul class="list-none justify-center gap-5 pb-5 sm:text-xs md:text-base text-center">
            <li class="inline-block mr-2">
                <div class="col-start-1 col-end-3"><a href="#" @click="goHome" class="text-black text-sm hover:text-cyan-500">HOME</a></div>
            </li>
            <li class="inline-block mr-2">
                <div class="col-center-1 col-span-2"><a href="#about" @click="goHome" class="text-black text-sm hover:text-cyan-500 ">ABOUT</a></div>
            </li>
            <li class="inline-block mr-2">
                <div class="col-center-1 col-span-2"><a href="#projects" @click="goBack" class="text-black text-sm hover:text-cyan-500">PROJECTS</a></div>
            </li>
            <li class="inline-block mr-2">
                <div class="col-end-7 col-span-2"><a href="#certificates" @click="goHome" class="text-black text-sm hover:text-cyan-500">CERTIFICATES</a></div>
            </li>
            <li class="inline-block mr-2">
                <div class="col-end-7 col-span-2"><a href="#contact" @click="contactMe" class="text-black text-sm hover:text-cyan-500">CONTACT</a></div>
            </li>
        </ul>
    </div>
    <div class="h-screen">
        <div class="bg-fixed bg-cover h-80 w-38 my-bg-class"></div>
        <div class="mt-20 ms-20 me-20 mb-10">
            <div class="grid grid-cols-1 md:grid-cols-1 md:grid-flow-col gap-4">
                <div class="mb-5">
                    <h1 class="my-heading text-left text-3xl font-bold">Classroomify:</h1>
                    <h1 class="my-heading text-3xl font-bold text-black">A Platform to Gamify Google Classroom</h1>
                    <p class="block text-justify text-black mt-5 mb-8">
                        Classroomify is a platform developed to enhance Google Classroom by integrating various 
                        game mechanics, elements, and dynamics. It offers a range of engaging features designed 
                        to enrich the online learning experience for both students and teachers. With Classroomify, 
                        educators can leverage interactive tools and gamified elements to foster student 
                        participation, motivation, and knowledge retention. Students benefit from an immersive 
                        learning environment that combines traditional coursework with interactive challenges, 
                        rewards, and collaborative activities. By seamlessly integrating these innovative features, 
                        Classroomify aims to transform the online learning setup into an engaging and effective 
                        educational journey.
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
                                    <img width="25" height="25" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Tabler-icons_brand-tailwind.svg" alt="tailwindcss">
                                </div>
                                <span class="mt-2 text-sm">Tailwind</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <img width="25" height="25" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Cib-vue-js_%28CoreUI_Icons_v1.0.0%29.svg" alt="Vue JS">
                                </div>
                                <span class="mt-2 text-sm">Vue.Js</span>
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
                                    <svg width="25" height="25" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                        <g id="SVGRepo_iconCarrier"> <g> <path d="M149.333333,159.146667 L86.4,159.146667 C77.2266667,159.146667 71.8933333,164.8 71.8933333,172.906667 C71.8933333,180.16 76.8,185.28 83.84,185.28 C92.0533333,185.28 96.7466667,179.626667 97.1733333,171.52 L115.413333,171.52 C114.453333,191.36 102.08,201.92 83.6266667,201.92 C66.3466667,201.92 53.44,190.186667 53.44,172.693333 C53.44,154.453333 66.9866667,141.76 87.36,141.76 L149.653333,141.76 C170.666667,141.76 186.666667,126.293333 186.666667,105.493333 C186.666667,84.48 172.373333,69.6533333 152,69.6533333 C131.84,69.6533333 115.52,84.3733333 115.52,111.573333 L115.52,129.386667 L97.0666667,129.386667 L97.0666667,111.573333 C97.0666667,75.52 120.213333,52.16 152.32,52.16 C182.933333,52.16 205.226667,74.1333333 205.226667,105.28 C205.44,136.426667 181.546667,159.146667 149.333333,159.146667 L149.333333,159.146667 Z M128,256 C199.573333,256 256,199.36 256,128 C256,56.64 199.573333,0 128,0 C56.4266667,0 0,56.8533333 0,128 C0,199.36 56.4266667,256 128,256 L128,256 Z" fill="#000000"> </path> </g> </g>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">Parse Server</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-git" viewBox="0 0 16 16">
                                        <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">Git</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <img width="25" height="25" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Cib-mongodb_%28CoreUI_Icons_v1.0.0%29.svg" alt="MongoDB">
                                </div>
                                <span class="mt-2 text-sm">MongoDB</span>
                            </li>
                            <li>
                                <div class="flex flex-col items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                        <path d="M 18.5 2 C 13.81752 2 10 5.8175204 10 10.5 C 10 13.800292 11.949927 16.592855 14.708984 18 C 11.949927 19.407145 10 22.199708 10 25.5 C 10 28.800292 11.949927 31.592855 14.708984 33 C 11.949927 34.407145 10 37.199708 10 40.5 C 10 45.18248 13.81752 49 18.5 49 C 23.18248 49 27 45.18248 27 40.5 L 27 33 L 27 29.65625 C 28.341367 32.201717 30.932066 34 34 34 C 38.406436 34 42 30.406432 42 26 C 42 22.378246 39.526173 19.428685 36.214844 18.449219 C 39.553558 17.301707 42 14.220224 42 10.5 C 42 5.8175204 38.18248 2 33.5 2 L 26 2 L 18.5 2 z M 18.5 4 L 25 4 L 25 17 L 18.5 17 C 14.89848 17 12 14.10152 12 10.5 C 12 6.8984796 14.89848 4 18.5 4 z M 27 4 L 33.5 4 C 37.10152 4 40 6.8984796 40 10.5 C 40 14.10152 37.10152 17 33.5 17 L 27 17 L 27 4 z M 18.5 19 L 25 19 L 25 32 L 18.5 32 C 14.89848 32 12 29.10152 12 25.5 C 12 21.89848 14.89848 19 18.5 19 z M 27 19 L 30.34375 19 C 28.908839 19.756146 27.756146 20.908838 27 22.34375 L 27 19 z M 34 20 C 37.325556 20 40 22.674446 40 26 C 40 29.325554 37.325556 32 34 32 C 30.674444 32 28 29.325554 28 26 C 28 22.674446 30.674444 20 34 20 z M 18.5 34 L 25 34 L 25 40.5 C 25 44.10152 22.10152 47 18.5 47 C 14.89848 47 12 44.10152 12 40.5 C 12 36.89848 14.89848 34 18.5 34 z"></path>
                                    </svg>
                                </div>
                                <span class="mt-2 text-sm">Figma</span>
                            </li>
                        </ul>
                        <div class="text-left pt-5">
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white font-bold py-2 px-4 border border-blue-500 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                </svg>
                                <a href="https://classroomify-v1.netlify.app/" target="_blank" class="pb-0.5"> Follow this link</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <ul class="md:pt-10 pb-5">
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">CLIENT:</p>
                            <span>ATENEO DE NAGA UNIVERSITY</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">PROJECT TYPE:</p>
                            <span>CAPSTONE</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">YEAR:</p>
                            <span>2022</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">APPLICATION TYPE:</p>
                            <span>WEB SYSTEM</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">ROLES:</p>
                            <span>TEAM LEAD</span> <br>
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
.my-bg-class{
    background-image: url('../assets/images/jpg/CLASSROOMIFY_page.jpg');
    background-position: bottom;
    width: 100%;
    height: auto;
}
</style>