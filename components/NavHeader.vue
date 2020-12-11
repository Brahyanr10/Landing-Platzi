<template>
    <div class="flex bg-blue-dark shadow-2xl py-2
                sm:justify-center 
                md:justify-center
                lg:justify-center
                xl:justify-between
                ">
        <!-- sm -->
        <div class="flex 
                    sm:w-9/5 
                    sms:w-9/5
                    sm:not-sr-only
                    md:sr-only
                    ">
            <div class="flex justify-start items-center 
                        sm:w-2/5
                        sms:w-3/3 
                        ">
                <div class="flex">
                    <a href="#">
                        <img class="sm:h-7 sms:h-7 w-auto" src="https://static.platzi.com/mf-landings/image/isotipoPlatzi-442ccc1186a9806e18c9889cc301ffe1.png" alt="">
                    </a>
                </div>
                <div class="flex">
                    <a href="#">
                        <img class="sm:h-7 sms:h-7 w-auto" src="https://static.platzi.com/mf-landings/image/logotipo-platzi-768799552e5f26369e21a807b8a533f7.png" alt="">
                    </a>
                </div>
            </div>

            <div class="flex justify-end items-center w-7/7 ">
                <div class="flex 
                            sm:w-3/3
                            sms:w-2/7
                            ">
                    <button type="button" 
                            class="text-white relative whitespace-no-wrap group rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center ">
                            <span class="text-base ">Planes</span>
                            <svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                    </button>
                </div>
                <div class="flex justify-center 
                            sm:w-5/5
                            sms:w-5/5 
                            ">
                    <button type="button"
                            class="sms:px-2 sm:px-1 py-1 bg-green-light rounded-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="text-sm"> Iniciar sesión </span> 
                    </button>
                </div>
                <div class="flex 
                            sm:w-1/5
                            sms:w-1/5
                            ">
                    <button type="button" 
                            class="relative whitespace-no-wrap group rounded-md inline-flex focus:outline-none  focus:ring-2  focus:ring-offset-2  focus:ring-indigo-500 items-center ">
                            <span class="text-base text-white">Menu</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- lg -->
        <div class="flex
                    md:w-9/5
                    xl:w-9/9

                    sm:sr-only
                    md:not-sr-only 
                    ">

                <!-- Logos -->
                <div class="flex justify-start items-center 
                            md:w-3/3 
                            llg:w-7/7
                            xl:w-5/5
                            xll:w-8/8
                            xxl:w-10/10
                            ">
                    <div class="flex">
                        <a href="#">
                            <img class="w-10/10" src="https://static.platzi.com/mf-landings/image/isotipoPlatzi-442ccc1186a9806e18c9889cc301ffe1.png" alt="">
                        </a>
                    </div>
                    <div class="flex">
                        <a href="#">
                            <img class="w-10/10 " src="https://static.platzi.com/mf-landings/image/logotipo-platzi-768799552e5f26369e21a807b8a533f7.png" alt="">
                        </a>
                    </div>
                </div>

                <!-- Navegación NavBar -->
                <div class="flex justify-center items-center space-x-3 border-r font-medium border-white py-1 px-6 ">
                    <a href="#" class="text-white"> Cursos    </a>
                    <a href="#" class="text-white"> Blog      </a>
                    <a href="#" class="text-white"> Foro      </a>
                    <a href="#" class="text-white"> Agenda    </a>
                    <a href="#" class="text-white"> TV        </a>
                    <a href="#" class="text-white"> Contáctos </a>
                </div>
                <!-- DropDown -->
                <div class="flex
                            md:pl-6 
                            md:pr-2">

                    <button type="button" 
                            class="text-white relative whitespace-no-wrap group rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center font-medium">
                            <span >Planes</span>

                            <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                    </button>
                </div>

                <!-- Boton Iniciar sesión -->
                <div class="flex justify-start items-center font-medium
                            md:w-3/5
                            lg:w-2/3
                            xl:w-1/1
                            
                            ">
                    <button type="button"
                            class="bg-green-light rounded-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-2xl py-0.5 px-2">
                            <span> Iniciar sesión </span> 
                    </button>
                </div>

                <!-- Buscador -->
                <div class="flex items-center justify-center
                            sm:sr-only
                            md:not-sr-only
                            lg:sr-only
                            ">
                    <button type="button" class="text-white relative whitespace-no-wrap group rounded-md inline-flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center font-medium bg-blue-dark 
                            w-10/10
                            ">
                        <span class="flex items-center">
                            <svg class="md:w-5 md:h-5 justify-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </button>      
                </div>

                <!-- Buscador -->
                <div class="flex  items-center justify-center
                            sm:sr-only
                            lg:not-sr-only
                            ">
                    <input  type="text" placeholder="  Buscar en Platzi"
                            class="flex items-center justify-center focus:outline-none  rounded bg-blue-darkSearch font-medium text-xs h-8
                            lg:w-40 
                            llg:w-56
                            "/>

                    <button class=" flex items-center justify-center bg-green-light  rounded-r-lg md:w-12 md:h-8">
                        <span class="flex items-center">
                            <svg class="md:w-5 md:h-5 justify-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </button>      
                </div>

        </div>

        <div class="sm:sr-only">
            <!-- Logos -->
            <div class="flex flex-row justify-start items-center ">
                <img src="https://static.platzi.com/mf-landings/image/isotipoPlatzi-442ccc1186a9806e18c9889cc301ffe1.png" alt=""
                    class=" sm:h-5
                            md:h-6">
                <img src="https://static.platzi.com/mf-landings/image/logotipo-platzi-768799552e5f26369e21a807b8a533f7.png" alt=""
                    class=" sm:h-5
                            md:h-6">
            </div>

            <!-- NavBar -->
            

                <!-- Navegación NavBar -->
                <div class="justify-end space-x-3 border-r font-medium border-white md:py-1 md:px-6">
                    <a href="#" class="text-white"> Cursos    </a>
                    <a href="#" class="text-white"> Blog      </a>
                    <a href="#" class="text-white"> Foro      </a>
                    <a href="#" class="text-white"> Agenda    </a>
                    <a href="#" class="text-white"> TV        </a>
                    <a href="#" class="text-white"> Contáctos </a>
                </div>

                <!-- DropDown -->
                <div class="relative
                            md:pl-6 
                            md:pr-8">

                    <button type="button" 
                            class="text-white relative whitespace-no-wrap group rounded-md inline-flex focus:outline-none  focus:ring-2  focus:ring-offset-2  focus:ring-indigo-500 items-center font-medium">
                            <span >Iniciar mi plan</span>

                            <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                    </button>
                </div>

                <!-- Boton Iniciar sesión -->
                <div class="flex items-center font-medium pr-6">
                    <button type="button"
                            class="bg-green-light rounded-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:shadow-2xl md:py-0.5 md:px-2">
                            <span class=""> Iniciar sesión </span> 
                    </button>
                </div>

                <!-- Buscador -->
                <div class="flex  items-center justify-center">
                    <input  type="text" placeholder="  Buscar en Platzi"
                            class="flex items-center justify-center focus:outline-none  rounded bg-blue-darkSearch font-medium text-xs md:w-60 md:h-8"/>

                    <button class=" flex items-center justify-center bg-green-light  rounded-r-lg md:w-12 md:h-8">
                        <span class="flex items-center">
                            <svg class="md:w-5 md:h-5 justify-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </button>      
                </div>
            
        </div>

    </div>
</template>


<script>
export default {

}
</script>

<style>

</style>