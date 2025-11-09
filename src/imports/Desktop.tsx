import svgPaths from "./svg-8b5r7sloy5";
import imgLinkLogo from "figma:asset/d6bf4e2c24fa8e847ca7da9d88d77ce94897bc54.png";
import imgImgHeroBg from "figma:asset/9b573bd894bf74ec12d65c24de93b213e1120c68.png";
import imgImgCardMoney from "figma:asset/93a261929c7806bc3d6479d81781d9b9e65f57ee.png";
import imgImgCardHome from "figma:asset/1deb6ca0fc2b5e1957522212015ed0e25d3773fb.png";
import imgImgCardConnections from "figma:asset/c015e009d3b4f6dd8fb0ff2891e0ba675c59faca.png";
import imgLogoGlobalDollars from "figma:asset/ea56e7977facd63896e8f15ea23620300b24b343.png";
import imgSectionDigitalBanker from "figma:asset/0a7d367db352f63370bea383ff59f39808be8646.png";
import imgImgBg from "figma:asset/1212dce44dacebde6273351a7eb374813578fc5a.png";
import imgImgContentReserve from "figma:asset/388d240b51cd4042714dd75a0fbae470f9b275b4.png";
import imgImgContentProperties from "figma:asset/365357b8e241cd043b5b34fa698f789de1379d98.png";
import imgImgBg1 from "figma:asset/d939e6b116a2fb8712ff2b7e9c9de6eea1c20812.png";
import imgLogoWhite from "figma:asset/5d97d1a5639ba61d16797084a8b199260e29cb3c.png";

function LinkSoglo() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-soglo">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap">
        <p className="leading-[18.189px] whitespace-pre">SoGlo</p>
      </div>
    </div>
  );
}

function LinkDigitalBanker() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-digital-banker">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap">
        <p className="leading-[18.189px] whitespace-pre">Digital Banker</p>
      </div>
    </div>
  );
}

function LinkSopro() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-sopro">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap">
        <p className="leading-[18.189px] whitespace-pre">{`SoPro `}</p>
      </div>
    </div>
  );
}

function LinkSoquln() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-soquln">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap">
        <p className="leading-[18.189px] whitespace-pre">{`SoQuln `}</p>
      </div>
    </div>
  );
}

function LinkSoquin() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-soquin">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap">
        <p className="leading-[18.189px] whitespace-pre">SoQuin</p>
      </div>
    </div>
  );
}

function LinkAbout() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-about">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap">
        <p className="leading-[18.189px] whitespace-pre">About us</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[46px] items-start relative shrink-0" data-name="menu">
      <LinkSoglo />
      <LinkDigitalBanker />
      <LinkSopro />
      <LinkSoquln />
      <LinkSoquin />
      <LinkAbout />
    </div>
  );
}

function LinkButtonLogin() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-button-login">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[14px] text-nowrap">
        <p className="leading-[18.189px] whitespace-pre">Log in</p>
      </div>
    </div>
  );
}

function BlockSignLog() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0" data-name="block-sign-log">
      <LinkButtonLogin />
      <div className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-signup">
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
          <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Sign up</p>
        </div>
      </div>
    </div>
  );
}

function NavHeader() {
  return (
    <div className="absolute content-stretch flex gap-[93px] items-center justify-center left-1/2 top-[8px] translate-x-[-50%]" data-name="nav-header">
      <div className="h-[36px] relative shrink-0 w-[103px]" data-name="link-logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLinkLogo} />
      </div>
      <Menu />
      <BlockSignLog />
    </div>
  );
}

function BlockHeroContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[42px] items-end left-[254px] top-[102px] w-[967px]" data-name="block-hero-content">
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
            <p className="leading-[1.5]">For those who want more from their money — there’s Wix. Sign up for free, in a tap.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px]" data-name="button-get-app">
            <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
              <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="h-[937px] overflow-clip relative w-[1441px]" data-name="section-hero">
      <div className="absolute flex h-[877.333px] items-center justify-center left-1/2 top-[calc(50%+30px)] translate-x-[-50%] translate-y-[-50%] w-[1440px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[877.333px] relative w-[1440px]" data-name="img-hero-bg">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgHeroBg} />
          </div>
        </div>
      </div>
      <BlockHeroContent />
    </div>
  );
}

