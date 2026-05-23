import svgPaths from "./svg-02xrwvybo0";
import imgAvatar from "./c14798cf5293c57333d6b58c079ca634d833acf3.png";
import imgScreenMockupReplaceFill from "./6ec5c6d986585331b437f664b05817ac8cc7207c.png";

function Logotype() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Logotype">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Madu Al Tasman</p>
    </div>
  );
}

function LogoWrap() {
  return (
    <div className="content-stretch flex gap-[12px] h-[53px] items-center justify-center relative shrink-0" data-name="Logo wrap">
      <Logotype />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Logo">
      <LogoWrap />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Navigation">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Home</p>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">About</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center py-[4px] relative shrink-0" data-name="_Dropdown header navigation trigger">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Products</p>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
                <div className="absolute inset-[-16.7%_-8.35%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.67 6.67">
                    <path d={svgPaths.pe116dc0} id="Icon" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Contact</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Content">
      <Logo />
      <Navigation />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-0 items-center justify-center px-[32px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col h-[80px] items-center justify-center left-0 px-[40px] right-0 top-0" data-name="Header">
      <Container />
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-[1024px]" data-name="Heading and supporting text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[60px] text-black tracking-[-1.2px] w-[min-content]">
        <span className="leading-[72px]">{`Dari Lebah Untuk `}</span>
        <span className="leading-[72px] text-[#f69d00]">Kesehatan</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-[768px]">Madu murni penuh kebaikan, langsung dari sarang lebah pilihan. Setiap tetesnya menghadirkan energi, menjaga daya tahan tubuh, dan menemani momen berharga bersama keluarga</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content1 />
    </div>
  );
}

function BackgroundComplete() {
  return (
    <div className="absolute inset-[-4.05%_0.05%_10.04%_42.78%]" data-name="background-complete">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 696.694 487.979">
        <g id="background-complete">
          <path d={svgPaths.p20d84c80} fill="var(--fill-0, #EBEBEB)" id="Vector" />
          <path d={svgPaths.p25979480} fill="var(--fill-0, #EBEBEB)" id="Vector_2" />
          <path d={svgPaths.pca74ef8} fill="var(--fill-0, #EBEBEB)" id="Vector_3" />
          <path d={svgPaths.p115cb5f0} fill="var(--fill-0, #EBEBEB)" id="Vector_4" />
          <path d={svgPaths.p1242e740} fill="var(--fill-0, #EBEBEB)" id="Vector_5" />
          <path d={svgPaths.p37f5d180} fill="var(--fill-0, #EBEBEB)" id="Vector_6" />
          <path d={svgPaths.p20b20200} fill="var(--fill-0, #EBEBEB)" id="Vector_7" />
          <path d={svgPaths.p1f4f5e80} fill="var(--fill-0, #EBEBEB)" id="Vector_8" />
          <path d={svgPaths.p2361b80} fill="var(--fill-0, #EBEBEB)" id="Vector_9" />
          <path d={svgPaths.p2a6ced00} fill="var(--fill-0, #E6E6E6)" id="Vector_10" />
          <path d={svgPaths.p118a6c80} fill="var(--fill-0, #E6E6E6)" id="Vector_11" />
          <path d={svgPaths.p3f5bc380} fill="var(--fill-0, #F0F0F0)" id="Vector_12" />
          <path d={svgPaths.p15c44f0} fill="var(--fill-0, #F0F0F0)" id="Vector_13" />
          <path d={svgPaths.p29d5f340} fill="var(--fill-0, #E6E6E6)" id="Vector_14" />
          <path d={svgPaths.p1152c200} fill="var(--fill-0, #E6E6E6)" id="Vector_15" />
          <path d={svgPaths.p769e800} fill="var(--fill-0, #E6E6E6)" id="Vector_16" />
          <path d={svgPaths.p21c0070} fill="var(--fill-0, #F0F0F0)" id="Vector_17" />
          <path d={svgPaths.p373b3040} fill="var(--fill-0, #F0F0F0)" id="Vector_18" />
          <path d={svgPaths.p31dbf180} fill="var(--fill-0, #E6E6E6)" id="Vector_19" />
          <path d={svgPaths.p1088ee80} fill="var(--fill-0, #E6E6E6)" id="Vector_20" />
          <path d={svgPaths.p3ccc4d70} fill="var(--fill-0, #F0F0F0)" id="Vector_21" />
          <path d={svgPaths.pb05cd00} fill="var(--fill-0, #F0F0F0)" id="Vector_22" />
          <path d={svgPaths.p1d018100} fill="var(--fill-0, #F0F0F0)" id="Vector_23" />
          <path d={svgPaths.p3b199200} fill="var(--fill-0, #F0F0F0)" id="Vector_24" />
          <path d={svgPaths.p1f59f00} fill="var(--fill-0, #E6E6E6)" id="Vector_25" />
          <path d={svgPaths.p3206f580} fill="var(--fill-0, #E0E0E0)" id="Vector_26" />
          <path d={svgPaths.p2d3af100} fill="var(--fill-0, #E6E6E6)" id="Vector_27" />
          <path d={svgPaths.p3aa98e00} fill="var(--fill-0, #F0F0F0)" id="Vector_28" />
          <path d={svgPaths.p1cff7a80} fill="var(--fill-0, #F0F0F0)" id="Vector_29" />
          <path d={svgPaths.pfc58980} fill="var(--fill-0, #F0F0F0)" id="Vector_30" />
          <path d={svgPaths.p239b9600} fill="var(--fill-0, #E0E0E0)" id="Vector_31" />
          <path d={svgPaths.pbbfd1b0} fill="var(--fill-0, #E0E0E0)" id="Vector_32" />
          <path d={svgPaths.p612a380} fill="var(--fill-0, #F0F0F0)" id="Vector_33" />
          <path d={svgPaths.p38e6e600} fill="var(--fill-0, #E0E0E0)" id="Vector_34" />
          <path d={svgPaths.pb9d51f0} fill="var(--fill-0, #F0F0F0)" id="Vector_35" />
          <path d={svgPaths.p3e6b8980} fill="var(--fill-0, #F0F0F0)" id="Vector_36" />
          <path d={svgPaths.pa38ad80} fill="var(--fill-0, #E6E6E6)" id="Vector_37" />
          <path d={svgPaths.p2d5ea300} fill="var(--fill-0, #E0E0E0)" id="Vector_38" />
          <path d={svgPaths.p3b550080} fill="var(--fill-0, #E6E6E6)" id="Vector_39" />
          <path d={svgPaths.p6ce9780} fill="var(--fill-0, #F0F0F0)" id="Vector_40" />
          <path d={svgPaths.p3d517300} fill="var(--fill-0, #E0E0E0)" id="Vector_41" />
          <path d={svgPaths.p366a400} fill="var(--fill-0, #F0F0F0)" id="Vector_42" />
          <path d={svgPaths.p31436180} fill="var(--fill-0, #E6E6E6)" id="Vector_43" />
          <path d={svgPaths.p2c24b600} fill="var(--fill-0, #E6E6E6)" id="Vector_44" />
          <path d={svgPaths.p1f08b700} fill="var(--fill-0, #E6E6E6)" id="Vector_45" />
          <path d={svgPaths.p1f1e1a00} fill="var(--fill-0, #F0F0F0)" id="Vector_46" />
          <path d={svgPaths.pbb3dc00} fill="var(--fill-0, #F0F0F0)" id="Vector_47" />
          <path d={svgPaths.p4696c80} fill="var(--fill-0, #F0F0F0)" id="Vector_48" />
          <path d={svgPaths.paaf5600} fill="var(--fill-0, #F0F0F0)" id="Vector_49" />
          <path d={svgPaths.p18d3ee80} fill="var(--fill-0, #F0F0F0)" id="Vector_50" />
          <path d={svgPaths.p70cfd80} fill="var(--fill-0, #F0F0F0)" id="Vector_51" />
          <path d={svgPaths.p2de9da00} fill="var(--fill-0, #E6E6E6)" id="Vector_52" />
          <path d={svgPaths.p1de3b9a0} fill="var(--fill-0, #E6E6E6)" id="Vector_53" />
          <path d={svgPaths.p3a5d3840} fill="var(--fill-0, #E6E6E6)" id="Vector_54" />
          <path d={svgPaths.p20a51b00} fill="var(--fill-0, #F0F0F0)" id="Vector_55" />
          <path d={svgPaths.p3bed9100} fill="var(--fill-0, #E6E6E6)" id="Vector_56" />
          <path d={svgPaths.p4ffb600} fill="var(--fill-0, #E0E0E0)" id="Vector_57" />
          <path d={svgPaths.p19566380} fill="var(--fill-0, #F0F0F0)" id="Vector_58" />
          <path d={svgPaths.p7f77e00} fill="var(--fill-0, #F0F0F0)" id="Vector_59" />
          <path d={svgPaths.p17e3c000} fill="var(--fill-0, #F0F0F0)" id="Vector_60" />
          <path d={svgPaths.p5d3300} fill="var(--fill-0, #E6E6E6)" id="Vector_61" />
          <path d={svgPaths.p17e47680} fill="var(--fill-0, #E6E6E6)" id="Vector_62" />
          <path d={svgPaths.p37c8cb40} fill="var(--fill-0, #F0F0F0)" id="Vector_63" />
          <path d={svgPaths.p1232a000} fill="var(--fill-0, #E6E6E6)" id="Vector_64" />
          <path d={svgPaths.p168d8f00} fill="var(--fill-0, #E6E6E6)" id="Vector_65" />
          <path d={svgPaths.p260fdc00} fill="var(--fill-0, #F0F0F0)" id="Vector_66" />
          <path d={svgPaths.p3ca033f0} fill="var(--fill-0, #F0F0F0)" id="Vector_67" />
          <path d={svgPaths.p35bf6f00} fill="var(--fill-0, #F0F0F0)" id="Vector_68" />
          <path d={svgPaths.p2af81570} fill="var(--fill-0, #F0F0F0)" id="Vector_69" />
          <path d={svgPaths.p61ad600} fill="var(--fill-0, #F0F0F0)" id="Vector_70" />
          <path d={svgPaths.p2e3f9100} fill="var(--fill-0, #E6E6E6)" id="Vector_71" />
          <path d={svgPaths.pe5fae00} fill="var(--fill-0, #E6E6E6)" id="Vector_72" />
          <path d={svgPaths.p24042300} fill="var(--fill-0, #E6E6E6)" id="Vector_73" />
          <path d={svgPaths.pbdd1600} fill="var(--fill-0, #F0F0F0)" id="Vector_74" />
          <path d={svgPaths.pa915780} fill="var(--fill-0, #F0F0F0)" id="Vector_75" />
          <path d={svgPaths.p1388e500} fill="var(--fill-0, #E6E6E6)" id="Vector_76" />
          <path d={svgPaths.p1f83ce00} fill="var(--fill-0, #E6E6E6)" id="Vector_77" />
          <path d={svgPaths.p1d9f7f80} fill="var(--fill-0, #E6E6E6)" id="Vector_78" />
          <path d={svgPaths.p1fc3ff00} fill="var(--fill-0, #F0F0F0)" id="Vector_79" />
          <path d={svgPaths.p1a520880} fill="var(--fill-0, #F0F0F0)" id="Vector_80" />
          <path d={svgPaths.p2dd7cb00} fill="var(--fill-0, #F0F0F0)" id="Vector_81" />
          <path d={svgPaths.p39766780} fill="var(--fill-0, #F0F0F0)" id="Vector_82" />
          <path d={svgPaths.p2a80fc00} fill="var(--fill-0, #F0F0F0)" id="Vector_83" />
          <path d={svgPaths.p51de700} fill="var(--fill-0, #F0F0F0)" id="Vector_84" />
          <path d={svgPaths.p301935c0} fill="var(--fill-0, #E6E6E6)" id="Vector_85" />
          <path d={svgPaths.p2ff4000} fill="var(--fill-0, #E6E6E6)" id="Vector_86" />
          <path d={svgPaths.p12615700} fill="var(--fill-0, #F0F0F0)" id="Vector_87" />
          <path d={svgPaths.p16391280} fill="var(--fill-0, #F0F0F0)" id="Vector_88" />
          <path d={svgPaths.p16b22300} fill="var(--fill-0, #F0F0F0)" id="Vector_89" />
          <path d={svgPaths.p7b20a00} fill="var(--fill-0, #F0F0F0)" id="Vector_90" />
          <path d={svgPaths.p3b717100} fill="var(--fill-0, #F0F0F0)" id="Vector_91" />
          <path d={svgPaths.pc460a00} fill="var(--fill-0, #F0F0F0)" id="Vector_92" />
          <path d={svgPaths.pfdea380} fill="var(--fill-0, #E6E6E6)" id="Vector_93" />
          <path d={svgPaths.p15d8c180} fill="var(--fill-0, #E6E6E6)" id="Vector_94" />
          <path d={svgPaths.p9e28480} fill="var(--fill-0, #F0F0F0)" id="Vector_95" />
          <path d={svgPaths.p11b43600} fill="var(--fill-0, #F0F0F0)" id="Vector_96" />
          <path d={svgPaths.p13490700} fill="var(--fill-0, #F0F0F0)" id="Vector_97" />
          <path d={svgPaths.p181779c0} fill="var(--fill-0, #F0F0F0)" id="Vector_98" />
          <path d={svgPaths.pdea9700} fill="var(--fill-0, #F0F0F0)" id="Vector_99" />
          <path d={svgPaths.p1dfe41c0} fill="var(--fill-0, #E6E6E6)" id="Vector_100" />
          <path d={svgPaths.p3631ed00} fill="var(--fill-0, #E6E6E6)" id="Vector_101" />
          <path d={svgPaths.p10034100} fill="var(--fill-0, #E6E6E6)" id="Vector_102" />
          <path d={svgPaths.p3b10a400} fill="var(--fill-0, #F0F0F0)" id="Vector_103" />
          <path d={svgPaths.p222e6d80} fill="var(--fill-0, #F0F0F0)" id="Vector_104" />
          <path d={svgPaths.p18cd9a80} fill="var(--fill-0, #F0F0F0)" id="Vector_105" />
          <path d={svgPaths.p33ae6b80} fill="var(--fill-0, #F0F0F0)" id="Vector_106" />
          <path d={svgPaths.p2cfc8300} fill="var(--fill-0, #F0F0F0)" id="Vector_107" />
          <path d={svgPaths.pc3f800} fill="var(--fill-0, #F0F0F0)" id="Vector_108" />
          <path d={svgPaths.pec82b00} fill="var(--fill-0, #E6E6E6)" id="Vector_109" />
          <path d={svgPaths.p104e2980} fill="var(--fill-0, #F0F0F0)" id="Vector_110" />
          <path d={svgPaths.p29c78d00} fill="var(--fill-0, #F0F0F0)" id="Vector_111" />
          <path d={svgPaths.p3ee60b20} fill="var(--fill-0, #E6E6E6)" id="Vector_112" />
          <path d={svgPaths.pba81c80} fill="var(--fill-0, #E6E6E6)" id="Vector_113" />
          <path d={svgPaths.p275cc400} fill="var(--fill-0, #F0F0F0)" id="Vector_114" />
          <path d={svgPaths.p1f9cf000} fill="var(--fill-0, #F0F0F0)" id="Vector_115" />
          <path d={svgPaths.p12277e40} fill="var(--fill-0, #E6E6E6)" id="Vector_116" />
          <path d={svgPaths.p1ed87e00} fill="var(--fill-0, #F0F0F0)" id="Vector_117" />
          <path d={svgPaths.p9b78f00} fill="var(--fill-0, #F0F0F0)" id="Vector_118" />
          <path d={svgPaths.pd587900} fill="var(--fill-0, #E6E6E6)" id="Vector_119" />
          <path d={svgPaths.p30fabb00} fill="var(--fill-0, #F0F0F0)" id="Vector_120" />
          <path d={svgPaths.p35ffaf40} fill="var(--fill-0, #F0F0F0)" id="Vector_121" />
          <path d={svgPaths.p36da980} fill="var(--fill-0, #F0F0F0)" id="Vector_122" />
          <path d={svgPaths.p36403432} fill="var(--fill-0, #F0F0F0)" id="Vector_123" />
          <path d={svgPaths.p1af5cf00} fill="var(--fill-0, #F0F0F0)" id="Vector_124" />
          <path d={svgPaths.p342f0400} fill="var(--fill-0, #F0F0F0)" id="Vector_125" />
          <path d={svgPaths.p23daa80} fill="var(--fill-0, #E0E0E0)" id="Vector_126" />
          <path d={svgPaths.p2a6bdf00} fill="var(--fill-0, #F0F0F0)" id="Vector_127" />
          <path d={svgPaths.p34737100} fill="var(--fill-0, #E6E6E6)" id="Vector_128" />
          <path d={svgPaths.pa6a4780} fill="var(--fill-0, #F0F0F0)" id="Vector_129" />
          <path d={svgPaths.p39e9e900} fill="var(--fill-0, #F0F0F0)" id="Vector_130" />
          <path d={svgPaths.p3ee6e280} fill="var(--fill-0, #F0F0F0)" id="Vector_131" />
          <path d={svgPaths.p3b7d6900} fill="var(--fill-0, #F0F0F0)" id="Vector_132" />
          <path d={svgPaths.p38290b00} fill="var(--fill-0, #E6E6E6)" id="Vector_133" />
          <path d={svgPaths.pbf5bd00} fill="var(--fill-0, #F0F0F0)" id="Vector_134" />
          <path d={svgPaths.p24e7aa00} fill="var(--fill-0, #E6E6E6)" id="Vector_135" />
          <path d={svgPaths.p11a96800} fill="var(--fill-0, #E0E0E0)" id="Vector_136" />
          <path d={svgPaths.p3dee9d80} fill="var(--fill-0, #F0F0F0)" id="Vector_137" />
          <path d={svgPaths.p2b347900} fill="var(--fill-0, #F0F0F0)" id="Vector_138" />
          <path d={svgPaths.p20d38200} fill="var(--fill-0, #F0F0F0)" id="Vector_139" />
          <path d={svgPaths.p1bd7d200} fill="var(--fill-0, #F0F0F0)" id="Vector_140" />
          <path d={svgPaths.p12a414c0} fill="var(--fill-0, #F0F0F0)" id="Vector_141" />
          <path d={svgPaths.p2b18bc40} fill="var(--fill-0, #E6E6E6)" id="Vector_142" />
          <path d={svgPaths.p2de0f800} fill="var(--fill-0, #E6E6E6)" id="Vector_143" />
          <path d={svgPaths.p12f2700} fill="var(--fill-0, #F0F0F0)" id="Vector_144" />
          <path d={svgPaths.p1a523d00} fill="var(--fill-0, #E0E0E0)" id="Vector_145" />
          <path d={svgPaths.pec4e600} fill="var(--fill-0, #E0E0E0)" id="Vector_146" />
          <path d={svgPaths.p32bbc300} fill="var(--fill-0, #F0F0F0)" id="Vector_147" />
          <path d={svgPaths.p24bb800} fill="var(--fill-0, #E6E6E6)" id="Vector_148" />
          <path d={svgPaths.p1d2f3100} fill="var(--fill-0, #E6E6E6)" id="Vector_149" />
          <path d={svgPaths.p1fced400} fill="var(--fill-0, #F0F0F0)" id="Vector_150" />
          <path d={svgPaths.p3268f600} fill="var(--fill-0, #E6E6E6)" id="Vector_151" />
          <path d={svgPaths.p8e35c00} fill="var(--fill-0, #E0E0E0)" id="Vector_152" />
          <path d={svgPaths.p1e351300} fill="var(--fill-0, #F0F0F0)" id="Vector_153" />
          <path d={svgPaths.p914ab40} fill="var(--fill-0, #E0E0E0)" id="Vector_154" />
          <path d={svgPaths.p5f38800} fill="var(--fill-0, #E0E0E0)" id="Vector_155" />
          <path d={svgPaths.p250a6f40} fill="var(--fill-0, #F0F0F0)" id="Vector_156" />
          <path d={svgPaths.p71b9100} fill="var(--fill-0, #E0E0E0)" id="Vector_157" />
          <path d={svgPaths.p9d4b00} fill="var(--fill-0, #F0F0F0)" id="Vector_158" />
          <path d={svgPaths.p1ce74000} fill="var(--fill-0, #E6E6E6)" id="Vector_159" />
          <path d={svgPaths.p3835c30} fill="var(--fill-0, #E0E0E0)" id="Vector_160" />
          <path d={svgPaths.pd1b6900} fill="var(--fill-0, #E0E0E0)" id="Vector_161" />
          <path d={svgPaths.p1f5d2fc0} fill="var(--fill-0, #F0F0F0)" id="Vector_162" />
          <path d={svgPaths.p2a356780} fill="var(--fill-0, #F0F0F0)" id="Vector_163" />
          <path d={svgPaths.p264abe00} fill="var(--fill-0, #F0F0F0)" id="Vector_164" />
          <path d={svgPaths.p2efdbc00} fill="var(--fill-0, #E6E6E6)" id="Vector_165" />
          <path d={svgPaths.p1530b500} fill="var(--fill-0, #E0E0E0)" id="Vector_166" />
          <path d={svgPaths.p16f07080} fill="var(--fill-0, #E0E0E0)" id="Vector_167" />
          <path d={svgPaths.p298cdb00} fill="var(--fill-0, #F0F0F0)" id="Vector_168" />
          <path d={svgPaths.pdda5b00} fill="var(--fill-0, #F0F0F0)" id="Vector_169" />
          <path d={svgPaths.p9a47cc0} fill="var(--fill-0, #E0E0E0)" id="Vector_170" />
          <path d={svgPaths.p95dbf00} fill="var(--fill-0, #E6E6E6)" id="Vector_171" />
          <path d={svgPaths.p6f11e00} fill="var(--fill-0, #F0F0F0)" id="Vector_172" />
          <path d={svgPaths.p3341ac00} fill="var(--fill-0, #E6E6E6)" id="Vector_173" />
          <path d={svgPaths.p8b4e380} fill="var(--fill-0, #E0E0E0)" id="Vector_174" />
          <path d={svgPaths.p35383100} fill="var(--fill-0, #E0E0E0)" id="Vector_175" />
          <path d={svgPaths.pc47edf0} fill="var(--fill-0, #F0F0F0)" id="Vector_176" />
          <path d={svgPaths.pc2d5c00} fill="var(--fill-0, #E6E6E6)" id="Vector_177" />
          <path d={svgPaths.p3eda0c00} fill="var(--fill-0, #E6E6E6)" id="Vector_178" />
          <path d={svgPaths.p2fdee500} fill="var(--fill-0, #E6E6E6)" id="Vector_179" />
          <path d={svgPaths.p19dd9000} fill="var(--fill-0, #E6E6E6)" id="Vector_180" />
          <path d={svgPaths.p154c8300} fill="var(--fill-0, #E6E6E6)" id="Vector_181" />
          <path d={svgPaths.p202d3a00} fill="var(--fill-0, #F0F0F0)" id="Vector_182" />
          <path d={svgPaths.p26a700} fill="var(--fill-0, #E6E6E6)" id="Vector_183" />
          <path d={svgPaths.p151d7800} fill="var(--fill-0, #E0E0E0)" id="Vector_184" />
          <path d={svgPaths.p15ba1200} fill="var(--fill-0, #E0E0E0)" id="Vector_185" />
          <path d={svgPaths.p1b42eb00} fill="var(--fill-0, #E0E0E0)" id="Vector_186" />
          <path d={svgPaths.p264d3b80} fill="var(--fill-0, #E6E6E6)" id="Vector_187" />
          <path d={svgPaths.p32d780} fill="var(--fill-0, #F0F0F0)" id="Vector_188" />
          <path d={svgPaths.p3cd59320} fill="var(--fill-0, #E6E6E6)" id="Vector_189" />
          <path d={svgPaths.pe8d2000} fill="var(--fill-0, #E6E6E6)" id="Vector_190" />
          <path d={svgPaths.p2e518000} fill="var(--fill-0, #F0F0F0)" id="Vector_191" />
          <path d={svgPaths.p33fc3200} fill="var(--fill-0, #E6E6E6)" id="Vector_192" />
          <path d={svgPaths.p32a77d40} fill="var(--fill-0, #E0E0E0)" id="Vector_193" />
          <path d={svgPaths.p2efb7c80} fill="var(--fill-0, #E6E6E6)" id="Vector_194" />
          <path d={svgPaths.p1afd5200} fill="var(--fill-0, #E6E6E6)" id="Vector_195" />
          <path d={svgPaths.p3785d900} fill="var(--fill-0, #E6E6E6)" id="Vector_196" />
          <path d={svgPaths.p5cb9a00} fill="var(--fill-0, #F0F0F0)" id="Vector_197" />
          <path d={svgPaths.p19b18100} fill="var(--fill-0, #F0F0F0)" id="Vector_198" />
          <path d={svgPaths.p218bc900} fill="var(--fill-0, #E6E6E6)" id="Vector_199" />
          <path d={svgPaths.p1d022200} fill="var(--fill-0, #F0F0F0)" id="Vector_200" />
          <path d={svgPaths.pde35580} fill="var(--fill-0, #F0F0F0)" id="Vector_201" />
          <path d={svgPaths.p2a188f00} fill="var(--fill-0, #F0F0F0)" id="Vector_202" />
          <path d={svgPaths.p1bff3600} fill="var(--fill-0, #F0F0F0)" id="Vector_203" />
          <path d={svgPaths.p1248ec70} fill="var(--fill-0, #E6E6E6)" id="Vector_204" />
          <path d={svgPaths.p2342aa00} fill="var(--fill-0, #E0E0E0)" id="Vector_205" />
          <path d={svgPaths.p3603f6c0} fill="var(--fill-0, #F0F0F0)" id="Vector_206" />
          <path d={svgPaths.p3463db00} fill="var(--fill-0, #F0F0F0)" id="Vector_207" />
          <path d={svgPaths.p34066b80} fill="var(--fill-0, #F0F0F0)" id="Vector_208" />
          <path d={svgPaths.p9b48d00} fill="var(--fill-0, #E0E0E0)" id="Vector_209" />
          <path d={svgPaths.p3817ea30} fill="var(--fill-0, #F0F0F0)" id="Vector_210" />
          <path d={svgPaths.p2fc66d80} fill="var(--fill-0, #F0F0F0)" id="Vector_211" />
          <path d={svgPaths.p214ec540} fill="var(--fill-0, #F0F0F0)" id="Vector_212" />
          <path d={svgPaths.p31ee7cb0} fill="var(--fill-0, #E6E6E6)" id="Vector_213" />
          <path d={svgPaths.p30ce8e80} fill="var(--fill-0, #E0E0E0)" id="Vector_214" />
          <path d={svgPaths.p2d4f8080} fill="var(--fill-0, #F0F0F0)" id="Vector_215" />
          <path d={svgPaths.p1a0e4680} fill="var(--fill-0, #F0F0F0)" id="Vector_216" />
          <path d={svgPaths.p18d11600} fill="var(--fill-0, #E6E6E6)" id="Vector_217" />
          <path d={svgPaths.p175ca300} fill="var(--fill-0, #F0F0F0)" id="Vector_218" />
          <path d={svgPaths.p276c0600} fill="var(--fill-0, #E0E0E0)" id="Vector_219" />
          <path d={svgPaths.pd6fb00} fill="var(--fill-0, #F0F0F0)" id="Vector_220" />
          <path d={svgPaths.p176af200} fill="var(--fill-0, #F0F0F0)" id="Vector_221" />
          <path d={svgPaths.p192c1300} fill="var(--fill-0, #E0E0E0)" id="Vector_222" />
          <path d={svgPaths.p9ee400} fill="var(--fill-0, #F0F0F0)" id="Vector_223" />
          <path d={svgPaths.pc12ddf2} fill="var(--fill-0, #F0F0F0)" id="Vector_224" />
          <path d={svgPaths.pf7e7ef0} fill="var(--fill-0, #F0F0F0)" id="Vector_225" />
          <path d={svgPaths.pb429100} fill="var(--fill-0, #E6E6E6)" id="Vector_226" />
          <path d={svgPaths.p7354780} fill="var(--fill-0, #E6E6E6)" id="Vector_227" />
          <path d={svgPaths.p1e7a4180} fill="var(--fill-0, #E6E6E6)" id="Vector_228" />
          <path d={svgPaths.p15adb240} fill="var(--fill-0, #F0F0F0)" id="Vector_229" />
          <path d={svgPaths.p2b246f00} fill="var(--fill-0, #F0F0F0)" id="Vector_230" />
          <path d={svgPaths.p1594da00} fill="var(--fill-0, #F0F0F0)" id="Vector_231" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundSimple() {
  return (
    <div className="absolute inset-[3.04%_8.92%_11.58%_52.26%]" data-name="background-simple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="background-simple" opacity="0">
          <path d={svgPaths.p380fcb00} fill="var(--fill-0, #F69D00)" id="Vector" />
          <path d={svgPaths.p380fcb00} fill="var(--fill-0, white)" id="Vector_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute inset-[89.88%_6.47%_4.05%_49.19%]" data-name="Shadow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540.328 31.5463">
        <g id="Shadow">
          <path d={svgPaths.p334b0770} fill="var(--fill-0, #F5F5F5)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Flower2() {
  return (
    <div className="absolute inset-[74.15%_6.04%_7.68%_78.09%]" data-name="flower-3">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193.468 94.3103">
        <g id="flower-3">
          <path d={svgPaths.p367bd00} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p367bd00} fill="var(--fill-0, white)" id="Vector_2" opacity="0.8" />
          <g id="Group" opacity="0.7">
            <path d={svgPaths.p27a59080} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p31c0c300} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p236e95b2} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
          <path d={svgPaths.p3b9a2400} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p3b9a2400} fill="var(--fill-0, white)" id="Vector_7" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function HoneyJar1() {
  return (
    <div className="absolute inset-[37.56%_13.75%_7.29%_69.1%]" data-name="honey-jar-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208.994 286.286">
        <g id="honey-jar-2">
          <path d={svgPaths.p3421c200} fill="var(--fill-0, #F69D00)" id="Vector" />
          <path d={svgPaths.p3a0781f2} fill="var(--fill-0, white)" id="Vector_2" opacity="0.7" />
          <path d={svgPaths.p5087100} fill="var(--fill-0, #F69D00)" id="Vector_3" />
          <path d={svgPaths.p5087100} fill="var(--fill-0, white)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.pd461e00} fill="var(--fill-0, #F69D00)" id="Vector_5" />
          <path d={svgPaths.p8d9f800} fill="var(--fill-0, white)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p3b7fc900} fill="var(--fill-0, white)" id="Vector_7" opacity="0.2" />
          <g id="Group" opacity="0.2">
            <path d={svgPaths.p203a100} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p227c8a00} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p3aec8100} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p5d006f0} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p11d57d80} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p308a3f30} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p19457b80} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p39d3bb00} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p337e0000} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p347a55a0} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p3b1b7e40} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p196ba180} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p19694a00} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p28626900} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p21d9c180} fill="var(--fill-0, black)" id="Vector_22" />
          </g>
          <path d={svgPaths.p3e93a400} fill="var(--fill-0, white)" id="Vector_23" opacity="0.2" />
          <path d={svgPaths.p7c1b300} fill="var(--fill-0, white)" id="Vector_24" opacity="0.2" />
          <path d={svgPaths.p3fd1c680} fill="var(--fill-0, white)" id="Vector_25" opacity="0.2" />
          <path d={svgPaths.p23614700} fill="var(--fill-0, white)" id="Vector_26" opacity="0.2" />
          <path d={svgPaths.p3de5c300} fill="var(--fill-0, black)" id="Vector_27" opacity="0.1" />
          <path d={svgPaths.p376a5400} fill="var(--fill-0, #F69D00)" id="Vector_28" />
          <path d={svgPaths.p16cc7b00} fill="var(--fill-0, white)" id="Vector_29" opacity="0.5" />
          <path d={svgPaths.p31b8a500} fill="var(--fill-0, black)" id="Vector_30" opacity="0.1" />
          <path d={svgPaths.p2baf1f0} fill="var(--fill-0, #F69D00)" id="Vector_31" />
          <g id="Group_2" opacity="0.2">
            <path d={svgPaths.p2baf1f0} fill="var(--fill-0, black)" id="Vector_32" />
          </g>
          <path d={svgPaths.p2854a100} fill="var(--fill-0, #F69D00)" id="Vector_33" />
          <path d={svgPaths.p32af9900} fill="var(--fill-0, black)" id="Vector_34" opacity="0.2" />
          <path d={svgPaths.pc29ae80} fill="var(--fill-0, black)" id="Vector_35" opacity="0.2" />
          <path d={svgPaths.p28014f00} fill="var(--fill-0, black)" id="Vector_36" opacity="0.2" />
          <path d={svgPaths.pacf9200} fill="var(--fill-0, #F69D00)" id="Vector_37" />
          <path d={svgPaths.p1ca3f400} fill="var(--fill-0, black)" id="Vector_38" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function Bee1() {
  return (
    <div className="absolute inset-[34.23%_14.77%_59.95%_82.34%]" data-name="bee-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.2848 30.1996">
        <g id="bee-2">
          <path d={svgPaths.p230c4f00} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p3e47ea00} fill="var(--fill-0, #F69D00)" id="Vector_2" />
          <path d={svgPaths.p36d7d970} fill="var(--fill-0, #F69D00)" id="Vector_3" />
          <path d={svgPaths.p5a440b6} fill="var(--fill-0, #F69D00)" id="Vector_4" />
          <path d={svgPaths.p13d656c0} fill="var(--fill-0, #F69D00)" id="Vector_5" />
          <path d={svgPaths.p38387c00} fill="var(--fill-0, #F69D00)" id="Vector_6" />
          <path d={svgPaths.p38387c00} fill="var(--fill-0, white)" id="Vector_7" opacity="0.7" />
          <path d={svgPaths.p31280600} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p31280600} fill="var(--fill-0, white)" id="Vector_9" opacity="0.3" />
          <path d={svgPaths.p3a063580} fill="var(--fill-0, #F69D00)" id="Vector_10" />
          <path d={svgPaths.p3a063580} fill="var(--fill-0, white)" id="Vector_11" opacity="0.8" />
          <path d={svgPaths.p18824600} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p1c9aea00} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p15929180} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p2a48d000} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p8df6800} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.pc65d700} fill="var(--fill-0, #263238)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

