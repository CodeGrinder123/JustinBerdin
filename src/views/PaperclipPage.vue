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
        <div class="bg-fixed bg-cover h-80 w-38 my-bg-paper"></div>
        <div class="mt-20 ms-20 me-20 mb-10">
            <div class="grid grid-cols-1 md:grid-cols-1 md:grid-flow-col gap-4">
                <div class="mb-5">
                    <h1 class="my-heading text-left text-4xl font-bold">PaperClip:</h1>
                    <h1 class="my-heading text-3xl font-bold text-black">A Trading Community Mobile Platform</h1>
                    <p class="block text-justify text-black mt-5 mb-8">
                        PaperClip is a unique trading challenge mobile application that offers an immersive 
                        trading experience. Engage in a series of trades and witness the power of bartering as you 
                        work towards achieving your goals. Explore a wide range of items and connect with fellow 
                        traders to exchange goods and negotiate deals. With PaperClip, you'll discover the art of 
                        strategic trading and learn to maximize the value of each transaction. 
                        Experience the excitement of trading and unlock new possibilities.
                    </p>

                    <div class="text-center">
                        <p class="text-black text-left text-medium font-bold mb-5">TOOLS USED:</p>
                        <ul class="grid grid-cols-3 md:grid-cols-10 md:grid-flow-col gap-4 place-content-center">
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
                            <span>PERSONAL PROJECT</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">PROJECT TYPE:</p>
                            <span>PERSONAL PROJECT</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">YEAR:</p>
                            <span>2022</span>
                        </li>
                        <li class="pb-5">
                            <p class="text-black text-medium font-bold">APPLICATION TYPE:</p>
                            <span>MOBILE APPLICATION</span>
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
.my-bg-paper{
    background-image: url('../assets/images/jpg/PAPERCLIP_page.jpg');
    background-position: bottom;
    width: 100%;
    height: auto;
}
</style>