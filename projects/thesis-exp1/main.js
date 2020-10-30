// Get the default position and apply it to listBoxLSub
    // var listBoxLCurrentX = window.scrollX + document.querySelector('#list-box-L').getBoundingClientRect().left // X
    // var listBoxLCurrentY = window.scrollY + document.querySelector('#list-box-L').getBoundingClientRect().top // Y

    // console.log(listBoxLCurrentX);
    // console.log(listBoxLCurrentY);

    // // Subpages
    // // Subpages: Animation
    // var listBoxLSub = document.getElementById("list-box-L-sub");

    // listBoxLSub.setAttribute(
    //         "style", 
    //         "top: "+listBoxLCurrentX+"px; left:"+listBoxLCurrentY+"px;"
    // );

    // console.log(listBoxLSub.style.top);
    // console.log(listBoxLSub.style.left);



document.querySelector(".titlebar").addEventListener("click", function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

// //*******WITH FOR LOOP**********//
// var myDivArray = [document.querySelector(".list-box-L-1"), document.querySelector(".list-box-L-2")];
// console.log(myDivArray);
// var arrayLength = myDivArray.length;

// for (var i = 0; i < arrayLength; i++) {
//     console.log(myDivArray[i])

//     myDivArray[i].addEventListener("click", function(){

//         var listBoxL = document.getElementById("list-box-L");
//         var listBoxLP = document.getElementById("list-box-L-P");

//         listBoxL.style.opacity = "0";
//         listBoxLP.style.opacity = "0";

//         // Subpages
//         // Subpages: Animation
//         var listBoxLSub = document.getElementById("list-box-L-sub");

//         listBoxLSub.setAttribute(
//             "style", 
//             "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
//         );


//         // if statements with varying i //
//         if (i=1) {
//             console.log("Vlora!")
//             document.querySelector("#list-box-L-sub").innerHTML = `
//             <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">01</span>Vlora</p>
//                 <div class="list-box-L-sub-content txt-body">Oddly enough, I really enjoy being in the bathroom when I want to be alone in my own silence. No one is going to come in and tell me to get out, so I know that I won’t be bothered. I find that the bathroom mirror is a powerful tool for self-reflection. When I look at myself in the mirror, I can tell how my day went. Maybe if I am tired and stressed, I’ll notice dark circles under my eyes, and some acne. If I am feeling joyful and full of energy, my cheeks will be red and my skin will look clear. I love taking showers. I take like 3 showers a day. The sound of the water drowns out all the other noises and I take time to think about the past, present, and future. When I am in the shower, it feels like time comes to a stop. No one will force me to get out of the shower, so I can take as long as I need to. Being in the bathroom lets me focus on myself in the mornings and at night. These are the most important times of the day that will affect how I feel for the rest of the day. I can take my time and put makeup on to make myself feel good, and at the end of the day I can shower all of my stress away.<br><br>
//                 <img class="btn btn-close" src="imgs/btn-close.png"></div>`;

//         }

//         else if (i=2) {
//             console.log("clicked!")
//             document.querySelector("#list-box-L-sub").innerHTML = `
//             <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">02</span>Anya</p>
//                 <div class="list-box-L-sub-content txt-body">Here is my favorite quiet place. I can focus with myself here because although this place is inside, the large windows somehow bridged the interior to the nature outside without even having to go out. The weather here is also perfect, not too cold and not too warm. The blue and white tones used in the rugs, pillows, and chairs remind me of a cool and calm ocean, something that resonates with peacefulness. The sunlight reflecting on the glass is also another aspect to being close to nature and being at a serene place where i can gather my thoughts.<br><br>
//                 <img class="btn btn-close" src="imgs/btn-close.png"></div>
//             `;
//         }

//         // Subpages: Close the subpage
//         var btnClose = document.querySelector('.btn-close');
//         document.querySelector('.btn-close').addEventListener("click", function(){
//             listBoxLSub.style.display = "none";
//             listBoxL.style.opacity = "1";
//             listBoxLP.style.opacity = "1";
//         });

//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
// }


//*********WITHOUT FOR LOOP**********//

// VLORA

document.querySelector(".list-box-L-1").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages

        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-1");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-1").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">01</span>Vlora</p>
            <div class="list-box-L-sub-content txt-body">Oddly enough, I really enjoy being in the bathroom when I want to be alone in my own silence. No one is going to come in and tell me to get out, so I know that I won’t be bothered. I find that the bathroom mirror is a powerful tool for self-reflection. When I look at myself in the mirror, I can tell how my day went. Maybe if I am tired and stressed, I’ll notice dark circles under my eyes, and some acne. If I am feeling joyful and full of energy, my cheeks will be red and my skin will look clear. I love taking showers. I take like 3 showers a day. The sound of the water drowns out all the other noises and I take time to think about the past, present, and future. When I am in the shower, it feels like time comes to a stop. No one will force me to get out of the shower, so I can take as long as I need to. Being in the bathroom lets me focus on myself in the mornings and at night. These are the most important times of the day that will affect how I feel for the rest of the day. I can take my time and put makeup on to make myself feel good, and at the end of the day I can shower all of my stress away.<br><br>
            <img class="btn btn-close-1" src="imgs/btn-close.png"></div>
        `;


        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-1');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });



// 02
    document.querySelector(".list-box-L-2").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-2");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-2").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">02</span>Anya</p>
            <div class="list-box-L-sub-content txt-body">Here is my favorite quiet place. I can focus with myself here because although this place is inside, the large windows somehow bridged the interior to the nature outside without even having to go out. The weather here is also perfect, not too cold and not too warm. The blue and white tones used in the rugs, pillows, and chairs remind me of a cool and calm ocean, something that resonates with peacefulness. The sunlight reflecting on the glass is also another aspect to being close to nature and being at a serene place where i can gather my thoughts.<br><br>
            <img class="btn btn-close-2" src="imgs/btn-close.png"></div>
        `;


        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-2');
        btnClose.addEventListener("click", function(){
            console.log("Anya Close!")
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
//FIN


// 03
    document.querySelector(".list-box-L-3").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-3");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-3").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">03</span>Richelle</p>
            <div class="list-box-L-sub-content txt-body">My quiet place is my room. I always sleep on the left side of my bed because it’s close to the window, and I love the wind and fresh air when there’s no cars or construction.
I rarely get to spend time in my room except to read and sleep. My room is the only place that’s mine, and I value my privacy. Sometimes I will turn on my tree lamp and read a book, or lie down and stare at the ceiling while listening to music. When I’m ready to sleep, I turn off my lamp. There’s something peaceful about drifting off to sleep with fresh air in the dark. It feels like I can temporarily hide from the stress I had during the day.<br><br>
            <img class="btn btn-close-3" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-3');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            var listBoxLCurrentX = document.querySelector('.list-box-L-3').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-3').getBoundingClientRect().top // Y
            console.log(listBoxLCurrentX);
            console.log(listBoxLCurrentY);

            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN


// 04
    document.querySelector(".list-box-L-4").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-4");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-4").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">04</span>Evelin</p>
            <div class="list-box-L-sub-content txt-body">I’m the type of person that doesn’t need silence / quiet place to focus. I quite like having somewhat of a noisy place to either work or “study”. I rather find libraries and quiet study places bothersome. And if I’m in those places I have upbeat music playing. I don’t really have a place to share with you.<br><br>
            <img class="btn btn-close-4" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-4');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            var listBoxLCurrentX = document.querySelector('.list-box-L-4').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-4').getBoundingClientRect().top // Y
            console.log(listBoxLCurrentX);
            console.log(listBoxLCurrentY);

            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 05
    document.querySelector(".list-box-L-5").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-5");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-5").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">05</span>Alison</p>
            <div class="list-box-L-sub-content txt-body">My quiet place is my bed because it’s warm and soft, and I go here when i’m taking a break from homework and resting my mind :)<br><br>
            <img class="btn btn-close-5" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-5');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-5').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-5').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 06
    document.querySelector(".list-box-L-6").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-6");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-6").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">06</span>Tata</p>
            <div class="list-box-L-sub-content txt-body">I guess the reason I choose my bed as a place to focus on myself because its essentially a place where i wake up at and recharge in if that makes sense. It just feels like a place where i can recenter myself because of its purpose. 