function Flower() {
  return (
    <div className="absolute inset-[68.07%_38.38%_6.32%_46.75%]" data-name="flower-1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.283 132.962">
        <g id="flower-1">
          <path d={svgPaths.p274b74f0} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p274b74f0} fill="var(--fill-0, white)" id="Vector_2" opacity="0.8" />
          <g id="Group" opacity="0.7">
            <path d={svgPaths.p11001500} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p1971b980} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.pfa0a800} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
          <path d={svgPaths.p3f773900} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p3f773900} fill="var(--fill-0, white)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p8b74180} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p18bef700} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.p212d7a00} fill="var(--fill-0, black)" id="Vector_10" opacity="0.2" />
          <path d={svgPaths.pb941a00} fill="var(--fill-0, black)" id="Vector_11" opacity="0.2" />
          <path d={svgPaths.p2b1d4524} fill="var(--fill-0, #263238)" id="Vector_12" />
          <g id="Group_2" opacity="0.2">
            <path d={svgPaths.p2b1d4524} fill="var(--fill-0, white)" id="Vector_13" />
          </g>
          <path d={svgPaths.p128c4f00} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p36d14080} fill="var(--fill-0, white)" id="Vector_15" opacity="0.8" />
          <g id="Group_3" opacity="0.7">
            <path d={svgPaths.p24630480} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.p1e7a9b70} fill="var(--fill-0, white)" id="Vector_17" />
          </g>
          <path d={svgPaths.p5a8900} fill="var(--fill-0, black)" id="Vector_18" opacity="0.1" />
          <path d={svgPaths.p142ed00} fill="var(--fill-0, black)" id="Vector_19" opacity="0.1" />
          <path d={svgPaths.p258c5d80} fill="var(--fill-0, black)" id="Vector_20" opacity="0.1" />
          <path d={svgPaths.p1d5ee500} fill="var(--fill-0, #F69D00)" id="Vector_21" />
          <path d={svgPaths.p1d5ee500} fill="var(--fill-0, black)" id="Vector_22" opacity="0.2" />
          <path d={svgPaths.p25319100} fill="var(--fill-0, black)" id="Vector_23" opacity="0.2" />
          <path d={svgPaths.p22467400} fill="var(--fill-0, black)" id="Vector_24" opacity="0.2" />
          <path d={svgPaths.p7e7b400} fill="var(--fill-0, black)" id="Vector_25" opacity="0.2" />
          <path d={svgPaths.p15454980} fill="var(--fill-0, black)" id="Vector_26" opacity="0.2" />
          <path d={svgPaths.p30af6d20} fill="var(--fill-0, black)" id="Vector_27" opacity="0.2" />
          <path d={svgPaths.p1e9fa680} fill="var(--fill-0, black)" id="Vector_28" opacity="0.2" />
          <path d={svgPaths.p11c2c00} fill="var(--fill-0, black)" id="Vector_29" opacity="0.2" />
          <g id="Vector_30" opacity="0.2" />
          <path d={svgPaths.p36d8c640} fill="var(--fill-0, black)" id="Vector_31" opacity="0.2" />
          <path d={svgPaths.p3c841080} fill="var(--fill-0, black)" id="Vector_32" opacity="0.2" />
          <path d={svgPaths.p25d72c00} fill="var(--fill-0, black)" id="Vector_33" opacity="0.2" />
          <path d={svgPaths.p3878af00} fill="var(--fill-0, black)" id="Vector_34" opacity="0.2" />
          <path d={svgPaths.p1149b480} fill="var(--fill-0, black)" id="Vector_35" opacity="0.2" />
          <path d={svgPaths.p10dfbb00} fill="var(--fill-0, black)" id="Vector_36" opacity="0.2" />
          <path d={svgPaths.p3ba49600} fill="var(--fill-0, black)" id="Vector_37" opacity="0.2" />
          <path d={svgPaths.p7e1d000} fill="var(--fill-0, black)" id="Vector_38" opacity="0.2" />
          <path d={svgPaths.p3fa5c100} fill="var(--fill-0, black)" id="Vector_39" opacity="0.2" />
          <path d={svgPaths.p399e100} fill="var(--fill-0, black)" id="Vector_40" opacity="0.2" />
          <path d={svgPaths.p2092f4c0} fill="var(--fill-0, black)" id="Vector_41" opacity="0.2" />
          <g id="Vector_42" opacity="0.2" />
          <path d={svgPaths.p3f630180} fill="var(--fill-0, black)" id="Vector_43" opacity="0.2" />
          <path d={svgPaths.p4485e00} fill="var(--fill-0, black)" id="Vector_44" opacity="0.2" />
          <path d={svgPaths.p34669080} fill="var(--fill-0, black)" id="Vector_45" opacity="0.2" />
          <path d={svgPaths.p34244900} fill="var(--fill-0, #263238)" id="Vector_46" />
          <path d={svgPaths.p34244900} fill="var(--fill-0, white)" id="Vector_47" opacity="0.8" />
          <path d={svgPaths.p347fa700} fill="var(--fill-0, white)" id="Vector_48" />
          <path d={svgPaths.p32ca5e00} fill="var(--fill-0, white)" id="Vector_49" />
          <path d={svgPaths.p1a7c0b00} fill="var(--fill-0, white)" id="Vector_50" />
          <path d={svgPaths.p42d4200} fill="var(--fill-0, white)" id="Vector_51" />
          <path d={svgPaths.p2fca3a00} fill="var(--fill-0, white)" id="Vector_52" />
          <path d={svgPaths.p28202f80} fill="var(--fill-0, white)" id="Vector_53" />
          <path d={svgPaths.p57afc80} fill="var(--fill-0, #263238)" id="Vector_54" />
          <path d={svgPaths.p57afc80} fill="var(--fill-0, white)" id="Vector_55" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function Flower1() {
  return (
    <div className="absolute inset-[73.45%_12.41%_5.04%_68.61%]" data-name="flower-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 231.292 111.62">
        <g id="flower-2">
          <path d={svgPaths.p3c318f00} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p4e42480} fill="var(--fill-0, black)" id="Vector_2" opacity="0.2" />
          <path d={svgPaths.p387fad00} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p3b849700} fill="var(--fill-0, black)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.p1ba49d80} fill="var(--fill-0, #263238)" id="Vector_5" />
          <g id="Group" opacity="0.2">
            <path d={svgPaths.pa7d6200} fill="var(--fill-0, white)" id="Vector_6" />
          </g>
          <path d={svgPaths.p30ef6780} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p3b95e00} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p3b95e00} fill="var(--fill-0, white)" id="Vector_9" opacity="0.8" />
          <g id="Group_2" opacity="0.7">
            <path d={svgPaths.p3dab92f0} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p200d900} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p5b78c00} fill="var(--fill-0, white)" id="Vector_12" />
            <path d={svgPaths.p2f09f280} fill="var(--fill-0, white)" id="Vector_13" />
            <path d={svgPaths.p105ac80} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.p1a776c30} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p3af57200} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.p6750600} fill="var(--fill-0, white)" id="Vector_17" />
            <path d={svgPaths.p2f8f3300} fill="var(--fill-0, white)" id="Vector_18" />
            <path d={svgPaths.p22727a00} fill="var(--fill-0, white)" id="Vector_19" />
            <path d={svgPaths.p116ca000} fill="var(--fill-0, white)" id="Vector_20" />
            <path d={svgPaths.p8625900} fill="var(--fill-0, white)" id="Vector_21" />
          </g>
          <path d={svgPaths.p10ebc100} fill="var(--fill-0, #F69D00)" id="Vector_22" />
          <path d={svgPaths.p10ebc100} fill="var(--fill-0, black)" id="Vector_23" opacity="0.2" />
          <path d={svgPaths.p3eb4ab00} fill="var(--fill-0, black)" id="Vector_24" opacity="0.2" />
          <path d={svgPaths.p2e53d980} fill="var(--fill-0, black)" id="Vector_25" opacity="0.2" />
          <path d={svgPaths.pb3d6580} fill="var(--fill-0, black)" id="Vector_26" opacity="0.2" />
          <path d={svgPaths.p31778888} fill="var(--fill-0, black)" id="Vector_27" opacity="0.2" />
          <path d={svgPaths.pbd0ab00} fill="var(--fill-0, black)" id="Vector_28" opacity="0.2" />
          <g id="Vector_29" opacity="0.2" />
          <path d={svgPaths.p15738980} fill="var(--fill-0, black)" id="Vector_30" opacity="0.2" />
          <path d={svgPaths.p2ead7b00} fill="var(--fill-0, black)" id="Vector_31" opacity="0.2" />
          <path d={svgPaths.p19f88400} fill="var(--fill-0, black)" id="Vector_32" opacity="0.2" />
          <path d={svgPaths.p378c080} fill="var(--fill-0, black)" id="Vector_33" opacity="0.2" />
          <path d={svgPaths.p2658380} fill="var(--fill-0, black)" id="Vector_34" opacity="0.2" />
          <path d={svgPaths.p20957600} fill="var(--fill-0, black)" id="Vector_35" opacity="0.2" />
          <path d={svgPaths.p2e2ad400} fill="var(--fill-0, black)" id="Vector_36" opacity="0.2" />
          <path d={svgPaths.p20751500} fill="var(--fill-0, black)" id="Vector_37" opacity="0.2" />
          <path d={svgPaths.pe8df00} fill="var(--fill-0, black)" id="Vector_38" opacity="0.2" />
          <path d={svgPaths.p74d9400} fill="var(--fill-0, black)" id="Vector_39" opacity="0.2" />
          <path d={svgPaths.pfe86100} fill="var(--fill-0, black)" id="Vector_40" opacity="0.2" />
          <path d={svgPaths.p118b2740} fill="var(--fill-0, black)" id="Vector_41" opacity="0.2" />
          <path d={svgPaths.p3e141d80} fill="var(--fill-0, black)" id="Vector_42" opacity="0.2" />
          <path d={svgPaths.p3545a900} fill="var(--fill-0, black)" id="Vector_43" opacity="0.2" />
          <path d={svgPaths.p267e1f40} fill="var(--fill-0, black)" id="Vector_44" opacity="0.2" />
          <path d={svgPaths.p16ae0200} fill="var(--fill-0, black)" id="Vector_45" opacity="0.2" />
          <path d={svgPaths.p26563c00} fill="var(--fill-0, black)" id="Vector_46" opacity="0.2" />
          <path d={svgPaths.p3aaa7900} fill="var(--fill-0, black)" id="Vector_47" opacity="0.2" />
          <path d={svgPaths.p2b158180} fill="var(--fill-0, black)" id="Vector_48" opacity="0.2" />
          <path d={svgPaths.p12614ef0} fill="var(--fill-0, black)" id="Vector_49" opacity="0.2" />
          <path d={svgPaths.p3bb1d480} fill="var(--fill-0, black)" id="Vector_50" opacity="0.2" />
          <path d={svgPaths.pd234200} fill="var(--fill-0, black)" id="Vector_51" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function Bee() {
  return (
    <div className="absolute inset-[65.09%_44.8%_29.29%_52.36%]" data-name="bee-1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.6391 29.1748">
        <g id="bee-1">
          <path d={svgPaths.p38b76280} fill="var(--fill-0, #F69D00)" id="Vector" />
          <path d={svgPaths.p38b76280} fill="var(--fill-0, white)" id="Vector_2" opacity="0.7" />
          <path d={svgPaths.p2a1e4b00} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p10ae9400} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p10ae9400} fill="var(--fill-0, white)" id="Vector_5" opacity="0.3" />
          <path d={svgPaths.p3d1177c0} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p27272c80} fill="var(--fill-0, #F69D00)" id="Vector_7" />
          <path d={svgPaths.p1d504400} fill="var(--fill-0, #F69D00)" id="Vector_8" />
          <path d={svgPaths.p27bd0c00} fill="var(--fill-0, #F69D00)" id="Vector_9" />
          <path d={svgPaths.p1c8f3e00} fill="var(--fill-0, #F69D00)" id="Vector_10" />
          <path d={svgPaths.p6828e00} fill="var(--fill-0, #F69D00)" id="Vector_11" />
          <path d={svgPaths.p30512700} fill="var(--fill-0, #F69D00)" id="Vector_12" />
          <path d={svgPaths.p30512700} fill="var(--fill-0, white)" id="Vector_13" opacity="0.8" />
          <path d={svgPaths.p2d4d2380} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p1269a700} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p34f005f2} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p1e4337f2} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p9c27c00} fill="var(--fill-0, #263238)" id="Vector_18" />
        </g>
      </svg>
    </div>
  );
}