function BlockIntroText() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] not-italic relative shrink-0" data-name="block-intro-text">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[#191c1f] text-[55px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`SoQuin Global `}</p>
      </div>
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[#546271] text-[30px] text-center w-[781px]">
        <p className="leading-[1.5]">{` Redefining Commerce, Currency, and Communication! `}</p>
      </div>
    </div>
  );
}

function CardManageMoney() {
  return (
    <div className="h-[265px] relative shadow-[0px_3px_3px_0px_rgba(0,0,0,0.2)] shrink-0 w-[240px]" data-name="card-manage-money">
      <div className="absolute h-[264px] left-1/2 top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%] w-[240px]" data-name="img-card-money">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgCardMoney} />
      </div>
      <div className="absolute flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] left-[calc(50%-87px)] not-italic text-[#000653] text-[16px] text-nowrap top-[233px] translate-y-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">Manage your money</p>
      </div>
    </div>
  );
}

function CardOwnHome() {
  return (
    <div className="h-[353px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.2)] shrink-0 w-[320px]" data-name="card-own-home">
      <div className="absolute h-[352px] left-[-0.5px] top-px w-[320px]" data-name="img-card-home">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgCardHome} />
      </div>
      <div className="absolute flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] left-[calc(50%-52px)] not-italic text-[#000653] text-[16px] text-nowrap top-[311px] translate-y-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">Own a home</p>
      </div>
    </div>
  );
}

function CardConnections() {
  return (
    <div className="h-[265px] relative shadow-[0px_3px_3px_0px_rgba(0,0,0,0.2)] shrink-0 w-[240px]" data-name="card-connections">
      <div className="absolute h-[264px] left-0 top-px w-[240px]" data-name="img-card-connections">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgCardConnections} />
      </div>
      <div className="absolute flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] left-[calc(50%-55px)] not-italic text-[#000653] text-[16px] text-nowrap top-[233px] translate-y-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">Connections</p>
      </div>
    </div>
  );
}

function BlockCards() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[829px]" data-name="block-cards">
      <CardManageMoney />
      <CardOwnHome />
      <CardConnections />
    </div>
  );
}

function BlockIntroCards() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-[830px]" data-name="block-intro-cards">
      <BlockCards />
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="block-slider-nav">
        <div className="relative shrink-0 size-[10px]" data-name="dot-slider-3">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(171, 171, 171, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #ABABAB)" id="dot-slider-3" r="5" />
            </svg>
          </div>
        </div>
        <div className="relative shrink-0 size-[14px]" data-name="dot-slider-2">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(121, 132, 143, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="var(--fill-0, #79848F)" id="dot-slider-2" r="7" />
            </svg>
          </div>
        </div>
        <div className="relative shrink-0 size-[10px]" data-name="dot-slider-1">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(171, 171, 171, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #ABABAB)" id="dot-slider-1" r="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockIntroContent() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] h-[605px] items-center relative shrink-0 w-full" data-name="block-intro-content">
      <BlockIntroText />
      <BlockIntroCards />
    </div>
  );
}

function SectionIntro() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-intro">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[304px] py-[80px] relative w-full">
          <BlockIntroContent />
        </div>
      </div>
    </div>
  );
}

function BlockDigitalText() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] not-italic relative shrink-0 text-center text-white w-[676px]" data-name="block-digital-text">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[55px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Digital Banker</p>
      </div>
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center relative shrink-0 text-[30px] w-[676px]">
        <p className="leading-[1.5]">Your AI-powered private wealth manager that keeps you on track, pays bills with a tap, and maximizes your money inside.</p>
      </div>
    </div>
  );
}

function BlockDigitalButtons() {
  return (
    <div className="content-stretch flex gap-[26px] items-start relative shrink-0" data-name="block-digital-buttons">
      <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-see-how">
        <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
          <p className="leading-[18.189px] whitespace-pre">See How It Works</p>
        </div>
      </div>
      <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-try-banker">
        <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
          <p className="leading-[18.189px] whitespace-pre">Try Digital Banker</p>
        </div>
      </div>
    </div>
  );
}

function BlockDigitalContent() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] h-[501px] items-center relative shrink-0 w-[676px]" data-name="block-digital-content">
      <BlockDigitalText />
      <div className="relative shrink-0 size-[138px]" data-name="logo-global-dollars">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoGlobalDollars} />
      </div>
      <BlockDigitalButtons />
    </div>
  );
}

