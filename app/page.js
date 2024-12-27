import Image from "next/image";
import logo from "./log.jpg";
import logos from "./log.png";
import rise from "./rise.gif";
export default function Home() {
  return (
   <div><div class="flex flex-col justify-center items-center">
   <nav class="flex flex-col justify-center px-4 py-3.5 w-full text-base tracking-normal text-blue-300 bg-black min-h-[93px] max-md:max-w-full" aria-label="Main Navigation">
     <div class="flex flex-wrap gap-5 justify-between pt-1.5 pb-3 w-full min-h-[64px] max-md:max-w-full">
       <div class="flex gap-2.5">
         <Image
          src={logos}
 
          width={50}
          height={50}
          loading="lazy"class="object-contain shrink-0 aspect-square w-[50px]" alt="Rise Industries Logo" />
         <div class="flex flex-col my-auto">
           <div class="self-stretch leading-none rounded min-w-[64px] max-md:mr-2" role="heading" aria-level="1">
             &lt;RISE INDUSTRIES&gt;
           </div>
           <time datetime="2024-12-21T14:16:57" class="mt-1.5"></time>
         </div>
       </div>
       <div class="flex gap-8 items-start my-auto leading-none whitespace-nowrap max-md:max-w-full">
         <a href="https://app.hyperliquid.xyz/trade/0x51973ef5533887afcace6b26de5f19dd" class="self-stretch rounded min-w-[64px]" tabindex="0">&lt;Trade&gt;</a>
         <a href="#about" class="self-stretch rounded min-w-[64px]" tabindex="0">&lt;About&gt;</a>
         <a href="#team" class="self-stretch rounded min-w-[64px]" tabindex="0">&lt;Team&gt;</a>
      <a className="text-green-200" href="https://x.com/riseonhl"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45c50154882d55d7d6b37abe119eb20195606ccbeb30ce9a8c3ee359916046ca?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain shrink-0 self-stretch w-5 aspect-[0.91]" alt="" /></a>  
       <a href=""> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c019f49207f3c37d6b4cbd58bbd1cd31f702307b47e70cfe2bc04785a307992d?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain shrink-0 aspect-[1.25] w-[25px]" alt="" /></a> 
       </div>
     </div>
   </nav>
   <main class="flex flex-col items-start px-4 pt-6 pb-24 mt-5 max-w-full w-[590px]">
     <section aria-label="Introduction ">
       <div class="text-base tracking-normal px-16 leading-6 text-green-200 w-[307px]">
         
         <span class="text-blue-300  whitespace-nowrap"> Rise is the world's first AI</span>
         <br />
         <p class="text-green-200 text-xs font-extralight  whitespace-nowrap">(Ventures Capital for starting up projects on Hyperliquid)</p>
       </div>
      
     </section>
 
     <section class="flex flex-col self-stretch mt-10 min-h-[585px] max-md:max-w-full" aria-label="CEO Message">
       <div class="text-base tracking-normal leading-6 text-green-200">
    
         <p class="text-green-200 px-16 ">The RISE Token represents a revolutionary approach to venture capital operations within the Hyper liquid chain ecosystem. As a specialized investment vehicle, RISE focuses exclusively on nurturing and supporting early-stage blockchain projects, providing them with not just capital, but comprehensive growth support and protection against market manipulation.</p>
         <br />
         <p className="text-green-200 pt-18"></p>
         <br />
     
       </div>
       <div class="flex rounded-md overflow-hidden flex-col justify-center mt-10 w-full ">
         <Image
          src={rise}
          width={800}
          height={500}
   className="w--full "
    alt="Bark Twain Portrait" />

       </div>
     </section>
 
<div className="pt-6 text-center  px-16 text-green-200">
   <p className="pt-6">The token's foundation is built on three core principles: sustainable growth, market integrity, and long-term partnership. To combat price manipulation, RISE implements an advanced suite of protective measures including time-locked liquidity pools that release gradually over time, sophisticated trading pattern analysis to detect and prevent wash trading, and dynamic transaction limits that automatically adjust based on market conditions and trading volumes. These features work in concert to create a stable, manipulation-resistant trading environment that benefits genuine investors and project stakeholders.</p>
   <p className="pt-6">RISE's commitment to long-term partnerships is reflected in its innovative vesting mechanism. The total supply of 100 million tokens follows a carefully structured distribution plan with a 36-month vesting period. Initial circulating supply is limited to 10 million tokens, with the remainder released gradually to maintain price stability and encourage long-term holding. The distribution allocates 40% to investment pools for funding promising projects, 20% for team development and operations, 25% for community building and ecosystem growth, and 15% for treasury reserves and emergency funds.</p>
   <p className="pt-6">Token holders gain access to a comprehensive suite of benefits that grow more valuable over time. Early investors receive priority access to new project launches, reduced platform fees, and enhanced voting rights in governance decisions. The platform also features a unique staking mechanism that rewards long-term holders with increasing influence over project decisions and additional investment opportunities</p>
 <p className="pt-6">The technical infrastructure of RISE leverages the full capabilities of the Hyper liquid chain, ensuring fast transaction processing and minimal fees. The smart contract architecture incorporates advanced security features including automated audit trails, real-time transaction monitoring, and emergency circuit breakers that can pause trading in case of detected anomalies. Regular security audits and a generous bug bounty program further reinforce the platform's commitment to security.
 Projects receiving investment through RISE gain more than just funding – they become part of a thriving ecosystem that provides technical support, mentorship, and networking opportunities. The platform's cross-chain compatibility ensures that projects can seamlessly integrate with other blockchain networks while maintaining their primary presence on the Hyper liquid chain.</p>
 <p className="pt-6">To maintain market stability, RISE employs a blacklist feature for addresses engaging in suspicious trading patterns, while its dynamic pricing algorithm helps prevent artificial price inflation or manipulation. The treasury reserve acts as a stability mechanism, with funds available for market operations when needed to maintain healthy trading conditions.
The governance structure of RISE emphasizes community involvement while maintaining professional investment standards. Token holders can participate in key decisions through a voting system that weights both the quantity of tokens held and the duration of holding, encouraging stable, long-term investment approaches over speculative trading.
Through this comprehensive approach, RISE aims to revolutionize how venture capital operates in the blockchain space, creating a sustainable, manipulation-resistant investment ecosystem that benefits all stakeholders while fostering the growth of promising blockchain projects.</p>
   </div>

   
 
   </main>
 </div></div>
  );
}