function HoneyJar() {
  return (
    <div className="absolute inset-[58.88%_25.64%_5.67%_56.63%]" data-name="honey-jar-1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215.968 183.997">
        <g id="honey-jar-1">
          <path d={svgPaths.p35d6f40} fill="var(--fill-0, #F69D00)" id="Vector" />
          <path d={svgPaths.p3bd6d200} fill="var(--fill-0, white)" id="Vector_2" opacity="0.6" />
          <path d={svgPaths.p1d8bd900} fill="var(--fill-0, black)" id="Vector_3" opacity="0.05" />
          <path d={svgPaths.p76e4000} fill="var(--fill-0, #F69D00)" id="Vector_4" />
          <path d={svgPaths.p76e4000} fill="var(--fill-0, white)" id="Vector_5" opacity="0.7" />
          <path d={svgPaths.p2bf34b70} fill="var(--fill-0, #F69D00)" id="Vector_6" />
          <path d={svgPaths.p38f37780} fill="var(--fill-0, #F69D00)" id="Vector_7" />
          <path d={svgPaths.p13898e00} fill="var(--fill-0, #F69D00)" id="Vector_8" />
          <path d={svgPaths.p2da18200} fill="var(--fill-0, #F69D00)" id="Vector_9" />
          <path d={svgPaths.p1b8af000} fill="var(--fill-0, #F69D00)" id="Vector_10" />
          <path d={svgPaths.p19544f80} fill="var(--fill-0, #F69D00)" id="Vector_11" />
          <g id="Group" opacity="0.7">
            <path d={svgPaths.p13827900} fill="var(--fill-0, white)" id="Vector_12" />
            <path d={svgPaths.p3c7b6f00} fill="var(--fill-0, white)" id="Vector_13" />
            <path d={svgPaths.p1c387880} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.p29d71880} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p175cd100} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.p19544f80} fill="var(--fill-0, white)" id="Vector_17" />
          </g>
          <path d={svgPaths.p3c607300} fill="var(--fill-0, #F69D00)" id="Vector_18" />
          <path d={svgPaths.p3c607300} fill="var(--fill-0, white)" id="Vector_19" opacity="0.2" />
          <path d={svgPaths.p471f680} fill="var(--fill-0, #F69D00)" id="Vector_20" />
          <g id="Group_2" opacity="0.2">
            <path d={svgPaths.p2452800} fill="var(--fill-0, white)" id="Vector_21" />
            <path d={svgPaths.p1ba50bf0} fill="var(--fill-0, white)" id="Vector_22" />
          </g>
          <path d={svgPaths.p10b34280} fill="var(--fill-0, white)" id="Vector_23" opacity="0.2" />
          <g id="Group_3" opacity="0.2">
            <path d={svgPaths.p4aa7100} fill="var(--fill-0, black)" id="Vector_24" />
            <path d={svgPaths.p17e0e900} fill="var(--fill-0, black)" id="Vector_25" />
            <path d={svgPaths.p3d82f280} fill="var(--fill-0, black)" id="Vector_26" />
            <path d={svgPaths.p1d8ad280} fill="var(--fill-0, black)" id="Vector_27" />
            <path d={svgPaths.p21787000} fill="var(--fill-0, black)" id="Vector_28" />
            <path d={svgPaths.p1db8e900} fill="var(--fill-0, black)" id="Vector_29" />
            <path d={svgPaths.p2da88400} fill="var(--fill-0, black)" id="Vector_30" />
            <path d={svgPaths.p3205b600} fill="var(--fill-0, black)" id="Vector_31" />
            <path d={svgPaths.p19d4e00} fill="var(--fill-0, black)" id="Vector_32" />
            <path d={svgPaths.p3a86600} fill="var(--fill-0, black)" id="Vector_33" />
            <path d={svgPaths.p337e6200} fill="var(--fill-0, black)" id="Vector_34" />
            <path d={svgPaths.p1c955260} fill="var(--fill-0, black)" id="Vector_35" />
            <path d={svgPaths.p2b01e080} fill="var(--fill-0, black)" id="Vector_36" />
          </g>
          <path d={svgPaths.p3d5ddba0} fill="var(--fill-0, #F69D00)" id="Vector_37" />
          <path d={svgPaths.p273f9f00} fill="var(--fill-0, black)" id="Vector_38" opacity="0.1" />
          <path d={svgPaths.p8123f00} fill="var(--fill-0, #F69D00)" id="Vector_39" />
          <path d={svgPaths.p9e2f600} fill="var(--fill-0, #F69D00)" id="Vector_40" />
          <path d={svgPaths.p8123f00} fill="var(--fill-0, white)" id="Vector_41" opacity="0.3" />
          <path d={svgPaths.p9e2f600} fill="var(--fill-0, white)" id="Vector_42" opacity="0.3" />
          <path d={svgPaths.p8095900} fill="var(--fill-0, white)" id="Vector_43" opacity="0.3" />
          <path d={svgPaths.pd31e900} fill="var(--fill-0, #F69D00)" id="Vector_44" />
          <path d={svgPaths.p3ce5fb0} fill="var(--fill-0, black)" id="Vector_45" opacity="0.1" />
          <path d={svgPaths.p7ae4800} fill="var(--fill-0, white)" id="Vector_46" opacity="0.3" />
          <path d={svgPaths.p30097e00} fill="var(--fill-0, white)" id="Vector_47" opacity="0.3" />
          <path d={svgPaths.p194e2f80} fill="var(--fill-0, #F69D00)" id="Vector_48" />
          <path d={svgPaths.p2980cf00} fill="var(--fill-0, black)" id="Vector_49" opacity="0.1" />
          <path d={svgPaths.pcbe3880} fill="var(--fill-0, white)" id="Vector_50" opacity="0.3" />
          <path d={svgPaths.p145c4000} fill="var(--fill-0, white)" id="Vector_51" opacity="0.3" />
          <path d={svgPaths.p29ae2080} fill="var(--fill-0, white)" id="Vector_52" opacity="0.2" />
          <path d={svgPaths.p3dd89500} fill="var(--fill-0, white)" id="Vector_53" opacity="0.2" />
          <path d={svgPaths.p1d4bf300} fill="var(--fill-0, white)" id="Vector_54" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function HoneyStick() {
  return (
    <div className="absolute inset-[9.89%_16.88%_44.15%_63.15%]" data-name="honey-stick">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243.4 238.624">
        <g id="honey-stick">
          <path d={svgPaths.p2bcefb00} fill="var(--fill-0, #F69D00)" id="Vector" />
          <path d={svgPaths.p2b61e500} fill="var(--fill-0, black)" id="Vector_2" opacity="0.2" />
          <path d={svgPaths.p17a9c780} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p3e700f00} fill="var(--fill-0, white)" id="Vector_4" opacity="0.3" />
          <path d={svgPaths.p122794e0} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p32669500} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p2c0e7080} fill="var(--fill-0, #F69D00)" id="Vector_7" />
          <path d={svgPaths.p939ec00} fill="var(--fill-0, #F69D00)" id="Vector_8" />
          <path d={svgPaths.p3f18bf00} fill="var(--fill-0, #F69D00)" id="Vector_9" />
          <path d={svgPaths.p14f75c80} fill="var(--fill-0, #F69D00)" id="Vector_10" />
          <path d={svgPaths.pc273b00} fill="var(--fill-0, #F69D00)" id="Vector_11" />
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p12c89600} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p1a27df00} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p6792280} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p3d3da8b2} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p180d5500} fill="var(--fill-0, black)" id="Vector_16" />
          </g>
          <path d={svgPaths.p23748c0} fill="var(--fill-0, white)" id="Vector_17" opacity="0.3" />
          <path d={svgPaths.p1d575600} fill="var(--fill-0, white)" id="Vector_18" opacity="0.3" />
          <path d={svgPaths.p23d1f780} fill="var(--fill-0, white)" id="Vector_19" opacity="0.3" />
          <path d={svgPaths.p33deaef0} fill="var(--fill-0, white)" id="Vector_20" opacity="0.3" />
          <path d={svgPaths.p28446b00} fill="var(--fill-0, white)" id="Vector_21" opacity="0.3" />
          <path d={svgPaths.p37b3bd10} fill="var(--fill-0, #F69D00)" id="Vector_22" opacity="0.5" />
          <path d={svgPaths.p2c827a00} fill="var(--fill-0, #F69D00)" id="Vector_23" />
          <path d={svgPaths.p2c827a00} fill="var(--fill-0, white)" id="Vector_24" opacity="0.3" />
          <path d={svgPaths.p1e3f42f0} fill="var(--fill-0, #F69D00)" id="Vector_25" />
          <path d={svgPaths.p35129880} fill="var(--fill-0, #F69D00)" id="Vector_26" />
          <path d={svgPaths.p1e3f42f0} fill="var(--fill-0, white)" id="Vector_27" opacity="0.3" />
          <path d={svgPaths.p35129880} fill="var(--fill-0, white)" id="Vector_28" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function HoneyRafiki() {
  return (
    <div className="absolute contents inset-[-4.05%_0.05%_4.05%_42.78%]" data-name="honey/rafiki">
      <BackgroundComplete />
      <BackgroundSimple />
      <Shadow />
      <Flower2 />
      <HoneyJar1 />
      <Bee1 />
      <Flower />
      <Flower1 />
      <Bee />
      <HoneyJar />
      <HoneyStick />
    </div>
  );
}