function SectionDigitalBanker() {
  return (
    <div className="h-[661px] relative shrink-0 w-full" data-name="section-digital-banker">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSectionDigitalBanker} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1441 661\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.4118e-15 33.05 -72.05 2.0237e-15 720.5 330.5)\\\'><stop stop-color=\\\'rgba(0,2,29,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(2,7,77,0.63)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      </div>
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[661px] items-start px-[383px] py-[80px] relative w-full">
          <BlockDigitalContent />
        </div>
      </div>
    </div>
  );
}

function BlockVideoContainer() {
  return (
    <div className="h-[467px] relative shrink-0 w-[827px]" data-name="block-video-container">
      <div className="absolute h-[467px] left-1/2 rounded-[10px] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%] w-[827px]" data-name="img-bg">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[10px]">
            <img alt="" className="absolute h-full left-[-0.19%] max-w-none top-0 w-[100.39%]" src={imgImgBg} />
          </div>
        </div>
      </div>
      <div className="absolute left-[calc(50%+0.5px)] overflow-clip size-[138px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="button-video">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p5066300} fill="var(--fill-0, black)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p5066300} fill="var(--fill-1, #C7C7CF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SectionGlobalVideo() {
  return (
    <div className="bg-[#000653] relative shrink-0 w-full" data-name="section-global-video">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[306px] py-[80px] relative w-full">
          <BlockVideoContainer />
        </div>
      </div>
    </div>
  );
}

function BlockReserveText() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[573px]" data-name="block-reserve-text">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191c1f] text-[55px] w-[544px]">
        <p className="leading-[normal]">{`Global Reserve `}</p>
      </div>
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[1.5] min-w-full not-italic relative shrink-0 text-[#3c4349] text-[20px] tracking-[0.1819px] w-[min-content]">
        <p className="mb-0">{`Manages assets, currencies, and stability. `}</p>
        <p className="mb-0 whitespace-pre-wrap">{`Ensures legal adherence and transparency.  `}</p>
        <p className="mb-0">Long-term strategies for financial sustainability.</p>
        <p>Rigorous processes for integrity and stakeholder insights.</p>
      </div>
      <div className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-get-app">
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
          <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
        </div>
      </div>
    </div>
  );
}

function BlockReserveContent() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="block-reserve-content">
      <BlockReserveText />
      <div className="h-[377.039px] relative shrink-0 w-[427px]" data-name="img-content-reserve">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgContentReserve} />
      </div>
    </div>
  );
}

function SectionGlobalReserve() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-global-reserve">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-[219px] py-[80px] relative w-full">
          <BlockReserveContent />
        </div>
      </div>
    </div>
  );
}

function BlockPropertiesButtons() {
  return (
    <div className="content-stretch flex gap-[26px] items-start relative shrink-0" data-name="block-properties-buttons">
      <div className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-get-app">
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
          <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
        </div>
      </div>
      <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="link-button-see-how">
        <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
          <p className="leading-[18.189px] whitespace-pre">See How It Works</p>
        </div>
      </div>
    </div>
  );
}

function BlockPropertiesText() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[489px]" data-name="block-properties-text">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#3c4349] text-[55px] w-[min-content]">
        <p className="leading-[normal]">{` SoQuin Properties`}</p>
      </div>
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[1.5] min-w-full not-italic relative shrink-0 text-[#3c4349] text-[20px] tracking-[0.1819px] w-[min-content]">
        <p className="mb-0">{`Stable Solos currency linked to real estate. `}</p>
        <p className="mb-0">{`Constant, like the "Forever Stamp." `}</p>
        <p className="mb-0">{`Ensures stability in property transactions. `}</p>
        <p>Resists inflation, countering currency drawbacks.</p>
      </div>
      <BlockPropertiesButtons />
    </div>
  );
}

function BlockPropertiesContent() {
  return (
    <div className="content-stretch flex gap-[86px] items-center relative shrink-0 w-full" data-name="block-properties-content">
      <div className="h-[377.039px] relative shrink-0 w-[427px]" data-name="img-content-properties">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgContentProperties} />
      </div>
      <BlockPropertiesText />
    </div>
  );
}

function SectionSoquinProperties() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="section-soquin-properties">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[62px] items-start justify-center px-[218px] py-[80px] relative w-full">
          <BlockPropertiesContent />
        </div>
      </div>
    </div>
  );
}

