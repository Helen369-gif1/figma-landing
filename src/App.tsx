import { useState, useEffect } from 'react';
import type { CarouselApi } from './components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from './components/ui/carousel';
import svgPaths from './imports/svg-8b5r7sloy5';
import imgLinkLogo from 'figma:asset/d6bf4e2c24fa8e847ca7da9d88d77ce94897bc54.png';
import imgImgHeroBg from 'figma:asset/9b573bd894bf74ec12d65c24de93b213e1120c68.png';
import imgImgCardMoney from 'figma:asset/93a261929c7806bc3d6479d81781d9b9e65f57ee.png';
import imgImgCardHome from 'figma:asset/1deb6ca0fc2b5e1957522212015ed0e25d3773fb.png';
import imgImgCardConnections from 'figma:asset/c015e009d3b4f6dd8fb0ff2891e0ba675c59faca.png';
import imgLogoGlobalDollars from 'figma:asset/ea56e7977facd63896e8f15ea23620300b24b343.png';
import imgSectionDigitalBanker from 'figma:asset/0a7d367db352f63370bea383ff59f39808be8646.png';
import imgImgBg from 'figma:asset/1212dce44dacebde6273351a7eb374813578fc5a.png';
import imgImgContentReserve from 'figma:asset/388d240b51cd4042714dd75a0fbae470f9b275b4.png';
import imgImgContentProperties from 'figma:asset/365357b8e241cd043b5b34fa698f789de1379d98.png';
import imgImgBg1 from 'figma:asset/d939e6b116a2fb8712ff2b7e9c9de6eea1c20812.png';
import imgLogoWhite from 'figma:asset/5d97d1a5639ba61d16797084a8b199260e29cb3c.png';