I don’t necessarily lie down(but sometimes I do), but I just sit there and get lost in my thoughts, with blankets on. I guess another factor is that my bed is very comfortable and comforting. Beds are nice.<br><br>
            <img class="btn btn-close-6" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-6');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-6').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-6').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN


// 07
    document.querySelector(".list-box-L-7").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-7");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-7").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">07</span>Cheryl</p>
            <div class="list-box-L-sub-content txt-body">My quiet place is my bed. I use to spend all my free time relaxing on my bed, but I realized that as I get older, there are so many things to worry about and to solve, and I would always think its a waste of time to go to bed early, so I tend to view my bed as a place to reflect myself and my worries before I go to sleep.<br><br>
            <img class="btn btn-close-7" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-7');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-7').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-7').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 08
    document.querySelector(".list-box-L-8").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-8");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-8").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">08</span>Scarlet</p>
            <div class="list-box-L-sub-content txt-body">Here's a photo I took from the window of my room here in NYC.  I would say my one "quiet place" for myself is definitely my bedroom. I think the reason why is because it's a space that only belongs to me and no one else.<br><br>
            <img class="btn btn-close-8" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-8');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-8').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-8').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 09
    document.querySelector(".list-box-L-9").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-9");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-9").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">09</span>Wallis</p>
            <div class="list-box-L-sub-content txt-body">This is a photo of a cafe in Shanghai that I visited very recently. I pick this place because it’s very quiet. This cafe is reservation-only, so there’s only a certain number of people who can be in the cafe at the same time. I also really like the interior, which feels cozy.<br><br>
            <img class="btn btn-close-9" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-9');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-9').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-9').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 10
    document.querySelector(".list-box-L-10").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-10");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-10").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">10</span>Rachel</p>
            <div class="list-box-L-sub-content txt-body">I think because its my safe space, Its decorated with all my favorite things and its quiet and cozy so its where I can catch a break from the hectic city and my life. I also worked and saved up to pay the rent so since i paid for it all myself it also feels really good because it really feels like its mine.<br><br>
            <img class="btn btn-close-10" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-10');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-10').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-10').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 11
    document.querySelector(".list-box-L-11").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-11");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-11").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">11</span>Emily</p>
            <div class="list-box-L-sub-content txt-body">Here is my quiet place where I like to focus on myself whenever I need rest from work and stress. This is my place because I love to sit by this window in my apartment and look out the window, watch as the day goes by, people-watch, and do nothing but look out  to the sky or below to street-level. It is extremely peaceful, calm and quiet for me as I get to stay in the safety of my apartment, while gazing out and watch the world go by. Also, I am quiet short, so this window is perfect for me ad it is low and tall, I am able to sit comfortably without having to tippy-toe onto the platform. I also have plants in and outside of the window onto the fireescape, I always love to see their growth and water them while sitting there.<br><br>
            <img class="btn btn-close-11" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-11');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-11').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-11').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 12
    document.querySelector(".list-box-L-12").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-12");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-12").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">12</span>Tiffany</p>
            <div class="list-box-L-sub-content txt-body">I like to be in the car by myself, because I think driving by myself is a relaxing behavior. The changing scenery around makes me feel relaxed and happy.<br><br>
            <img class="btn btn-close-12" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-12');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-12').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-12').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 13
    document.querySelector(".list-box-L-13").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-13");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-13").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">13</span>Tiffany</p>
            <div class="list-box-L-sub-content txt-body">I also like to go to the suburban woods to experience nature. Because I can feel the breath of nature interacting with me.<br><br>
            <img class="btn btn-close-13" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-13');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-13').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-13').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 14
    document.querySelector(".list-box-L-14").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-14");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-14").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">14</span>Tiffany</p>
            <div class="list-box-L-sub-content txt-body">Watching the scenery in a certain part of the city quietly by myself is also one of the thing I would like to do along. These landscapes make me sigh for the changes of the times, but also allow me to examine my own changes as time flies.<br><br>
            <img class="btn btn-close-14" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-14');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-14').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-14').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 15
    document.querySelector(".list-box-L-15").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-15");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-15").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">15</span>Qing</p>
            <div class="list-box-L-sub-content txt-body">My place would be my apartment. Since I live alone in this studio, I spent most of my time by myself. I think it’s nice to have a place where you can escape from other people and other things in a huge city like New York.<br><br>
            <img class="btn btn-close-15" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-15');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-15').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-15').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 16
    document.querySelector(".list-box-L-16").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-16");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-16").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">16</span>Maddie</p>
            <div class="list-box-L-sub-content txt-body">I usually just wander around the museum, looking for a piece that I'm drawn to. No one interrupts me while I'm focusing on art pieces. The whole experience in museum makes me empty my mind and organize my thoughts. The new objects triggers different thoughts and emotions that I can't feel in my room. It's kind of escape from reality.<br><br>
            <img class="btn btn-close-16" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-16');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-16').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-16').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 17
    document.querySelector(".list-box-L-17").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-17");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-17").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">17</span>Cathy</p>
            <div class="list-box-L-sub-content txt-body">I chose my bathroom as my favorite place to focus on myself especially when I am showering because it is the only place where I have no external distractions. I take long showers and that is the time where I can be thinking about all the weird and crazy ideas for my projects. I think it might be the flow of water that also kept my thoughts flowing.<br><br>
            <img class="btn btn-close-17" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-17');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-17').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-17').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 18
    document.querySelector(".list-box-L-18").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-18");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-18").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">18</span>Yina</p>
            <div class="list-box-L-sub-content txt-body">My quiet place is the staten island ferry, I have no connection to staten island, so the whole journey of going there is like a quick vacation. and being on the ferry is a very different feeling than day to day.<br><br>
            <img class="btn btn-close-18" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-18');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-18').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-18').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 19
    document.querySelector(".list-box-L-19").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-19");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-19").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">19</span>Gandhali</p>
            <div class="list-box-L-sub-content txt-body">It is an image of my bedroom, which is a calming space. I don't do any school work there, and it is my quiet place to focus on myself.<br><br>
            <img class="btn btn-close-19" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-19');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-19').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-19').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 20
    document.querySelector(".list-box-L-20").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-20");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-20").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">20</span>Erin</p>
            <div class="list-box-L-sub-content txt-body">I like this place because there are few places to go where you can be in true solitude without feeling lonely. I have never seen any other person here except besides myself but being surrounded by dense forest has lots of hidden life. It feels like a mental reset walking here for and sitting for 30 minutes.<br><br>
            <img class="btn btn-close-20" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-20');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-20').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-20').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

