<template>
    <!-- div html -->
    <div class="flex 
                sm:justify-center
                md:justify-start
                lg:justify-center
                ">  
        <!-- div % -->
        <div class="flex justify-center w-10/10 bg-blue-dark  ">
            <!-- Layout 1 -->
            <div class="flex flex-col items-center justify-center
                    sm:w-9/9
                    md:w-9/9
                    lg:w-9/9
                    xl:w-7/7
                    xxl:w-5/5
                    ">
                <!-- Layout registro -->
                <div class="flex flex-col w-10/10 ">
                    <!-- Text Tittle -->
                    <div class="
                                sm:w-10/10
                                md:w-7/1
                                lg:w-5/5

                                sm:mt-2
                                md:mt-14
                                lg:mt-14

                                md:pl-4
                                lg:pl-0
                            ">
                        <span class="font-bold text-white justify-start
                                    sm:text-3.2xl
                                    md:text-5xl
                                    lg:text-5xl

                                    sm:leading-tight
                                ">
                            Fórmate online como profesinal en tecnología
                        </span>
                    </div>

                    <!-- Text Subtittle -->
                    <div class="justify-center items-center
                            sm:w-10/10
                            md:w-7/1
                            lg:w-5/5

                            sm:pt-2
                            lg:pt-8
                            md:pl-2  lg:pl-0
                            ">
                        <div class="font-body text-white justify-start 
                                    sm:mt-4
                                    md:mt-6
                                    lg:mt-0

                                    sm:text-base
                                    md:text-lg
                                    lg:text-lg

                                    

                                    md:justify-center                                
                                    md:pl-2
                                    lg:pl-0
                                    ">
                            <span class="font-bold">70%</span> de los graduados de Platzi <span class="font-bold">duplican sus ingresos</span>
                        </div>

                        <div class="font-body text-white justify-start 
                                    sm:mt-4
                                    md:mt-6
                                    lg:mt-0

                                    sm:text-base
                                    md:text-lg
                                    lg:text-lg
                                    
                                    lg:pt-2

                                    md:pl-2
                                    lg:pl-0
                                    ">
                            <span class="font-bold">20%</span> <span> crean su propia empresa de tecnología o startup </span>
                        </div>
                    </div>

                    <div class="font-body text-white justify-start
                                sm:mt-10
                                md:mt-10
                                lg:mt-10

                                sm:text-base
                                md:text-lg
                                lg:text-base

                                md:pl-4
                                lg:pl-0
                                ">
                        <span >Acelera tu carrera profesional:</span>
                    </div>

                    <!-- Input Msn Btton -->
                    <div class="flex 
                                sm:flex-col
                                md:flex-row
                                lg:flex-row"> 

                        <div class="flex justify-center items-center
                                    sm:w-10/10
                                    md:w-4/5
                                    lg:w-2/5

                                    sm:pt-4
                                    md:pt-4  md:pl-4
                                    lg:pt-4  lg:pl-0

                                    
                                    ">
                            <input  type="text" placeholder="   Escribe tu correo electrónico"
                                    class="flex text-gray-grayinput text-base items-center justify-center focus:outline-none focus:ring-2 rounded-lg border-2 bg-blue-darkSearch border-blue-lightsearch w-10/10  
                                            sm:h-12
                                            md:h-10
                                            lg:h-10
                                            xl:h-10
                                            "/>
                        </div>

                        <div class="flex items-center font-medium 
                                    sm:w-10/10
                                    md:w-2/5
                                    lg:w-1/5
                                
                                    sm:pt-4  
                                    md:pt-4  md:pl-4
                                             lg:pl-0
                                    lg:pt-4  
                                    ">
                            <button type="button"
                                    class="flex text-sm font-bold items-center justify-center focus:outline-none focus:ring-2 rounded-lg bg-green-light w-10/10
                                            sm:w-10/10

                                            sm:h-11
                                            md:h-10
                                            lg:h-10
                                            xl:h-10
                                            ">
                                <span class=""> ENTRA A PLATZI </span> 
                            </button>
                        </div>
                    </div>

                    <!-- Terminos y condiciones -->
                    <div class="
                                sm:text-center
                                md:text-left
                                lg: text-center

                                sm:pt-3  sm:pl-0
                                md:pt-6  md:pl-4
                                lg:pt-6  lg:pl-0
                                
                                sm:text-base
                                md:text-base
                                lg:text-lg
                                ">
                        <span class="text-gray-graytext font-mediumd">Al ingresar aceptas <a class="text-blue-hypervinculo" href="#">Términos de Servicio</a> y <a class="text-blue-hypervinculo" href="#">Políticas de privacidad</a></span>
                    </div>
                    <!-- <div class="pt-6 flex w-10/10 justify-center items-center">
                        <div class="flex justify-center intems-center w-5/5 border-2 h-32">
                            <img class="flex justify-center items-center" src="../assets/img/maria.jpeg" alt="">
                        </div>
                    </div> -->
                </div>
                <!-- Layout 2 Trusted-->
                <div class="text-center w-10/10 
                
                            sm:pt-10
                            md:pt-24
                            lg:pt-10
                            xl:pt-10
                            ">

                    <span class="text-blue-taxtbaner font-medium
                                sms:text-lg
                                ">
                                Empresas y gobiernos que confían en Platzi
                    </span>
                    
                    <div class="flex flex-wrap justify-center items-center w-10/10
                                sm:pt-4
                                md:pt-2
                                ">
                            
                        <div class="
                                    sms:pt-2

                                    sm:pr-4
                                    md:pr-8
                                    ">
                            <img class="
                                        sms:h-5
                                        sm:h-4
                                        md:h-9"
                                        src="../assets/img/googlecloud.png" alt="">
                        </div>
                        <div class="
                                    sms:pt-2

                                    sm:pr-4
                                    md:pr-8
                                    ">
                            <img class="
                                        sms:h-5
                                        sm:h-4
                                        md:h-9"
                                        src="../assets/img/Ibm.png" alt="">
                        </div>
                        <div class="
                                    sms:pt-2

                                    sm:pr-4
                                    md:pr-8
                                    ">
                            <img class="
                                        sms:h-5
                                        sm:h-4
                                        md:h-9"
                                        src="../assets/img/unity.png" alt="">
                        </div>
                        <div class="
                                    sms:pt-2

                                    sm:pr-4
                                    md:pr-8
                                    ">
                            <img class="
                                        sms:h-5
                                        sm:h-4
                                        md:h-9"
                                        src="../assets/img/ycombinator.png" alt="">
                        </div>
                        <div class="
                                    sms:pt-2

                                    sm:pr-4
                                    md:pr-8
                                    ">
                            <img class="
                                        sms:h-5
                                        sm:h-4
                                        md:h-9"
                                        src="../assets/img/facebook.png" alt="">
                        </div>
                        <div class="
                                    sms:pt-2

                                    sm:pr-4
                                    md:pr-8
                                    ">
                            <img class="
                                        sms:h-5
                                        sm:h-4
                                        md:h-9"
                                        src="../assets/img/secretaria.png" alt="">
                        </div>
                    </div>
                </div>
                <!-- Divisor -->
                <div class="flex justify-center 
                            sm:pb-6
                            sms:pb-6
                            

                            sm:pt-6 
                            sms:pt-6
                            md:pt-24
                            ">
                    <div class="border-b border-blue-hypervinculo w-20">
                    </div>
                </div>
                <!-- Layout cursos -->
                <div class="flex flex-col ">
                    <div class="flex justify-center">
                        <p class="text-white font-bold text-center 
                                  sm:text-2xl 
                                  sms:text-3xl 
                                  md:text-3.5xl 
                                  lg:text-3xl 
                                  
                                  lg:w-8/8 
                                  xl:w-9/9
                                  ">
                            Estudia desde cero o especialízate en las áreas con mayor demanda laboral
                        </p>    
                    </div>

                    <!-- Botones cursos -->
                    <div class="flex mt-10 w-10/10 justify-center ">
                        <div class="grid gap-4 mt-6
                                    sm:'grid-cols-1 
                                    sms:grid-cols-1 
                                    md:grid-cols-2 
                                    lg:grid-cols-4
                                    xl:grid-cols-4
                                    xxl:grid-cols-5
                                    ">
                            
                            <!-- 1 --> 
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-yellow-yellowbotonhover bg-yellow-yellowboton ">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/f2a3f8c6-9188-44c0-a66e-ee2ac426ddf7.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Negocios</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 2 -->
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-botonbluelighthover bg-blue-botonbluelight">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/9020f852-2b90-410e-afda-8b4ae5fc6b36.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Periodismo Digital</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 3 -->
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-red-redbotonhover bg-red-redboton">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/1d9f30c0-47b8-4bce-8679-e5ca579f86ee.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Finanzas Personales</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 4 -->
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-green-botongreenlighthover bg-green-botongreenlight">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/73f0d253-739e-425c-85f9-2cd454a91ffb.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Startups</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 5 -->
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-red-redbotonhover bg-red-redboton">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/3a7d2518-de34-42f1-aaa8-dd48a53c8ab5.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Desarrollo Profesional </p>
                                    </div>
                                </button>
                            </div>
                            <!-- 6 -->
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-purple-botonpurplehover bg-purple-botonpurple">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/4c82c676-da9e-45aa-8945-7deb22e525ab.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Diseño Gráfico</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 7 -->
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-bluebotonhover bg-blue-blueboton">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/f85a471b-4834-41ed-b98f-a17fd0c6c6e8.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Publicidad Digital</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 8 -->
                            <div>
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-purple-botonpurplelighthover bg-purple-botonpurplelight">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/6a87ec76-66f3-4b36-96f6-637e58c81bb4.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Product Design</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 9 -->
                            <div class="sm:sr-only sms:sr-only md:not-sr-only">
                                <button type="button" href="#" class="flex-grow h-auto sm:p-6 lg:p-7  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-green-botongreenhover bg-green-botongreen ">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/ce907ec9-1ef8-4e27-9bcc-71493a4bd7dc.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Desarrollo Web</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 10 -->
                            
                            <div class="sm:sr-only sms:sr-only md:not-sr-only">
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-orange-botonorangelighthover bg-orange-botonorangelight ">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/a2bce002-1a43-432e-8c34-a2c900ce65b3.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">E-Commerce y Negocios</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 11 -->
                            
                            <div class="sm:sr-only sms:sr-only md:not-sr-only">
                                <button type="button" href="#" class="flex-grow h-auto sm:p-6 lg:p-7 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-red-redbotonhover bg-red-redboton ">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/9482e7b9-3006-4d92-8bc1-8cb5264b30a6.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Inglés</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 12 -->
                            <div class="sm:sr-only sms:sr-only md:not-sr-only">
                                <button type="button" href="#" class="flex-grow h-auto sm:p-6 lg:p-7 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-bluebotonhover bg-blue-blueboton">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/c9c80de9-0b08-4c34-a9cf-51743083713f.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Marketing Digital</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 13 -->
                            <div class="sm:sr-only sms:sr-only md:not-sr-only">
                                <button type="button" href="#" class="flex-grow h-auto sm:p-6 lg:p-7 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-green-botongreendarkhover bg-green-botongreendark ">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/989dfa30-0e85-4542-944a-587cf295312e.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Videojuegos</p>
                                    </div>
                                </button>
                            </div>
                            <!-- 14 -->
                            <div class="sm:sr-only sms:sr-only md:not-sr-only">
                                <button type="button" href="#" class="flex-grow h-auto p-6  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-orange-botonorangehover bg-orange-botonorange ">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/0b5d503f-4779-4275-88f7-7d0928ec2c8f.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Producción Audiovisual</p>
                                    </div>
                                </button>
                            </div>

                            <!-- 15 -->
                            <div class="sm:sr-only sms:sr-only md:not-sr-only">
                                <button type="button" href="#" class="flex-grow h-auto sm:p-6 lg:p-7  rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-green-btongreehover bg-green-btongree ">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/learningpath/emblems/0b5d503f-4779-4275-88f7-7d0928ec2c8f.jpg" alt="">
                                    </div>
                                    <div>
                                        <div class="text-base text-left text-black">Escuela de</div>
                                        <p class="text-base text-left font-bold">Data Science</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Layout list-disc -->
                <div class="grid gap-4 pt-10
                            sm:grid-cols-1
                            sms:grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-3
                            ">
                    <div class="flex flex-row bg-blue-dark items-center max-w-sm
                                sm:pt-6">
                        <div class="w-2/2 ">
                            <img class="w-4 h-4" src="../assets/img/disc.png" alt="">
                        </div>
                        <div>
                            <p class="text-gray-graylay font-medium 
                                        sm:text-base
                                        sms:text-base
                                        md:text-xl
                                        lg:text-xl
                                        ">
                                Escuelas con nuevas formas de aprendizaje para profundizar en lo que quieres triunfar.</p>
                        </div>
                    </div>
                    <div class="flex flex-row bg-blue-dark items-center max-w-sm
                                sm:pt-6">
                        <div class="w-2/2 ">
                            <img class="w-4 h-4" src="../assets/img/disc.png" alt="">
                        </div>
                        <div>
                            <p class="text-gray-graylay font-medium 
                                        sm:text-base
                                        sms:text-base
                                        md:text-xl
                                        lg:text-xl
                                        ">
                                Más de 600 cursos para crear tu ruta personalizada y adquirir habilidades específicas.</p>
                        </div>
                    </div>
                    <div class="flex flex-row bg-blue-dark items-center max-w-sm
                                sm:pt-6">
                        <div class="w-2/2 ">
                            <img class="w-4 h-4" src="../assets/img/disc.png" alt="">
                        </div>
                        <div>
                            <p class="text-gray-graylay font-medium
                                        sm:text-base
                                        sms:text-base
                                        md:text-xl
                                        lg:text-xl
                                        ">
                                Contenido actualizado, nuevos cursos, blog posts y podcasts cada semana.</p>
                        </div>
                    </div>

                </div>
                <!-- Divisor -->
                <div class="flex justify-center 
                            sm:pb-6
                            sms:pb-6
                            

                            sm:pt-12
                            sms:pt-12
                            md:pt-24
                            ">
                    <div class="border-b border-blue-hypervinculo w-20">
                    </div>


                </div>
                <!-- Layout Lanzamientos -->
                <div class="flex flex-col w-10/10 pb-14">
                    <div class="flex justify-center">
                        <p class="text-white font-bold text-center 
                                  sm:text-2xl 
                                  sms:text-3xl 
                                  md:text-2xl 
                                  lg:text-2xl 
                                  ">
                            Últimos lanzamientos
                        </p>    
                    </div>
                    <!-- buttons -->
                    <div class="w-10/10 grid gap-4 pt-8
                                sm:grid-cols-1
                                sms:grid-cols-1
                                md:grid-cols-2
                                lg:grid-cols-3
                                ">
                        <!-- 1 -->
                        <div>
                            <button type="button" href="#" class="flex-grow h-auto px-5 py-3 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-bluelanzhover bg-blue-bluelanz">
                                    <div class="flex-shrink-0">
                                        <img class="h-16 w-18" src="https://static.platzi.com/media/achievements/badge-empezar-vender-internet-a7d6104c-fd01-4f9b-8104-a41e4f807986.png" alt="">
                                    </div>
                                    <div class="justify-start w-10/10">
                                        <div class="text-base text-left text-white font-medium leading-tight ">Cursos para Empezar a Vender por Internet</div>
                                        <div class="pt-2 
                                                    sm:w-8/8
                                                    sms:w-6/6
                                                    md:w-6/6
                                                    lg:w-7/5
                                                    xl:w-7/7
                                                    xxl:w-5/5
                                                    ">
                                            <div class="text-base px-4 bg-green-light rounded-xl ">Ya disponible</div>  
                                        </div>
                                    </div>
                            </button>
                        </div>
                        <!-- 2 -->
                        <div>
                            <button type="button" href="#" class="flex-grow h-auto px-5 py-3 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-bluelanzhover bg-blue-bluelanz">
                                <div class="flex-shrink-0">
                                    <img class="h-16 w-18" src="https://static.platzi.com/media/achievements/badge-taller-marketing-vender-navidad-f0ecb40d-cfb4-4a40-99d9-91e3902e2976.png" alt="">
                                </div>
                                <div class=" justify-start w-10/10">
                                    <div class="text-base text-left text-white font-medium leading-tight ">Taller: Marketing para Vender en Navidad y Fin de Año</div>
                                    <div class="pt-2 
                                                sm:w-8/8
                                                sms:w-6/6
                                                md:w-6/6
                                                lg:w-7/5
                                                xl:w-7/7
                                                xxl:w-5/5
                                                ">
                                        <div class="text-base px-4 bg-green-light rounded-xl ">Ya disponible</div>  
                                    </div>
                                </div>
                            </button>
                        </div>
                        <!-- 3 -->
                        <div class="sm:sr-only md:not-sr-only">
                            <button type="button" href="#" class="flex-grow h-auto px-5 py-3 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-bluelanzhover bg-blue-bluelanz">
                                <div class="flex-shrink-0">
                                    <img class="h-16 w-18" src="https://static.platzi.com/media/achievements/badge-inversiones-mesfix-1-c34e3684-b74e-4349-85d4-f5e419441a84.png" alt="">
                                </div>
                                <div class=" justify-start w-10/10">
                                    <div class="text-base text-left text-white font-medium leading-tight ">Curso de Principios de Inversión con Mesfix</div>
                                    <div class="pt-2 
                                                sm:w-8/8
                                                sms:w-6/6
                                                md:w-6/6
                                                lg:w-7/5
                                                xl:w-7/7
                                                xxl:w-5/5
                                                ">
                                        <div class="text-base px-4 bg-green-light rounded-xl ">Ya disponible</div>  
                                    </div>
                                </div>
                            </button>
                        </div>
                        <!-- 4 -->
                        <div>
                            <button type="button" href="#" class="flex-grow h-auto px-5 py-3 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-bluelanzhover bg-blue-bluelanz">
                                <div class="flex-shrink-0">
                                    <img class="h-16 w-18" src="https://static.platzi.com/media/achievements/analisis-exp-datos_badge-443a8f82-97d0-4409-aec1-5ca96ff71ca6.png" alt="">
                                </div>
                                <div class=" justify-start w-10/10">
                                    <div class="text-base text-left text-white font-medium leading-tight ">Curso de Análisis Exploratorio de Datos</div>
                                    <div class="pt-2 
                                                sm:w-8/8
                                                sms:w-6/6
                                                md:w-6/6
                                                lg:w-7/5
                                                xl:w-7/7
                                                xxl:w-5/5
                                                ">
                                        <div class="text-base px-4 bg-green-light rounded-xl ">Ya disponible</div>  
                                    </div>
                                </div>
                            </button>
                        </div>
                        <!-- 5 -->
                        <div>
                            <button type="button" href="#" class="flex-grow h-auto px-5 py-3 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-bluelanzhover bg-blue-bluelanz">
                                <div class="flex-shrink-0">
                                    <img class="h-16 w-18" src="https://static.platzi.com/media/achievements/cine-movil_badge-185001f3-11a2-45b4-8192-0d8349897657.png" alt="">
                                </div>
                                <div class=" justify-start w-10/10">
                                    <div class="text-base text-left text-white font-medium leading-tight ">Curso de Cine Móvil</div>
                                    <div class="pt-2 
                                                sm:w-8/8
                                                sms:w-6/6
                                                md:w-6/6
                                                lg:w-7/5
                                                xl:w-7/7
                                                xxl:w-5/5
                                                ">
                                        <div class="text-base px-4 bg-green-light rounded-xl ">Ya disponible</div>  
                                    </div>
                                </div>
                            </button>
                        </div>
                        <!-- 6 -->
                        <div>
                            <button type="button" href="#" class="flex-grow h-auto px-5 py-3 rounded-xl shadow-md flex items-center space-x-4 w-10/10 hover:bg-blue-blueagendahover bg-blue-blueagenda">
                                <div class="flex-shrink-0">
                                    <img class="h-16 w-18" src="https://static.platzi.com/mf-landings/image/agenda_icon@2x-f9f5698196f2dc60648d97b97bf4b27b.png" alt="">
                                </div>
                                <div class=" justify-start">
                                    <div class="text-base text-left text-white font-medium leading-tight ">CONSULTA LA AGENDA</div>
                                </div>
                            </button>
                        </div>
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

<style >

</style>