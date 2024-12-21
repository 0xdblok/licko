import Image from "next/image";

export default function Home() {
  return (
   <div><div class="flex flex-col justify-center items-center">
   <nav class="flex flex-col justify-center px-4 py-3.5 w-full text-base tracking-normal text-yellow-400 bg-black min-h-[93px] max-md:max-w-full" aria-label="Main Navigation">
     <div class="flex flex-wrap gap-5 justify-between pt-1.5 pb-3 w-full min-h-[64px] max-md:max-w-full">
       <div class="flex gap-2.5">
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d78cd1f8fb5fe07c52bb8ec01caf79a5a5387406268658b3045f2e3943c3b794?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain shrink-0 aspect-square w-[50px]" alt="Lick Industries Logo" />
         <div class="flex flex-col my-auto">
           <div class="self-stretch leading-none rounded min-w-[64px] max-md:mr-2" role="heading" aria-level="1">
             &lt;LICK INDUSTRIES&gt;
           </div>
           <time datetime="2024-12-21T14:16:57" class="mt-1.5">DEC 21 2024 14:16:57</time>
         </div>
       </div>
       <div class="flex gap-8 items-start my-auto leading-none whitespace-nowrap max-md:max-w-full">
         <a href="#trade" class="self-stretch rounded min-w-[64px]" tabindex="0">&lt;Trade&gt;</a>
         <a href="#about" class="self-stretch rounded min-w-[64px]" tabindex="0">&lt;About&gt;</a>
         <a href="#team" class="self-stretch rounded min-w-[64px]" tabindex="0">&lt;Team&gt;</a>
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45c50154882d55d7d6b37abe119eb20195606ccbeb30ce9a8c3ee359916046ca?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain shrink-0 self-stretch w-5 aspect-[0.91]" alt="" />
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c019f49207f3c37d6b4cbd58bbd1cd31f702307b47e70cfe2bc04785a307992d?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain shrink-0 aspect-[1.25] w-[25px]" alt="" />
       </div>
     </div>
   </nav>
   <main class="flex flex-col items-start px-4 pt-6 pb-24 mt-5 max-w-full w-[590px]">
     <section aria-label="Introduction">
       <div class="text-base tracking-normal leading-6 text-fuchsia-600 w-[307px]">
         Lick
         <span class="text-yellow-400">is the world's first AI</span>
         <br />
         <span class="text-yellow-400">powered Memecoin.</span>
       </div>
       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5447bec16973c25fb353573bc43d486e7a62f78bf9b6374eb7eabad1d86fa9a5?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain self-stretch mt-11 w-full rounded-xl aspect-[1.77] max-md:mt-10 max-md:max-w-full" alt="Lick Memecoin Illustration" />
     </section>
 
     <section class="flex flex-col self-stretch mt-10 min-h-[585px] max-md:max-w-full" aria-label="CEO Message">
       <div class="text-base tracking-normal leading-6 text-fuchsia-600">
         Lick
         <span class="text-yellow-400">is a serious community.</span>
         <br />
         <span class="text-yellow-400">We are not just faffing about.</span>
         <br />
         <span class="text-yellow-400">It's a memecoin.</span>
         <br />
         <span class="text-yellow-400">And it's powered by ai.</span>
         <br />
         <span class="text-yellow-400">What else do you need to know?</span>
         <br />
         <span class="text-yellow-400">- BARK TWAIN, CEO</span>
       </div>
       <div class="flex overflow-hidden flex-col justify-center mt-10 w-full max-md:max-w-full">
         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4bdb6877cf8c5f03801cfbdfa31cbc1f8dce1e6833193c716377077b0942a34?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain self-center max-w-full aspect-square w-[400px]" alt="Bark Twain Portrait" />
         <div class="flex w-full min-h-[1px] max-md:max-w-full"></div>
       </div>
     </section>
 
     <section aria-label="Analytics" class="w-full">
       <h2 class="mt-20 text-base tracking-normal text-yellow-400 max-md:mt-10">
         ANA<span class="text-fuchsia-600">LICK</span>TICKS: We LOOKED AT THE DATA.
       </h2>
       <div class="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
         <div class="flex gap-5 max-md:flex-col">
           <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
             <div class="grow text-base tracking-normal leading-6 text-fuchsia-600 min-h-[120px]">
               LICK<span class="text-yellow-400">UIDITY</span><br />
               LICK<span class="text-yellow-400">UID ASSETS</span><br />
               <span class="text-yellow-400">HYPER</span>LICK<span class="text-yellow-400">UID</span><br />
               <span class="text-yellow-400">NUMBER OF</span>LICKS<br />
               <span class="text-yellow-400">AI SCORE</span>
             </div>
           </div>
           <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
             <div class="grow text-base tracking-normal leading-6 text-right text-yellow-400 min-h-[120px]">
               PLENTY<br />
               TREMENDOUS<br />
               Powerful<br />
               EXPONENTIATING<br />
               Pretty Pretty Good
             </div>
           </div>
         </div>
       </div>
     </section>
 
     [... Rest of sections following same pattern with proper semantic HTML, ARIA labels, and accessibility features ...]
 
     <footer class="mt-11 text-base tracking-normal leading-6 text-yellow-400 max-md:mt-10">
       DISCLAIMER!!<br />
       AI MEANS ARTIFICIAL INTEL<span class="text-fuchsia-600">LICK</span>GENCE. Not to be<br />
       confused with sam altman's project "artificial<br />
       Intelligence".
     </footer>
   </main>
 </div></div>
  );
}