function BlockConnectionsText() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center leading-[0] not-italic relative shrink-0 text-[#3c4349] text-center" data-name="block-connections-text">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center relative shrink-0 text-[55px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`SoQuin Connections `}</p>
      </div>
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[1.5] relative shrink-0 text-[20px] tracking-[0.1819px] w-[814px]">
        <p className="mb-0">{`Seamless integration of messaging and social media. `}</p>
        <p className="mb-0">{`Prioritizes robust security with end-to-end encryption. `}</p>
        <p>Fosters creativity, offering analytics and monetization opportunities</p>
      </div>
    </div>
  );
}

function BlockVideoContainer1() {
  return (
    <div className="h-[290px] relative shrink-0 w-[600px]" data-name="block-video-container">
      <div className="absolute h-[290px] left-1/2 pointer-events-none rounded-[10px] top-0 translate-x-[-50%] w-[600px]" data-name="img-bg">
        <div aria-hidden="true" className="absolute inset-0 rounded-[10px]">
          <div className="absolute inset-0 rounded-[10px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[10px]">
            <img alt="" className="absolute h-[258.89%] left-0 max-w-none top-[-53.08%] w-full" src={imgImgBg1} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0.968px] border-[rgba(171,193,219,0.6)] border-solid inset-0 rounded-[10px]" />
      </div>
      <div className="absolute left-1/2 overflow-clip size-[138px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="button-video">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p5066300} fill="var(--fill-0, black)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p5066300} fill="var(--fill-1, #C7C7CF)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BlockConnectionsButtons() {
  return (
    <div className="content-stretch flex gap-[21px] items-start relative shrink-0" data-name="block-connections-buttons">
      <div className="bg-[#000653] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-get-app">
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
          <p className="leading-[18.189px] overflow-ellipsis overflow-hidden whitespace-pre">Get the app</p>
        </div>
      </div>
      <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="link-button-see-how">
        <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
          <p className="leading-[18.189px] whitespace-pre">See How It Works</p>
        </div>
      </div>
    </div>
  );
}

function BlockConnectionsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full" data-name="block-connections-content">
      <BlockConnectionsText />
      <BlockVideoContainer1 />
      <BlockConnectionsButtons />
    </div>
  );
}

function SectionSoquinConnections() {
  return (
    <div className="relative shrink-0 w-full" data-name="section-soquin-connections">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-start px-[313px] py-[80px] relative w-full">
          <BlockConnectionsContent />
        </div>
      </div>
    </div>
  );
}

function LogoWhite() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[103px]" data-name="logo white">
      <div className="absolute inset-[16.67%_22.33%_55.56%_39.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 10">
          <g id="Vector">
            <path d={svgPaths.p102cf000} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p27ab8500} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p2dd7b600} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p17aaa0c0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2b6d4280} fill="var(--fill-0, white)" />
            <path d={svgPaths.p8ffb700} fill="var(--fill-0, white)" />
            <path d={svgPaths.pf3d8100} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b56b700} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[52.78%_14.56%_22.22%_39.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 9">
          <g id="Vector">
            <path d={svgPaths.p3cf78100} fill="white" />
            <path d={svgPaths.p10d3d380} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p138e60c0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p35753400} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p12337140} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p9075b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p3341e180} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-[65.05%] top-0" data-name="logo white">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoWhite} />
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="box-border content-stretch flex items-start overflow-clip pl-0 pr-[284.77px] py-0 relative shrink-0 w-[293px]" data-name="div#placeholder">
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.36px]">
        <p className="leading-[normal] whitespace-pre">*</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-start pb-[10.88px] pl-[12.19px] pr-[12.18px] pt-[9.18px] relative rounded-[4px] shrink-0 w-[317px]" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <DivPlaceholder />
    </div>
  );
}

function BlockFooterEmall() {
  return (
    <div className="content-stretch flex flex-col gap-[0.19px] h-[60px] items-start relative shrink-0 w-[317px]" data-name="block-footer-emall">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18.189px] whitespace-pre">Email</p>
      </div>
      <Input />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[110px] items-start relative shrink-0 w-[317px]" data-name="Form">
      <BlockFooterEmall />
      <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-get-subscribe">
        <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
          <p className="leading-[18.189px] whitespace-pre">Subscribe for Updates</p>
        </div>
      </div>
    </div>
  );
}

function BlockFooterNewsletter() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[112px] items-start px-0 py-px relative shrink-0 w-[317px]" data-name="block-footer-newsletter">
      <Form />
    </div>
  );
}