// 21
    document.querySelector(".list-box-L-21").addEventListener("click", function(){

        var listBoxL = document.getElementById("list-box-L");
        var listBoxLP = document.getElementById("list-box-L-P");

        listBoxL.style.opacity = "0";
        listBoxLP.style.opacity = "0";

        // Subpages
        // Subpages: Animation
        var listBoxLSub = document.getElementById("list-box-L-sub-21");

        listBoxLSub.setAttribute(
            "style", 
            "display:block; position: absolute; top:0; left:0; width:100%; height:800px; background-size:cover; background-position: 50% 50%; background-repeat: no-repeat;"
        );

        document.querySelector("#list-box-L-sub-21").innerHTML = `
        <p class="list-box-L-sub-P-name"><span class="list-box-L-sub-P-number">21</span>Yasmin</p>
            <div class="list-box-L-sub-content txt-body">I really enjoy my rock climbing gym whenever I’m super stressed or tired or anything I come here and it makes me forget about my problems because rock climbing allows me to focus on the problems right in front of me.<br><br>
            <img class="btn btn-close-21" src="imgs/btn-close.png"></div>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Subpages: Close the subpage
        var btnClose = document.querySelector('.btn-close-21');
        btnClose.addEventListener("click", function(){
            listBoxLSub.style.display = "none";
            listBoxL.style.opacity = "1";
            listBoxLP.style.opacity = "1";

            // Go back to the list
            var listBoxLCurrentX = document.querySelector('.list-box-L-21').getBoundingClientRect().left // X
            var listBoxLCurrentY = document.querySelector('.list-box-L-21').getBoundingClientRect().top // Y
            window.scrollTo({ top: listBoxLCurrentY, left: listBoxLCurrentX, behavior: 'smooth' });
        });
    });
//FIN