function BackgroundComplete1() {
  return (
    <div className="absolute inset-[1.46%_30.37%_49.69%_30.07%]" data-name="background-complete">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482.09 253.568">
        <g id="background-complete">
          <path d={svgPaths.p162690f0} fill="var(--fill-0, #C7C7C7)" id="Vector" />
          <path d={svgPaths.pbb36400} fill="var(--fill-0, #C7C7C7)" id="Vector_2" />
          <path d={svgPaths.pb913600} fill="var(--fill-0, #C7C7C7)" id="Vector_3" />
          <path d={svgPaths.p37513df0} fill="var(--fill-0, #C7C7C7)" id="Vector_4" />
          <path d={svgPaths.p2bce4100} fill="var(--fill-0, #C7C7C7)" id="Vector_5" />
          <path d={svgPaths.pcb7ddf0} fill="var(--fill-0, #C7C7C7)" id="Vector_6" />
          <path d={svgPaths.p37e1500} fill="var(--fill-0, #EBEBEB)" id="Vector_7" opacity="0.7" />
          <path d={svgPaths.p3492f000} fill="var(--fill-0, #EBEBEB)" id="Vector_8" opacity="0.7" />
          <path d={svgPaths.p193ccb00} fill="var(--fill-0, #DBDBDB)" id="Vector_9" />
          <path d={svgPaths.p4ddb400} fill="var(--fill-0, #C7C7C7)" id="Vector_10" />
          <path d={svgPaths.p13241b00} fill="var(--fill-0, #C7C7C7)" id="Vector_11" />
          <path d={svgPaths.p1b08a6f0} fill="var(--fill-0, #C7C7C7)" id="Vector_12" />
          <path d={svgPaths.p7cbe300} fill="var(--fill-0, black)" id="Vector_13" opacity="0.1" />
          <path d={svgPaths.p2d7e8500} fill="var(--fill-0, white)" id="Vector_14" opacity="0.3" />
          <path d={svgPaths.pe848a80} fill="var(--fill-0, #C7C7C7)" id="Vector_15" />
          <path d={svgPaths.p2fb9d000} fill="var(--fill-0, black)" id="Vector_16" opacity="0.1" />
          <path d={svgPaths.p1ecb7200} fill="var(--fill-0, #C7C7C7)" id="Vector_17" />
          <path d={svgPaths.p1a09da00} fill="var(--fill-0, #C7C7C7)" id="Vector_18" />
          <path d={svgPaths.p1c0df700} fill="var(--fill-0, #C7C7C7)" id="Vector_19" />
          <path d={svgPaths.p35334100} fill="var(--fill-0, #DBDBDB)" id="Vector_20" />
          <path d={svgPaths.p10064700} fill="var(--fill-0, #DBDBDB)" id="Vector_21" />
          <path d={svgPaths.p3de25d00} fill="var(--fill-0, #DBDBDB)" id="Vector_22" />
          <path d={svgPaths.p11467f00} fill="var(--fill-0, #DBDBDB)" id="Vector_23" />
          <path d={svgPaths.pa165300} fill="var(--fill-0, #DBDBDB)" id="Vector_24" />
          <path d={svgPaths.p32164e70} fill="var(--fill-0, #DBDBDB)" id="Vector_25" />
          <path d={svgPaths.p33124280} fill="var(--fill-0, #DBDBDB)" id="Vector_26" />
          <path d={svgPaths.p35cf6480} fill="var(--fill-0, #DBDBDB)" id="Vector_27" />
          <path d={svgPaths.p2b0ad180} fill="var(--fill-0, #DBDBDB)" id="Vector_28" />
          <path d={svgPaths.p2be44180} fill="var(--fill-0, #DBDBDB)" id="Vector_29" />
          <path d={svgPaths.p388ee100} fill="var(--fill-0, #DBDBDB)" id="Vector_30" />
          <path d={svgPaths.p21fef380} fill="var(--fill-0, #DBDBDB)" id="Vector_31" />
          <path d={svgPaths.p3af40700} fill="var(--fill-0, #DBDBDB)" id="Vector_32" />
          <path d={svgPaths.p6ad2b10} fill="var(--fill-0, #DBDBDB)" id="Vector_33" />
          <path d={svgPaths.p1c98aac0} fill="var(--fill-0, #DBDBDB)" id="Vector_34" />
          <path d={svgPaths.p2e1fea80} fill="var(--fill-0, #DBDBDB)" id="Vector_35" />
          <path d={svgPaths.p1aa06900} fill="var(--fill-0, #C7C7C7)" id="Vector_36" />
          <path d={svgPaths.p26e66700} fill="var(--fill-0, #C7C7C7)" id="Vector_37" />
          <path d={svgPaths.p2f126200} fill="var(--fill-0, #C7C7C7)" id="Vector_38" />
          <path d={svgPaths.p24dcc600} fill="var(--fill-0, black)" id="Vector_39" opacity="0.1" />
          <path d={svgPaths.p22f6ef40} fill="var(--fill-0, white)" id="Vector_40" opacity="0.3" />
          <path d={svgPaths.p2d17e6f0} fill="var(--fill-0, #C7C7C7)" id="Vector_41" />
          <path d={svgPaths.p39004080} fill="var(--fill-0, black)" id="Vector_42" opacity="0.1" />
          <path d={svgPaths.p2790d280} fill="var(--fill-0, #C7C7C7)" id="Vector_43" />
          <path d={svgPaths.p8b35080} fill="var(--fill-0, #C7C7C7)" id="Vector_44" />
          <path d={svgPaths.p129e42f0} fill="var(--fill-0, #C7C7C7)" id="Vector_45" />
          <path d={svgPaths.p48f0680} fill="var(--fill-0, #EBEBEB)" id="Vector_46" opacity="0.7" />
          <path d={svgPaths.p26d89f00} fill="var(--fill-0, #EBEBEB)" id="Vector_47" opacity="0.7" />
          <path d={svgPaths.p1faa3440} fill="var(--fill-0, #DBDBDB)" id="Vector_48" />
          <path d={svgPaths.p5d61200} fill="var(--fill-0, #DBDBDB)" id="Vector_49" />
          <path d={svgPaths.p2f2d5600} fill="var(--fill-0, #DBDBDB)" id="Vector_50" />
          <path d={svgPaths.p219c2000} fill="var(--fill-0, #DBDBDB)" id="Vector_51" />
          <path d={svgPaths.p1f258fc0} fill="var(--fill-0, #DBDBDB)" id="Vector_52" />
          <path d={svgPaths.p32ad9f80} fill="var(--fill-0, #DBDBDB)" id="Vector_53" />
          <path d={svgPaths.p23148100} fill="var(--fill-0, #DBDBDB)" id="Vector_54" />
          <path d={svgPaths.p28bf100} fill="var(--fill-0, #DBDBDB)" id="Vector_55" />
          <path d={svgPaths.p6aa2200} fill="var(--fill-0, #DBDBDB)" id="Vector_56" />
          <path d={svgPaths.p10656480} fill="var(--fill-0, #DBDBDB)" id="Vector_57" />
          <path d={svgPaths.p3573e000} fill="var(--fill-0, #DBDBDB)" id="Vector_58" />
          <path d={svgPaths.p3127780} fill="var(--fill-0, #DBDBDB)" id="Vector_59" />
          <path d={svgPaths.p281aadf0} fill="var(--fill-0, #DBDBDB)" id="Vector_60" />
          <path d={svgPaths.p87b0f00} fill="var(--fill-0, #DBDBDB)" id="Vector_61" />
          <path d={svgPaths.p3f54ad00} fill="var(--fill-0, #DBDBDB)" id="Vector_62" />
          <path d={svgPaths.p21789800} fill="var(--fill-0, #DBDBDB)" id="Vector_63" />
          <path d={svgPaths.p146fa900} fill="var(--fill-0, #DBDBDB)" id="Vector_64" />
          <path d={svgPaths.p3af57a40} fill="var(--fill-0, #C7C7C7)" id="Vector_65" />
          <path d={svgPaths.p1a6f9a00} fill="var(--fill-0, #C7C7C7)" id="Vector_66" />
          <path d={svgPaths.p1a0a9c00} fill="var(--fill-0, #C7C7C7)" id="Vector_67" />
          <path d={svgPaths.p2524bb00} fill="var(--fill-0, black)" id="Vector_68" opacity="0.1" />
          <path d={svgPaths.p35641f00} fill="var(--fill-0, white)" id="Vector_69" opacity="0.3" />
          <path d={svgPaths.pd2e800} fill="var(--fill-0, #C7C7C7)" id="Vector_70" />
          <path d={svgPaths.p32c3f380} fill="var(--fill-0, black)" id="Vector_71" opacity="0.1" />
          <path d={svgPaths.p2ad72a00} fill="var(--fill-0, #C7C7C7)" id="Vector_72" />
          <path d={svgPaths.p1104fe00} fill="var(--fill-0, #C7C7C7)" id="Vector_73" />
          <path d={svgPaths.p33250e00} fill="var(--fill-0, #C7C7C7)" id="Vector_74" />
          <path d={svgPaths.p24555580} fill="var(--fill-0, #EBEBEB)" id="Vector_75" opacity="0.7" />
          <path d={svgPaths.paf34900} fill="var(--fill-0, #EBEBEB)" id="Vector_76" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundSimple1() {
  return (
    <div className="absolute inset-[1.16%_31.48%_41.34%_31.22%]" data-name="background-simple">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="background-simple" opacity="0">
          <path d={svgPaths.p2b4b600} fill="var(--fill-0, #DBDBDB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Jar1() {
  return (
    <div className="absolute inset-[17.17%_30%_5.08%_46.43%]" data-name="jar-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 287.307 403.634">
        <g id="jar-2">
          <path d={svgPaths.p24cb5300} fill="var(--fill-0, #EBEBEB)" id="Vector" opacity="0.8" />
          <path d={svgPaths.p7511000} fill="var(--fill-0, #FFC727)" id="Vector_2" />
          <path d={svgPaths.p280ab200} fill="var(--fill-0, white)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p17a8f400} fill="var(--fill-0, white)" id="Vector_4" opacity="0.4" />
          <path d={svgPaths.p1e95f840} fill="var(--fill-0, white)" id="Vector_5" opacity="0.4" />
          <path d={svgPaths.p26b67c80} fill="var(--fill-0, black)" id="Vector_6" opacity="0.05" />
          <g id="Group" opacity="0.1">
            <path d={svgPaths.p30a73900} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p541be80} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p34c92a00} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p29ae0ff0} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p29ea2f80} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p15b9dbc0} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p2f1c7900} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p17a69b00} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p22b02b00} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p14736300} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p289c29f2} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p2bf93000} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p3f656600} fill="var(--fill-0, black)" id="Vector_19" />
          </g>
          <path d={svgPaths.p2f4b5200} fill="var(--fill-0, #FFC727)" id="Vector_20" />
          <path d={svgPaths.p2f4b5200} fill="var(--fill-0, white)" id="Vector_21" opacity="0.6" />
          <path d={svgPaths.p251ff8f0} fill="var(--fill-0, #FFC727)" id="Vector_22" />
          <g id="Group_2" opacity="0.4">
            <path d={svgPaths.pbead400} fill="var(--fill-0, #FFC727)" id="Vector_23" />
            <path d={svgPaths.p358db580} fill="var(--fill-0, #FFC727)" id="Vector_24" />
            <path d={svgPaths.p2702cb00} fill="var(--fill-0, #FFC727)" id="Vector_25" />
            <path d={svgPaths.p135e0000} fill="var(--fill-0, #FFC727)" id="Vector_26" />
            <path d={svgPaths.p1bc6400} fill="var(--fill-0, #FFC727)" id="Vector_27" />
            <path d={svgPaths.p1f226880} fill="var(--fill-0, #FFC727)" id="Vector_28" />
            <path d={svgPaths.p30788500} fill="var(--fill-0, #FFC727)" id="Vector_29" />
            <path d={svgPaths.p2e5fb700} fill="var(--fill-0, #FFC727)" id="Vector_30" />
          </g>
          <path d={svgPaths.p218f48f0} fill="var(--fill-0, #FFC727)" id="Vector_31" />
          <path d={svgPaths.p31e11b00} fill="var(--fill-0, #FFC727)" id="Vector_32" />
          <path d={svgPaths.p30f9c200} fill="var(--fill-0, #FFC727)" id="Vector_33" />
          <path d={svgPaths.p131f2300} fill="var(--fill-0, #FFC727)" id="Vector_34" />
          <path d={svgPaths.p2072700} fill="var(--fill-0, #FFC727)" id="Vector_35" />
          <path d={svgPaths.p2eefbc30} fill="var(--fill-0, #FFC727)" id="Vector_36" />
        </g>
      </svg>
    </div>
  );
}