function BlockFooterLogo() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[214px] items-start relative shrink-0 w-[317px]" data-name="block-footer-logo">
      <LogoWhite />
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[20px] text-white tracking-[0.1819px] w-[min-content]">
        <p className="leading-[1.5]">Sign up to receive our newsletter</p>
      </div>
      <BlockFooterNewsletter />
    </div>
  );
}

function Block() {
  return (
    <div className="box-border content-stretch flex h-[52px] items-start pb-[22.39px] pt-0 px-0 relative shrink-0 w-full" data-name="block">
      <div className="flex flex-col font-['Aeonik_Pro:Regular',sans-serif] justify-center leading-[0] max-w-[316.14px] not-italic relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.1819px]">
        <p className="leading-[1.5] whitespace-pre">Solutions</p>
      </div>
    </div>
  );
}

function LinkSoglo1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-soglo">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18.189px] whitespace-pre">SoGlo</p>
      </div>
    </div>
  );
}

function Block1() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-start pb-[22.39px] pt-0 px-0 relative shrink-0 w-full" data-name="block">
      <LinkSoglo1 />
    </div>
  );
}

function LinkDigitalBanker1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-digital-banker">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18.189px] whitespace-pre">Digital Banker</p>
      </div>
    </div>
  );
}

function Block2() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-start pb-[22.39px] pt-0 px-0 relative shrink-0 w-full" data-name="block">
      <LinkDigitalBanker1 />
    </div>
  );
}

function LinkSopro1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-sopro">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[39px]">
        <p className="leading-[18.189px]">{`SoPro `}</p>
      </div>
    </div>
  );
}

function Block3() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-start pb-[22.39px] pt-0 px-0 relative shrink-0 w-full" data-name="block">
      <LinkSopro1 />
    </div>
  );
}

function LinkSoquln1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-soquln">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[47px]">
        <p className="leading-[18.189px]">{`SoQuln `}</p>
      </div>
    </div>
  );
}

function Block4() {
  return (
    <div className="box-border content-stretch flex h-[41px] items-start pb-[22.39px] pt-0 px-0 relative shrink-0 w-full" data-name="block">
      <LinkSoquln1 />
    </div>
  );
}

function LinkSoquin1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="link-soquin">
      <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[18.189px] whitespace-pre">SoQuin</p>
      </div>
    </div>
  );
}

function Block5() {
  return (
    <div className="box-border content-stretch flex h-[42px] items-start pb-[23.39px] pt-0 px-0 relative shrink-0 w-full" data-name="block">
      <LinkSoquin1 />
    </div>
  );
}

function BlockFooterSolution() {
  return (
    <div className="content-stretch flex flex-col h-[260px] items-start relative shrink-0 w-[238px]" data-name="block-footer-solution">
      <Block />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
    </div>
  );
}

function BlockFooterContent() {
  return (
    <div className="content-stretch flex gap-[109px] h-[260px] items-start relative shrink-0 w-[998px]" data-name="block-footer-content">
      <BlockFooterLogo />
      <BlockFooterSolution />
      <div className="backdrop-blur-[2px] backdrop-filter bg-white box-border content-stretch flex gap-[10px] h-[35px] items-center justify-center opacity-80 px-[20px] py-[10px] relative rounded-[50px] shrink-0" data-name="button-download-application">
        <div aria-hidden="true" className="absolute border border-[#000653] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="flex flex-col font-['Aeonik_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000653] text-[16px] text-nowrap">
          <p className="leading-[18.189px] whitespace-pre">download the application</p>
        </div>
      </div>
    </div>
  );
}

function SectionFooter() {
  return (
    <div className="bg-[#000653] h-[442px] relative shrink-0 w-full" data-name="section-footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[442px] items-start px-[220px] py-[80px] relative w-full">
          <BlockFooterContent />
        </div>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Desktop">
      <div className="absolute bg-white h-[60px] left-[calc(50%-0.5px)] top-0 translate-x-[-50%] w-[1440px]" data-name="section-heade">
        <NavHeader />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SectionHero />
        </div>
      </div>
      <SectionIntro />
      <SectionDigitalBanker />
      <SectionGlobalVideo />
      <SectionGlobalReserve />
      <SectionSoquinProperties />
      <SectionSoquinConnections />
      <SectionFooter />
    </div>
  );
}