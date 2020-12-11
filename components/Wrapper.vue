<template>
    <div class="flex mx-auto bg-blue-dark
                    sm:justify-center
                    md:justify-start
                    lg:justify-center
                    ">  
        <div class="flex flex-col px-2
                    sm:w-9/5
                    lg:w-9/9
                    xl:w-7/7
                    xxl:w-5/5
                    ">
            
            
                <div class="flex w-10/10 
                            sm:flex-col
                            md:flex-row

                            pt-14
                            pb-14
                            ">
                    
                    <div class="flex flex-col 
                                sm:w-10/10
                                md:w-6/6
                                ">
                        <!-- Divisor -->
                        <div class="flex 
                                    sm:justify-center
                                    md:justify-start

                                    sm:pb-6
                                    
                                    sm:pt-10
                                    md:pt-10
                                    lg:pt-18
                                    ">
                            <div class="border-b border-blue-hypervinculo w-20"></div>
                        </div>
                        <!-- Tittle -->
                        <div class="flex items-center w-10/10
                                    sm:justify-center
                                    md:justify-start
                                    ">
                            <p class="text-white font-sans font-bold
                                        sm:text-2xl
                                        lg:text-3xl">
                                Platzi Para empresas
                            </p>
                        </div>        
                        <!-- Disc list -->
                        <div class="flex flex-col justify-start items-start w-10/10">
                            <!-- 1 -->
                            <div class="flex flex-row items-start 
                                        sm:w-9/9 
                                        lg:w-8/8
                                        
                                        sm:pt-4
                                        lg:pt-12
                                        ">
                                <div class="w-1/1 pt-2">
                                    <img class="w-4 h-4" src="../assets/img/discs.png" alt="">
                                </div>
                                <div class="w-10/10">
                                    <p class="text-gray-graylay font-medium
                                                sm:text-base
                                                lg:text-lg
                                            
                                                ">
                                        Mide y analiza los resultados de tu equipo con nuestro tablero para seguimiento.</p>
                                </div>
                            </div>
                            <!-- 2 -->
                            <div class="flex flex-row items-start pt-6
                                        sm:w-9/9 
                                        lg:w-8/8
                                        ">
                                <div class="w-1/1 pt-2">
                                    <img class="w-4 h-4" src="../assets/img/discs.png" alt="">
                                </div>
                                <div class="w-10/10">
                                    <p class="text-gray-graylay font-medium
                                                sm:text-base
                                                lg:text-lg
                                                ">
                                        Acompañamiento y seguimiento por un Ejecutivo de Cuenta.</p>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div class="flex flex-row items-start pt-6 pb-6
                                        sm:w-9/9 
                                        lg:w-8/8
                                        ">
                                <div class="w-1/1 pt-2">
                                    <img class="w-4 h-4" src="../assets/img/discs.png" alt="">
                                </div>
                                <div class="w-10/10">
                                    <p class="text-gray-graylay font-medium
                                                sm:text-base
                                                lg:text-lg
                                                ">
                                        Certificaciones co-brandeadas por cada curso del plan completado.</p>
                                </div>
                            </div>
                            <!-- Text -->
                            <div class="font-body text-white justify-start w-10/10
                                        sm:mt-4
                                        md:mt-6

                                        sm:text-base
                                        md:text-base
                                        lg:text-base

                                        md:pl-2
                                        ">
                                    <span >Recibe información específica para tu empresa</span>
                            </div>
                            <!-- Input -->
                            <div class="flex w-10/10 
                                        sm:flex-col
                                        lg:flex-row
                                        "> 
                                <div class="flex justify-center items-center 
                                            sm:w-10/10
                                            md:w-9/9
                                            lg:w-9/9
                                            llg:w-4/7
                                            xl:w-5/2

                                            sm:pt-4
                                            md:pl-2
                                            ">
                                    <input  type="text" placeholder="   Escribe tu correo empresarial"
                                            class="flex text-gray-grayinput text-base items-center justify-center focus:outline-none focus:ring-2 rounded-lg border-2 bg-blue-darkSearch border-blue-lightsearch w-10/10  
                                                    sm:h-12
                                                    md:h-10
                                                    "/>
                                </div>
                                <div class="flex items-center font-medium pb-2
                                            sm:w-10/10
                                            md:w-5/5
                                            lg:w-5/2
                                            llg:w-3/3
                                            xl:w-3/5
                                        
                                            sm:pt-4  
                                            md:pt-2
                                            xl:pt-5
                                            lg:pt-6
                                            llg:pt-6 
                                            
                                            md:pl-4
                                            ">
                                    <button type="button"
                                            class="flex text-base font-bold items-center justify-center focus:outline-none focus:ring-2 rounded-lg bg-green-light w-10/10
                                                    sm:h-11
                                                    md:h-10
                                                    ">
                                        <span class=""> CONOCER MÁS </span> 
                                    </button>
                                </div>
                            </div>
                        </div> 
                    </div>
                    
                    <!-- Img -->
                    <div class="flex 
                                md:justify-end
                                lg:justify-end

                                
                                md:w-9/9
                                smd:w-6/6
                                lg:w-8/8
                                llg:w-6/6

                                sm:sr-only
                                md:not-sr-only
                                ">
                        <div class="md:w-9/9
                                    lg:w-8/8
                                    xl:w-8/8
                                    llg:w-8/8
                                    ">
                            <img src="https://static.platzi.com/mf-landings/image/dashboard_dektop-d8caa44e16517740cba1959fbc2858a6.png" alt="">
                        </div>
                    </div>

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