function Flowers() {
  return (
    <div className="absolute inset-[72.81%_32.37%_1.32%_45.61%]" data-name="Flowers">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268.42 134.301">
        <g id="Flowers">
          <path d={svgPaths.p8865070} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p12607700} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p2183c070} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p3468bc80} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p14521500} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p3a10c600} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p852b000} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p17dd4e00} fill="var(--fill-0, #263238)" id="Vector_8" />
          <path d={svgPaths.p21888d80} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.p20088d00} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p39854280} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.pdd00780} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p151f4000} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p319a7f00} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p305fc9f0} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p307e7280} fill="var(--fill-0, #263238)" id="Vector_16" />
          <path d={svgPaths.p20d5080} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p211f89b0} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.p2d81e880} fill="var(--fill-0, #263238)" id="Vector_19" />
          <path d={svgPaths.p1f302900} fill="var(--fill-0, #263238)" id="Vector_20" />
          <path d={svgPaths.pec48770} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.pcba1100} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p3625db00} fill="var(--fill-0, #263238)" id="Vector_23" />
          <path d={svgPaths.pdb96b00} fill="var(--fill-0, #263238)" id="Vector_24" />
          <path d={svgPaths.pba771f0} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p1428a400} fill="var(--fill-0, #263238)" id="Vector_26" />
          <path d={svgPaths.p2ceab900} fill="var(--fill-0, #37474F)" id="Vector_27" />
          <path d={svgPaths.p300f1d80} fill="var(--fill-0, #37474F)" id="Vector_28" />
          <path d={svgPaths.p453d00} fill="var(--fill-0, #263238)" id="Vector_29" />
          <path d={svgPaths.p3ce43700} fill="var(--fill-0, #37474F)" id="Vector_30" />
          <path d={svgPaths.p310b0b80} fill="var(--fill-0, #37474F)" id="Vector_31" />
          <g id="Vector_32" />
          <path d={svgPaths.p3f92a70} fill="var(--fill-0, #EBEBEB)" id="Vector_33" />
          <path d={svgPaths.p37d5600} fill="var(--fill-0, #EBEBEB)" id="Vector_34" />
          <path d={svgPaths.p39d80870} fill="var(--fill-0, #EBEBEB)" id="Vector_35" />
          <path d={svgPaths.p13279700} fill="var(--fill-0, #EBEBEB)" id="Vector_36" />
          <path d={svgPaths.p20dda300} fill="var(--fill-0, #EBEBEB)" id="Vector_37" />
          <path d={svgPaths.p33698500} fill="var(--fill-0, #EBEBEB)" id="Vector_38" />
          <path d={svgPaths.p27e39a00} fill="var(--fill-0, #EBEBEB)" id="Vector_39" />
          <path d={svgPaths.p11a24f80} fill="var(--fill-0, #EBEBEB)" id="Vector_40" />
          <path d={svgPaths.p384721f0} fill="var(--fill-0, #EBEBEB)" id="Vector_41" />
          <path d={svgPaths.p7f7000} fill="var(--fill-0, #EBEBEB)" id="Vector_42" />
          <path d={svgPaths.p87a1800} fill="var(--fill-0, #EBEBEB)" id="Vector_43" />
          <path d={svgPaths.p3ee045f0} fill="var(--fill-0, #EBEBEB)" id="Vector_44" />
          <path d={svgPaths.p9fa4600} fill="var(--fill-0, white)" id="Vector_45" />
          <path d={svgPaths.pd4b3570} fill="var(--fill-0, white)" id="Vector_46" />
          <path d={svgPaths.pfe82880} fill="var(--fill-0, white)" id="Vector_47" />
          <path d={svgPaths.p899ac80} fill="var(--fill-0, white)" id="Vector_48" />
          <path d={svgPaths.p163bbb00} fill="var(--fill-0, white)" id="Vector_49" />
          <path d={svgPaths.p2bd383e0} fill="var(--fill-0, white)" id="Vector_50" />
          <path d={svgPaths.pf87bd40} fill="var(--fill-0, white)" id="Vector_51" />
          <path d={svgPaths.p1819f80} fill="var(--fill-0, white)" id="Vector_52" />
          <path d={svgPaths.p1cb8c680} fill="var(--fill-0, white)" id="Vector_53" />
          <path d={svgPaths.p39587b00} fill="var(--fill-0, white)" id="Vector_54" />
          <path d={svgPaths.p2996db80} fill="var(--fill-0, white)" id="Vector_55" />
          <path d={svgPaths.p1b6443c0} fill="var(--fill-0, white)" id="Vector_56" />
          <path d={svgPaths.p1cc9be80} fill="var(--fill-0, #FFC727)" id="Vector_57" />
          <g id="Group" opacity="0.15">
            <path d={svgPaths.p3e7b1180} fill="var(--fill-0, black)" id="Vector_58" />
            <path d={svgPaths.p8f1980} fill="var(--fill-0, black)" id="Vector_59" />
            <path d={svgPaths.p33dd680} fill="var(--fill-0, black)" id="Vector_60" />
            <path d={svgPaths.p3ea244f2} fill="var(--fill-0, black)" id="Vector_61" />
            <path d={svgPaths.p24fd7980} fill="var(--fill-0, black)" id="Vector_62" />
            <path d={svgPaths.p231b5b70} fill="var(--fill-0, black)" id="Vector_63" />
            <path d={svgPaths.p3670ca00} fill="var(--fill-0, black)" id="Vector_64" />
            <path d={svgPaths.p2373e680} fill="var(--fill-0, black)" id="Vector_65" />
            <path d={svgPaths.p3ee84200} fill="var(--fill-0, black)" id="Vector_66" />
            <path d={svgPaths.p74d3300} fill="var(--fill-0, black)" id="Vector_67" />
            <path d={svgPaths.p21131f00} fill="var(--fill-0, black)" id="Vector_68" />
            <path d={svgPaths.p2b01fb80} fill="var(--fill-0, black)" id="Vector_69" />
            <path d={svgPaths.p14336480} fill="var(--fill-0, black)" id="Vector_70" />
            <path d={svgPaths.p30b93680} fill="var(--fill-0, black)" id="Vector_71" />
            <path d={svgPaths.p3c83b100} fill="var(--fill-0, black)" id="Vector_72" />
            <path d={svgPaths.p9ddd700} fill="var(--fill-0, black)" id="Vector_73" />
            <path d={svgPaths.p3b88b300} fill="var(--fill-0, black)" id="Vector_74" />
            <path d={svgPaths.p7667500} fill="var(--fill-0, black)" id="Vector_75" />
            <path d={svgPaths.p375a6c00} fill="var(--fill-0, black)" id="Vector_76" />
            <path d={svgPaths.p3d10b100} fill="var(--fill-0, black)" id="Vector_77" />
            <path d={svgPaths.p1fe54600} fill="var(--fill-0, black)" id="Vector_78" />
            <path d={svgPaths.p8954d00} fill="var(--fill-0, black)" id="Vector_79" />
            <path d={svgPaths.p1109c200} fill="var(--fill-0, black)" id="Vector_80" />
            <path d={svgPaths.p1cef8800} fill="var(--fill-0, black)" id="Vector_81" />
            <path d={svgPaths.p3a5db900} fill="var(--fill-0, black)" id="Vector_82" />
            <path d={svgPaths.p11bb4b80} fill="var(--fill-0, black)" id="Vector_83" />
            <path d={svgPaths.p257b5d40} fill="var(--fill-0, black)" id="Vector_84" />
            <path d={svgPaths.p25cce500} fill="var(--fill-0, black)" id="Vector_85" />
            <path d={svgPaths.pb7e1a00} fill="var(--fill-0, black)" id="Vector_86" />
            <path d={svgPaths.p10028580} fill="var(--fill-0, black)" id="Vector_87" />
            <path d={svgPaths.p1951ec80} fill="var(--fill-0, black)" id="Vector_88" />
            <path d={svgPaths.p3b516100} fill="var(--fill-0, black)" id="Vector_89" />
            <path d={svgPaths.p27109230} fill="var(--fill-0, black)" id="Vector_90" />
            <path d={svgPaths.p56de100} fill="var(--fill-0, black)" id="Vector_91" />
            <path d={svgPaths.p367f7780} fill="var(--fill-0, black)" id="Vector_92" />
          </g>
          <path d={svgPaths.p2b7abe00} fill="var(--fill-0, #263238)" id="Vector_93" />
          <path d={svgPaths.p4eff800} fill="var(--fill-0, #263238)" id="Vector_94" />
          <path d={svgPaths.p191edb80} fill="var(--fill-0, #263238)" id="Vector_95" />
          <path d={svgPaths.p34672680} fill="var(--fill-0, #263238)" id="Vector_96" />
          <path d={svgPaths.p219f6b80} fill="var(--fill-0, #263238)" id="Vector_97" />
          <path d={svgPaths.p391b3a70} fill="var(--fill-0, #263238)" id="Vector_98" />
          <path d={svgPaths.p2de1ea00} fill="var(--fill-0, #263238)" id="Vector_99" />
          <path d={svgPaths.p2d8ab380} fill="var(--fill-0, #263238)" id="Vector_100" />
          <path d={svgPaths.p3301f7c0} fill="var(--fill-0, #263238)" id="Vector_101" />
          <path d={svgPaths.p1adcea00} fill="var(--fill-0, #263238)" id="Vector_102" />
          <path d={svgPaths.p37e61d00} fill="var(--fill-0, #263238)" id="Vector_103" />
          <path d={svgPaths.p20e14e80} fill="var(--fill-0, #263238)" id="Vector_104" />
          <path d={svgPaths.p2975e000} fill="var(--fill-0, #263238)" id="Vector_105" />
          <path d={svgPaths.p22c88f00} fill="var(--fill-0, #455A64)" id="Vector_106" />
          <path d={svgPaths.pbacfd00} fill="var(--fill-0, #263238)" id="Vector_107" />
          <path d={svgPaths.p11c5b000} fill="var(--fill-0, #263238)" id="Vector_108" />
          <path d={svgPaths.p1388ba00} fill="var(--fill-0, #263238)" id="Vector_109" />
          <path d={svgPaths.pebdef00} fill="var(--fill-0, black)" id="Vector_110" opacity="0.2" />
          <path d={svgPaths.p73a7240} fill="var(--fill-0, #EBEBEB)" id="Vector_111" />
          <path d={svgPaths.p2c840f80} fill="var(--fill-0, #EBEBEB)" id="Vector_112" />
          <path d={svgPaths.p37847b00} fill="var(--fill-0, #EBEBEB)" id="Vector_113" />
          <path d={svgPaths.p389aa100} fill="var(--fill-0, #EBEBEB)" id="Vector_114" />
          <path d={svgPaths.p35d6af80} fill="var(--fill-0, #EBEBEB)" id="Vector_115" />
          <path d={svgPaths.p1eb4c3f2} fill="var(--fill-0, #EBEBEB)" id="Vector_116" />
          <path d={svgPaths.p25f9d100} fill="var(--fill-0, #EBEBEB)" id="Vector_117" />
          <path d={svgPaths.p31890c00} fill="var(--fill-0, #EBEBEB)" id="Vector_118" />
          <path d={svgPaths.p34946300} fill="var(--fill-0, #EBEBEB)" id="Vector_119" />
          <path d={svgPaths.p3f46ca00} fill="var(--fill-0, #EBEBEB)" id="Vector_120" />
          <path d={svgPaths.p2f294cf0} fill="var(--fill-0, #EBEBEB)" id="Vector_121" />
          <path d={svgPaths.pc58fb80} fill="var(--fill-0, #EBEBEB)" id="Vector_122" />
          <path d={svgPaths.p37b0a600} fill="var(--fill-0, white)" id="Vector_123" />
          <path d={svgPaths.p33482800} fill="var(--fill-0, white)" id="Vector_124" />
          <path d={svgPaths.p8342500} fill="var(--fill-0, white)" id="Vector_125" />
          <path d={svgPaths.p382fd580} fill="var(--fill-0, white)" id="Vector_126" />
          <path d={svgPaths.p1364e100} fill="var(--fill-0, white)" id="Vector_127" />
          <path d={svgPaths.p319b5b80} fill="var(--fill-0, white)" id="Vector_128" />
          <path d={svgPaths.p28953e00} fill="var(--fill-0, white)" id="Vector_129" />
          <path d={svgPaths.p2d1381c0} fill="var(--fill-0, white)" id="Vector_130" />
          <path d={svgPaths.p34054f80} fill="var(--fill-0, white)" id="Vector_131" />
          <path d={svgPaths.p13968680} fill="var(--fill-0, white)" id="Vector_132" />
          <path d={svgPaths.p1ff94f00} fill="var(--fill-0, white)" id="Vector_133" />
          <path d={svgPaths.p36a02580} fill="var(--fill-0, white)" id="Vector_134" />
          <path d={svgPaths.p1819f00} fill="var(--fill-0, #FFC727)" id="Vector_135" />
          <g id="Group_2" opacity="0.15">
            <path d={svgPaths.p20dd3500} fill="var(--fill-0, black)" id="Vector_136" />
            <path d={svgPaths.p1e87e80} fill="var(--fill-0, black)" id="Vector_137" />
            <path d={svgPaths.p2ca6d300} fill="var(--fill-0, black)" id="Vector_138" />
            <path d={svgPaths.p14f64570} fill="var(--fill-0, black)" id="Vector_139" />
            <path d={svgPaths.p9976e70} fill="var(--fill-0, black)" id="Vector_140" />
            <path d={svgPaths.p92f3900} fill="var(--fill-0, black)" id="Vector_141" />
            <path d={svgPaths.p7092680} fill="var(--fill-0, black)" id="Vector_142" />
            <path d={svgPaths.p26ac9b00} fill="var(--fill-0, black)" id="Vector_143" />
            <path d={svgPaths.p68cc400} fill="var(--fill-0, black)" id="Vector_144" />
            <path d={svgPaths.p2fc4db00} fill="var(--fill-0, black)" id="Vector_145" />
            <path d={svgPaths.p29d51300} fill="var(--fill-0, black)" id="Vector_146" />
            <path d={svgPaths.p7418300} fill="var(--fill-0, black)" id="Vector_147" />
            <path d={svgPaths.p318fb800} fill="var(--fill-0, black)" id="Vector_148" />
            <path d={svgPaths.p2c7b100} fill="var(--fill-0, black)" id="Vector_149" />
            <path d={svgPaths.p3cb4c9f0} fill="var(--fill-0, black)" id="Vector_150" />
            <path d={svgPaths.p3475c200} fill="var(--fill-0, black)" id="Vector_151" />
            <path d={svgPaths.p15bed180} fill="var(--fill-0, black)" id="Vector_152" />
            <path d={svgPaths.p271f5b00} fill="var(--fill-0, black)" id="Vector_153" />
            <path d={svgPaths.p22e0d00} fill="var(--fill-0, black)" id="Vector_154" />
            <path d={svgPaths.p3aa10140} fill="var(--fill-0, black)" id="Vector_155" />
            <path d={svgPaths.p35ab4000} fill="var(--fill-0, black)" id="Vector_156" />
            <path d={svgPaths.p255fa800} fill="var(--fill-0, black)" id="Vector_157" />
            <path d={svgPaths.p282d4c70} fill="var(--fill-0, black)" id="Vector_158" />
            <path d={svgPaths.p27029e00} fill="var(--fill-0, black)" id="Vector_159" />
            <path d={svgPaths.p38a32b00} fill="var(--fill-0, black)" id="Vector_160" />
            <path d={svgPaths.pf01bd00} fill="var(--fill-0, black)" id="Vector_161" />
            <path d={svgPaths.p27952300} fill="var(--fill-0, black)" id="Vector_162" />
            <path d={svgPaths.p252ea870} fill="var(--fill-0, black)" id="Vector_163" />
            <path d={svgPaths.p32deec00} fill="var(--fill-0, black)" id="Vector_164" />
            <path d={svgPaths.pec96900} fill="var(--fill-0, black)" id="Vector_165" />
            <path d={svgPaths.p2cdd9400} fill="var(--fill-0, black)" id="Vector_166" />
            <path d={svgPaths.p10c31480} fill="var(--fill-0, black)" id="Vector_167" />
            <path d={svgPaths.p3b6bcd00} fill="var(--fill-0, black)" id="Vector_168" />
            <path d={svgPaths.p157bf880} fill="var(--fill-0, black)" id="Vector_169" />
            <path d={svgPaths.p1df7f400} fill="var(--fill-0, black)" id="Vector_170" />
          </g>
          <path d={svgPaths.p29c97300} fill="var(--fill-0, #EBEBEB)" id="Vector_171" />
          <path d={svgPaths.p25d4df00} fill="var(--fill-0, #EBEBEB)" id="Vector_172" />
          <path d={svgPaths.p32f54d80} fill="var(--fill-0, #EBEBEB)" id="Vector_173" />
          <path d={svgPaths.pd4f8280} fill="var(--fill-0, #EBEBEB)" id="Vector_174" />
          <path d={svgPaths.p32474e80} fill="var(--fill-0, #EBEBEB)" id="Vector_175" />
          <path d={svgPaths.p28595100} fill="var(--fill-0, #EBEBEB)" id="Vector_176" />
          <path d={svgPaths.p709c00} fill="var(--fill-0, #EBEBEB)" id="Vector_177" />
          <path d={svgPaths.p2ebc3480} fill="var(--fill-0, #EBEBEB)" id="Vector_178" />
          <path d={svgPaths.p115d3180} fill="var(--fill-0, #EBEBEB)" id="Vector_179" />
          <path d={svgPaths.p1f5f5200} fill="var(--fill-0, #EBEBEB)" id="Vector_180" />
          <path d={svgPaths.p3f648f80} fill="var(--fill-0, #EBEBEB)" id="Vector_181" />
          <path d={svgPaths.p351d2200} fill="var(--fill-0, #EBEBEB)" id="Vector_182" />
          <path d={svgPaths.p2d189680} fill="var(--fill-0, white)" id="Vector_183" />
          <path d={svgPaths.p255525f0} fill="var(--fill-0, white)" id="Vector_184" />
          <path d={svgPaths.p38b24000} fill="var(--fill-0, white)" id="Vector_185" />
          <path d={svgPaths.p39b90180} fill="var(--fill-0, white)" id="Vector_186" />
          <path d={svgPaths.p26340700} fill="var(--fill-0, white)" id="Vector_187" />
          <path d={svgPaths.p3e8f1800} fill="var(--fill-0, white)" id="Vector_188" />
          <path d={svgPaths.p1b8abd00} fill="var(--fill-0, white)" id="Vector_189" />
          <path d={svgPaths.p34582400} fill="var(--fill-0, white)" id="Vector_190" />
          <path d={svgPaths.p26783900} fill="var(--fill-0, white)" id="Vector_191" />
          <path d={svgPaths.p1480eb80} fill="var(--fill-0, white)" id="Vector_192" />
          <path d={svgPaths.p3bf7800} fill="var(--fill-0, white)" id="Vector_193" />
          <path d={svgPaths.p165c2000} fill="var(--fill-0, white)" id="Vector_194" />
          <path d={svgPaths.p3bed0200} fill="var(--fill-0, #FFC727)" id="Vector_195" />
          <g id="Group_3" opacity="0.15">
            <path d={svgPaths.p2f3d2a20} fill="var(--fill-0, black)" id="Vector_196" />
            <path d={svgPaths.p2c275e00} fill="var(--fill-0, black)" id="Vector_197" />
            <path d={svgPaths.pb6dfb00} fill="var(--fill-0, black)" id="Vector_198" />
            <path d={svgPaths.pe1c5000} fill="var(--fill-0, black)" id="Vector_199" />
            <path d={svgPaths.p93b3800} fill="var(--fill-0, black)" id="Vector_200" />
            <path d={svgPaths.p1ee6a680} fill="var(--fill-0, black)" id="Vector_201" />
            <path d={svgPaths.p16dd0300} fill="var(--fill-0, black)" id="Vector_202" />
            <path d={svgPaths.p204d8640} fill="var(--fill-0, black)" id="Vector_203" />
            <path d={svgPaths.p37fa0050} fill="var(--fill-0, black)" id="Vector_204" />
            <path d={svgPaths.padf0200} fill="var(--fill-0, black)" id="Vector_205" />
            <path d={svgPaths.p19fcdd80} fill="var(--fill-0, black)" id="Vector_206" />
            <path d={svgPaths.p2b058470} fill="var(--fill-0, black)" id="Vector_207" />
            <path d={svgPaths.p2d4e6800} fill="var(--fill-0, black)" id="Vector_208" />
            <path d={svgPaths.p2544da70} fill="var(--fill-0, black)" id="Vector_209" />
            <path d={svgPaths.p2ab39c00} fill="var(--fill-0, black)" id="Vector_210" />
            <path d={svgPaths.p28306d00} fill="var(--fill-0, black)" id="Vector_211" />
            <path d={svgPaths.p71e5340} fill="var(--fill-0, black)" id="Vector_212" />
            <path d={svgPaths.p3cf5bdf0} fill="var(--fill-0, black)" id="Vector_213" />
            <path d={svgPaths.p17428700} fill="var(--fill-0, black)" id="Vector_214" />
            <path d={svgPaths.p1dfe2ec0} fill="var(--fill-0, black)" id="Vector_215" />
            <path d={svgPaths.p26f06100} fill="var(--fill-0, black)" id="Vector_216" />
            <path d={svgPaths.p2505b0c0} fill="var(--fill-0, black)" id="Vector_217" />
            <path d={svgPaths.p3d914800} fill="var(--fill-0, black)" id="Vector_218" />
            <path d={svgPaths.p36411a00} fill="var(--fill-0, black)" id="Vector_219" />
            <path d={svgPaths.p349dfe80} fill="var(--fill-0, black)" id="Vector_220" />
            <path d={svgPaths.p267d5500} fill="var(--fill-0, black)" id="Vector_221" />
            <path d={svgPaths.p14872980} fill="var(--fill-0, black)" id="Vector_222" />
            <path d={svgPaths.p34983640} fill="var(--fill-0, black)" id="Vector_223" />
            <path d={svgPaths.p2d685500} fill="var(--fill-0, black)" id="Vector_224" />
            <path d={svgPaths.p5191a80} fill="var(--fill-0, black)" id="Vector_225" />
            <path d={svgPaths.pbe200} fill="var(--fill-0, black)" id="Vector_226" />
            <path d={svgPaths.p27a13780} fill="var(--fill-0, black)" id="Vector_227" />
            <path d={svgPaths.p38b7a180} fill="var(--fill-0, black)" id="Vector_228" />
            <path d={svgPaths.p33eeb180} fill="var(--fill-0, black)" id="Vector_229" />
            <path d={svgPaths.p2edabf00} fill="var(--fill-0, black)" id="Vector_230" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Jar() {
  return (
    <div className="absolute inset-[48.39%_48.21%_5.08%_32.1%]" data-name="jar-1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239.971 241.554">
        <g id="jar-1">
          <path d={svgPaths.p1269fe00} fill="var(--fill-0, #EBEBEB)" id="Vector" opacity="0.8" />
          <path d={svgPaths.p2d4a1880} fill="var(--fill-0, #FFC727)" id="Vector_2" />
          <path d={svgPaths.p1977af00} fill="var(--fill-0, white)" id="Vector_3" opacity="0.3" />
          <g id="Group" opacity="0.1">
            <path d={svgPaths.p30a0e100} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p33192e00} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p34147900} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p25aebc80} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p15770800} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p2e483f80} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.pbc29f80} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p2f6ca500} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p388b0900} fill="var(--fill-0, black)" id="Vector_12" />
          </g>
          <path d={svgPaths.p3ddf5800} fill="var(--fill-0, #C7C7C7)" id="Vector_13" />
          <path d={svgPaths.pc1e6700} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p19f6600} fill="var(--fill-0, #C7C7C7)" id="Vector_15" />
          <path d={svgPaths.p17c53580} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p21625240} fill="var(--fill-0, #C7C7C7)" id="Vector_17" />
          <path d={svgPaths.p26023100} fill="var(--fill-0, #C7C7C7)" id="Vector_18" />
          <path d={svgPaths.p6371680} fill="var(--fill-0, white)" id="Vector_19" opacity="0.4" />
          <path d={svgPaths.p983be00} fill="var(--fill-0, black)" id="Vector_20" opacity="0.05" />
          <path d={svgPaths.p23202800} fill="var(--fill-0, white)" id="Vector_21" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function HoneyStick1() {
  return (
    <div className="absolute inset-[44.09%_47.78%_13.15%_29.9%]" data-name="honey-stick">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272.096 221.957">
        <g id="honey-stick">
          <path d={svgPaths.p69c5a40} fill="var(--fill-0, #FFC727)" id="Vector" />
          <path d={svgPaths.p69c5a40} fill="var(--fill-0, black)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.pcee9f80} fill="var(--fill-0, black)" id="Vector_3" opacity="0.1" />
          <path d={svgPaths.pa285f80} fill="var(--fill-0, #FFC727)" id="Vector_4" />
          <g id="Group" opacity="0.2">
            <path d={svgPaths.pa285f80} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
          <path d={svgPaths.p29489000} fill="var(--fill-0, black)" id="Vector_6" opacity="0.1" />
          <path d={svgPaths.p3451dcf0} fill="var(--fill-0, black)" id="Vector_7" opacity="0.1" />
          <path d={svgPaths.p21f53f80} fill="var(--fill-0, black)" id="Vector_8" opacity="0.1" />
          <path d={svgPaths.p186d3740} fill="var(--fill-0, black)" id="Vector_9" opacity="0.1" />
          <path d={svgPaths.p3c780ef0} fill="var(--fill-0, #FFC727)" id="Vector_10" />
          <path d={svgPaths.p3c780ef0} fill="var(--fill-0, black)" id="Vector_11" opacity="0.3" />
          <path d={svgPaths.p2d168000} fill="var(--fill-0, #FFC727)" id="Vector_12" />
          <path d={svgPaths.p2d168000} fill="var(--fill-0, black)" id="Vector_13" opacity="0.3" />
          <path d={svgPaths.pd1ed380} fill="var(--fill-0, #FFC727)" id="Vector_14" />
          <path d={svgPaths.pd1ed380} fill="var(--fill-0, black)" id="Vector_15" opacity="0.3" />
          <path d={svgPaths.pbfb0e92} fill="var(--fill-0, #FFC727)" id="Vector_16" />
          <path d={svgPaths.pbfb0e92} fill="var(--fill-0, black)" id="Vector_17" opacity="0.3" />
          <path d={svgPaths.p3c225340} fill="var(--fill-0, #FFC727)" id="Vector_18" />
          <path d={svgPaths.p3c225340} fill="var(--fill-0, black)" id="Vector_19" opacity="0.3" />
          <path d={svgPaths.p38f9d900} fill="var(--fill-0, #FFC727)" id="Vector_20" opacity="0.7" />
          <path d={svgPaths.p289a7600} fill="var(--fill-0, white)" id="Vector_21" opacity="0.5" />
          <path d={svgPaths.p17d6e900} fill="var(--fill-0, #FFC727)" id="Vector_22" opacity="0.7" />
          <path d={svgPaths.p1a1f7700} fill="var(--fill-0, white)" id="Vector_23" opacity="0.5" />
          <path d={svgPaths.p2cfa900} fill="var(--fill-0, #FFC727)" id="Vector_24" />
          <path d={svgPaths.p18aa200} fill="var(--fill-0, #FFC727)" id="Vector_25" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

function Bees() {
  return (
    <div className="absolute inset-[5.93%_29.9%_20.57%_32.56%]" data-name="Bees">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.543 381.556">
        <g id="Bees">
          <path d={svgPaths.p7c33400} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.pb441e00} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p256e5b00} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p1217b730} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.pfe044c0} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p3f78980} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p3c0d5900} fill="var(--fill-0, #EBEBEB)" id="Vector_7" opacity="0.7" />
          <path d={svgPaths.p63c2100} fill="var(--fill-0, #EBEBEB)" id="Vector_8" opacity="0.7" />
          <path d={svgPaths.p386fcb00} fill="var(--fill-0, #FFC727)" id="Vector_9" />
          <path d={svgPaths.p726dc00} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p87cad80} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.pab80e00} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p2bee500} fill="var(--fill-0, black)" id="Vector_13" opacity="0.1" />
          <path d={svgPaths.p24fe80c0} fill="var(--fill-0, white)" id="Vector_14" opacity="0.3" />
          <path d={svgPaths.p138ce500} fill="var(--fill-0, #263238)" id="Vector_15" />
          <path d={svgPaths.p13c6d870} fill="var(--fill-0, black)" id="Vector_16" opacity="0.1" />
          <path d={svgPaths.p1bd5ce00} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p20bc0300} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.p14f17a00} fill="var(--fill-0, #263238)" id="Vector_19" />
          <path d={svgPaths.p31dd5b80} fill="var(--fill-0, #EBEBEB)" id="Vector_20" opacity="0.7" />
          <path d={svgPaths.p19d5b200} fill="var(--fill-0, #FFC727)" id="Vector_21" />
          <path d={svgPaths.p33ac2200} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p1903ee80} fill="var(--fill-0, #263238)" id="Vector_23" />
          <path d={svgPaths.p172d6300} fill="var(--fill-0, #263238)" id="Vector_24" />
          <path d={svgPaths.p23d4d280} fill="var(--fill-0, black)" id="Vector_25" opacity="0.1" />
          <path d={svgPaths.p30787170} fill="var(--fill-0, white)" id="Vector_26" opacity="0.3" />
          <path d={svgPaths.p6d38f00} fill="var(--fill-0, #EBEBEB)" id="Vector_27" opacity="0.7" />
          <path d={svgPaths.p3ec5b800} fill="var(--fill-0, #263238)" id="Vector_28" />
          <path d={svgPaths.p2b002170} fill="var(--fill-0, black)" id="Vector_29" opacity="0.1" />
          <path d={svgPaths.pd60c180} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p351d3530} fill="var(--fill-0, #263238)" id="Vector_31" />
          <path d={svgPaths.p36f8c680} fill="var(--fill-0, #263238)" id="Vector_32" />
          <path d={svgPaths.p313ca500} fill="var(--fill-0, #FFC727)" id="Vector_33" />
          <path d={svgPaths.pfb4a200} fill="var(--fill-0, #263238)" id="Vector_34" />
          <path d={svgPaths.pf258900} fill="var(--fill-0, #263238)" id="Vector_35" />
          <path d={svgPaths.p3f3dd280} fill="var(--fill-0, #263238)" id="Vector_36" />
          <path d={svgPaths.p3d8c0800} fill="var(--fill-0, black)" id="Vector_37" opacity="0.1" />
          <path d={svgPaths.p250cdb00} fill="var(--fill-0, white)" id="Vector_38" opacity="0.3" />
          <path d={svgPaths.p22daa580} fill="var(--fill-0, #263238)" id="Vector_39" />
          <path d={svgPaths.p1978d800} fill="var(--fill-0, black)" id="Vector_40" opacity="0.1" />
          <path d={svgPaths.p132c540} fill="var(--fill-0, #263238)" id="Vector_41" />
          <path d={svgPaths.pc5c54a0} fill="var(--fill-0, #263238)" id="Vector_42" />
          <path d={svgPaths.p3b7ac180} fill="var(--fill-0, #263238)" id="Vector_43" />
          <path d={svgPaths.p28686500} fill="var(--fill-0, #EBEBEB)" id="Vector_44" opacity="0.7" />
          <path d={svgPaths.p1a044940} fill="var(--fill-0, #EBEBEB)" id="Vector_45" opacity="0.7" />
          <path d={svgPaths.p3bee7a00} fill="var(--fill-0, #FFC727)" id="Vector_46" />
          <path d={svgPaths.p1957b140} fill="var(--fill-0, #263238)" id="Vector_47" />
          <path d={svgPaths.p382f1200} fill="var(--fill-0, #263238)" id="Vector_48" />
          <path d={svgPaths.p210eb780} fill="var(--fill-0, #263238)" id="Vector_49" />
          <path d={svgPaths.p3749be00} fill="var(--fill-0, black)" id="Vector_50" opacity="0.1" />
          <path d={svgPaths.p13206500} fill="var(--fill-0, white)" id="Vector_51" opacity="0.3" />
          <path d={svgPaths.p1e1a2e70} fill="var(--fill-0, #263238)" id="Vector_52" />
          <path d={svgPaths.p381520a0} fill="var(--fill-0, black)" id="Vector_53" opacity="0.1" />
          <path d={svgPaths.p36935100} fill="var(--fill-0, #263238)" id="Vector_54" />
          <path d={svgPaths.p2c1bc200} fill="var(--fill-0, #263238)" id="Vector_55" />
          <path d={svgPaths.p2063a700} fill="var(--fill-0, #263238)" id="Vector_56" />
          <path d={svgPaths.p3ae7f000} fill="var(--fill-0, #EBEBEB)" id="Vector_57" opacity="0.7" />
          <path d={svgPaths.p256e2100} fill="var(--fill-0, #EBEBEB)" id="Vector_58" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

