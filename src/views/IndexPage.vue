<template>
    <div class="">
        <div class="min-h-screen bg-gradient-to-r from-cyan-950 via-sky-700 to-cyan-500 flex flex-col text-center backdrop-blur-lg">
            <!-- Header and navigation -->
            <div>
                <div class="grid grid-cols-6 gap-4 mt-10 mb-5">
                    <div class="col-start-2 col-span-4 text-white">
                        <h1 class="my-heading text-2xl tracking-widest">BERDIN</h1>
                    </div>
                </div>
                <ul class="list-none justify-center gap-5 pb-5 sm:text-xs md:text-base">
                    <li class="inline-block mr-2">
                        <div class="col-start-1 col-end-3"><a href="#" class="text-white text-sm hover:text-cyan-500">HOME</a></div>
                    </li>
                    <li class="inline-block mr-2">
                        <div class="col-center-1 col-span-2"><a href="#about" class="text-white text-sm hover:text-cyan-500 ">ABOUT</a></div>
                    </li>
                    <li class="inline-block mr-2">
                        <div class="col-center-1 col-span-2"><a href="#projects" class="text-white text-sm hover:text-cyan-500">PROJECTS</a></div>
                    </li>
                    <li class="inline-block mr-2">
                        <div class="col-end-7 col-span-2"><a href="#certificates" class="text-white text-sm hover:text-cyan-500">CERTIFICATES</a></div>
                    </li>
                    <li class="inline-block mr-2">
                        <div class="col-end-7 col-span-2"><a href="#contact" class="text-white text-sm hover:text-cyan-500">CONTACT</a></div>
                    </li>
                </ul>

                <div class="container mx-auto bg-white h-auto w-auto bg-opacity-25 rounded-lg pt-40 pb-40">
                    <div class="contianer pt-20">
                        <h1 class="text-4xl my-heading font-semibold text-indigo-950">Building Tomorrow's Web Today</h1>
                        <span class="text-lg font-medium text-indigo-950">Unleashing Innovation, Empowering User Experience</span>
                    </div>
                    <div class="pt-20 pb-10">
                        <a href="#contact">
                            <button class="px-6 py-2 text-gray-100 rounded bg-gradient-to-r from-cyan-500 to-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded">
                                Let's Work!
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <!-- About page -->
            <div class="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-4 pt-10 mx-20 mb-10" id="about">
                <div>
                    <h1 class="my-heading text-3xl text-left font-bold bg-gradient-to-r from-cyan-500 to-teal-400 text-transparent bg-clip-text">Interactive</h1>
                    <h1 class="my-heading text-3xl text-left font-bold bg-gradient-to-r from-cyan-500 to-teal-400 text-transparent bg-clip-text">VISIONARY</h1>
                    <p class="block text-left text-justify text-white mb-5 mt-10">
                        Welcome to my portfolio, where creativity meets innovation!
                    </p>
                    <p class="block text-left text-justify text-white mb-5">
                        As an Interactive Visionary, I am thrilled to showcase my skills as a web developer and 
                        designer. I specialize in creating stunning and functional websites that leave a lasting 
                        impression. With a strong passion for design and development, I continuously stay up-to-date 
                        with the latest trends and technologies.
                    </p>
                    <p class="block text-left text-justify text-white mb-5">
                        Whether you require a simple brochure website or a complex e-commerce platform, I bring a 
                        strategic approach to every project. My goal is to ensure your brand stands out in today's 
                        dynamic digital landscape.
                    </p>
                    <p class="block text-left text-justify text-white mb-10">
                        Let's collaborate and bring your vision to life. 
                        Contact me today to get started on transforming your ideas into remarkable digital 
                        experiences!
                    </p>

                    <button @click="myCV" class="block text-left bg-gradient-to-r from-cyan-500 to-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded">
                        CHECK OUT MY CV
                    </button>
                </div>
                <div class="flex items-center justify-center">
                    <div class="relative aspect-w-1 aspect-h-1">
                        <div class="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500 to-transparent opacity-50 rounded-full"></div>
                        <img src="../assets/images/developer_dp-1.png" alt="Your Image" class="relative z-10">
                    </div>
                </div>
            </div>

            <!-- Programming Languages -->
            <div>
                <div class="container mx-auto bg-white h-auto w-auto bg-opacity-25 rounded-lg p-5">
                    <ul class="grid grid-cols-5 gap-4 place-content-center">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
                                    <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"/>
                                    <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"/>
                                </svg>
                            </div>
                            <span class="mt-2 text-sm">Bootstrap</span>
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
                                <img width="25" height="25" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Cib-django_%28CoreUI_Icons_v1.0.0%29.svg" alt="Django">
                            </div>
                            <span class="mt-2 text-sm">Django</span>
                        </li>
                        <li>
                            <div class="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                    <path d="M 27 3 A 1.0001 1.0001 0 0 0 26.292969 3.2929688 L 5.2929688 24.292969 A 1.0001 1.0001 0 0 0 5.2929688 25.707031 L 11.292969 31.707031 A 1.0001 1.0001 0 0 0 12.707031 31.707031 L 39.707031 4.7070312 A 1.0001 1.0001 0 0 0 39 3 L 27 3 z M 27.414062 5 L 36.585938 5 L 12 29.585938 L 7.4140625 25 L 27.414062 5 z M 28 22 A 1.0001 1.0001 0 0 0 27.292969 22.292969 L 15.292969 34.292969 A 1.0001 1.0001 0 0 0 15.292969 35.707031 L 21.292969 41.707031 L 27.292969 47.707031 A 1.0001 1.0001 0 0 0 28 48 L 40 48 A 1.0001 1.0001 0 0 0 40.707031 46.292969 L 29.414062 35 L 40.707031 23.707031 A 1.0001 1.0001 0 0 0 40 22 L 28 22 z M 28.414062 24 L 37.585938 24 L 22 39.585938 L 17.414062 35 L 28.414062 24 z M 28 36.414062 L 37.585938 46 L 28.414062 46 L 23.414062 41 L 28 36.414062 z"></path>
                                </svg>
                            </div>
                            <span class="mt-2 text-sm">Flutter</span>
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
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 20.941406 2 18.1875 2.96875 16.4375 4.375 C 14.6875 5.78125 14 7.589844 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 7.265625 15 5.410156 15.792969 4.09375 17.46875 C 2.777344 19.144531 2 21.644531 2 25 C 2 28.355469 2.777344 30.855469 4.09375 32.53125 C 5.410156 34.207031 7.265625 35 9.09375 35 L 14 35 L 14 40.90625 C 14 42.410156 14.6875 44.21875 16.4375 45.625 C 18.1875 47.03125 20.941406 48 25 48 C 29.058594 48 31.8125 47.03125 33.5625 45.625 C 35.3125 44.21875 36 42.410156 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 42.734375 35 44.589844 34.207031 45.90625 32.53125 C 47.222656 30.855469 48 28.355469 48 25 C 48 21.644531 47.222656 19.144531 45.90625 17.46875 C 44.589844 15.792969 42.734375 15 40.90625 15 L 36 15 L 36 9.09375 C 36 7.550781 35.316406 5.738281 33.5625 4.34375 C 31.808594 2.949219 29.054688 2 25 2 Z M 25 4 C 28.746094 4 31.015625 4.875 32.3125 5.90625 C 33.609375 6.9375 34 8.136719 34 9.09375 L 34 21 C 34 22.65625 32.65625 24 31 24 L 19 24 C 16.941406 24 15.167969 25.269531 14.40625 27.0625 C 14.277344 27.359375 14.160156 27.675781 14.09375 28 C 14.027344 28.324219 14 28.65625 14 29 L 14 33 L 9.09375 33 C 7.824219 33 6.648438 32.503906 5.6875 31.28125 C 4.726563 30.058594 4 28.042969 4 25 C 4 21.957031 4.726563 19.941406 5.6875 18.71875 C 6.648438 17.496094 7.824219 17 9.09375 17 L 26 17 L 26 12 L 16 12 L 16 9.09375 C 16 8.199219 16.386719 6.980469 17.6875 5.9375 C 18.988281 4.894531 21.257813 4 25 4 Z M 20 7 C 18.898438 7 18 7.898438 18 9 C 18 10.101563 18.898438 11 20 11 C 21.101563 11 22 10.101563 22 9 C 22 7.898438 21.101563 7 20 7 Z M 36 17 L 40.90625 17 C 42.175781 17 43.351563 17.496094 44.3125 18.71875 C 45.273438 19.941406 46 21.957031 46 25 C 46 28.042969 45.273438 30.058594 44.3125 31.28125 C 43.351563 32.503906 42.175781 33 40.90625 33 L 24 33 L 24 38 L 34 38 L 34 40.90625 C 34 41.800781 33.613281 43.019531 32.3125 44.0625 C 31.011719 45.105469 28.742188 46 25 46 C 21.257813 46 18.988281 45.105469 17.6875 44.0625 C 16.386719 43.019531 16 41.800781 16 40.90625 L 16 29 C 16 28.792969 16.023438 28.601563 16.0625 28.40625 C 16.34375 27.039063 17.550781 26 19 26 L 31 26 C 33.746094 26 36 23.746094 36 21 Z M 30 39 C 28.898438 39 28 39.898438 28 41 C 28 42.101563 28.898438 43 30 43 C 31.101563 43 32 42.101563 32 41 C 32 39.898438 31.101563 39 30 39 Z"></path>
                                </svg>
                            </div>
                            <span class="mt-2 text-sm">Python</span>
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
                        <li>
                            <div class="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                                    <path d="M 18.5 2 C 13.81752 2 10 5.8175204 10 10.5 C 10 13.800292 11.949927 16.592855 14.708984 18 C 11.949927 19.407145 10 22.199708 10 25.5 C 10 28.800292 11.949927 31.592855 14.708984 33 C 11.949927 34.407145 10 37.199708 10 40.5 C 10 45.18248 13.81752 49 18.5 49 C 23.18248 49 27 45.18248 27 40.5 L 27 33 L 27 29.65625 C 28.341367 32.201717 30.932066 34 34 34 C 38.406436 34 42 30.406432 42 26 C 42 22.378246 39.526173 19.428685 36.214844 18.449219 C 39.553558 17.301707 42 14.220224 42 10.5 C 42 5.8175204 38.18248 2 33.5 2 L 26 2 L 18.5 2 z M 18.5 4 L 25 4 L 25 17 L 18.5 17 C 14.89848 17 12 14.10152 12 10.5 C 12 6.8984796 14.89848 4 18.5 4 z M 27 4 L 33.5 4 C 37.10152 4 40 6.8984796 40 10.5 C 40 14.10152 37.10152 17 33.5 17 L 27 17 L 27 4 z M 18.5 19 L 25 19 L 25 32 L 18.5 32 C 14.89848 32 12 29.10152 12 25.5 C 12 21.89848 14.89848 19 18.5 19 z M 27 19 L 30.34375 19 C 28.908839 19.756146 27.756146 20.908838 27 22.34375 L 27 19 z M 34 20 C 37.325556 20 40 22.674446 40 26 C 40 29.325554 37.325556 32 34 32 C 30.674444 32 28 29.325554 28 26 C 28 22.674446 30.674444 20 34 20 z M 18.5 34 L 25 34 L 25 40.5 C 25 44.10152 22.10152 47 18.5 47 C 14.89848 47 12 44.10152 12 40.5 C 12 36.89848 14.89848 34 18.5 34 z"></path>
                                </svg>
                            </div>
                            <span class="mt-2 text-sm">Figma</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Projects -->
            <br>
            <div class="pt-10" id="projects">
                <p class="my-heading text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-400 text-transparent bg-clip-text">
                    EXEMPLARY SHOWCASES
                </p>
            </div>
            <div class="text-center mx-auto px-4">
                <p class="text-white pt-5 text-clip">
                    Discover my innovative projects that exemplify excellence through captivating designs and 
                    boundary-pushing solutions. <br> Join me on this journey of limitless possibilities at the 
                    intersection of craftsmanship and innovation.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 md:auto-cols-min gap-4 pt-10 mx-20 mb-10">
                <div>
                    <div class="relative group">
                        <button @click="classroomifyPage">
                            <img src="../assets/images/CLASSROOMIFY_showcase.png" alt="Image Description" class="shadow transition duration-300 ease-in-out transform hover:shadow-lg w-full h-auto shadow-lg">
                            <div class="absolute inset-0 flex items-end justify-start">
                                <div class="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative">
                                    <p class="text-white text-lg font-bold absolute bottom-14 left-0 mb-4 ml-4">Classroomify</p>
                                    <span class="text-white absolute bottom-10 left-0 mb-4 ml-4">A Platform to Gamify Google Classroom</span>
                                    <ul class="grid grid-cols-10 md:grid-flow-col gap-5">
                                        <li>
                                            <div class="absolute bottom-0 left-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">Website</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 left-15 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">UI/UX</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">Gamification</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="relative group">
                        <button @click="kaziPage">
                            <img src="../assets/images/KAZI_showcase.png" alt="Image Description" class="shadow transition duration-300 ease-in-out transform hover:shadow-lg w-full h-auto shadow-lg">
                            <div class="absolute inset-0 flex items-end justify-start">
                                <div class="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p class="text-white text-lg font-bold absolute bottom-14 left-0 mb-4 ml-4">KAZI</p>
                                    <span class="text-white absolute bottom-10 left-0 mb-4 ml-4">An Interactive Booking System</span>
                                    <ul class="grid grid-cols-10 md:grid-flow-col gap-5">
                                        <li>
                                            <div class="absolute bottom-0 left-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">Website</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 left-15 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">UI/UX</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">Reservation System</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="relative group">
                        <button @click="paperclipPage">
                            <img src="../assets/images/PAPERCLIP_showcase.png" alt="Image Description" class="shadow transition duration-300 ease-in-out transform hover:shadow-lg w-full h-auto shadow-lg">
                            <div class="absolute inset-0 flex items-end justify-start">
                                <div class="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p class="text-white text-lg font-bold absolute bottom-14 left-0 mb-4 ml-4">PaperClip</p>
                                    <span class="text-white absolute bottom-10 left-0 mb-4 ml-4">Trade. Connect. Grow. Mobile community app</span>
                                    <ul class="grid grid-cols-10 md:grid-flow-col gap-5">
                                        <li>
                                            <div class="absolute bottom-0 left-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">Mobile</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 left-15 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">UI/UX</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">Trading Community</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="relative group">
                        <button @click="darylPage">
                            <img src="../assets/images/DARYL_showcase.png" alt="Image Description" class="shadow transition duration-300 ease-in-out transform hover:shadow-lg w-full h-auto shadow-lg">
                            <div class="absolute inset-0 flex items-end justify-start">
                                <div class="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p class="text-white text-lg font-bold absolute bottom-14 left-0 mb-4 ml-4">Daryl Cafe</p>
                                    <span class="text-white absolute bottom-10 left-0 mb-4 ml-4">Point of Sale System</span>
                                    <ul class="grid grid-cols-10 md:grid-flow-col gap-5">
                                        <li>
                                            <div class="absolute bottom-0 left-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">Website</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 left-15 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">UI/UX</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="absolute bottom-0 mb-4 ml-4 font-medium py-1 px-2 rounded-full text-white bg-slate-600 border border-blue-300">
                                                <div class="text-xs font-normal leading-none max-w-full flex-initial">POS</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Certificates -->
            <div id="certificates">
                <div class="container mx-auto bg-white h-auto w-auto bg-opacity-25 rounded-lg p-5">
                    <div class="pt-10 pb-5">
                        <p class="my-heading text-2xl font-bold text-indigo-950">
                            CERTIFIED AND RECOGNIZED BY PROMINENT INSTITUTIONS
                        </p>
                    </div>
                    <div class="text-center mx-auto px-4 pb-10">
                        <p class="text-white text-clip">
                            Backed by certifications from esteemed institutions, my portfolio showcases my 
                            exceptional skills and achievements. <br>Step into my world of innovation, creativity, 
                            and relentless pursuit of excellence.
                        </p>
                    </div>
                    <div class="flex justify-center items-center">
                        <ul class="grid grid-cols-1 md:grid-cols-4 md:auto-cols-min gap-4 mx-auto mb-10">
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/hackerrank_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">Problem Solving</p>
                                        <p class="text-white text-left">HackerRank</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/hackerrank_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">REST APIs</p>
                                        <p class="text-white text-left">HackerRank</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/cisco_logo.jpg" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">Certified Network Associate Routing <br>and Switching (CCNA)</p>
                                        <p class="text-white text-left">Cisco</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/cisco_logo.jpg" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">Cybersecurity Essentials</p>
                                        <p class="text-white text-left">Cisco</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/great_learning_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">Front End Development</p>
                                        <p class="text-white text-left">Great Learning</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/great_learning_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">Python Foundations</p>
                                        <p class="text-white text-left">Great Learning</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/great_learning_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">Python Data Structures</p>
                                        <p class="text-white text-left">Great Learning</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/great_learning_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">UI/UX</p>
                                        <p class="text-white text-left">Great Learning</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/sap_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">SAP Business One</p>
                                        <p class="text-white text-left">SAP</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/coursera_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">University Of Michigan: <br>Programming for Everybody (Python)</p>
                                        <p class="text-white text-left">Coursera</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <img width="100" height="100" src="../assets/logo/zuit_logo.png" alt="Your Image">
                                    <div class="ml-4">
                                        <p class="text-white text-left font-semibold">Code-UP: <br>Coding and Web Profile Creation</p>
                                        <p class="text-white text-left">Zuitt</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Company logos -->
                    <div>
                        <div class="pt-10 pb-5">
                            <p class="my-heading text-2xl font-bold text-indigo-950">
                                RELIABLE FOR ESTEEMED CORPORATIONS
                            </p>
                        </div>
                        <div class="pb-5">
                            <div>
                                <ul class="grid grid-cols-2 gap-4 place-content-center ms-5 me-5">
                                    <li>
                                        <div class="flex flex-col items-center">
                                            <img src="../assets/images/ADNU_CS_cropped.png" width="240" height="240">
                                        </div>
                                    </li>    
                                    <li>
                                        <div class="flex flex-col items-center">
                                            <img src="../assets/images/ADNU_LIB_cropped.png" width="250" height="250">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="contact">
                <h1 class="block text-left text-justify bg-gradient-to-r from-cyan-500 to-teal-400 text-transparent bg-clip-text ms-20 me-20 mt-10 my-heading text-4xl">
                    I'm all ears for your messages, <br>so send them my way!
                </h1>
                <p class="block text-left text-justify text-white ms-20 me-20 mt-4">
                    I'm thrilled to have you here. If you have any questions, need assistance, 
                    or simply want to connect, don't hesitate to email me now. <br>
                    I'm here to help and eager to hear from you. Let's embark on this journey together. 
                    Looking forward to our conversation!
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

            emailjs.send('service_3vt97i9', 'template_63i01eo', templateParams)
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

        myCV(){
            this.$router.push({name: 'CV'})
        },
    },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.my-heading{
    font-family: 'Orbitron';
}
</style>