export default function App() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const cardData = [
    { img: imgImgCardMoney, title: 'Manage your money', height: 265, width: 240 },
    { img: imgImgCardHome, title: 'Own a home', height: 353, width: 320 },
    { img: imgImgCardConnections, title: 'Connections', height: 265, width: 240 },
  ];

  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full">
      {/* Header */}
      <div className="absolute bg-white h-[60px] left-[calc(50%-0.5px)] top-0 translate-x-[-50%] w-[1440px] z-50">
        <div className="absolute content-stretch flex gap-[93px] items-center justify-center left-1/2 top-[8px] translate-x-[-50%]">
          <a href="/" className="h-[36px] relative shrink-0 w-[103px] transition-opacity hover:opacity-80">
            <img alt="SoQuin Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLinkLogo} />
          </a>
          
          {/* Menu */}
          <div className="content-stretch flex gap-[46px] items-start relative shrink-0">
            {['SoGlo', 'Digital Banker', 'SoPro', 'SoQuln', 'SoQuin', 'About us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer transition-all hover:scale-105"
              >
                <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap hover:text-[#000653]">
                  <p className="leading-[18.189px] whitespace-pre">{item}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
            <button className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer transition-all hover:scale-105">
              <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap hover:text-[#000653]">
                <p className="leading-[18.189px] whitespace-pre">Log in</p>
              </div>
            </button>
            <button className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:bg-[#000a7f]">
              <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
                <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Sign up</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[937px] overflow-clip relative w-[1441px]">
            <div className="absolute flex h-[877.333px] items-center justify-center left-1/2 top-[calc(50%+30px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="h-[877.333px] relative w-[1440px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgHeroBg} />
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[42px] items-end left-[254px] top-[102px] w-[967px]">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative text-[90px] text-white w-[967px]">
                    <p className="leading-[normal]">Embrace evolution for your money</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[30px] text-white w-[583px]">
                    <p className="leading-[1.5]">For those who want more from their money — there's Wix. Sign up for free, in a tap.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                  <button className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] cursor-pointer transition-all hover:scale-105 hover:bg-[#000a7f]">
                    <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section with Slider */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[304px] py-[80px] relative w-full">
            <div className="content-stretch flex flex-col gap-[50px] h-[605px] items-center relative shrink-0 w-full">
              {/* Intro Text */}
              <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] not-italic relative shrink-0">
                <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[#191c1f] text-[55px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">SoQuin Global</p>
                </div>
                <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#546271] text-[30px] text-center w-[781px]">
                  <p className="leading-[1.5]">Redefining Commerce, Currency, and Communication!</p>
                </div>
              </div>

              {/* Slider */}
              <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-[830px]">
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: 'center',
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {cardData.map((card, index) => (
                      <CarouselItem key={index} className="pl-4 basis-1/3">
                        <div className="flex items-center justify-center">
                          <div
                            className={`relative shadow-[0px_3px_3px_0px_rgba(0,0,0,0.2)] mx-auto transition-all duration-300 ${
                              index === 1 ? 'h-[353px] w-[320px]' : 'h-[265px] w-[240px]'
                            }`}
                            style={{
                              transform: currentSlide === index ? 'scale(1.1)' : 'scale(1)',
                            }}
                          >
                            <div className="absolute h-full left-0 top-0 w-full">
                              <img alt={card.title} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={card.img} />
                            </div>
                            <div className="absolute flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] left-1/2 -translate-x-1/2 not-italic text-[#000653] text-[16px] text-nowrap bottom-8 uppercase">
                              <p className="leading-[normal] whitespace-pre">{card.title}</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Slider Navigation Dots */}
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className="cursor-pointer transition-all hover:scale-110"
                    >
                      <div className={`relative shrink-0 ${currentSlide === index ? 'size-[14px]' : 'size-[10px]'}`}>
                        <div className="absolute inset-0">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <circle
                              cx="7"
                              cy="7"
                              fill={currentSlide === index ? '#79848F' : '#ABABAB'}
                              r="7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Banker Section */}
      <div className="h-[661px] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSectionDigitalBanker} />
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1441 661\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.4118e-15 33.05 -72.05 2.0237e-15 720.5 330.5)\\'><stop stop-color=\\'rgba(0,2,29,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(2,7,77,0.63)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
        </div>
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] h-[661px] items-start px-[383px] py-[80px] relative w-full">
            <div className="content-stretch flex flex-col gap-[60px] h-[501px] items-center relative shrink-0 w-[676px]">
              <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] not-italic relative shrink-0 text-center text-white w-[676px]">
                <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[55px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">Digital Banker</p>
                </div>
                <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[30px] w-[676px]">
                  <p className="leading-[1.5]">Your AI-powered private wealth manager that keeps you on track, pays bills with a tap, and maximizes your money inside.</p>
                </div>
              </div>
              <div className="relative shrink-0 size-[138px]">
                <img alt="Global Dollars" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoGlobalDollars} />
              </div>
              <div className="content-stretch flex gap-[26px] items-start relative shrink-0">
                <button className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:opacity-100">
                  <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
                  <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
                    <p className="leading-[18.189px] whitespace-pre">See How It Works</p>
                  </div>
                </button>
                <button className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:opacity-100">
                  <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
                  <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
                    <p className="leading-[18.189px] whitespace-pre">Try Digital Banker</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Video Section */}
      <div className="bg-[#000653] relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[306px] py-[80px] relative w-full">
            <div className="h-[467px] relative shrink-0 w-[827px]">
              <div className="absolute h-[467px] left-1/2 rounded-[10px] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%] w-[827px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
                  <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                    <img alt="" className="absolute h-full left-[-0.19%] max-w-none top-0 w-[100.39%]" src={imgImgBg} />
                  </div>
                </div>
              </div>
              <button className="absolute left-[calc(50%+0.5px)] overflow-clip size-[138px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] cursor-pointer transition-all hover:scale-110">
                <div className="absolute inset-[12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
                    <g>
                      <path clipRule="evenodd" d={svgPaths.p5066300} fill="black" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p5066300} fill="#C7C7CF" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Reserve Section */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[219px] py-[80px] relative w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[573px]">
                <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[55px] w-[544px]">
                  <p className="leading-[normal]">Global Reserve</p>
                </div>
                <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[1.5] min-w-full not-italic relative shrink-0 text-[#3c4349] text-[20px] tracking-[0.1819px] w-[min-content]">
                  <p className="mb-0">Manages assets, currencies, and stability.</p>
                  <p className="mb-0 whitespace-pre-wrap">Ensures legal adherence and transparency.</p>
                  <p className="mb-0">Long-term strategies for financial sustainability.</p>
                  <p>Rigorous processes for integrity and stakeholder insights.</p>
                </div>
                <button className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:bg-[#000a7f]">
                  <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                    <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
                  </div>
                </button>
              </div>
              <div className="h-[377.039px] relative shrink-0 w-[427px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgContentReserve} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SoQuin Properties Section */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[62px] items-start justify-center px-[218px] py-[80px] relative w-full">
            <div className="content-stretch flex gap-[86px] items-center relative shrink-0 w-full">
              <div className="h-[377.039px] relative shrink-0 w-[427px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgContentProperties} />
              </div>
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[489px]">
                <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3c4349] text-[55px] w-[min-content]">
                  <p className="leading-[normal]">SoQuin Properties</p>
                </div>
                <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[1.5] min-w-full not-italic relative shrink-0 text-[#3c4349] text-[20px] tracking-[0.1819px] w-[min-content]">
                  <p className="mb-0">Stable Solos currency linked to real estate.</p>
                  <p className="mb-0">Constant, like the "Forever Stamp."</p>
                  <p className="mb-0">Ensures stability in property transactions.</p>
                  <p>Resists inflation, countering currency drawbacks.</p>
                </div>
                <div className="content-stretch flex gap-[26px] items-start relative shrink-0">
                  <button className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:bg-[#000a7f]">
                    <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                      <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
                    </div>
                  </button>
                  <button className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:opacity-100">
                    <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
                    <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
                      <p className="leading-[18.189px] whitespace-pre">See How It Works</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SoQuin Connections Section */}
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-[313px] py-[80px] relative w-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-center leading-[0] not-italic relative shrink-0 text-[#3c4349] text-center">
                <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[55px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">SoQuin Connections</p>
                </div>
                <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[1.5] relative shrink-0 text-[20px] tracking-[0.1819px] w-[814px]">
                  <p className="mb-0">Seamless integration of messaging and social media.</p>
                  <p className="mb-0">Prioritizes robust security with end-to-end encryption.</p>
                  <p>Fosters creativity, offering analytics and monetization opportunities</p>
                </div>
              </div>
              <div className="h-[290px] relative shrink-0 w-[600px]">
                <div className="absolute h-[290px] left-1/2 pointer-events-none rounded-[10px] top-0 translate-x-[-50%] w-[600px]">
                  <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
                    <div className="absolute inset-0 rounded-[10px]" />
                    <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                      <img alt="" className="absolute h-[258.89%] left-0 max-w-none top-[-53.08%] w-full" src={imgImgBg1} />
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border-[0.968px] border-[rgba(171,193,219,0.6)] border-solid inset-0 rounded-[10px]" />
                </div>
                <button className="absolute left-1/2 overflow-clip size-[138px] top-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer transition-all hover:scale-110">
                  <div className="absolute inset-[12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
                      <g>
                        <path clipRule="evenodd" d={svgPaths.p5066300} fill="black" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p5066300} fill="#C7C7CF" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="content-stretch flex gap-[21px] items-start relative shrink-0">
                <button className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:bg-[#000a7f]">
                  <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                    <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
                  </div>
                </button>
                <button className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:opacity-100">
                  <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
                  <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
                    <p className="leading-[18.189px] whitespace-pre">See How It Works</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#000653] h-[442px] relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] h-[442px] items-start px-[220px] py-[80px] relative w-full">
            <div className="content-stretch flex gap-[109px] h-[260px] items-start relative shrink-0 w-[998px]">
              {/* Footer Logo & Newsletter */}
              <div className="content-stretch flex flex-col gap-[18px] h-[214px] items-start relative shrink-0 w-[317px]">
                <div className="h-[36px] overflow-clip relative shrink-0 w-[103px]">
                  <img alt="SoQuin Logo" className="absolute bottom-0 left-0 right-[65.05%] top-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoWhite} />
                </div>
                <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white tracking-[0.1819px] w-[min-content]">
                  <p className="leading-[1.5]">Sign up to receive our newsletter</p>
                </div>
                <div className="content-stretch flex flex-col gap-[15px] h-[110px] items-start relative shrink-0 w-[317px]">
                  <div className="content-stretch flex flex-col gap-[0.19px] h-[60px] items-start relative shrink-0 w-[317px]">
                    <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                      <p className="leading-[18.189px] whitespace-pre">Email</p>
                    </div>
                    <input
                      type="email"
                      placeholder="*"
                      className="box-border content-stretch flex h-[41px] items-start pb-[10.88px] pl-[12.19px] pr-[12.18px] pt-[9.18px] relative rounded-[4px] shrink-0 w-[317px] bg-transparent border border-[#eeeeee] text-white placeholder-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <button className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:opacity-100">
                    <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
                    <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
                      <p className="leading-[18.189px] whitespace-pre">Subscribe for Updates</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Footer Solutions */}
              <div className="content-stretch flex flex-col h-[260px] items-start relative shrink-0 w-[238px]">
                <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[0.1819px] mb-6">
                  <p className="leading-[1.5] whitespace-pre">Solutions</p>
                </div>
                {['SoGlo', 'Digital Banker', 'SoPro', 'SoQuln', 'SoQuin'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 mb-4 cursor-pointer transition-all hover:scale-105"
                  >
                    <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white hover:text-[#ababab]">
                      <p className="leading-[18.189px]">{item}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Download Button */}
              <button className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 hover:opacity-100">
                <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
                <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
                  <p className="leading-[18.189px] whitespace-pre">download the application</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