function HoneyCuate() {
  return (
    <div className="absolute contents inset-[1.16%_29.9%_1.32%_29.9%]" data-name="honey/cuate">
      <BackgroundComplete1 />
      <BackgroundSimple1 />
      <Jar1 />
      <Flowers />
      <Jar />
      <HoneyStick1 />
      <Bees />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[519.121px] left-[30.65px] top-0 w-[1218.694px]">
      <HoneyRafiki />
      <HoneyCuate />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[519.121px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center justify-center py-[96px] relative shrink-0 w-full z-[1]" data-name="Section">
      <Container1 />
      <Container2 />
    </div>
  );
}

function HeroHeaderSection() {
  return (
    <div className="content-stretch flex flex-col isolate items-center overflow-clip relative shrink-0 w-full" data-name="Hero header section">
      <div className="h-[80px] relative shrink-0 w-[1440px] z-[2]" data-name="Dropdown header navigation">
        <Header />
      </div>
      <Section />
    </div>
  );
}

function HeadingAndSubheading() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[12px] items-start relative shrink-0 w-full" data-name="Heading and subheading">
      <p className="leading-[24px] relative shrink-0 text-[#f69d00] text-[16px] w-full">Products</p>
      <p className="leading-[44px] relative shrink-0 text-[#181d27] text-[36px] tracking-[-0.72px] w-full">Beragam Varian, Satu Kemurnian</p>
    </div>
  );
}

function HeadingAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-center w-[986px]" data-name="Heading and supporting text">
      <HeadingAndSubheading />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full">Dari manis lembut madu multiflora, segar eksotis madu randu, hingga pekat beraroma khas madu hutan. Setiap varian menghadirkan cita rasa alami dengan manfaat yang berbeda—pilih yang sesuai dengan selera dan kebutuhan kesehatan Anda.</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
      <HeadingAndSupportingText1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[96px] items-center justify-center px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex items-center justify-center px-[61px] py-[77px] relative shrink-0 size-[200px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Card
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[96px] items-center justify-center px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#d9d9d9] content-stretch flex h-[100px] items-center justify-center py-[5px] relative shrink-0 w-[243px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[52px] relative shrink-0 text-[45px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CTA
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[100px] items-center justify-center px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Frame9 />
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[96px] items-center overflow-clip py-[96px] relative shrink-0 w-full" data-name="Features section">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-center w-full" data-name="Text and supporting text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#181d27] text-[18px] w-full">Koray Okumus</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#535862] text-[16px] w-full">UX Designer, Circooles</p>
    </div>
  );
}

function AvatarAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Avatar and text">
      <div className="relative rounded-[200px] shrink-0 size-[64px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[200px]">
          <div className="absolute bg-[#d4b2af] inset-0 rounded-[200px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgAvatar} />
        </div>
      </div>
      <TextAndSupportingText />
    </div>
  );
}

function QuoteAndAttribution() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Quote and attribution">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[60px] not-italic relative shrink-0 text-[#181d27] text-[48px] text-center tracking-[-0.96px] w-full">Untitled has saved us thousands of hours of work and has unlock data insights we never thought possible.</p>
      <AvatarAndText />
    </div>
  );
}

function Logos() {
  return (
    <div className="content-stretch flex gap-[10px] items-end justify-center relative shrink-0" data-name="Logos">
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #F69D00)" id="Ellipse 1" r="5" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #C7C7CC)" id="Ellipse 2" r="5" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[10px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #C7C7CC)" id="Ellipse 2" r="5" />
        </svg>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <QuoteAndAttribution />
      <Logos />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content3 />
    </div>
  );
}

function QuoteSection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center overflow-clip py-[96px] relative shrink-0 w-full" data-name="Quote section">
      <Container7 />
    </div>
  );
}

function TextWrap() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">30-day free trial</p>
    </div>
  );
}

function TextWrap1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">Personalized onboarding</p>
    </div>
  );
}

function TextWrap2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Text wrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#535862] text-[18px] w-full">Access to all features</p>
    </div>
  );
}

function CheckItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Check items">
      <div className="content-stretch flex flex-col gap-[20px] items-start pl-[16px] relative size-full">
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
          <div className="bg-[#f4ebff] overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-name="Check icon">
            <div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9961 12.2552">
                <path clipRule="evenodd" d={svgPaths.p3ef9ad00} fill="var(--fill-0, #F69D00)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <TextWrap />
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
          <div className="bg-[#f4ebff] overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-name="Check icon">
            <div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9961 12.2552">
                <path clipRule="evenodd" d={svgPaths.p3ef9ad00} fill="var(--fill-0, #F69D00)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <TextWrap1 />
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Check item text">
          <div className="bg-[#f4ebff] overflow-clip relative rounded-[14px] shrink-0 size-[28px]" data-name="Check icon">
            <div className="absolute inset-[29.65%_23.56%_26.58%_26.46%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9961 12.2552">
                <path clipRule="evenodd" d={svgPaths.p3ef9ad00} fill="var(--fill-0, #F69D00)" fillRule="evenodd" id="Icon" />
              </svg>
            </div>
          </div>
          <TextWrap2 />
        </div>
      </div>
    </div>
  );
}

function HeadingAndCheckItems() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Heading and check items">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[60px] not-italic relative shrink-0 text-[#181d27] text-[48px] tracking-[-0.96px] w-full">Join 4,000+ startups growing with Untitled</p>
      <CheckItems />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
        <div className="bg-white relative rounded-[8px] shrink-0" data-name="_Button base">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#414651] text-[16px] whitespace-nowrap">Learn more</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
      <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
        <div className="bg-[#f69d00] relative rounded-[8px] shrink-0" data-name="_Button base">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit] size-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Get started</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f69d00] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-w-px relative" data-name="Content">
      <HeadingAndCheckItems />
      <Actions />
    </div>
  );
}

function ScreenMockupReplaceFill() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[12px]" data-name="Screen mockup (REPLACE FILL)">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full" src={imgScreenMockupReplaceFill} />
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 rounded-[12px]" />
    </div>
  );
}

function Content5() {
  return (
    <div className="flex-[1_0_0] h-[512px] min-w-px relative" data-name="Content">
      <div className="absolute h-[682px] left-0 rounded-[12px] top-0 w-[1024px]" data-name="3:2 screen mockup">
        <div aria-hidden="true" className="absolute border-6 border-[#181d27] border-solid inset-[-6px] pointer-events-none rounded-[18px]" />
        <div className="absolute bg-[#181d27] inset-[0_8px] rounded-[12px] shadow-[0px_32px_64px_-12px_rgba(10,13,18,0.14)]" data-name="Mockup shadow" />
        <ScreenMockupReplaceFill />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[64px] items-center justify-center px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content4 />
      <Content5 />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip py-[96px] relative shrink-0 w-full" data-name="CTA section">
      <Container8 />
    </div>
  );
}

function Palantir() {
  return (
    <div className="absolute inset-1/4 overflow-clip rounded-[999px] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_0px_rgba(10,13,18,0.06)]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 16 16\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.05000000074505806\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-7.1653e-16 0.7 -0.7 -8.3703e-17 8 4.6)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 16 16\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.18000000715255737\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(4.8986e-17 0.8 -0.8 4.8986e-17 8 8)\\'><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.7466\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 16 16\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.07999999821186066\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-3.8354e-16 1.2 -1.2 5.8242e-15 8 -3.908e-14)\\'><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.99\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(26.565deg, rgb(83, 56, 158) 8.3333%, rgb(105, 65, 198) 91.667%)" }} data-name="Palantir">
      <div className="absolute h-[3.2px] left-[3.2px] top-[1.6px] w-[9.6px]" data-name="Reflection">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 3.2">
          <path d={svgPaths.p29911df0} fill="url(#paint0_linear_1_13731)" fillOpacity="0.4" id="Reflection" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_13731" x1="4.8" x2="4.8" y1="0" y2="3.2">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Blur() {
  return <div className="absolute backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.2)] bottom-0 left-0 right-0 rounded-bl-[8px] rounded-br-[8px] top-1/2" data-name="Blur" />;
}

function Content7() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.2) 0%, rgba(10, 13, 18, 0.2) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g clipPath="url(#clip0_1_14194)" id="Grid" opacity="0.14">
            <path clipRule="evenodd" d={svgPaths.p312a9a00} fill="var(--fill-0, #0A0D12)" fillRule="evenodd" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_1_14194">
              <rect fill="white" height="32" width="32" />
            </clipPath>
          </defs>
        </svg>
        <Palantir />
        <Blur />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.5px_0.5px_0px_rgba(10,13,18,0.1)]" />
      <div aria-hidden="true" className="absolute border-[0.2px] border-[rgba(10,13,18,0.12)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_1px_-0.5px_rgba(10,13,18,0.13),0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_0px_rgba(10,13,18,0.06)]" />
    </div>
  );
}

function Logotype1() {
  return (
    <div className="absolute inset-[0_0_0_30.22%]" data-name="Logotype">
      <div className="absolute bottom-[27.46%] left-0 top-[23.82%] w-[96.673px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96.6729 15.5895">
          <g id="Vector">
            <path d={svgPaths.p111ca700} fill="#181D27" />
            <path d={svgPaths.p162dce00} fill="#181D27" />
            <path d={svgPaths.p3e393580} fill="#181D27" />
            <path d={svgPaths.p34609180} fill="#181D27" />
            <path d={svgPaths.p162d4f00} fill="#181D27" />
            <path clipRule="evenodd" d={svgPaths.pbce2df0} fill="#181D27" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p9487500} fill="#181D27" fillRule="evenodd" />
            <path d={svgPaths.p13eb7ec0} fill="#181D27" />
            <path d={svgPaths.pfbe8980} fill="#181D27" />
            <path d={svgPaths.p122e7480} fill="#181D27" />
            <path d={svgPaths.p3dfebe00} fill="#181D27" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LogoWrap1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[139px]" data-name="Logo wrap">
      <div className="absolute content-stretch flex inset-[0_76.98%_0_0] items-start" data-name="Logomark">
        <Content7 />
      </div>
      <Logotype1 />
    </div>
  );
}

function LogoAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[320px]" data-name="Logo and supporting text">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Logo">
        <LogoWrap1 />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#535862] text-[16px] w-[min-content]">Design amazing digital experiences that create more happy in the world.</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Overview</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Features</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Solutions</p>
          </div>
        </div>
        <div className="content-stretch flex items-start mix-blend-multiply relative shrink-0" data-name="Badge">
          <div className="bg-[#ecfdf3] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[16px] shrink-0" data-name="_Badge base">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#027a48] text-[12px] text-center whitespace-nowrap">New</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Tutorials</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Pricing</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Releases</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">About us</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Careers</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Press</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">News</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Media kit</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Blog</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Newsletter</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Events</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Help centre</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Tutorials</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinks3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Twitter</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">LinkedIn</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Facebook</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">GitHub</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">AngelList</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Dribbble</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterLinks4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Footer links">
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Terms</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Privacy</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Cookies</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Licenses</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Settings</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="_Footer link">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Button">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Button base">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#535862] text-[16px] whitespace-nowrap">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-start min-w-px relative" data-name="Links">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="_Footer links column">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">Product</p>
        <FooterLinks />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="_Footer links column">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">Company</p>
        <FooterLinks1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="_Footer links column">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">Resources</p>
        <FooterLinks2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="_Footer links column">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">Social</p>
        <FooterLinks3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="_Footer links column">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] w-full">Legal</p>
        <FooterLinks4 />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <LogoAndSupportingText />
      <Links />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] pt-[64px] relative shrink-0 w-full" data-name="Section">
      <Container9 />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Social icons">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
        <div className="absolute inset-[4.17%_2.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9816 22">
            <path clipRule="evenodd" d={svgPaths.p22bb1d00} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group">
            <path d={svgPaths.p2ccee40} fill="var(--fill-0, #A4A7AE)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
        <div className="absolute inset-[0_0_0.61%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.8542">
            <path d={svgPaths.p2334f790} fill="var(--fill-0, #A4A7AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
        <div className="absolute inset-[0_0_2.31%_0]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23.4461">
            <path clipRule="evenodd" d={svgPaths.pb2a9780} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Social icon">
        <div className="absolute inset-[0_15.23%_0_15.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6828 24">
            <path d={svgPaths.p3ae3b680} fill="var(--fill-0, #A4A7AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Social icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p27316c80} fill="var(--fill-0, #A4A7AE)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-px not-italic relative text-[#717680] text-[16px]">© 2077 Untitled UI. All rights reserved.</p>
      <SocialIcons />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] relative shrink-0 w-[1280px]" data-name="Container">
      <Content8 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center py-[48px] relative shrink-0 w-full" data-name="Section">
      <Container10 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <HeroHeaderSection />
      <FeaturesSection />
      <QuoteSection />
      <CtaSection />
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}